const axios = require("axios")
const{Videogame,Genre} = require("../db")
const {Op} = require("sequelize")
require("dotenv").config()
const{apiKey}=process.env

//llamar por id: https://api.rawg.io/api/games/10?&key=a815e28b5075461f8da3d0bc1a8aba47

 const getApiInfo=async()=>{
   const promise1 = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page=1&page_size=20`)
   const promise2 = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page=2&page_size=20`);
   const promise3 = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page=3&page_size=20`);
   const promise4 = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page=4&page_size=20`);
   const promise5 = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page=5&page_size=20`);
 
    let concatInfo = await Promise.all([...promise1.data.results,...promise2.data.results,...promise3.data.results,
   ...promise4.data.results,...promise5.data.results]);
    console.log("ESTO ES CONCAT INFO",concatInfo)
 
    let totalInfo= concatInfo.map(j=>{
      return{
         id:j.id,
         name:j.name,
         image:j.background_image,
         rating:j.rating,
         genres:j.genres.map(g=>{return{name:g.name}}),
         ratings:j.ratings.map(g=>{return{name:g.title}}),
         platforms:j.platforms.map(p=>p.platform.name),
         createdInApi:true
      }
   })
 
  
    return totalInfo
 };

 console.log("kjhg")
 
 const getDbInfo= async()=>{
   let dbInfo = await Videogame.findAll({
      include:{
         model:Genre,
         attributes:["name"],
         through:{
            attributes:[]
         }
      }
   })
  return dbInfo
 }

 const getAllGames = async()=>{
    const getApiInfor = await getApiInfo();
    const getdbiInfor = await getDbInfo();
    const allData = [...getApiInfor,...getdbiInfor];
    return allData
 }

 const getALLDataGames = async(req,res)=>{
   const {name}=req.query
   if(!name){
     try {
      const apiInfor = await getApiInfo();
      const dbInfor = await getDbInfo()
      res.status(200).send(await Promise.all([...apiInfor,...dbInfor]))
     } catch (error) {
       console.log(error)
     }
   }else{
      try {
         let query = name.toLowerCase()
         const inforApi = await getApiInfo();
        const getInforApi= inforApi.filter(j=>{
            if(j.name.toLowerCase().includes(query)){
               return j
            }
         });
         const inforDb = await Videogame.findAll({
            where:{
               name:{[Op.like]:`%${query}%`} 
            },
            include:{
               model:Genre,
               attributes:["name"],
               through:{
                attributes:[]
               }
             }
         });
         const resp = await Promise.all([...getInforApi,...inforDb])
         if(resp.length===0){
            res.status(400).send("Error")
         }
         res.status(200).send(resp)

      } catch (error) {
        console.log(error) 
      }
   }
 };
 module.exports={
   getApiInfo,
   getDbInfo,
   getAllGames,
   getALLDataGames
 }
 
 

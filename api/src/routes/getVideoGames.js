const{getALLDataGames,getApiInfo} = require("../controllers/videoGamesCall")
const{Videogame,Genre}= require("../db")
const Router = require("express");
const axios = require("axios");
const router = Router()
require("dotenv").config()
const{apikey}=process.env


router.get("/",getALLDataGames)




router.get('/:id', async (req, res) => {  
    const {id} = req.params;
    let validar = id.includes("-")

    if(validar){
     try {
        const inforDb = await Videogame.findByPk(id,{include:Genre});
      res.status(200).send([inforDb])
     } catch (error) {
      console.log(error)
     }
    }else{
  
      let idKey = parseInt(id)
      let bla = []
      let results=[]
     try {
      let result =  await axios.get(`https://api.rawg.io/api/games/${idKey}?key=a815e28b5075461f8da3d0bc1a8aba47`).then((juego)=>{

          bla.push(juego.data)
          console.log("ESTO ES BLA______________¨¨¨¨¨¨>",bla)
      bla.map(j=>{
           results.push({
            id:j.id,
            name:j.name,
            image:j.background_image,
            genres:j.genres.map(g=>{return{name:g.name}}),
            description:j.description,
            released:j.released,
            rating:j.rating,
            platforms:j.platforms.map(p=>{return{name:p.platform.name}}),
           })
        });
       });
     
      console.log(result)
     return res.status(200).send(await results)
     } catch (error) {
      res.status(400).send("Game not found")
     }
    }
  
  });

module.exports=router
const axios = require("axios")
const apiKey = "a815e28b5075461f8da3d0bc1a8aba47"

const getById= async(id,apiKey,req,res)=>{
    const{id}= req.params
    try {
        
        var detail = await  axios.get(`https://api.rawg.io/api/games/${id}&key=${apiKey}`).then(data=>{
                 return{
                     id:data.id,
                     name:data.name,
                     genres:data.genres.map((g)=>{return{name:g.name}}),
                     description:data.description,
                     released:data.released,
                     rating:data.rating,
                     platforms:parent_platforms.map((p)=>{return{name:p.name}})
                 }
             }).then(res=>{
                console.log(res)
             })
        detail.length?res.status(200).send([detail]):res.status(400).send("not Found")
     
     } catch (error) {
         console.log(error)
     }
}

module.exports={
    getById
}
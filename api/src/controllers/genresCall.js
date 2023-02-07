
const {genres} = require("./genresObj")
const {Genre}= require("../db")

 
const getGenres = async(req,res)=>{
   genres.forEach(g => {
     Genre.findOrCreate({where:{name:g.name}})
    
   });
 try {
    const allGenres = await Genre.findAll()
    res.status(200).send(allGenres.map(g=>g.name))
 } catch (error) {
    res.status(400).send(error)
 }
};

module.exports ={
   getGenres
}
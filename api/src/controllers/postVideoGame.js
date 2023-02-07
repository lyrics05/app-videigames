const{Videogame,Genre} = require("../db");

const createRecipe= async(req,res)=>{
   let{name,description,released,rating,platforms,genres,createdInDb} = req.body
 

try {
    let createdGame = await Videogame.create({
        name,
        description,
        released,
        rating,
        platforms,
        createdInDb
    });
    let addGenre = await Genre.findAll({where:{name:genres}});
    createdGame.addGenre(addGenre);
    res.status(200).send("Game Created")
} catch (error) {
console.log(error)
}

};

module.exports={
    createRecipe
}





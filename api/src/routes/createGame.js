const{Router}= require("express");
const  { createRecipe } = require("../controllers/postVideoGame")
const router = Router();

router.post("/",createRecipe);

module.exports = router
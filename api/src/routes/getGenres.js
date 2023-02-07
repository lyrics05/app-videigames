const{Router}= require("express");
const { getGenres } = require("../controllers/genresCall")
const router = Router();

router.get("/",getGenres);

module.exports=router
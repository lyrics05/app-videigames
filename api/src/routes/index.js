const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRoute = require("./getVideoGames")
const genresRoute = require("./getGenres");
const createGameRoute = require("./createGame")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});
router.use("/videogames",videogamesRoute);
router.use("/videogame",createGameRoute);
router.use("/genres",genresRoute);


module.exports = router;

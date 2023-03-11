const { Router } = require('express');
// Importar todos los routers;
const recipesRouter = require('./recipes');


const router = Router();

// Configurar los routers
router.use('/recipes', recipesRouter);


module.exports = router;

const { Router } = require('express');
const { recipesGet, recipesGetbyId } = require('../controllers/recipes');

const router = Router();

router.get('/', recipesGet);
router.get('/:id', recipesGetbyId);

module.exports = router;

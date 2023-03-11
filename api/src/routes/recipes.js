const { Router } = require('express');
const { recipesGet, recipesGetbyId, recipesPost } = require('../controllers/recipes');

const router = Router();

router.get('/', recipesGet);
router.get('/:id', recipesGetbyId);

router.post('/', recipesPost );
module.exports = router;

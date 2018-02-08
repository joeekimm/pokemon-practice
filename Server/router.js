const router = require('express').Router();

router.use('/pokemon', require('./Api/pokemon'));
router.use('/types', require('./Api/types'));

module.exports = router;
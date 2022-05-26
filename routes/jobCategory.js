var express = require('express');
var router = express.Router();
const jobCategoryController = require('../controllers/jobCategory.controller');
var cors = require ('cors')
// /* GET jobCategory listing. */
 router.get('/', jobCategoryController.get);

/* GET jobCategorylisting. */
router.get('/:id',cors(), jobCategoryController.get);

/* POST jobCategory listing. */
router.post('/',cors(), jobCategoryController.create);

/* PATCH jobCategory listing. */
router.patch('/:id',cors(), jobCategoryController.update);

/* DELETE jobCategory listing. */
router.delete('/:id',cors(), jobCategoryController.remove);

module.exports = router;

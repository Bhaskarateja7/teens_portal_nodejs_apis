var express = require('express');
var router = express.Router();
const jobController = require('../controllers/jobs.controller');
var cors = require ('cors')

// /* GET job listing. */

 router.get('/', jobsController.get);

/* GET job listing. */
router.get('/:id',cors(), jobController.get);

/* POST job listing. */
router.post('/',cors(), jobController.create);

/* PATCH job listing. */
router.patch('/:id',cors(), jobController.update);

/* DELETE job listing. */
router.delete('/:id',cors(), jobController.remove);

module.exports = router;

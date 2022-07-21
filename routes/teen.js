var express = require('express');
var router = express.Router();
const Controller = require('../controllers/teen.controller');
var cors = require ('cors')


// /* GET users listing. */
router.get('/', Controller.get);

/* GET users listing. */
router.get('/:id',cors(), Controller.getbyid);

/* POST users listing. */
router.post('/',cors(), Controller.Add);

/* PATCH users listing. */
router.patch('/:id',cors(), Controller.update);


/* DELETE users listing. */
router.delete('/:id',cors(), Controller.remove);

module.exports = router;

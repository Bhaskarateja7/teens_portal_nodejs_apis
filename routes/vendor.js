var express = require('express');
var router = express.Router();
const Controller = require('../controllers/vendor.controller');
var cors = require ('cors')


// /* GET users listing. */
router.get('/', Controller.get);

/* GET users listing. */
router.get('/:id',cors(), Controller.getbyid);

router.get('/:id',cors(), Controller.getbyvendorid);
 
/* POST users listing. */
router.post('/',cors(), Controller.Add);

/* PATCH users listing. */
router.patch('/:id',cors(), Controller.update);

/* PATCH users listing. */
router.patch('/:id',cors(), Controller.phone);

/* DELETE users listing. */
router.delete('/:id',cors(), Controller.remove);

module.exports = router;

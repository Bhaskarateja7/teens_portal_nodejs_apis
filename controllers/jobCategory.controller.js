const jobCatogeryService = require('../services/jobCategory.services');

async function getAll(req, res, next) {
    try {
        res.json(await jobCatogeryService.getAll());
    } catch (err) {
        // console.error(`Error while getting programming languages`, err.message);
        next(err);
    }
  } 
async function get(req, res, next) {
  console.log(req.params.id);
  try {
      res.json(await jobCatogeryService.get(req.params.id));
  } catch (err) {
    //   console.error(`Error while getting programming languages`, err.message);
      next(err);
  }
}

async function create(req, res, next) {
    let values= [req.body.category,
                 req.body.unique_id];
  try {
    res.json(await jobCatogeryService.create(values));
  } catch (err) {
    // console.error(`Error while creating programming language`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await jobCatogeryService.update(req.params.id));
  } catch (err) {
    // console.error(`Error while updating programming language`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await jobCatogeryService.remove(req.params.id));
  } catch (err) {
    // console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove,
  getAll
};
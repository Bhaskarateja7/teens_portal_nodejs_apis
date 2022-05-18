const usersService = require('../services/users.service');

async function get(req, res, next) {
  console.log(req.params.id);
  try {
    console.log('changes from branch 3')
      res.json(await usersService.get(req.params.id));
  } catch (err) {
      console.error(`Error while getting programming languages`, err.message);
      next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await usersService.create(req.body));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
    console.log('changes from branch 3')
  }
}

async function update(req, res, next) {
  try {
    res.json(await usersService.update(req.params.id, req.body));
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await usersService.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove
};
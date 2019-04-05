// db is a configured instance of knex that knows how to talk to the database
const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add
};

function find() {
  return db('project');
}

function findById(id) {
  return db('project')
    .where({ id })
    .first();
}

function add(project) {
  // passing 'id' as the second aparameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db('project').insert(project, 'id');
}




// db is a configured instance of knex that knows how to talk to the database
const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add
};

function find() {
  return db('action');
}

function findById(id) {
  return db('action')
    .where({ id })
    .first();
}

function add(action) {
  // passing 'id' as the second aparameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db('action').insert(action, 'id');
}

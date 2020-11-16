const db = require('../database/dbConfig');

module.exports = {
  addClass,
  updateClass,
  removeClass,
  getClassById,
  getClass 
};

function addClass(data) {
  return db
    .select('*')
    .from('class')
    .insert(data);
}

function getClass() {
  return db.select('*').from('class');
}

function updateClass(id, changes) {
  return db
    .select('*')
    .from('class')
    .where({id})
    .update(changes);
}

function removeClass(id) {
  return db
    .select('*')
    .from('class')
    .where({id})
    .del();
}

function getClassById(id) {
  return db
    .select('*')
    .from('class')
    .where({id})
    .first();
}
const db = require('../database/dbConfig');

module.exports = {
  addClass,
  updateClass,
  removeClass,
  getClassById,
  getClass, 
  getUsers
};

async function addClass(data) {
  try {
    const [id] = await db("class").insert(data, "id");
    return  getClassById(id);
  } catch (error) {
    throw error;
  }
}

function getClass() {
  return db.select('*').from('class');
}

function getUsers() {
  return db.select('*').from('user');
}

function updateClass(id, changes) {
  return db('class')
    .where({id}).update(changes);
}

// function removeClass(id) {
//   return db('class')
//     .where({id}).delete();
// }


function removeClass(classid) {
  return db("class").where("id", classid).del();
}

function getClassById(id) {
  return db('class')
    .where({id}).first();
}
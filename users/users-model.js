const db = require('../database/dbConfig');

module.exports = {
  addUser,
  getUsers,
  findBy,
  getClass,
  addClassToClient,
  getClientClasses,
  getUserById,
  findClassesBy,
  deleteSavedClass
};

function addUser(user) {
  return db
    .select('*')
    .from('user')
    .insert(user);
}

function getUserById(id) {
  return db
    .select('*')
    .from('user')
    .where({id});
}

function getUsers() {
  return db.select('*').from('user');
}

function findBy(user) {
  return db
    .select('*')
    .from('user')
    .where(user);
}

function getClass() {
  return db.select('*').from('class');
}


function findClassesBy(filter) {
  return db("class").where(filter);
}



function addClassToClient(user_id, class_id) {
  return db('user_classes')
    .insert({user_id, class_id})
    .then(() => {
      return getClassById(user_id);
    });
}

function getClientClasses({user_id}) {
  return db('user_classes')
    .join('user', 'user.id', 'user_classes.user_id')
    .where('user.id', `${user_id}`);
}


function deleteSavedClass(savedClass) {
  return db("user_classes")
    .where({
      userId: savedClass.user_id,
      classesId: savedDetails.class_id,
    })
    .del();
}
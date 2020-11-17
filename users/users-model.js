const db = require('../database/dbConfig');

module.exports = {
  addUser,
  getUsers,
  findBy,
  getClassById,
  getClassType,
  getClass,
  getIntensity,
  getByLocation,
  getByDuration,
  getByInstructor,
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

function getClassById(id) {
  return db('class')
  .select('*')
  .from('class')
    .where({id})
    .first();
   
}

function getClassType(type) {
  return db
    .select('*')
    .from('class')
    .where('class.type',`${type}`);
}

function getIntensity(intensity) {
  return db
    .select('*')
    .from('class')
    .where({intensity});
}

function getByLocation(location) {
  return db
    .select('*')
    .from('class')
    .where({location});
}

function getByDuration(duration) {
  return db
    .select('*')
    .from('class')
    .where({duration});
}


function findClassesBy(filter) {
  return db("class").where(filter);
}



function getByInstructor(instructor_name) {
  return db
    .select('*')
    .from('class')
    .where({instructor_name});
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
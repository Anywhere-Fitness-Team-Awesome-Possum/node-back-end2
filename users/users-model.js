const db = require('../database/dbConfig');

module.exports = {
  addUser,
  getUsers,
  findBy,
  getClass,
  //addClassToClient,
  getClientClasses,
  getUserById,
  findClassesBy,
  getClassType,
  //deleteSavedClass,
  getClassById, 
  addFavorite,
  getFavoriteClass
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
  return db('class').where({id});
}

function findClassesBy(filter) {
  return db("class").where(filter);
}

function getClassType(type) {

  return db('class').where(type)
};

// function addClassToClient(user_id, class_id) {
//   return db('user_classes')
//     .insert({user_id, class_id,"id"})
//     .then(() => {
//       return getClientClasses(user_id);
//     });
// }

// function findClassesSavedByUser(id) {
//   return db("user_classes as s")
//     .join("classes as c", "c.id", "s.class_id")
//     .select("s.user_id", "s.class_id", "c.*")
//     .where({ userId: id });
// }



// async function addClassToClient(save_class_details) {
//   try {
//     const [id] = await db("user_classes").insert(save_class_details, "id");
//     return findClassesSavedByUser(save_class_details.userId);
//   } catch (error) {
//     throw error;
//   }
// }



function getClientClasses({user_id}) {
  return db('user_classes')
    .join('user', 'user.id', 'user_classes.user_id')
    .where('user.id', `${user_id}`);
};




function addFavorite(user_id, class_id) {
  return db('user_classes')
    .insert({user_id, class_id})
    .then(() => {
      return getClientClasses(user_id);
    });
}

function getFavoriteClass({user_id}) {
  return db('user_classes')
    .join('user', 'user.id', 'user_classes.user_id')
    .where('user.id',  `${user_id}`)
}
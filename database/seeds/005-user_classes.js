exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_classes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user_classes').insert([
        {id: 1, class_id: 1, user_id: 1},
        {id: 2, class_id: 2, user_id: 2},
        {id: 3, class_id: 3, user_id: 3}
      ]);
    });
};
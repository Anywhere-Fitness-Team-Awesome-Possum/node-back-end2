exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructor').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructor').insert([
        {id: 1, user_id: 1, class_id: 1, },
        {id: 2, user_id: 2, class_id: 2, },
        {id: 3, user_id: 3, class_id: 3, }
      ]);
    });
};
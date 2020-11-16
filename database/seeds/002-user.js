const bcryptjs = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          name: 'sunil',
          username: 'sunil123',
          email: 'sunil@gmail.com',
          password: bcryptjs.hashSync('test', 8),
          role: 'instructor'
        },

        {
          id: 2,
          name: 'admin',
          username: 'admin123',
          email: 'admin@gmail.com',
          password: bcryptjs.hashSync('test', 8),
          role: 'instructor'
        },
        {
          id: 3,
          name: 'test',
          username: 'test123',
          email: 'test@gmail.com',
          password: bcryptjs.hashSync('test', 8),
          role: 'client'
        }
      ]);
    });
};
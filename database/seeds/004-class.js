exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('class')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('class').insert([
        {
          id: 1,
          name: 'pure yoga',
          instructor_name: 'yogi',
          type: 'yoga',
          intensity: 'high',
          location: 'vegas',
          max_size: 22,
          duration: 1.0,
          date: '02/10/2020'
        },
        {
          id: 2,
          name: 'meditation',
          instructor_name: 'sadhguru',
          type: 'medetation',
          intensity: 'low',
          location: 'birmingham',
          max_size: 12,
          duration: 2.4,
          date: '02/10/2020'
        },
        {
          id: 3,
          name: 'cardio running',
          instructor_name: 'bolt',
          type: 'cardio',
          intensity: 'medium',
          location: 'japan',
          max_size: 21,
          duration: 1.13,
          date: '02/10/2020'
        }
      ]);
    });
};

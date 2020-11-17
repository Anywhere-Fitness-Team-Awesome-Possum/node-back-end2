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
          date: "2020/11/23",
          number_attendees: 1,
          start_time:"8:00",
        },
        {
          id: 2,
          name: 'meditation',
          instructor_name: 'sadhguru',
          type: 'medetation',
          intensity: 'low',
          location: 'london',
          max_size: 12,
          duration: 2.4,
          date: "2020/11/27",
          number_attendees: 2,
          start_time:"9:00",
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
          date: "2020/11/28",
          number_attendees: 10,
          start_time:"19:00",
        }
      ]);
    });
};

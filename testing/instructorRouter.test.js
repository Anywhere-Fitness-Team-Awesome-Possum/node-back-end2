const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

// beforeEach(() => {
//   return db.migrate
//     .rollback()
//     .then(() => db.migrate.latest())
//     .then(() => db.seed.run());
// });

test('POST /api/auth/instructor/classes', async () => {
  const register = await request(server)
    .post('/api/auth/register')
    .send({
      name: 'sun',
      email: 'sun@gmail.com',
      username: 'sun',
      password: 'sun',
      role: 'instructor'
    });
  const login = await request(server)
    .post('/api/auth/login')
    .send({username: 'sun', password: 'sun'});

  const response = await request(server)
    .post('/api/auth/instructor/classes')
    .set('authorization', login.body.token)
    .send({
      name: 'cycling cardio',
      instructor_name: 'chris',
      type: 'cardio',
      intensity: 'high',
      location: 'italy',
      date: '02-21-2021',
      max_size: 15,
      duration: 1.2
    });
  expect(response.status).toBe(200);
  expect.arrayContaining(response.body);
});

test('/GET /api/auth/instructor/classes/:id', async () => {
  const register = await request(server)
    .post('/api/auth/register')
    .send({
      name: 'sun',
      email: 'sun@gmail.com',
      username: 'sun',
      password: 'sun',
      role: 'instructor'
    });
  const login = await request(server)
    .post('/api/auth/login')
    .send({username: 'sun', password: 'sun'});

  const response = await request(server)
    .get('/api/auth/instructor/classes/2')
    .set('authorization', login.body.token);

  expect(response.status).toBe(200);
  expect.arrayContaining(response.body);
});

test('/DELETE /api/auth/instructor/classes/:id', async () => {
  const register = await request(server)
    .post('/api/auth/register')
    .send({
      name: 'sun',
      email: 'sun@gmail.com',
      username: 'sun',
      password: 'sun',
      role: 'instructor'
    });
  const login = await request(server)
    .post('/api/auth/login')
    .send({username: 'sun', password: 'sun'});

  const response = await request(server)
    .delete('/api/auth/instructor/classes/2')
    .set('authorization', login.body.token);

  expect(response.status).toBe(200);
  expect(response.body).toMatchObject({message: 'class deleted'});
});

test('UPDATE /api/auth/instructor/classes/:id', async () => {
  const register = await request(server)
    .post('/api/auth/register')
    .send({
      name: 'sun',
      email: 'sun@gmail.com',
      username: 'sun',
      password: 'sun',
      role: 'instructor'
    });
  const login = await request(server)
    .post('/api/auth/login')
    .send({username: 'sun', password: 'sun'});

  const response = request('server')
    .put('/api/auth/instructor/classes/5')
    .send({
      name: 'cycling cardio',
      instructor_name: 'chris',
      type: 'cardio',
      intensity: 'high',
      location: 'italy',
      date: '02-21-2021',
      max_size: 15,
      duration: 1.2
    })

    .set('authorization', login.body.token);

  expect(response._data).toMatchObject({location: 'italy'});
  expect(response._data).toMatchObject({type: 'cardio'});
});
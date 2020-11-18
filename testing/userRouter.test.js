const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

// beforeEach(() => {
//   return db.migrate
//     .rollback()
//     .then(() => db.migrate.latest())
//     .then(() => db.seed.run());
// });

test('GET /api/auth/users/classes', async () => {
  const register = await request(server)
    .post('/api/auth/register')
    .send({
      name: 'sun',
      email: 'sun@gmail.com',
      username: 'sun',
      password: 'sun',
      role: 'client'
    });

  const login = await request(server)
    .post('/api/auth/login')
    .send({username: 'sun', password: 'sun'});

  const response = await request(server)
    .get('/api/auth/users/classes')
    .set('authorization', login.body.token);

  expect(response.status).toBe(200);
  expect.arrayContaining(response.body);
});

test('GET /api/auth/users/classes/type', async () => {
  const register = await request(server)
    .post('/api/auth/register')
    .send({
      name: 'sun',
      email: 'sun@gmail.com',
      username: 'sun',
      password: 'sun',
      role: 'client'
    });

  const login = await request(server)
    .post('/api/auth/login')
    .send({username: 'sun', password: 'sun'});

  const response = await request(server)
    .get('/api/auth/users/classes/type')
    .send({type: 'yoga'})
    .set('authorization', login.body.token);

  expect(response.status).toBe(200);
  expect.arrayContaining(response.body);
});

test('GET /api/auth/users/classes/intensity', async () => {
  const register = await request(server)
    .post('/api/auth/register')
    .send({
      name: 'sun',
      email: 'sun@gmail.com',
      username: 'sun',
      password: 'sun',
      role: 'client'
    });

  const login = await request(server)
    .post('/api/auth/login')
    .send({username: 'sun', password: 'sun'});

  const response = await request(server)
    .get('/api/auth/users/classes/intensity')
    .send({intensity: 'low'})
    .set('authorization', login.body.token);

  expect(response.status).toBe(200);
  expect.arrayContaining(response.body);
});

test('GET  /api/auth/users/classes/location', async () => {
  const register = await request(server)
    .post('/api/auth/register')
    .send({
      name: 'sun',
      email: 'sun@gmail.com',
      username: 'sun',
      password: 'sun',
      role: 'client'
    });

  const login = await request(server)
    .post('/api/auth/login')
    .send({username: 'sun', password: 'sun'});

  const response = await request(server)
    .get('/api/auth/users/classes/location')
    .send({location: 'nepal'})
    .set('authorization', login.body.token);

  expect(response.status).toBe(200);
  expect.arrayContaining(response.body);
});

test('GET, /api/auth/users/classes/instructor', async () => {
  const register = await request(server)
    .post('/api/auth/register')
    .send({
      name: 'kay',
      email: 'kay@gmail.com',
      username: 'kay',
      password: 'kay',
      role: 'client'
    });

  const login = await request(server)
    .post('/api/auth/login')
    .send({username: 'kay', password: 'kay'});

  const response = await request(server)
    .get('/api/auth/users/classes/instructor')
    .send({instructor_name: 'simon'})
    .set('authorization', login.body.token);

  console.log(response.body);

  expect(response.status).toBe(200);
  expect.arrayContaining(response.body);
});

test('GET, /api/auth/users/classes/duration', async () => {
  const register = await request(server)
    .post('/api/auth/register')
    .send({
      name: 'kay',
      email: 'kay@gmail.com',
      username: 'kay',
      password: 'kay',
      role: 'client'
    });

  const login = await request(server)
    .post('/api/auth/login')
    .send({username: 'kay', password: 'kay'});

  const response = await request(server)
    .get('/api/auth/users/classes/duration')
    .send({duration: 1.5})
    .set('authorization', login.body.token);

  console.log(response.body);

  expect(response.status).toBe(200);
  expect.arrayContaining(response.body);
});
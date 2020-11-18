const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

beforeEach(() => {
  return db.migrate
    .rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run());
});

test('POST /api/auth/register', async () => {
  const response = await request(server)
    .post('/api/auth/register')
    .send({
      name: 'hazu',
      email: 'hazu@gmail.com',
      username: 'hazu',
      password: 'hazu',
      role: 'student'
    });
  expect(response.status).toBe(201);
  expect(response.body).toMatchObject({
    message: 'registration success'
  });
});

test('POST /api/auth/login', async () => {
  const register = await request(server)
    .post('/api/auth/register')
    .send({
      name: 'hazu',
      email: 'hazu@gmail.com',
      username: 'hazu',
      password: 'hazu',
      role: 'student'
    });
  const response = await request(server)
    .post('/api/auth/login')
    .send({username: 'hazu', password: 'hazu'});

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('token');
  expect(response.body).toMatchObject({message: 'logged in'});
});
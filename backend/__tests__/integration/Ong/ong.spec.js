const request = require('supertest');
const app = require('../../../src/app');
const connection = require('../../../src/database/connection');

describe('ONG', () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async() => {
    await connection.destroy();
  });

  it('Should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'OngTest',
        email: 'email@email.com.br',
        whatsapp: '5511994721485',
        city: 'São Paulo',
        state: 'SP'
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
})
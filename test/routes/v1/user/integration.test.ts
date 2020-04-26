import * as supertest from 'supertest';
import runApp from '../../../../src/app';

describe('/v1/user', () => {
  let request;

  before('prepare app', async () => {
    const app = await runApp();

    request = supertest(app);
  });
  describe('GET /', () => {
    it('should return users from db', (done) => {
      request.get('/v1/user').expect('Content-Type', /json/).expect(200, done);
    });

    context('query params page and pageSize given', () => {
      it('should return properly paged data');
    });

    context('query params sortDir and sortBy given', () => {
      it('should return properly sorted data');
    });
  });

  describe('GET /:id', () => {
    it('should return user with given id from db');
  });
});

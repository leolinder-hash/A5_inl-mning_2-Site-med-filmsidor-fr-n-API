import request from 'supertest';
import app from '../index.js';

describe('Movies pages', ()=>{
  test('GET /movies/:id shows correct movie title', async ()=>{
    const movieId = '3';

    const response = await request(app).get(`/movies/${movieId}`);

    expect(response.status).toBe(200);
    expect(response.text).toContain("The Shawshank Redemption");
  })
});
import { describe, it, expect } from 'vitest';
import request from 'supertest';

describe('GET /api/flights', () => {
  const baseUrl = 'http://localhost:3000';

  it('should return a list of flights with correct structure', async () => {
    const response = await request(baseUrl).get('/api/flights?from=GRU&to=JFK&date=2025-09-01');

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject([
      {
        id: expect.any(String),
        airline: expect.any(String),
        flightNumber: expect.any(String),
        from: 'GRU',
        to: 'JFK',
        departureTime: expect.any(String),
        arrivalTime: expect.any(String),
        price: expect.any(Number),
        currency: 'USD',
      },
    ]);
  });

  it('should return 400 if required query parameters are missing', async () => {
    const response = await request(baseUrl).get('/api/flights');

    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      error: 'Missing required query parameters',
    });
  });

  it('should return 404 if no flights match the criteria', async () => {
    const response = await request(baseUrl).get('/api/flights?from=XYZ&to=ABC&date=2025-12-31');

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({
      error: 'No flights found',
    });
  });
});
import { NextApiRequest, NextApiResponse } from 'next';
import { OpenAPIV3 } from 'openapi-types';

const swaggerDocument: OpenAPIV3.Document = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'Documentação da API FlyNow',
  },
  paths: {
    '/api/flights': {
      get: {
        summary: 'Retrieve flights',
        description: 'Fetch a list of flights based on query parameters.',
        parameters: [
          {
            name: 'from',
            in: 'query',
            description: 'Departure airport code',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'to',
            in: 'query',
            description: 'Arrival airport code',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'date',
            in: 'query',
            description: 'Departure date (YYYY-MM-DD)',
            required: false,
            schema: {
              type: 'string',
              format: 'date',
            },
          },
        ],
        responses: {
          200: {
            description: 'A list of flights',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: { type: 'string' },
                      airline: { type: 'string' },
                      flightNumber: { type: 'string' },
                      from: { type: 'string' },
                      to: { type: 'string' },
                      departureTime: { type: 'string', format: 'date-time' },
                      arrivalTime: { type: 'string', format: 'date-time' },
                      price: { type: 'number' },
                      currency: { type: 'string' },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  res.status(200).json(swaggerDocument);
}

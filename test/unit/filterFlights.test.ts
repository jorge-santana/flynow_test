import { describe, it, expect } from 'vitest';
import { filterFlights } from '../../app/utils/filterFlights';

describe('filterFlights', () => {
  const flights: Flight[] = [
    {
      id: '1',
      airline: 'Airline A',
      flightNumber: 'AA123',
      from: 'GRU',
      to: 'JFK',
      departureTime: '2025-09-01T08:00:00Z',
      arrivalTime: '2025-09-01T16:00:00Z',
      price: 500,
      currency: 'USD',
    },
    {
      id: '2',
      airline: 'Airline B',
      flightNumber: 'BB456',
      from: 'GRU',
      to: 'LAX',
      departureTime: '2025-09-01T09:00:00Z',
      arrivalTime: '2025-09-01T17:00:00Z',
      price: 450,
      currency: 'USD',
    },
    {
      id: '3',
      airline: 'Airline C',
      flightNumber: 'CC789',
      from: 'JFK',
      to: 'GRU',
      departureTime: '2025-09-02T10:00:00Z',
      arrivalTime: '2025-09-02T18:00:00Z',
      price: 600,
      currency: 'USD',
    },
  ];

  it('should filter flights by from location', () => {
    const result = filterFlights(flights, { from: 'GRU' });
    expect(result).toHaveLength(2);
    expect(result[0].id).toBe('1');
    expect(result[1].id).toBe('2');
  });

  it('should filter flights by to location', () => {
    const result = filterFlights(flights, { to: 'GRU' });
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('3');
  });

  it('should filter flights by departure date', () => {
    const result = filterFlights(flights, { date: '2025-09-01' });
    expect(result).toHaveLength(2);
    expect(result[0].id).toBe('1');
    expect(result[1].id).toBe('2');
  });

  it('should return all flights if no criteria is provided', () => {
    const result = filterFlights(flights, {});
    expect(result).toHaveLength(3);
  });

  it('should filter flights by multiple criteria', () => {
    const result = filterFlights(flights, { from: 'GRU', to: 'LAX' });
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('2');
  });
});

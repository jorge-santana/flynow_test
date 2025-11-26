import { NextRequest, NextResponse } from 'next/server';

// Define the Flight type
interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  currency: string;
}

// Mocked flight data
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
  {
    id: '4',
    airline: 'Airline D',
    flightNumber: 'DD101',
    from: 'LAX',
    to: 'JFK',
    departureTime: '2025-09-03T07:00:00Z',
    arrivalTime: '2025-09-03T15:00:00Z',
    price: 550,
    currency: 'USD',
  },
  {
    id: '5',
    airline: 'Airline E',
    flightNumber: 'EE202',
    from: 'GRU',
    to: 'MIA',
    departureTime: '2025-09-04T06:00:00Z',
    arrivalTime: '2025-09-04T14:00:00Z',
    price: 400,
    currency: 'USD',
  },
  {
    id: '6',
    airline: 'Airline F',
    flightNumber: 'FF303',
    from: 'MIA',
    to: 'GRU',
    departureTime: '2025-09-05T08:00:00Z',
    arrivalTime: '2025-09-05T16:00:00Z',
    price: 450,
    currency: 'USD',
  },
  {
    id: '7',
    airline: 'Airline G',
    flightNumber: 'GG404',
    from: 'JFK',
    to: 'LAX',
    departureTime: '2025-09-06T09:00:00Z',
    arrivalTime: '2025-09-06T17:00:00Z',
    price: 600,
    currency: 'USD',
  },
  {
    id: '8',
    airline: 'Airline H',
    flightNumber: 'HH505',
    from: 'LAX',
    to: 'MIA',
    departureTime: '2025-09-07T10:00:00Z',
    arrivalTime: '2025-09-07T18:00:00Z',
    price: 500,
    currency: 'USD',
  },
  {
    id: '9',
    airline: 'Airline I',
    flightNumber: 'II606',
    from: 'MIA',
    to: 'JFK',
    departureTime: '2025-09-08T11:00:00Z',
    arrivalTime: '2025-09-08T19:00:00Z',
    price: 550,
    currency: 'USD',
  },
  {
    id: '10',
    airline: 'Airline J',
    flightNumber: 'JJ707',
    from: 'GRU',
    to: 'LAX',
    departureTime: '2025-09-09T12:00:00Z',
    arrivalTime: '2025-09-09T20:00:00Z',
    price: 700,
    currency: 'USD',
  },
  {
    id: '11',
    airline: 'Airline K',
    flightNumber: 'KK808',
    from: 'JFK',
    to: 'GRU',
    departureTime: '2025-09-10T13:00:00Z',
    arrivalTime: '2025-09-10T21:00:00Z',
    price: 650,
    currency: 'USD',
  },
  {
    id: '12',
    airline: 'Airline L',
    flightNumber: 'LL909',
    from: 'MIA',
    to: 'LAX',
    departureTime: '2025-09-11T14:00:00Z',
    arrivalTime: '2025-09-11T22:00:00Z',
    price: 480,
    currency: 'USD',
  },
  {
    id: '13',
    airline: 'Airline M',
    flightNumber: 'MM010',
    from: 'LAX',
    to: 'GRU',
    departureTime: '2025-09-12T15:00:00Z',
    arrivalTime: '2025-09-12T23:00:00Z',
    price: 720,
    currency: 'USD',
  },
  {
    id: '14',
    airline: 'Airline N',
    flightNumber: 'NN111',
    from: 'GRU',
    to: 'JFK',
    departureTime: '2025-09-13T16:00:00Z',
    arrivalTime: '2025-09-13T00:00:00Z',
    price: 530,
    currency: 'USD',
  },
  {
    id: '15',
    airline: 'Airline O',
    flightNumber: 'OO212',
    from: 'JFK',
    to: 'MIA',
    departureTime: '2025-09-14T17:00:00Z',
    arrivalTime: '2025-09-14T01:00:00Z',
    price: 490,
    currency: 'USD',
  },
  {
    id: '16',
    airline: 'Airline P',
    flightNumber: 'PP313',
    from: 'MIA',
    to: 'LAX',
    departureTime: '2025-09-15T18:00:00Z',
    arrivalTime: '2025-09-15T02:00:00Z',
    price: 520,
    currency: 'USD',
  },
  {
    id: '17',
    airline: 'Airline Q',
    flightNumber: 'QQ414',
    from: 'LAX',
    to: 'JFK',
    departureTime: '2025-09-16T19:00:00Z',
    arrivalTime: '2025-09-16T03:00:00Z',
    price: 580,
    currency: 'USD',
  },
  {
    id: '18',
    airline: 'Airline R',
    flightNumber: 'RR515',
    from: 'GRU',
    to: 'MIA',
    departureTime: '2025-09-17T20:00:00Z',
    arrivalTime: '2025-09-17T04:00:00Z',
    price: 460,
    currency: 'USD',
  },
  {
    id: '19',
    airline: 'Airline S',
    flightNumber: 'SS616',
    from: 'MIA',
    to: 'JFK',
    departureTime: '2025-09-18T21:00:00Z',
    arrivalTime: '2025-09-18T05:00:00Z',
    price: 540,
    currency: 'USD',
  },
  {
    id: '20',
    airline: 'Airline T',
    flightNumber: 'TT717',
    from: 'JFK',
    to: 'LAX',
    departureTime: '2025-09-19T22:00:00Z',
    arrivalTime: '2025-09-19T06:00:00Z',
    price: 610,
    currency: 'USD',
  },
];

// Route handler for GET requests
export async function GET(req: NextRequest) {
  var test = "teste";
  // Parse query parameters
  const { searchParams } = new URL(req.url);
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const date = searchParams.get('date');

  // Filter flights based on query parameters
  const filteredFlights = flights.filter((flight) => {
    const matchesFrom = from ? flight.from === from : true;
    const matchesTo = to ? flight.to === to : true;
    const matchesDate = date ? flight.departureTime.startsWith(date) : true;
    return matchesFrom && matchesTo && matchesDate;
  });

  // Return the filtered flights as JSON
  return NextResponse.json(filteredFlights);
}
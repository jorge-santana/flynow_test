'use client';

import { useFlightsQuery } from '../hooks/useFlightsQuery';
import { Flight } from '../schemas/flightSchema';

export default function FlightsTable() {
  const { data, isLoading, isError } = useFlightsQuery();

  if (isLoading) {
    return <p>Loading flights...</p>;
  }

  if (isError) {
    return <p>Failed to load flights. Please try again later.</p>;
  }

  const flights = data as Flight[]; // Explicitly assert the type of data

  if (!flights || flights.length === 0) {
    return <p>No flights available.</p>;
  }

  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Airline</th>
          <th className="border border-gray-300 px-4 py-2">Flight Number</th>
          <th className="border border-gray-300 px-4 py-2">From</th>
          <th className="border border-gray-300 px-4 py-2">To</th>
          <th className="border border-gray-300 px-4 py-2">Departure</th>
          <th className="border border-gray-300 px-4 py-2">Arrival</th>
          <th className="border border-gray-300 px-4 py-2">Price</th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight) => (
          <tr key={flight.id}>
            <td className="border border-gray-300 px-4 py-2">
              {flight.airline}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {flight.flightNumber}
            </td>
            <td className="border border-gray-300 px-4 py-2">{flight.from}</td>
            <td className="border border-gray-300 px-4 py-2">{flight.to}</td>
            <td className="border border-gray-300 px-4 py-2">
              {new Date(flight.departureTime).toLocaleString()}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {new Date(flight.arrivalTime).toLocaleString()}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {flight.price} {flight.currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

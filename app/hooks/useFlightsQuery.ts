import { useQuery } from '@tanstack/react-query';
import { flightsSchema } from '../schemas/flightSchema';

const fetchFlights = async (from?: string, to?: string, date?: string) => {
  const params = new URLSearchParams();
  if (from) params.append('from', from);
  if (to) params.append('to', to);
  if (date) params.append('date', date);

  const response = await fetch(`/api/flights?${params.toString()}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch flights');
  }

  const data = await response.json();
  return flightsSchema.parse(data);
};

export const useFlightsQuery = (from?: string, to?: string, date?: string) => {
  return useQuery({
    queryKey: ['flights', { from, to, date }],
    queryFn: () => fetchFlights(from, to, date),
  });
};

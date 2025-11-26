import { z } from 'zod';

export const flightSchema = z.object({
  id: z.string(),
  airline: z.string(),
  flightNumber: z.string(),
  from: z.string(),
  to: z.string(),
  departureTime: z.string(),
  arrivalTime: z.string(),
  price: z.number(),
  currency: z.string(),
});

export const flightsSchema = z.array(flightSchema);

export type Flight = z.infer<typeof flightSchema>;

interface FilterCriteria {
  from?: string;
  to?: string;
  date?: string;
}

export function filterFlights(flights: Flight[], criteria: FilterCriteria): Flight[] {
  return flights.filter((flight) => {
    const matchesFrom = criteria.from ? flight.from === criteria.from : true;
    const matchesTo = criteria.to ? flight.to === criteria.to : true;
    const matchesDate = criteria.date ? flight.departureTime.startsWith(criteria.date) : true;
    return matchesFrom && matchesTo && matchesDate;
  });
}
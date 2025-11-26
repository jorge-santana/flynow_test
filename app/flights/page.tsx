import FlightsTable from './FlightsTable';
import QueryProvider from '../query-provider';

export default function FlightsPage() {
  return (
    <QueryProvider>
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Available Flights</h1>
        <FlightsTable />
      </main>
    </QueryProvider>
  );
}

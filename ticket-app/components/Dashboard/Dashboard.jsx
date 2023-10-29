import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import TicketCard from '@/components/TicketCard/TicketCard';

const Dashboard = () => {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Sidebar />

      <main className="p-4 md:ml-64 pt-20 mt-8 lg:mt-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

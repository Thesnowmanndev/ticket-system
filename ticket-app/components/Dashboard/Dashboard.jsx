import TicketCard from '@/components/TicketCard/TicketCard';

const Dashboard = ({ openReadModal }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
      <div onClick={openReadModal}>
        <TicketCard />
      </div>
      <div onClick={openReadModal}>
        <TicketCard />
      </div>
      <div onClick={openReadModal}>
        <TicketCard />
      </div>
      <div onClick={openReadModal}>
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;

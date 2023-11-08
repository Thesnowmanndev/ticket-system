import TicketCard from '@/components/TicketCard/TicketCard';

const getTickets = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/Tickets', {
      cache: 'no-store',
    });

    return res.json();
  } catch (error) {
    console.log('Failed to get tickets', error);
  }
};

const page = async ({ openReadModal }) => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div className="mb-4" key={categoryIndex}>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                {uniqueCategory}
              </h2>
              <div
                className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-2"
                onClick={openReadModal}
              >
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default page;

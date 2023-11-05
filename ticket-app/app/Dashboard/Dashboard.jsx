'use client';

import { useState } from 'react';

import BlurredBackground from '@/components/Dashboard/BlurredBackground';
import Navbar from '@/components/Navbar/Navbar';
import ReadModal from '@/components/ReadModal/ReadModal';
import Sidebar from '@/components/Sidebar/Sidebar';
import TicketCard from '@/components/TicketCard/TicketCard';

const Dashboard = () => {
  const [readModalIsOpen, setReadModalIsOpen] = useState(false);

  function openReadModal() {
    setReadModalIsOpen(true);
  }

  function closeReadModal() {
    setReadModalIsOpen(false);
  }

  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Sidebar />

      <main className="p-4 md:ml-64 pt-20 mt-8 lg:mt-0 ">
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
      </main>

      {readModalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <BlurredBackground />
          <div className="relative">
            <ReadModal onClick={closeReadModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

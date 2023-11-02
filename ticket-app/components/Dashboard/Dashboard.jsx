'use client';

import { useState } from 'react';

import Navbar from '@/components/Navbar/Navbar';
import ReadModal from '@/components/ReadModal/ReadModal';
import Sidebar from '@/components/Sidebar/Sidebar';
import TicketCard from '@/components/TicketCard/TicketCard';

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Sidebar />

      <main className="p-4 md:ml-64 pt-20 mt-8 lg:mt-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
          <div onClick={openModal}>
            <TicketCard />
          </div>
          <div onClick={openModal}>
            <TicketCard />
          </div>
          <div onClick={openModal}>
            <TicketCard />
          </div>
          <div onClick={openModal}>
            <TicketCard />
          </div>
        </div>
      </main>

      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm">
            {/* This creates the shaded and blurred background */}
          </div>
          <div className="relative">
            <ReadModal onClick={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

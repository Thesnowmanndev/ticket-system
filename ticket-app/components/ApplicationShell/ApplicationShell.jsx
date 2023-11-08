'use client';

import { useState } from 'react';

import BlurredBackground from '@/components/Dashboard/BlurredBackground';
import Navbar from '@/components/Navbar/Navbar';
import ReadModal from '@/components/ReadModal/ReadModal';
import Sidebar from '@/components/Sidebar/Sidebar';
import TicketPage from '@/components/TicketPage/page';
import CreateModal from '../CreateModal/CreateModal';

const ApplicationShell = () => {
  const [readModalIsOpen, setReadModalIsOpen] = useState(false);

  function openReadModal() {
    setReadModalIsOpen(true);
  }

  function closeReadModal() {
    setReadModalIsOpen(false);
  }

  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

  function openCreateModal() {
    setCreateModalIsOpen(true);
  }

  function closeCreateModal() {
    setCreateModalIsOpen(false);
  }

  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Sidebar openCreateModal={openCreateModal} />

      <main className="p-4 md:ml-64 pt-20 mt-8 lg:mt-0 ">
        <TicketPage openReadModal={openReadModal} />
      </main>

      {readModalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <BlurredBackground />
          <div className="relative">
            <ReadModal onClick={closeReadModal} />
          </div>
        </div>
      )}

      {createModalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <BlurredBackground />
          <div className="relative">
            <CreateModal onClick={closeCreateModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationShell;

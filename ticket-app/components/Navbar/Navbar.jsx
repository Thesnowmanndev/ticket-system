'use client';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { initFlowbite } from 'flowbite';
import Link from 'next/link';
import { useEffect } from 'react';

import MobileToggleSidebar from '@/components/Navbar/MobileToggleSidebar';
import NavbarApps from '@/components/Navbar/NavbarApps';
import UserDropdownMenu from '@/components/Navbar/UserDropdownMenu';

const Navbar = () => {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center">
          <MobileToggleSidebar />
          <Link
            href="https://github.com/Thesnowmanndev"
            className="flex items-center justify-between mr-4"
            target="_blank"
          >
            <span className="self-center lg:text-xl font-semibold whitespace-nowrap dark:text-white">
              <FontAwesomeIcon icon={faGithub} className="icon" />{' '}
              TheSnowmanndev / Ticket-System
            </span>
          </Link>
        </div>
        <div className="flex items-center lg:order-2">
          <NavbarApps />
          <UserDropdownMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

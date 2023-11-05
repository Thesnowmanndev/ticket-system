'use client';

import Link from 'next/link';
import { useState } from 'react';

import CreateModal from '../CreateModal/CreateModal';
import BlurredBackground from '../Dashboard/BlurredBackground';
import DropdownButtonSVG from '../svgs/DropdownButtonSVG';
import PieChartSVG from '../svgs/PieChartSVG';
import TicketSVG from '../svgs/TicketSVG';

const MainLinks = () => {
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

  function openCreateModal() {
    setCreateModalIsOpen(true);
  }

  function closeCreateModal() {
    setCreateModalIsOpen(false);
  }

  return (
    <div>
      <ul className="space-y-2">
        <li>
          <Link
            href="/"
            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <PieChartSVG />
            <span className="ml-3">Dashboard</span>
          </Link>
        </li>
        <li>
          <button
            type="button"
            className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-pages"
            data-collapse-toggle="dropdown-pages"
          >
            <TicketSVG />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">
              Tickets
            </span>
            <DropdownButtonSVG />
          </button>
          <ul id="dropdown-pages" className="hidden py-2 space-y-2">
            <li onClick={openCreateModal}>
              <Link
                href="#"
                className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                New Ticket
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <button
            type="button"
            className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-sales"
            data-collapse-toggle="dropdown-sales"
          >
            {/* TODO: REFACTOR SVG */}
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="flex-1 ml-3 text-left whitespace-nowrap">
              Sales
            </span>
            {/* TODO: REFACTOR SVG */}
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <ul id="dropdown-sales" className="hidden py-2 space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Billing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Invoice
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            {/* TODO: REFACTOR SVG */}
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
              <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap">Messages</span>
            <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
              4
            </span>
          </a>
        </li>
        <li>
          <button
            type="button"
            className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-authentication"
            data-collapse-toggle="dropdown-authentication"
          >
            {/* TODO: REFACTOR SVG */}
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="flex-1 ml-3 text-left whitespace-nowrap">
              Authentication
            </span>
            {/* TODO: REFACTOR SVG */}
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <ul id="dropdown-authentication" className="hidden py-2 space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Sign In
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Sign Up
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Forgot Password
              </a>
            </li>
          </ul>
        </li>
      </ul>
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

export default MainLinks;

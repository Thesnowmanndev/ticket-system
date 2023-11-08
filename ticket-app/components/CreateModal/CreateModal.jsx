'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import AddButtonSVG from '../svgs/AddButtonSVG';
import CreateModalCloseButtonSVG from '../svgs/CreateModalCloseButtonSVG';

const CreateModal = (props) => {
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('api/Tickets', {
      method: 'POST',
      body: JSON.stringify({ formData }),
      'content-type': 'application/json',
    });

    if (!res.ok) {
      throw new Error('Failed to create ticket');
    }

    props.onClick();
    router.refresh();
    router.push('/');
  };

  const startingTicketData = {
    title: '',
    description: '',
    priority: 1,
    status: 'not started',
    category: 'Hardware',
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="w-full p-4 overflow-x-hidden overflow-y-auto max-h-full">
      <div className="relative w-full max-w-2xl max-h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Create New Ticket
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={props.onClick}
            >
              <CreateModalCloseButtonSVG />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form method="post" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-1">
              <div className="col-span-1 md:col-span-2">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  required={true}
                  onChange={handleChange}
                  value={formData.title}
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type ticket title"
                />
              </div>
              <div>
                <label
                  htmlFor="priority"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Priority
                </label>
                <select
                  name="priority"
                  id="priority"
                  required={true}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option defaultValue="1">Select Priority</option>
                  <option value="1">Low</option>
                  <option value="2">Normal</option>
                  <option value="3">Medium</option>
                  <option value="4">High</option>
                  <option value="5">Critical</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  required={true}
                  onChange={handleChange}
                  value={formData.category}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option defaultValue="Hardware">Select category</option>
                  <option value="Hardware">Hardware</option>
                  <option value="Software">Software</option>
                  <option value="Network">Network</option>
                  <option value="Printer">Printer</option>
                  <option value="Phone">Phone</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="status"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Status
                </label>
                <select
                  name="status"
                  id="status"
                  required={true}
                  onChange={handleChange}
                  value={formData.status}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option defaultValue="Open">Select Status</option>
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Waiting for Response">
                    Waiting for Response
                  </option>
                  <option value="On Hold">On Hold</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows="6"
                  required={true}
                  onChange={handleChange}
                  value={formData.description}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write product description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <AddButtonSVG />
              Create New Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;

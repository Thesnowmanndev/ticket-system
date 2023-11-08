import PriorityRating from '@/components/TicketCard/PriorityRating';
import StatusDisplay from '@/components/TicketCard/StatusDisplay';

const ReadModal = (props) => {
  function deleteTicket() {
    console.log('delete');
  }
  function updateTicket() {
    console.log('update');
  }
  return (
    <div className="w-full p-4 overflow-x-hidden overflow-y-auto max-h-full">
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              TICKET NAME
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={props.onClick}
            >
              {/* TODO: REFACTOR SVG */}
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <PriorityRating />
            </div>
            <div>
              <p className="text-white text-xs my-1">
                Created: 10/29/2023 5:34PM
              </p>
            </div>
            <div>
              <StatusDisplay />
            </div>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum odio accusantium reprehenderit quaerat nobis, harum
              inventore optio placeat praesentium. Eos autem recusandae possimus
              ex sint vitae assumenda unde esse labore cupiditate facilis,
              provident delectus, quibusdam sapiente. Nulla iure ipsam,
              accusantium ipsum reiciendis, debitis totam ratione fuga pariatur
              sint quo alias.
            </p>
          </div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={updateTicket}
            >
              Update
            </button>
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={deleteTicket}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadModal;

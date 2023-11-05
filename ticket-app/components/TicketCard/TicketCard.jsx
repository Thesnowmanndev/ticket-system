import PriorityRating from '@/components/TicketCard/PriorityRating';
import ProgressBar from '@/components/TicketCard/ProgressBar';
import StatusDisplay from '@/components/TicketCard/StatusDisplay';

const TicketCard = () => {
  return (
    <div className="rounded-lg border-gray-300 dark:border-gray-600 h-full overflow-y-auto">
      <div className="w-full h-full m-0 p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 hover:dark:bg-gray-700 hover:cursor-pointer">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <PriorityRating />
        <div className="flex flex-col">
          <p className="text-white text-xs my-1">Created: 10/29/2023 5:34PM</p>
          <ProgressBar />
        </div>
        <StatusDisplay />

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 whitespace-pre-wrap my-2">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <p
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 dark:text-white"
        >
          Read more
          {/* TODO: REFACTOR SVG */}
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default TicketCard;

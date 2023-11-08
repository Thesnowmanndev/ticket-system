import { faFire } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const rating = (priority) => {
  return (
    <div className="flex items-center space-x-1 my-2">
      <FontAwesomeIcon
        icon={faFire}
        className={`w-4 h-4 ${
          priority > 0 ? 'text-red-500' : 'text-gray-800 dark:text-white'
        }`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`w-4 h-4 ${
          priority > 1 ? 'text-red-500' : 'text-gray-800 dark:text-white'
        }`}
      />{' '}
      <FontAwesomeIcon
        icon={faFire}
        className={`w-4 h-4 ${
          priority > 2 ? 'text-red-500' : 'text-gray-800 dark:text-white'
        }`}
      />{' '}
      <FontAwesomeIcon
        icon={faFire}
        className={`w-4 h-4 ${
          priority > 3 ? 'text-red-500' : 'text-gray-800 dark:text-white'
        }`}
      />{' '}
      <FontAwesomeIcon
        icon={faFire}
        className={`w-4 h-4 ${
          priority > 4 ? 'text-red-500' : 'text-gray-800 dark:text-white'
        }`}
      />
    </div>
  );
};

export default rating;

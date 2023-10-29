const ProgressBar = () => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-2">
      <div
        className="bg-green-400 h-2.5 rounded-full"
        style={{ width: '45%' }}
      ></div>
    </div>
  );
};

export default ProgressBar;

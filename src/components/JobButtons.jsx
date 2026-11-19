const JobButtons = ({ jobsData, selectedJobId, onSelectJob }) => {
  return (
    <div id="JobButtons" className="my-5 flex gap-3 overflow-x-auto">
      <button
        type="button"
        aria-pressed={selectedJobId === null}
        onClick={() => onSelectJob(null)}
        className={`my-5 whitespace-nowrap rounded px-3 py-2 text-xs transition-colors duration-150 ${selectedJobId === null ? "bg-blue-600 text-white" : "bg-gray-300 text-black hover:bg-blue-400"}`}
      >
        All jobs
      </button>
      {jobsData.map((job) => (
        <button
          key={job.id}
          type="button"
          aria-pressed={selectedJobId === job.id}
          onClick={() => onSelectJob(job.id)}
          className={`my-5 whitespace-nowrap rounded px-3 py-2 text-xs transition-colors duration-150 ${selectedJobId === job.id ? "bg-blue-600 text-white" : "bg-gray-300 text-black hover:bg-blue-400"}`}
        >
          {job.title}
        </button>
      ))}
    </div>
  );
};

export default JobButtons;

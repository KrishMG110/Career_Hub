import Navbar from "../components/Navbar.jsx";
import JobButtons from "../components/JobButtons.jsx";
import jobsData from "../Data/jobsData.json";
import JobCards from "./JobCards.jsx";
import { useContext } from "react";
import { JobContext } from "../Context/JobContext.jsx";

const Jobs = () => {
  const { createdJobs } = useContext(JobContext);
  const allJobs = [...createdJobs, ...jobsData];
  return (
    <div>
      <Navbar />
      <div className="min-h-[90vh] w-full p-4 sm:p-5">
        <div className="mx-auto h-full max-w-7xl rounded-2xl bg-slate-50 p-4 sm:p-5">
          <div className="mb-4"><p className="text-sm font-semibold text-blue-600">FIND YOUR NEXT ROLE</p><h1 className="text-2xl font-bold">Job openings</h1></div>
          <div className="flex justify-between items-center">
            <div>
              <select className="border rounded py-0.5 outline-none text-xs">
                <option value="">Filter</option>
                <option value="">Fresher</option>
                <option value="">Filter</option>
              </select>
            </div>
            <div>
              <select className="border rounded py-0.5 outline-none text-xs">
                <option value="">Recently</option>
                <option value="">Fresher</option>
                <option value="">Filter</option>
              </select>
            </div>
          </div>

          <JobButtons jobsData={allJobs} />
          <JobCards jobsData={allJobs}/>
          
         
        </div>
      </div>
    </div>
  );
};

export default Jobs;

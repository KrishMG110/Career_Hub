import { createContext, useState } from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [createdJobs, setCreatedJobs] = useState(() => JSON.parse(localStorage.getItem("createdJobs") || "[]"));
  const addJob = (job) => {
    const next = [{ ...job, id: crypto.randomUUID(), createdAt: new Date().toISOString() }, ...createdJobs];
    setCreatedJobs(next);
    localStorage.setItem("createdJobs", JSON.stringify(next));
  };
  const deleteJob = (id) => {
    const next = createdJobs.filter((job) => job.id !== id);
    setCreatedJobs(next);
    localStorage.setItem("createdJobs", JSON.stringify(next));
  };
  return <JobContext.Provider value={{ createdJobs, addJob, deleteJob }}>{children}</JobContext.Provider>;
};

import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("./jobs.json")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="max-w-[1460px] mx-auto px-6">
      <h2 className="text-5xl mt-10 text-center font-semibold mb-6">
        Featured Jobs
      </h2>
      <p className="text-center mb-6">
        Explore the latest job opportunities from top companies.
      </p>

      <div className={`grid grid-cols-1 sm:grid-cols-2 ${dataLength > 4 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-6 justify-between`}>
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job?.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength >= 6? 'hidden': 'flex justify-center mt-6'}>
        <button onClick={() => setDataLength(jobs.length)} className="bg-gradient-to-r from-[#399918] to-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-300">
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;

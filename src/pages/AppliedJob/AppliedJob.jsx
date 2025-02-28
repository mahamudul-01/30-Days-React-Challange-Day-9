import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utility/localStorage";
import AppliedJobCard from "../../components/AppliedJobCard/AppliedJobCard";

import { IoIosArrowDown } from "react-icons/io";

const AppliedJob = () => {
  const [jobsApplied, setJobsApplied] = useState([]);

  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobIds = getStoredJobApplications();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      console.log(jobsApplied);
      setJobsApplied(jobsApplied);
    }
  }, []);
  return (
    <div className="max-w-[1460px] mx-auto px-6">
      <h2 className="text-5xl mt-10 text-center font-semibold mb-6">
        Applied Jobs
        
      </h2>
      <div className="flex justify-end">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn m-1">
            Filter By
            <IoIosArrowDown />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {jobsApplied.map((job) => (
          <AppliedJobCard job={job} key={job?.id}></AppliedJobCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;

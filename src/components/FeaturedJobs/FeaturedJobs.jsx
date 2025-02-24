import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('./jobs.json')
            .then((response) => response.json())
            .then((data) => setJobs(data));
    }, []);


    return (
        <div className="max-w-[1460px] mx-auto px-6">
            <h2 className="text-5xl mt-10 text-center font-semibold mb-6">Featured Jobs</h2>
            <p className="text-center mb-6">Explore the latest job opportunities from top companies.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
                {
                    jobs.map(job => <Job key={job?.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;
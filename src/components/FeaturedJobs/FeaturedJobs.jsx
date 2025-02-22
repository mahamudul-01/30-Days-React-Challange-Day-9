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
        <div className="max-w-[1460px]  mx-auto px-6 ">
            <h2 className="text-3xl text-center font-semibold mb-6">Featured Jobs{jobs.length}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
                {
                    jobs.map(job=> <Job key={job?.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;
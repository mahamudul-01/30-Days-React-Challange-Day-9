import { CiDollar, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    location,
    job_type,
    salary,
    job_description,
    educational_requirements,
    experiences,
    contact_information,
  } = job;

  const { email, phone, address } = contact_information;
  return (
    <div className="p-4 space-y-4 shadow-md">
      <img className="" src={logo} alt="" />
      <h2 className="text-lg font-semibold">{job_title}</h2>
      <p className="text-gray-600 text-base">{company_name}</p>
      <div className="flex justify-items-start items-center space-x-4">
        <p className="border border-[#399918] p-4 text-sm font-semibold rounded-md text-[#399918]">
          Remote
        </p>
        <p className="border border-[#399918] p-4 text-sm font-semibold rounded-md text-[#399918]">
          Remote
        </p>
      </div>
      <div className="flex justify-start items-center space-x-2">
        <div className="flex items-center space-x-2">
          <p className="">
            <CiLocationOn />
          </p>
          <p className="text-sm text-gray-600">
            {location} 
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="">
          <CiDollar/>
          </p>
          <p className="text-sm text-gray-600">
           Salary: {salary}
          </p>
        </div>
      </div>
      <button
        rel="noopener noreferrer"
        href="#"
        className="px-8 py-3 text-sm font-semibold rounded dark:bg-[#399918] dark:text-gray-50"
      >
        <Link to={`/job/${id}`}>
        View Details
        </Link>
      </button>
    </div>
  );
};

export default Job;

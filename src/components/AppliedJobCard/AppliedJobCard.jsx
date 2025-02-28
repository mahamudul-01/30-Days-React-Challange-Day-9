import PropTypes from "prop-types";
import { CiDollar, CiLocationOn } from "react-icons/ci";

const AppliedJobCard = ({ job }) => {
  console.log(job);
  const {
    job_title,
    logo,
    company_name,
    job_type,

    salary,
    
    contact_information,
  } = job;
  const { address } = contact_information;
  return (
    <div className="p-6 rounded-lg shadow-lg bg-[#f0faedf0] my-10">
      <div className="flex justify-between items-center">
        <div className="card card-side  ">
          <figure className="mr-10 bg-base-100 p-6">
            <img src={logo} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
            <div className="flex justify-items-start items-center space-x-4 w-[30%]"> 
              <p className="border border-[#399918] text-center p-2 text-sm font-semibold rounded-md text-[#399918] " >
                {job_type}
              </p>
            </div>
            <div className="flex justify-start items-center space-x-2">
              <div className="flex items-center space-x-2">
                <p className="">
                  <CiLocationOn />
                </p>
                <p className="text-sm text-gray-600">{address}</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="">
                  <CiDollar />
                </p>
                <p className="text-sm text-gray-600">Salary: {salary}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-gradient-to-r from-green-500 to-[#399918] text-white font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

AppliedJobCard.propTypes = {
  job: PropTypes.object,
};

export default AppliedJobCard;

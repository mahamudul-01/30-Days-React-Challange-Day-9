import { useLoaderData, useParams } from "react-router-dom";
import "./JobDetails.css";
import { CiDollar, CiLocationOn } from "react-icons/ci";
import { RxCalendar } from "react-icons/rx";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { saveJobApplication } from "../../../utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const {
    job_title,

    salary,
    job_description,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  const { phone, email, address } = contact_information;

  const handleApplyJob = () => {
    saveJobApplication(idInt)
    toast.success("You have successfully applied for this job");
  };

  return (
    <div className="max-w-[1460px] mx-auto px-6">
      <h2 className="text-2xl mb-14 mt-6 text-center font-bold">Job Details</h2>

      <div className="parent">
        <div className="div1">
          <p className="text-base mb-6">
            <span className="font-bold text-black">Job Description: </span>{" "}
            {job_description}
          </p>

          <p className="text-base mb-6">
            <span className="font-bold text-black">Job Responsibility: </span>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut modi
            voluptas ea autem omnis facere, esse, aspernatur culpa officiis
            aliquam, sequi iste saepe cumque. Sed ut reprehenderit iure debitis!
            Id.{" "}
          </p>

          <p className="text-base mb-6">
            <span className="font-bold text-black">
              Educational Requirements:{" "}
            </span>{" "}
            {educational_requirements}
          </p>

          <p className="text-base mb-6">
            <span className="font-bold text-black">Experiences: </span>{" "}
            {experiences}
          </p>
        </div>
        <div className="div2 ">
          <h4 className="text-sm font-bold text-black mb-4">Job Details</h4>
          <hr className="text-black border-1 mb-4 border-gray-400" />
          <div className="text-sm">
            <div className="flex items-center space-x-2 mb-4">
              <p className="text-green-600 text-base font-bold">
                <CiDollar />
              </p>
              <p>
                <span className="text-black font-bold">Salary</span>:{salary}
              </p>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <p className="text-green-600 text-base font-bold">
                <RxCalendar />
              </p>
              <p>
                <span className="text-black font-bold">Job Title</span>:
                {job_title}
              </p>
            </div>
            <h4 className="text-sm font-bold text-black mb-4">
              Contact Information
            </h4>
            <hr className="text-black border-1 mb-4 border-gray-400" />

            <div className="flex items-center space-x-2 mb-4">
              <p className="text-green-600 text-base font-bold">
                <MdOutlineLocalPhone />
              </p>
              <p>
                <span className="text-black font-bold">Phone</span>: {phone}
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <p className="text-green-600 text-base font-bold">
                <MdOutlineEmail />
              </p>
              <p>
                <span className="text-black font-bold">Email:</span>: {email}
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <p className="text-green-600 text-base font-bold">
                <CiLocationOn />
              </p>
              <p>
                <span className="text-black font-bold">Address:</span>:{" "}
                {address}
              </p>
            </div>
            <div>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <button
                  onClick={handleApplyJob}
                  rel="noopener noreferrer"
                  href="#"
                  className="px-6 py-2 w-full text-center my-6 text-sm font-semibold rounded dark:bg-[#399918] dark:text-gray-50"
                >
                  Apply Now
                </button>
              </div>
              <ToastContainer position="top-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

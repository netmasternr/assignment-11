/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
    const { Applicants_Number, _id, job_title, category, Picture_URL, Salary_range, startDate, UserName } = job;

    // Format date
    const formattedStartDate = new Date(startDate).toLocaleDateString();

    return (
        <div className='px-4 py-3 bg-base-100 rounded-md shadow-md hover:scale-[1.05] transition-all'>
            <div>
                <img className='w-2/3 mx-auto rounded-lg pb-2' src={Picture_URL} alt="" />
            </div>
            <div className='flex items-center justify-between'>
                <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
                    {category}
                </span>
            </div>
            <div className='pt-1 text-gray-500 space-y-1'>
                <p>Application Deadline: {formattedStartDate}</p>
                <h1 className='text-lg font-semibold text-gray-500'>Name: {UserName}</h1>
            </div>
            <div className='flex items-center justify-between space-y-1'>
                <div>
                    <h1 className='mt-2 text-lg font-semibold text-gray-500'>{job_title}</h1>
                    <p className='mt-2 text-sm font-bold text-gray-500'>Range: ${Salary_range}</p>
                    <p className='pt-1 text-gray-500'>Applicants Number: {Applicants_Number}</p>
                </div>
                <div>
                    <Link to={`/singleJob/${_id}`} className='btn'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;

import { useLoaderData } from "react-router-dom";

const SingleJobDetails = () => {
    const job = useLoaderData();
    // console.log(job)


    const { Applicants_Number, _id, description, UserName,job_title, category, Picture_URL, Salary_range, startDate } = job;
    const formattedStartDate = new Date(startDate).toLocaleDateString();

    return (
        <div className=' w-2/3 mx-auto mb-2 pt-10 md:pt-20  px-4 py-3 bg-white rounded-md shadow-md  '>

            <div>
                <img className=' w-2/3 mx-auto rounded-lg pb-2' src={Picture_URL} alt="" />
            </div>

            <div className='flex items-center justify-between'>
                <span className='text-xs font-light text-gray-800 '>
                    Deadline:{formattedStartDate}
                </span>
                <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
                    {category}

                </span>
            </div>
            <div className='pt-1 space-y-1'>
                <p>Application Deadline:</p>
                <h1 className='text-lg font-semibold text-gray-800'>name:{UserName} </h1>
            </div>

            <div className='flex items-center justify-between space-y-1'>
                <div className="space-y-2">
                    <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
                      {job_title}

                    </h1>

                    <p className='mt-2 text-sm font-bold text-gray-600 '>
                        Salary Range:{Salary_range}
                    </p>
                    <p className='pt-1'>Applicants Number:{Applicants_Number}
                    </p>
                    <p>description: {description}</p>
                </div>
                <div>
                    <button className='btn'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleJobDetails;
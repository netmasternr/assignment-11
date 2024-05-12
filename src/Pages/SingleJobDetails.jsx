import { useLoaderData } from "react-router-dom";

const SingleJobDetails = () => {
    const job = useLoaderData();
    console.log(job)


    const { jobCategory, jobTitle, _id, salaryRange, jobPostingDate, jobApplicantsNumber, pictureURL, jobDescription } = job ;
  
    return (
        <div className=' w-2/3 mx-auto pt-10 md:pt-20  px-4 py-3 bg-white rounded-md shadow-md  '>

            <div>
                {/* <img className=' w-2/3 mx-auto rounded-lg pb-2' src={img3} alt="" /> */}img
            </div>

            <div className='flex items-center justify-between'>
                <span className='text-xs font-light text-gray-800 '>
                    Deadline: 20/12/2024
                </span>
                <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
                    {jobCategory}
                    
                </span>
            </div>
            <div className='pt-1 space-y-1'>
                <p>Application Deadline:</p>
                <h1 className='text-lg font-semibold text-gray-800'>name:</h1>
            </div>

            <div className='flex items-center justify-between space-y-1'>
                <div>
                    <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
                        {/* {jobTitle} */}
                        
                    </h1>

                    <p className='mt-2 text-sm font-bold text-gray-600 '>
                        Range:
                    </p>
                    <p className='pt-1'>Applicants Number:
                    </p>
                </div>
                <div>
                    <button className='btn'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleJobDetails;
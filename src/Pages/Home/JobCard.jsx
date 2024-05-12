/* eslint-disable react/prop-types */
import img3 from '../../assets/img/sliderImg/rag-dolls-one-blue.jpg'

const JobCard = ({ job }) => {

    const { jobCategory, jobTitle } = job || {};
    return (
        <div className=' px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>

            <div>
                <img className=' w-2/3 mx-auto rounded-lg pb-2' src={img3} alt="" />
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
                        {jobTitle}
                    </h1>

                    <p className='mt-2 text-sm font-bold text-gray-600 '>
                        Range: 
                    </p>
                    <p className='pt-1'>Applicants Number:
                    </p>
                </div>
                <div>
                    <button className='btn'>view details</button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
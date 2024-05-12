import { Link } from 'react-router-dom';

const Slide = ({image, text}) => {
    return (
        <div
            className=' my-2  w-full bg-center  glass bg-cover h-[25rem] md:h-[30rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center '>
                 
                   <h1 className='text-white w-2/3 mx-auto text-xl  p-5 rounded-lg glass'>  {text}</h1>

                    <br />
                    <Link to='/Add-Job' className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                        Post Job & Hire Expert
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Slide;
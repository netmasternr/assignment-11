import logo from '../../assets/img/logo/logo.png';

const SkillsHere = () => {
    return (
        <div className='flex flex-col items-center mb-8'>
            <div className=''>
                <img className='w-72' src={logo} alt="" />
            </div>
            <div className='text-center  '>
                <h1 className='text-xl font-bold'>SkillShere</h1>
                <p className='font-semibold'>Discover Your Potential, Find Your Future with SkillsHere</p>
            </div>
        </div>
    );
};

export default SkillsHere;

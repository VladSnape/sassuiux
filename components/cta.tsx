import { FaArrowCircleRight } from "react-icons/fa";

const Cta = () => {
  return (
    <div className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 m-5 p-10 rounded-md flex flex-col items-center lg:p-20 lg:m-10 lg:gap-10 gap-5'>
       
        <h1 className='text-white text-3xl font-bold text-center lg:text-4xl '>
            Monitor your website like a pro
        </h1>
        <p className='text-white text-lg text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quod.
        </p>
       
        <div className='flex flex-col lg:flex-row'>
            <button className='bg-white py-4 px-8 rounded-md text-purple-500'>Try for free</button>
            <button className=' py-4 px-8 rounded-md text-white flex items-center gap-x-3'>Contact sales
            <span><FaArrowCircleRight /></span>
            </button>
        </div>
  
       </div>
  
  )
}

export default Cta
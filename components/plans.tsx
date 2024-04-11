import Check from "../public/assets/check.svg";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

const Plans = () => {
  return (
    <div className="mt-10 p-5  lg:p-10">
        <div className="m-5 flex flex-col gap-5 items-center">
            <h1 className="text-2xl lg:text-4xl">Flexible plans for you</h1>
            <p className=" text-slate-500">no hidden fees</p>
        </div>
        <div className=" flex flex-col gap-5 lg:flex-row w-full lg:items-center">
            <div className=" bg-indigo-100 rounded-md p-10 flex flex-col gap-5 lg:w-1/3 ">
                <h2 className="text-xl text-indigo-500">Free Trial</h2>
                <p className=" text-slate-500">perfect testing water </p>
                <h2 className="text-2xl">0$/ <span className="text-slate-400">mo</span></h2>
                <ul className="text-gray-700 gap-3 flex flex-col">
                 <li className="flex gap-x-5 items-center">
                 <span><Image src={Check} alt="" className="w-7" /></span>
                 Lorem ipsum dolor sit amet
                </li>
                <li className="flex gap-x-5 items-center">
                    <span><Image src={Check} alt="" className="w-7" /></span>
                    Lorem ipsum dolor sit amet                </li>
                <li className="flex gap-x-5 items-center">
                    <span><Image src={Check} alt="" className="w-7" /></span>
                    Sed do eiusmod tempor incididunt                </li>
                </ul>
                <button className="bg-white py-4 px-10 rounded-sm text-indigo-500">
                    Start trial
                </button>
        </div>
        <div className=" bg-indigo-700 rounded-md p-10 flex flex-col gap-5 lg:w-1/3">
                <h2 className="text-xl text-white">Buisness</h2>
                <p className=" text-slate-100">perfect testing water </p>
                <h2 className="text-2xl text-slate-100">500$/ <span className="text-slate-400">mo</span></h2>
                <ul className="text-white gap-3 flex flex-col">
                 <li className="flex gap-x-5 items-center">
                 <span className="text-2xl"><FaCheck /></span>
                 Lorem ipsum dolor sit amet
                </li>
                <li className="flex gap-x-5 items-center">
                    <span className="text-2xl"><FaCheck /></span>
                    Consectetur adipiscing elit
                </li>
                <li className="flex gap-x-5 items-center">
                    <span className="text-2xl"><FaCheck /></span>
                    Consectetur adipiscing elit
                </li>
                <li className="flex gap-x-5 items-center">
                    <span className="text-2xl"><FaCheck /></span>
                    Consectetur adipiscing elit
                </li>
                <li className="flex gap-x-5 items-center">
                <span className="text-2xl"><FaCheck /></span>
                    Sed do eiusmod tempor incididunt ut labore
                </li>
                </ul>
                <button className="bg-white py-4 px-10 rounded-sm text-indigo-500">
                    Get started
                </button>
        </div>
        <div className=" bg-indigo-100 rounded-md p-10 flex flex-col gap-5 lg:w-1/3">
                <h2 className="text-xl text-indigo-500">Entreprise</h2>
                <p className=" text-slate-500">perfect for big buisnesses</p>
                <h2 className="text-2xl">Custom</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. 
                Nemo enim ipsam voluptatem quia voluptas
                 sit aspernatur aut odit aut fugit. Lorem 
                 ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="bg-white py-4 px-10 rounded-sm text-indigo-500">
                    contact us
                </button>
        </div>
        </div>
       

    </div>
  )
}

export default Plans
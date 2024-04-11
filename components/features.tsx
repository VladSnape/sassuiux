import Image from "next/image";
import Feature1 from "../public/assets/feature-1.svg";
import Feature2 from "../public/assets/feature-2.svg";
import Feature3 from "../public/assets/feature-3.svg";
import Check from "../public/assets/check.svg";
import bluebutton from "../public/assets/blue-button.svg";
import greenButton from "../public/assets/green-button.svg";
import pinkButton from "../public/assets/pink-button.svg";
const Features = () => {
    return (
      <div className="m-5 lg:p-10 flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row ">
          <div className="flex flex-col gap-5 lg:w-1/2 lg:justify-center lg:pr-16">
            <div className="flex flex-col gap-3">
              <span className="text-blue-500 font-semibold">Sales Monitoring</span>
              <h2 className="text-2xl lg:text-3xl">Simplify your sales monitoring</h2>
            </div>
            <div className="w-full lg:hidden">
              <Image src={Feature1} alt="" className="bg-cover w-full" />
            </div>
            <p className="font-medium text-gray-500">
              Stay on top of things and revamp your work process with our game-changing feature.
              Get a birds eye view with our customizable dashboard.
            </p>
            <ul className="text-gray-700 gap-5 flex flex-col">
              <li className="flex gap-x-5 items-center">
                <span><Image src={Check} alt="" className="w-7" /></span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex gap-x-5 items-center">
                <span><Image src={Check} alt="" className="w-7" /></span>
                Consectetur adipiscing elit
              </li>
              <li className="flex gap-x-5 items-center">
                <span><Image src={Check} alt="" className="w-7" /></span>
                Sed do eiusmod tempor incididunt ut labore
              </li>
            </ul>
            <div>
              <button className="text-blue-500 text-xl flex gap-x-5">
                Learn more
                <span><Image src={bluebutton} alt="" className="w-7" /></span>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 hidden lg:block">
            <Image src={Feature1} alt="" className="bg-cover w-full" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse ">
          <div className="flex flex-col gap-5 lg:w-1/2 lg:justify-center lg:pl-16">
            <div className="flex flex-col gap-3">
              <span className="text-green-500 font-semibold">Custumer support</span>
              <h2 className="text-2xl lg:text-3xl">Get in touch with your customers</h2>
            </div>
            <div className="w-full lg:hidden">
              <Image src={Feature2} alt="" className="bg-cover w-full" />
            </div>
            <p className="font-medium text-gray-500">
            Stay on top of things and revamp your work process with our game-changing feature.
             Get a birds eye view with our customizable dashboard. 
            </p>
            <ul className="text-gray-700 gap-5 flex flex-col">
              <li className="flex gap-x-5 items-center">
                <span><Image src={Check} alt="" className="w-7" /></span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex gap-x-5 items-center">
                <span><Image src={Check} alt="" className="w-7" /></span>
                Consectetur adipiscing elit
              </li>
              <li className="flex gap-x-5 items-center">
                <span><Image src={Check} alt="" className="w-7" /></span>
                Sed do eiusmod tempor incididunt ut labore
              </li>
            </ul>
            <div>
              <button className="text-green-500 text-xl flex gap-x-5">
                Learn more
                <span><Image src={bluebutton} alt="" className="w-7" /></span>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 hidden lg:block">
            <Image src={Feature2} alt="" className="bg-cover w-full" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row ">
          <div className="flex flex-col gap-5 lg:w-1/2 lg:justify-center lg:pr-16">
            <div className="flex flex-col gap-3">
              <span className="text-pink-500 font-semibold">Growth Monitoring</span>
              <h2 className="text-2xl lg:text-3xl">Monitor your sites new subscribers </h2>
            </div>
            <div className="w-full lg:hidden">
              <Image src={Feature3} alt="" className="bg-cover w-full" />
            </div>
            <p className="font-medium text-gray-500">
              Stay on top of things and revamp your work process with our game-changing feature.
              Get a birds eye view with our customizable dashboard.
            </p>
            <div className="flex justify-between">
                <div className="flex flex-col gap-3">
                    <h3 className="text-2xl">100+</h3>
                    <p className=" text-slate-500">Lorem ipsum dolor sit</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-2xl">800+</h3>
                    <p className=" text-slate-500">Conse adipiscing elit</p>
                </div>
            </div>
            <div>
              <button className="text-pink-500 text-xl flex gap-x-5">
                Learn more
                <span><Image src={bluebutton} alt="" className="w-7" /></span>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 hidden lg:block">
            <Image src={Feature3} alt="" className="bg-cover w-full" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;
import { AiFillAlipayCircle } from "react-icons/ai";
import Image from 'next/image'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const Footer = () => {
  return (
    
    <>
    <div className="m-5 py-5 lg:flex lg:p-5">
        <div className=" flex gap-5 lg:w-1/3">
        <AiFillAlipayCircle className=" text-4xl"/>
        <h2 className=" text-xl font-semibold"> Your Website</h2>
        </div>
        <Accordion type="single" className=" lg:flex lg:justify-between lg:w-2/3" collapsible>
    <AccordionItem value="item-1">
        <AccordionTrigger>Features</AccordionTrigger>
        <AccordionContent>
        <ul className=" flex justify-around lg:flex-col lg:gap-5">
            <li className=" text-base"> growth</li>
            <li className=" text-base"> chat</li>
            <li className=" text-base"> slaes</li>

        </ul>
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
        <AccordionTrigger>Pricing</AccordionTrigger>
        <AccordionContent>
        <ul className=" flex justify-around lg:flex-col lg:gap-5">
            <li className=" text-base"> free trial</li>
            <li className=" text-base"> standard</li>
            <li className=" text-base"> Buisness</li>

        </ul>
        </AccordionContent>
    </AccordionItem>  <AccordionItem value="item-3">
        <AccordionTrigger>Enterprise</AccordionTrigger>
        <AccordionContent>
        <ul className=" flex justify-around lg:flex-col lg:gap-5">
            <li className=" text-base"> Personalize</li>
            <li className=" text-base"> Automation</li>
            <li className=" text-base"> Invoicing</li>
            <li className=" text-base">             24/7 Support
</li>


        </ul>
        </AccordionContent>
    </AccordionItem>  <AccordionItem value="item-4">
        <AccordionTrigger>careers</AccordionTrigger>
        <AccordionContent>
        <ul className=" flex justify-around lg:flex-col lg:gap-5">
        <li className=" text-base"> Open Positions</li>
            <li className=" text-base"> part-time</li>
            <li className=" text-base"> Contractual</li>
            <li className=" text-base"> Contact Us
</li>

        </ul>
        </AccordionContent>
    </AccordionItem>
    </Accordion>
    
   
    </div>
    <div className="m-10 flex flex-col gap-5 lg:flex-row">
    <p className="text-slate-500 text-center p-5 lg:w-1/2 lg:text-start">© Copyright 2024. Your Site. All rights reserved.</p>
    <div className=" flex justify-around px-20 lg:w-1/2 lg:justify-end lg:gap-x-10">
       < Image src="/assets/X.svg" alt='x' />
       < Image src="/assets/Facebook.svg" alt='facebook' />
       < Image src="/assets/Feed.svg" alt='feed' />

    </div>
    </div>
    </>
  )
}

export default Footer
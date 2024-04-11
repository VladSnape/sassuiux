import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const Question
 = () => {
  return (
    <div className=' flex flex-col gap-5 m-5 lg:flex-row lg:p-10 lg:gap-20'>
        <div className=" flex flex-col gap-5">
        <h3 className=' text-pink-500 '>Frequently Asked Questions</h3>
        <h1 className=' text-2xl lg:text-4xl'>Lets clarify some of your questions</h1>
        <p className=' text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore 
        </p>
        </div>

        <Accordion type="single" collapsible className=" flex flex-col gap-3">
            <AccordionItem value="item-1" className=" bg-blue-100 rounded-md px-5">
                <AccordionTrigger>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?                </AccordionTrigger>
                <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore. Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit
                   aut fugit. Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. Neque porro 
                 quisquam est, qui dolorem ipsum quia dolor sit amet.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className=" bg-blue-100 rounded-md px-5">
                <AccordionTrigger>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                </AccordionTrigger>
                <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore. Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit
                   aut fugit. Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. Neque porro 
                 quisquam est, qui dolorem ipsum quia dolor sit amet.
                </AccordionContent>
            </AccordionItem><AccordionItem value="item-3" className=" bg-blue-100 rounded-md px-5">
                <AccordionTrigger>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam?
                </AccordionTrigger>
                <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore. Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit
                   aut fugit. Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. Neque porro 
                 quisquam est, qui dolorem ipsum quia dolor sit amet.
                </AccordionContent>
            </AccordionItem><AccordionItem value="item-4" className=" bg-blue-100 rounded-md px-5">
                <AccordionTrigger>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam?                </AccordionTrigger>
                <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore. Nemo enim
               aut odit
                   aut fugit. Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. Neque porro 
                 quisquam est, qui dolorem ipsum quia dolor sit amet.
                </AccordionContent>
            </AccordionItem><AccordionItem value="item-5" className=" bg-blue-100 rounded-md px-5">
                <AccordionTrigger>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?                </AccordionTrigger>
                <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore. Nemo enim
                 quisquam est, qui dolorem ipsum quia dolor sit amet.
                </AccordionContent>
            </AccordionItem><AccordionItem value="item-6" className=" bg-blue-100 rounded-md px-5 items-start justify-start">
                <AccordionTrigger>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?                </AccordionTrigger>
                <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore. Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        

    </div>
  )
}

export default Question

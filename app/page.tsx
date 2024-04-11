import Cta from "@/components/cta";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Plans from "@/components/plans";
import Question from "@/components/quetions";

export default function Home() {
  return (
   <div className="max-w-screen-xl mx-auto">
    <Hero/>
    <Features/>
    <Question />
    <Plans />
    <Cta/>
    <Footer/>
   </div>
  );
}

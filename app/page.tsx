
import Footer from "@/components/Footer";
import About from "@/pages/homepage/About";
import Benefits from "@/pages/homepage/Benefits";
import FAQs from "@/pages/homepage/FAQs";
import Features from "@/pages/homepage/Features";
import Hero from "@/pages/homepage/Home";
import Testimony from "@/pages/homepage/Testimony";

export default function Home(): React.ReactElement {
  return (
    <div> 
      <Hero />
      <div className="pt-10 lg:px-32 lg:pb-10 lg:pt-20 flex flex-col gap-y-10 lg:gap-y-32 ">
      <Features />
      <About />
      <Testimony />
      <Benefits />
      <FAQs />
      <Footer />
      </div>
    </div>
  );
}

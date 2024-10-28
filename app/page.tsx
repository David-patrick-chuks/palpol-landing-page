import { About } from "@/pages/homepage/About";
import { Features } from "@/pages/homepage/Features";
import Hero from "@/pages/homepage/Home";

export default function Home(): React.ReactElement {
  return (
    <div> 
      <Hero />
      <Features />
      <About />
    </div>
  );
}

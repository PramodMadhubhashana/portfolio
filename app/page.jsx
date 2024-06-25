import AboutMe from "@/components/AboutMe";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Service from "@/components/Service";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="flex flex-col justify-center max-w-[1200px]" >
      <div className="flex flex-col relative">
        <Hero />
      </div>
      <div className="flex flex-col m-4">
        <AboutMe />
      </div>
      <div className="flex flex-col m-4">
        <Service />
      </div>
      <div className="flex flex-col m-4">
        <Works />
      </div>
      <div>
        <Reviews />
      </div>
      <div>
        <Cta />
      </div>
    </div>
  );
}

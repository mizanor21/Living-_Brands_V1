import Hero from "../components/Home/Hero/Hero";
import Define from "../components/Home/Define/Define";
import Solutions from "../components/Home/Solutions/Solutions";
import Slideshow from "@/components/Home/Slideshow/Slideshow";
import Brands from "@/components/Home/Brands/Brands";
import Video from "@/components/Home/IntroVideo/Video";
import Elevate from "@/components/Home/Elavate/Elavate";
import Journey from "@/components/Home/Journey/Journey";

export default function Home() {
  return (
    <main>
      <Hero />
      <Video />
      <Elevate></Elevate>
      <Define />
      <Slideshow />
      <Solutions />
      <Journey></Journey>
      <Brands />
    </main>
  );
}

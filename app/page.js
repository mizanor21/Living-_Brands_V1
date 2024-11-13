export const revalidate = 10;
import Hero from "../components/Home/Hero/Hero";
import Define from "../components/Home/Define/Define";
import Solutions from "../components/Home/Solutions/Solutions";
import Slideshow from "@/components/Home/Slideshow/Slideshow";
import Brands from "@/components/Home/Brands/Brands";
import Video from "@/components/Home/IntroVideo/Video";
import Elevate from "@/components/Home/Elavate/Elavate";
import Journey from "@/components/Home/Journey/Journey";

export default async function Home() {
  const res = await fetch("https://living-brands-admin.vercel.app/api/home");
  const home = await res.json();

  // Destructure fetched data sections
  const {
    heroSection = {},
    videoSection = {},
    elevateSection = {},
    defineUsSection = {},
    slideshowSection = {},
    solutionSection = {},
    journeySection = {},
    brandSection = {},
  } = home[0];
  // console.log(heroSection);
  return (
    <main>
      <Hero data={heroSection} />
      <Video data={videoSection} />
      <Elevate data={elevateSection} />
      <Define data={defineUsSection} />

      <Slideshow data={slideshowSection} />

      <Solutions data={solutionSection} />
      <Journey data={journeySection} />
      <Brands data={brandSection} />
    </main>
  );
}

"use client";
import axios from "axios";
import Hero from "../components/Home/Hero/Hero";
import Define from "../components/Home/Define/Define";
import Solutions from "../components/Home/Solutions/Solutions";
import Slideshow from "@/components/Home/Slideshow/Slideshow";
import Brands from "@/components/Home/Brands/Brands";
import Video from "@/components/Home/IntroVideo/Video";
import Elevate from "@/components/Home/Elavate/Elavate";
import Journey from "@/components/Home/Journey/Journey";
import { useEffect, useState } from "react";
import logo from "@/public/assets/logo/logo.png";

export default function Home() {
  const [home, setHome] = useState(null); // Use null as the initial state for better conditional rendering
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const { data } = await axios.get(
          "https://living-brands-admin.vercel.app/api/home"
        );
        console.log("Fetched home data:", data); // Log data to confirm structure
        setHome(data[0] || {}); // Assume data is an array and get the first object
      } catch (error) {
        console.error(
          "Failed to load home data. Please try again later.",
          error
        );
      } finally {
        setLoading(false); // Set loading to false after data fetch attempt
      }
    };
    fetchHomeData();
  }, []);

  if (loading) {
    return <div className="h-svh w-svw flex justify-center">Loading...</div>; // Show a loading state while data is being fetched
  }

  if (!home) {
    return <div>No data available.</div>; // Show a message if no data is fetched
  }

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
  } = home;

  return (
    <main>
      {heroSection?.isActive && <Hero data={heroSection} />}
      {videoSection?.isActive && <Video data={videoSection} />}
      {elevateSection?.isActive && <Elevate data={elevateSection} />}
      {defineUsSection?.isActive && <Define data={defineUsSection} />}
      {slideshowSection?.slides?.length > 0 && (
        <Slideshow data={slideshowSection} />
      )}
      {solutionSection?.solutions?.length > 0 && (
        <Solutions data={solutionSection} />
      )}
      {journeySection?.title && <Journey data={journeySection} />}
      {brandSection?.reviews?.length > 0 && <Brands data={brandSection} />}
    </main>
  );
}

import FeaturedCourses from "@/components/FeaturedCourses";
// import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSecton";
import { Instructors } from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebnars from "@/components/UpcomingWebnars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
     <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebnars />
      <Instructors />
      {/* <Footer />  */}
    </main>
  );
}

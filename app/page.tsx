import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Company from "@/components/Company";
import Features from "@/components/features";
import CTA from "@/components/CTA";
import Give from "@/components/Give";
import Banner from "@/components/Banner";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Company />
      <Features/>
      <CTA/>
      <Give/>
      <Banner/>
      <FAQs/>
      <hr className="text-[#71717A]/30" />
      <Footer/>
    </div>
  );
}

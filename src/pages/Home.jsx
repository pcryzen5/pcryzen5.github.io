import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scale, Briefcase, Award, GraduationCap } from "lucide-react";
import HeroBanner from "../components/sections/heroBanner";
import AboutUs from "../components/sections/aboutUs";
import CasesFought from "../components/sections/casesFought";
import ContactUs from "../components/sections/contactUs";
import { casesData } from "../data/casesData";
import lawyerImg from "../assets/images/lawyer.png";

export default function Home() {
  const aboutUsRef = useRef(null);
  const combinedRef = useRef(null);

  // Track scroll progress of Hero + About Us wrapper container
  const { scrollYProgress } = useScroll({
    target: combinedRef,
    offset: ["start start", "end end"]
  });

  // Diagonal translation map from right of Hero to left of About Us section
  const imageX = useTransform(scrollYProgress, [0, 0.38], ["0vw", "-47.5vw"]);
  const imageY = useTransform(scrollYProgress, [0, 0.38], ["0vh", "102vh"]);

  const accolades = [
    { value: "15+", label: "Years Active Litigation", icon: Scale },
    { value: "450+", label: "Successful Case Wins", icon: Briefcase },
    { value: "98%", label: "Client Retainer Success", icon: Award },
    { value: "12", label: "Landmark HC/SC Judgments", icon: GraduationCap }
  ];

  const hoverRevealItems = {
    itemCount: casesData.length,
    item1: {
      text: `01. ${casesData[0].title.toUpperCase()}`,
      image: { src: casesData[0].image },
      link: `/case/${casesData[0].id}`
    },
    item2: {
      text: `02. ${casesData[1].title.toUpperCase()}`,
      image: { src: casesData[1].image },
      link: `/case/${casesData[1].id}`
    },
    item3: {
      text: `03. ${casesData[2].title.toUpperCase()}`,
      image: { src: casesData[2].image },
      link: `/case/${casesData[2].id}`
    },
    item4: {
      text: `04. ${casesData[3].title.toUpperCase()}`,
      image: { src: casesData[3].image },
      link: `/case/${casesData[3].id}`
    }
  };

  return (
    <div className="w-full">
      {/* Wrapper around Hero + About Us to anchor the absolute sliding image */}
      <div ref={combinedRef} className="relative w-full">
        {/* Floating Diagonal-Shift lawyer cutout (Desktop only) */}
        <motion.div
          style={{ 
            x: imageX, 
            y: imageY,
            top: "23vh",
            right: "12.5vw",
            width: "28vw",
            maxWidth: "520px"
          }}
          className="hidden lg:block absolute z-30 pointer-events-none aspect-[3/4]"
        >
          <img 
            src={lawyerImg} 
            alt="John Doe cutout image" 
            className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(189,136,64,0.35)] select-none pointer-events-none"
          />
        </motion.div>

        {/* 1. HERO SECTION */}
        <HeroBanner hideImageOnDesktop={true} />

        {/* 2. ABOUT US SECTION */}
        <AboutUs refProp={aboutUsRef} accolades={accolades} />
      </div>

      {/* 3. CASES FOUGHT SECTION */}
      <CasesFought hoverRevealItems={hoverRevealItems} casesData={casesData} />

      {/* 4. CONTACT SECTION */}
      <ContactUs />
    </div>
  );
}

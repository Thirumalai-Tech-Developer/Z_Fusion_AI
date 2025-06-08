import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const ContactUS = () => {
  // Set document title
  useEffect(() => {
    document.title = "ZFusionAI | Innovative AI Solutions & Tech Services";
  }, []);

  return (
    <div>
      <a href="Home"></a>
      <a href="Services"></a>
      <a href="About"></a>
      <a href="Career"></a>
      <Contact />
    </div>
  );
};

export default ContactUS;

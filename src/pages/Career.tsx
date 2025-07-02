import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { useEffect } from "react";
import {Helmet} from "react-helmet";

const Career = () => {
  // Set document title
  useEffect(() => {
    document.title = "ZFusionAI | Innovative AI Solutions & Tech Services";
  }, []);

  return (
    <div>
      <a href="Home"></a>
      <a href="Services"></a>
      <a href="Contact"></a>
      <a href="About"></a>
      <Portfolio />
      <Contact />
      <Helmet>
          <title>Careers at ZFusionAI | AI Internships & Jobs</title>
          <meta name="description" content="Join ZFusionAI's mission. Explore internships, AI roles, and remote opportunities to build the future of AI." />
      </Helmet>
    </div>
  );
};

export default Career;

import Portfolio from "@/components/Portfolio";
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

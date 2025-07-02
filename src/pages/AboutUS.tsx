import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { useEffect } from "react";
import {Helmet} from "react-helmet";

const AboutUS = () => {
  // Set document title
  useEffect(() => {
    document.title = "ZFusionAI | Innovative AI Solutions & Tech Services";
  }, []);

  return (
    <div>
      <a href="Home"></a>
      <a href="Services"></a>
      <a href="Contact"></a>
      <a href="Career"></a>
      <About />

      <Helmet>
          <title>About ZFusionAI | Innovating with Artificial Intelligence</title>
          <meta name="description" content="Learn about ZFusionAI's journey, mission, and our passion for building real-world AI solutions." />
      </Helmet>
    </div>
  );
};

export default AboutUS;

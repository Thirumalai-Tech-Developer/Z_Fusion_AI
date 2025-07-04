import About from "@/components/About";
import { useEffect } from "react";
import {Helmet} from "react-helmet";

const AboutUS = () => {
  // Set document title
  useEffect(() => {
    document.title = "ZFusionAI | Innovative AI Solutions & Tech Services";
  }, []);

  return (
    <div>
      <About />

      <Helmet>
          <title>About ZFusionAI | Innovating with Artificial Intelligence</title>
          <meta name="description" content="Learn about ZFusionAI's journey, mission, and our passion for building real-world AI solutions." />
      </Helmet>
    </div>
  );
};

export default AboutUS;

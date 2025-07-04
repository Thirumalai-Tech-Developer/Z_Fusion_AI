import Hero from "@/components/Hero";
import { useEffect } from "react";
import {Helmet} from "react-helmet";

const Home = () => {
  // Set document title
  useEffect(() => {
    document.title = "ZFusionAI | Innovative AI Solutions & Tech Services";
  }, []);

  return (
    <div>
      <Hero />
      <Helmet>
          <title>ZFusionAI | AI Services, Consulting & Tools</title>
          <meta name="description" content="ZFusionAI delivers cutting-edge AI applications, consulting, and tools for innovative business growth." />
      </Helmet>
    </div>
  );
};

export default Home;

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { useEffect } from "react";
import {Helmet} from "react-helmet";

const Home = () => {
  // Set document title
  useEffect(() => {
    document.title = "ZFusionAI | Innovative AI Solutions & Tech Services";
  }, []);

  return (
    <div>
      <a href="About"></a>
      <a href="Services"></a>
      <a href="Contact"></a>
      <a href="Career"></a>
      <Hero />
      <Helmet>
          <title>ZFusionAI | AI Services, Consulting & Tools</title>
          <meta name="description" content="ZFusionAI delivers cutting-edge AI applications, consulting, and tools for innovative business growth." />
      </Helmet>
    </div>
  );
};

export default Home;

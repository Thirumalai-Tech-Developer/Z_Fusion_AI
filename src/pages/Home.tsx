import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { useEffect } from "react";

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
    </div>
  );
};

export default Home;

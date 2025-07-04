import Services from "@/components/Services";
import { useEffect } from "react";
import {Helmet} from "react-helmet";

const Service = () => {
  useEffect(() => {
    document.title = "ZFusionAI | Innovative AI Solutions & Tech Services";
  }, []);

  return (
    <div>
      <Services />
      <Helmet>
          <title>AI Development & Consulting | ZFusionAI Services</title>
          <meta name="description" content="Explore our AI services including automation tools, machine learning, GPT integration, and business intelligence." />
      </Helmet>
    </div>
  );
};

export default Service;

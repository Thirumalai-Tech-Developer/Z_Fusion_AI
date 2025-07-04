import Contact from "@/components/Contact";
import { useEffect } from "react";
import {Helmet} from "react-helmet";

const ContactUS = () => {
  // Set document title
  useEffect(() => {
    document.title = "ZFusionAI | Innovative AI Solutions & Tech Services";
  }, []);

  return (
    <div>
      <Contact />
      <Helmet>
          <title>Contact Us | ZFusionAI AI Experts & Consulting</title>
          <meta name="description" content="Reach out to ZFusionAI for AI services, partnerships, or support. Our AI team is ready to help you innovate." />
      </Helmet>
    </div>
  );
};

export default ContactUS;

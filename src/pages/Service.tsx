import Services from "@/components/Services";
import { useEffect } from "react";

const Service = () => {
  // Set document title
  useEffect(() => {
    document.title = "ZFusionAI | Innovative AI Solutions & Tech Services";
  }, []);

  return (
    <div>
      <Services />
    </div>
  );
};

export default Service;

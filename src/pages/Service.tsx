import Services from "@/components/Services";
import { useEffect } from "react";

const Service = () => {
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
      <Services />
    </div>
  );
};

export default Service;

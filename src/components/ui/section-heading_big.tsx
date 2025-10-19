import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <motion.h1
        variants={fadeIn("up", "tween", 0.1, 1)}
        className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4"
      >
        {title}
      </motion.h1>
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="text-lg text-gray-600"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default SectionHeading;

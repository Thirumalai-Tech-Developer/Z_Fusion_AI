import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import SectionHeading from "@/components/ui/section-heading";
import { useEffect } from "react";

const Privacy = () => {

    // PrivacyPolicy.jsx
    useEffect(() => {
    document.title = "Privacy Policy | ZFusionAI";
    }, []);

  return (
    <section 
      id="privacyandpolicy" 
      className="relative pt-32 pb-20 md:pt-36 md:pb-24 bg-orange-50"
    >
        <SectionHeading
            title="Privacy Policy"
            subtitle=""
            
          />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why We Are */}
        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="text-left mt-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Overview
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            <span className="font-extrabold text-black">Z</span><span className="text-orange-600 font-extrabold">Fusion</span><span className="text-red-600 font-extrabold">AI</span> respects your privacy.
            <br />
            This Privacy Policy explains how we handle your information when you visit our website or use our services.
          </p>

        </motion.div>

        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="text-left mt-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Information We Collect
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            We may collect:
            <br />
            <ol className="list-disc list-inside space-y-2 my-4">
                <li>Personal details: name, email, phone (via forms).</li>
                <li>Communication details for inquiries or training registration.</li>
            </ol>
          </p>

        </motion.div>

        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="text-left mt-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            How We Use Your Data
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            We use your data to:
            <br />
            <ol className="list-disc list-inside space-y-2 my-4">
                <li>Respond to inquiries and service requests.</li>
                <li>Improve our website and user experience.</li>
                <li>Provide updates related to our services (if you consent).</li>
                <li>Ensure website security and functionality.</li>
            </ol>
            We do not <b>sell, rent, or trade</b> your information to third parties.
          </p>

        </motion.div>

        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="text-left mt-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Cookies
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            We may use cookies and analytics tools to understand website usage.
            <br />
            You can disable cookies through your browser settings.
          </p>

        </motion.div>

        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="text-left mt-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Third-Party Links
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            Our website may contain links to other sites.
            <br />
            We are not responsible for their privacy policies or content.
          </p>

        </motion.div>

        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="text-left mt-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Your Rights
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            You can:
            <br />
            <ol className="list-disc list-inside space-y-2 my-4">
                <li>Request to view, edit, or delete your personal data.</li>
                <li>Withdraw consent for communication.</li>
            </ol>
            All services are provided “as is,” without warranties.
          </p>

        </motion.div>

        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="text-left mt-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Changes
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            We may update this policy from time to time.
            <br />
            The latest version will always be available on this page.
          </p>

        </motion.div>

        {/*
        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="text-left mt-12"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Meet the Team
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            Led by experienced founders <strong>Thirumalai Gunasekaran</strong> and <strong>Karthick C</strong>, our team consists of passionate engineers, data scientists, and innovators dedicated to solving real-world problems.
          </p>
        </motion.div> */}
      </div>
    </section>
  )
}

export default Privacy

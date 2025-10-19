import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import hero from "@/assets/images/Hero.jpeg";
import { Link } from "wouter";

const TeamsandConditions = () => {
  return (
    <section 
      id="Teams" 
      className="relative pt-32 pb-20 md:pt-36 md:pb-24 bg-orange-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Why We Are */}
        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="text-left mt-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Introduction
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            Welcome to <span className="font-extrabold text-black">Z</span><span className="text-orange-600 font-extrabold">Fusion</span><span className="text-red-600 font-extrabold">AI</span> (“we,” “our,” or “us”).
            <br />
            By using our website <b>zfusionai.info</b> or any of our services, you agree to follow these <b>Terms and Conditions</b>.
            <br />
            If you disagree with any part, please do not access or use our website.
          </p>

        </motion.div>

        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="text-left mt-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Use of the Website
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            You agree:
            <br />
            <ol className="list-disc list-inside space-y-2 my-4">
                <li>To use this site only for lawful purposes.</li>
                <li>Not to attempt hacking, reverse engineering, or unauthorized access.</li>
                <li>Not to copy, modify, or distribute any content without permission.</li>
            </ol>
            We reserve the right to restrict access or terminate user accounts for violations.
          </p>

        </motion.div>

        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="text-left mt-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Intellectual Property
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            All content, graphics, software, and code on this website belong to <span className="font-extrabold text-black">Z</span><span className="text-orange-600 font-extrabold">Fusion</span><span className="text-red-600 font-extrabold">AI</span>.
            <br />
            You may not reuse or reproduce any material without written consent.
          </p>

        </motion.div>

        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="text-left mt-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Services
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            ZFusionAI offers:
            <br />
            <ol className="list-disc list-inside space-y-2 my-4">
                <li>Software-based services and AI/ML solutions.</li>
                <li>Training and placement assistance.</li>
            </ol>
            We may modify or discontinue any service without prior notice.
          </p>

        </motion.div>

        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="text-left mt-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Limitation of Liability
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            ZFusionAI shall not be liable for any indirect, incidental, or consequential damages resulting from:
            <br />
            <ol className="list-disc list-inside space-y-2 my-4">
                <li>The use or inability to use our services.</li>
                <li>Data loss, service interruptions, or system issues.</li>
                <li>Any third-party service linked through our website.</li>
            </ol>
            All services are provided “as is,” without warranties.
          </p>

        </motion.div>

        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="text-left mt-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Governing Law
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            These Terms are governed by the laws of India, with jurisdiction in <b>Tamil Nadu, India</b>.
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

export default TeamsandConditions

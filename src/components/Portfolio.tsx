import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import SectionHeading from "@/components/ui/section-heading";
import { Briefcase, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"


const autoplayPlugin = Autoplay({ delay: 2000, stopOnInteraction: false })


const Portfolio = () => {
  const jobOpenings = [
    {
      title: "🎨 Frontend Developer",
      location: "🌍 Remote",
      description: "Build stunning UIs using ⚛️ React.js and 🎯 Tailwind CSS. We're looking for pixel-perfect design lovers!",
    },
    {
      title: "🛠️ Backend Developer",
      location: "🌍 Remote",
      description: "Develop scalable APIs using 🚀 Node.js and Express. Database knowledge is a big plus! 🗃️",
    },
    {
      title: "🧠 AI/ML Engineer",
      location: "🌍 Remote",
      description: "Join our AI core team! Experience in 🤖 Deep Learning, 🧾 NLP, and 🛠️ model deployment preferred.",
    },
  ];

  const services = [
    "🤖 AI Solutions",
    "📈 Machine Learning Models",
    "🌐 Web App Development",
    "📊 Data Analytics",
    "🛠️ Custom SaaS Platforms",
    "🚀 Digital Transformation",
  ];

  const InterOpening = [
    {
      title: "🎨 Frontend Developer (Intern)",
      location: "🌐 Online",
      description: "Work on real UI projects using React & Tailwind. Learn design systems & responsive dev! 📱💻",
    },
    {
      title: "🛠️ Backend Developer (Intern)",
      location: "🌐 Online",
      description: "Hands-on Node.js API building, databases & cloud basics. Perfect for aspiring backend devs! ☁️🔧",
    },
    {
      title: "🧠 AI/ML Intern",
      location: "🌐 Online",
      description: "Dive into machine learning 🔍, build mini-projects with Python, scikit-learn & more. 🤓📊",
    },
  ];

  return (
    <section id="careers" className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h1 className="text-4xl font-bold text-center">Careers at <span className="font-extrabold text-balck">Z</span><span className="font-extrabold text-orange-500">Fusion</span><span className="font-extrabold text-red-500">AI</span></h1>
          <br />
          <h2 className="text-3xl text-gray-700 font-bold text-center">Find your suitable Job/Training</h2>
          <br />
          <h2 className="text-xl text-black font-bold text-center">For Internship register below</h2>
          <SectionHeading
            title=""
            subtitle="Join our mission to build smarter solutions"
          />

          {/* Closed Positions Notice */}
          <motion.div
            variants={fadeIn("up", "tween", 0.1, 1)}
            className="mt-6 mb-12 text-center text-red-600 font-semibold text-lg"
          >
            All job openings are currently <span className="underline">closed</span>.
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
             Intern Positions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {InterOpening.map((job, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                  className="p-6 rounded-2xl bg-black bg-opacity-15 shadow hover:shadow-lg transition-shadow border border-gray-200 opacity-50 cursor-not-allowed"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="text-orange-500" />
                    <h4 className="font-bold text-lg text-black">{job.title}</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p className="text-gray-900 text-sm">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Job Positions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                  className="p-6 rounded-2xl bg-black bg-opacity-15 shadow hover:shadow-lg transition-shadow border border-gray-200 opacity-50 cursor-not-allowed"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="text-orange-500" />
                    <h4 className="font-bold text-lg text-black">{job.title}</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p className="text-gray-900 text-sm">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="mt-24"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Our Services
            </h3>
            <div className="w-full max-w-4xl mx-auto">
              <Carousel opts={{ loop: true }} plugins={[autoplayPlugin]}>
                <CarouselContent>
                  {services.map((service, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 p-2"
                    >
                      <div className="flex justify-center items-center h-40 rounded-xl bg-gray-100 text-center text-lg font-semibold text-gray-800 shadow">
                        {service}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

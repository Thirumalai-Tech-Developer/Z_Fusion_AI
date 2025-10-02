import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import SectionHeading from "@/components/ui/section-heading";
import TeamMember from "@/components/ui/team-member";
import { CheckCircle2 } from "lucide-react";
import upper from "@/assets/images/About_upper.jpeg"
import lower from "@/assets/images/About_lower.jpeg"

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions."
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every project and maintain the highest standards of quality."
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients to understand their needs and deliver tailored solutions."
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and respect for all stakeholders."
    }
  ];

  const team = [
    {
      name: "Thirumalai Gunasekaran",
      role: "CEO, Founder & AI Expert",
      bio: "Thirumalai Gunasekaran is the CEO, founder, and AI expert at our company, with a strong foundation in full-stack development, artificial intelligence, machine learning, and data science. With years of hands-on experience in building innovative tech solutions, Thirumalai is passionate about harnessing the power of AI to solve real-world problems. He leads the company’s strategic direction, focusing on creating intelligent systems that drive efficiency, innovation, and value for businesses. As an advocate for continuous learning, Thirumalai actively engages in research to stay ahead of industry trends, and he is deeply committed to advancing AI technologies to unlock their full potential. Beyond his technical expertise, Thirumalai is dedicated to fostering a culture of collaboration, growth, and excellence within his team, ensuring that they push the boundaries of what's possible in the tech space."
    },
    {
      name: "Karthick C",
      role: "Co-Founder & Data Scientist",
      bio: "Karthick C is the co-founder and a seasoned data scientist at our company, bringing deep expertise in data science, machine learning, and statistical analysis. With a passion for extracting meaningful insights from complex datasets, Karthick plays a key role in designing data-driven solutions that empower businesses to make informed decisions. His strong analytical background and innovative approach to problem-solving have been instrumental in developing scalable AI models and predictive systems. As a co-founder, Karthick contributes significantly to the company’s vision, ensuring that data remains at the core of every strategic initiative. Known for his collaborative mindset and technical acumen, he is committed to driving continuous innovation while nurturing a strong data-centric culture within the organization."
    }

  ];

  return (
    <section id="About" className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
            <h1 className="text-4xl font-bold text-center">About <span className="font-extrabold text-balck">Z</span><span className="font-extrabold text-orange-500">Fusion</span><span className="font-extrabold text-red-500">AI</span></h1>
          <SectionHeading
            title=""
            subtitle="Learn about our company, mission, and team"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-6">
                Founded in 2025, <span className="font-extrabold text-balck">Z</span><span className="font-extrabold text-orange-500">Fusion</span><span className="font-extrabold text-red-500">AI</span> began as a small web development agency with a passion for creating elegant digital solutions. As technology evolved, so did we—expanding our expertise to artificial intelligence, machine learning, and comprehensive digital transformation services.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we're a team of 20+ tech enthusiasts committed to helping businesses leverage cutting-edge technology to achieve their goals. We've successfully delivered over 50 projects for clients across various industries, from startups to enterprise organizations.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative technological solutions that drive growth, enhance efficiency, and create exceptional user experiences. We strive to be at the forefront of technological advancement, making AI and digital solutions accessible to organizations of all sizes.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="relative"
            >
              <div className="w-full h-[450px] relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={upper} 
                  alt="GT_TECH Team Collaboration" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-orange-500/10"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 rounded-lg overflow-hidden shadow-xl hidden md:block">
                <img 
                  src={lower} 
                  alt="GT_TECH Office" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="mt-24"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                  className="bg-black/15 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="mt-24"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Meet Our Leader</h3>
            <div className="flex flex-col items-center justify-center">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                  >
                    <TeamMember
                      name={member.name}
                      role={member.role}
                      image=""
                      bio={member.bio} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div> */}
          <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mt-24">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Our Students’ Success
            </h3>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              At <span className="font-extrabold text-balck">Z</span><span className="font-extrabold text-orange-500">Fusion</span><span className="font-extrabold text-red-500">AI</span>, we don’t just build technology — we build careers. 
              Our training and mentorship programs have helped students land roles 
              at top global companies with their skills and dedication.
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div variants={fadeIn("up", "spring", 0.1, 0.75)} className="bg-black/10 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Karthick</h4>
                <p className="text-orange-600 font-semibold">Placed at Wipro</p>
              </motion.div>
              <motion.div variants={fadeIn("up", "spring", 0.2, 0.75)} className="bg-black/10 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Vasanth Kumar</h4>
                <p className="text-orange-600 font-semibold">Placed at TCS</p>
              </motion.div>
              <motion.div variants={fadeIn("up", "spring", 0.3, 0.75)} className="bg-black/10 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Agilan S</h4>
                <p className="text-orange-600 font-semibold">Placed at Accenture</p>
              </motion.div>
              <motion.div variants={fadeIn("up", "spring", 0.4, 0.75)} className="bg-black/10 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Arun Prakash</h4>
                <p className="text-orange-600 font-semibold">Placed at Infosys</p>
              </motion.div>
              <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)} className="bg-black/10 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Kaviya Shree</h4>
                <p className="text-orange-600 font-semibold">Placed at Cognizant</p>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;

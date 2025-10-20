import { Link } from "wouter";
import { Code, Mail, MapPin, Linkedin, Phone } from "lucide-react";
import logo from "@/assets/icons/logo.png";
import name from "@/assets/icons/name.png";

// Define the Udyam Registration Number as a constant for easy updates
const UDYAM_REG_NUMBER = "UDYAM-TN-33-0034671"; // ADDED

const Footer = () => {
  // This correctly gets the current year (2025)
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 rounded-t-3xl text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-6">
            <div className="bg-white rounded-full flex justify-center items-center mb-4">
              <Link href="/">
                <p className="flex items-center space-x-2 font-bold text-xl text-white">
                <img src={logo} alt="Logo" className="h-8"/>
                <img src={name} alt="name" className="w-44"/>
                </p>
              </Link>
            </div>
            <p className="text-gray-400 mb-4">
              Delivering innovative AI solutions and cutting-edge technical services to power your business success.
            </p>
            {/* Social media icons are commented out in the original code, keeping them commented out */}
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="Services" className="text-gray-400 hover:text-orange-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link href="Career" className="text-gray-400 hover:text-orange-500 transition-colors">Career</Link>
              </li>
              <li>
                <Link href="About" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="Contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="Services" className="text-gray-400 hover:text-orange-500 transition-colors">AI Solutions</Link>
              </li>
              <li>
                <Link href="Services" className="text-gray-400 hover:text-orange-500 transition-colors">Web Development</Link>
              </li>
              <li>
                <Link href="Services" className="text-gray-400 hover:text-orange-500 transition-colors">Mobile Apps</Link>
              </li>
              <li>
                <Link href="Services" className="text-gray-400 hover:text-orange-500 transition-colors">Cloud Services</Link>
              </li>
              <li>
                <Link href="Services" className="text-gray-400 hover:text-orange-500 transition-colors">IT Consulting</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Kallakurichi, Tamilnadu 606401</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-orange-500 mr-3 flex-shrink-0" />
                <a
                  href="mailto:support@zfusionai.info?subject=Inquiry%20from%20ZFusionAI%20Website&body=Hello%20Team%20ZFusionAI%2C"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  support@zfusionai.info
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 7094389742</span>
              </div>
              <div className="flex items-center">
                <Linkedin size={20} className="text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">                        <a 
                          href="https://www.linkedin.com/company/107564860/" 
                          rel="noopener noreferrer" 
                          className="hover:text-orange-500"
                        >
                          ZFusionAI
                </a></span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER SECTION (MODIFIED) */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            Copyright &copy; {currentYear} ZFusionAI. All rights reserved. 
            <span className="mx-2 text-gray-600">|</span> {/* Added separator */}
            <span className="font-semibold text-white">UDYAM Reg. No:</span> {UDYAM_REG_NUMBER} {/* ADDED REGISTRATION NUMBER */}
            <span className="mx-2 text-gray-600">|</span> {/* Added separator */}
            <a href="/termsandconditions" className="text-blue-400 hover:text-orange-500 transition">
              Terms
            </a>{" "}
            |{" "}
            <a href="/privacyandpolicy" className="text-blue-400 hover:text-orange-500 transition">
              Privacy
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
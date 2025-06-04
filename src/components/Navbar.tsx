import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";
import logo from "@/assets/icons/logo.png";
import name from "@/assets/icons/name.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useScrollToHash();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: "Home", label: "Home" },
    { href: "Service", label: "Services" },
    { href: "Career", label: "Career" },
    { href: "About", label: "About Us" },
    { href: "Contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/15 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <a className="flex items-center space-x-2 font-bold text-xl text-orange-500">
              <img src={logo} alt="Logo" className="h-8"/>
              <img src={name} alt="name" className="w-44"/>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-black hover:text-orange-500 md:px-2 lg:px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 hover:text-orange-500 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-orange-500 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button className="w-full" asChild>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;

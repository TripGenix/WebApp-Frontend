import { Mail, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
// If you use React Router, uncomment next line and replace <a> with <Link>
// import { Link } from "react-router-dom";

export default function FooterNew() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  // ✅ links with separate URLs
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Booking", href: "/Booking" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/Contact" },
  ];

  const services = [
    { label: "Route Planner", href: "/route-planner" },
    { label: "Vehicle Selection", href: "/vehicles" },
    { label: "Tour Guide", href: "/guides" },
    { label: "Destinations", href: "/destinations" },
  ];

  return (
    <footer className="bg-[#000000] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-8 h-8 text-[#1da9cc]" />
              <h3 className="text-2xl font-bold text-white">TripGenix</h3>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Smart travel route optimization for your perfect journey.
              Discover, plan, and explore the world with intelligent insights.
            </p>

            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition-all duration-300 hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition-all duration-300 hover:scale-110">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition-all duration-300 hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {/* use <Link to={link.href}> if using router */}
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Stay Connected</h4>

            <div className="space-y-3 mb-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#1da9cc] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@tripgenix.com"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  hello@tripgenix.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#1da9cc] mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="mt-4">
              <label htmlFor="newsletter" className="text-sm text-gray-400 block mb-2">
                Subscribe to our newsletter
              </label>

              <div className="flex rounded-lg overflow-hidden bg-gray-800">
                <input
                  type="email"
                  id="newsletter"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 px-4 py-2.5 transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} TripGenix. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <a href="/privacy" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-500 hover:text-teal-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

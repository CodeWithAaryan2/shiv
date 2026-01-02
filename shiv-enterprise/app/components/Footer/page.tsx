'use client';

import React from 'react';
import Image from 'next/image';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaTruck,
  FaTools
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative ">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ================= BRAND INFO ================= */}
          <div>
            <Image
              src="/navabrlogo.png"
              alt="Shiv Enterprises Logo"
              width={150}
              height={70}
            />

            <p className="mt-6 text-gray-900 leading-relaxed">
              Shiv Enterprises is a trusted name in <strong>24×7 roadside assistance</strong> and
              <strong> vehicle & machinery trading</strong>. We deliver fast, reliable, and expert
              solutions for transport and logistics needs.
            </p>

            <div className="flex space-x-4 mt-6">
              {[FaFacebook, FaInstagram, FaLinkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white border-gray-600 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Quick Links
              <span className="block w-12 h-1 bg-orange-500 mt-2"></span>
            </h3>

            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map(link => (
                <li key={link}>
                  <a
                    href="#"
                    className="flex items-center text-gray-900  transition"
                  >
                    <FaArrowRight className="mr-3 text-orange-500" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Our Expertise
              <span className="block w-12 h-1 bg-orange-500 mt-2"></span>
            </h3>

            <ul className="space-y-4 text-gray-800">
              <li className="flex items-center">
                <FaTruck className="text-orange-500 mr-3" />
                24×7 Roadside Assistance
              </li>
              <li className="flex items-center">
                <FaTools className="text-orange-500 mr-3" />
                Vehicle Breakdown Support
              </li>
              <li className="flex items-center">
                <FaTruck className="text-orange-500 mr-3" />
                Heavy Vehicle Recovery
              </li>
              <li className="flex items-center">
                <FaTools className="text-orange-500 mr-3" />
                Vehicle & Machinery Trading
              </li>
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Contact Us
              <span className="block w-12 h-1 bg-orange-500 mt-2"></span>
            </h3>

            <ul className="space-y-4 text-gray-800">
              <li className="flex items-center">
                <FaPhoneAlt className="text-orange-500 mr-3" />
                <a href="tel:+919999999999" className="hover:text-black">
                  +91 85630 19297
                </a>
              </li>

              <li className="flex items-center">
                <FaEnvelope className="text-orange-500 mr-3" />
                <a href="mailto:contact@shiventerprisees.com" className="hover:text-black">
                  contact@shiventerprisees.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-sm text-gray-800">
                Emergency Roadside Help Available <br />
                <span className="text-orange-500 font-semibold">24×7 | All Locations</span>
              </p>
            </div>
          </div>
        </div>

        {/* ================= FOOTER BOTTOM ================= */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {currentYear} Shiv Enterprises. All Rights Reserved.</p>

          <p className="mt-3 md:mt-0">
            Reliable Roads. Trusted Trading.
          </p>
        </div>
      </div>

      {/* ================= BACK TO TOP ================= */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-8 right-8 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition z-50"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;

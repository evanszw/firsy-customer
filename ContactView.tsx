/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Page } from '../types';
import { MapPin, Phone, Mail, Facebook, Instagram, Calendar, Clock, ArrowUp, Star } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-[#1C1917] text-stone-300 border-t border-stone-800">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-[#B45309] rounded text-white flex items-center justify-center font-extrabold text-lg">
                <span>W</span>
              </div>
              <div>
                <span className="block text-lg font-extrabold tracking-tight text-white uppercase font-sans">
                  WITECH
                </span>
                <span className="block text-[10px] font-bold text-[#B45309] tracking-widest uppercase font-mono leading-none">
                  MEP Services
                </span>
              </div>
            </div>
            <p className="text-sm font-sans text-stone-450 leading-relaxed max-w-sm">
              Your Appliances Deserve a Second Life. We specialize in robust, fast local appliance repairs, electrical and plumbing services.
            </p>
            <div className="flex space-x-2 pt-2">
              <a
                id="footer-social-facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-stone-800 hover:bg-[#B45309] hover:text-white transition-all rounded"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                id="footer-social-whatsapp"
                href="https://wa.me/263775749729"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-stone-800 hover:bg-green-600 hover:text-white transition-all rounded"
                aria-label="Chat on WhatsApp"
              >
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 2c-5.514 0-10 4.486-10 10 0 1.761.462 3.411 1.272 4.848l-1.303 4.752 4.872-1.28c1.385.748 2.955 1.18 4.634 1.18 5.514 0 10-4.486 10-10 0-5.514-4.486-10-10-10zm-.031 1.636c4.61 0 8.364 3.754 8.364 8.364 0 4.61-3.754 8.364-8.364 8.364-1.547 0-2.99-.425-4.238-1.164l-.304-.18-2.844.747.761-2.776-.198-.314a8.293 8.293 0 0 1-1.181-4.677c0-4.61 3.754-8.364 8.364-8.364zm-3.09 3.031c-.161 0-.323.016-.48.067-.323.107-.484.288-.636.568-.315.58-.707 1.722-.707 2.455 0 .848.484 1.75 1.01 2.373a11.139 11.139 0 0 0 4.385 3.518c.556.241 1.01.377 1.345.484.544.172 1.045.148 1.438.087.439-.061 1.917-.783 2.187-1.541.27-.757.27-1.403.189-1.54-.08-.135-.297-.217-.621-.38-.324-.162-1.917-.946-2.213-1.053-.298-.108-.514-.162-.73.162-.216.324-.838 1.053-1.027 1.27-.189.216-.378.243-.702.08-1.517-.751-2.613-1.306-3.662-3.11-.277-.475.277-.442.793-1.47.086-.172.043-.324-.021-.485-.064-.162-.513-1.233-.702-1.687-.185-.446-.372-.385-.513-.392a5.556 5.556 0 0 0-.414-.006z" />
                </svg>
              </a>
              <a
                id="footer-social-instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-stone-800 hover:bg-[#B45309] hover:text-white transition-all rounded"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                id="footer-social-tiktok"
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-stone-800 hover:bg-[#B45309] hover:text-white transition-all rounded"
                aria-label="Follow us on TikTok"
              >
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.05 1.51 4.21 1.13.95 2.51 1.53 3.98 1.65v3.91c-1.28-.02-2.54-.37-3.61-1.12-.73-.51-1.33-1.17-1.78-1.95v7.23c.03 2.14-.68 4.29-2.07 5.92-1.42 1.63-3.56 2.64-5.74 2.72-2.22.08-4.48-.63-6.13-2.09-1.61-1.44-2.55-3.56-2.51-5.73.04-2.21 1.03-4.32 2.68-5.77 1.61-1.39 3.81-2.05 5.94-1.85V10.1c-1.3-.08-2.62.33-3.51 1.29s-1.32 2.37-1.15 3.66c.15 1.25.96 2.35 2.05 2.91 1.09.56 2.42.5 3.45-.16.96-.61 1.52-1.67 1.51-2.81V.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation links */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-xs tracking-widest uppercase font-sans border-l-2 border-[#B45309] pl-3">
              QUICK NAVIGATION
            </h3>
            <ul className="space-y-2.5 text-xs font-sans font-bold">
              <li>
                <button
                  id="foot-link-home"
                  onClick={() => handleNavClick(Page.Home)}
                  className="hover:text-[#B45309] transition-colors cursor-pointer text-left uppercase text-stone-400"
                >
                  Home Dashboard
                </button>
              </li>
              <li>
                <button
                  id="foot-link-services"
                  onClick={() => handleNavClick(Page.Services)}
                  className="hover:text-[#B45309] transition-colors cursor-pointer text-left uppercase text-stone-400"
                >
                  Expert Services
                </button>
              </li>
              <li>
                <button
                  id="foot-link-about"
                  onClick={() => handleNavClick(Page.About)}
                  className="hover:text-[#B45309] transition-colors cursor-pointer text-left uppercase text-stone-400"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button
                  id="foot-link-contact"
                  onClick={() => handleNavClick(Page.Contact)}
                  className="hover:text-[#B45309] transition-colors cursor-pointer text-left uppercase text-stone-400"
                >
                  Contact & Bookings
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Local service details */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-xs tracking-widest uppercase font-sans border-l-2 border-[#B45309] pl-3">
              OUR SERVICE AREA
            </h3>
            <p className="text-sm text-stone-400 font-sans leading-relaxed">
              We proudly serve all residential and commercial clients across Harare, Chitungwiza, Ruwa, and surrounding Zimbabwean areas.
            </p>
            <div className="flex items-center space-x-2 text-xs font-semibold text-stone-300">
              <Clock className="h-4 w-4 text-[#B45309]" />
              <span>Available 24/7 for Plumbing Emergencies</span>
            </div>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-xs tracking-widest uppercase font-sans border-l-2 border-[#B45309] pl-3">
              GET IN TOUCH
            </h3>
            <ul className="space-y-3.5 text-sm font-sans">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4.5 w-4.5 text-[#B45309] shrink-0 mt-0.5" />
                <span className="text-stone-300 leading-tight">
                  12 Glen Eagles Harare, Harare, Zimbabwe
                </span>
              </li>
              <li>
                <a
                  id="footer-call-btn"
                  href="tel:+263775749729"
                  className="flex items-center space-x-3 hover:text-[#B45309] transition-colors group"
                >
                  <Phone className="h-4.5 w-4.5 text-[#B45309]" />
                  <span className="text-stone-300 font-bold font-sans">+263 775 749 729</span>
                </a>
              </li>
              <li>
                <a
                  id="footer-email-btn"
                  href="mailto:wiseirvinechidza1@gmail.com"
                  className="flex items-center space-x-3 hover:text-[#B45309] transition-colors"
                >
                  <Mail className="h-4.5 w-4.5 text-[#B45309]" />
                  <span className="text-stone-300 break-all">wiseirvinechidza1@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Footer section */}
      <div className="bg-stone-950 py-6 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-[10px] font-sans tracking-wider font-bold">
          <div className="text-center md:text-left mb-4 md:mb-0 text-stone-400">
            &copy; WITECH ELECTRONICS & PLUMBING KINGS. ALL RIGHTS RESERVED 2026. DEVELOPED BY <a href="https://awesome-studio-jet.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#B45309] hover:underline decoration-2 underline-offset-2 transition-all">AWESOME STUDIO</a>.
          </div>
          <div className="flex items-center space-x-6 text-stone-400">
            <span>HARARE, ZIMBABWE</span>
            <button
              id="scroll-to-top"
              onClick={handleScrollToTop}
              className="flex items-center space-x-1.5 p-2 bg-stone-800 hover:bg-[#B45309] hover:text-white rounded transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

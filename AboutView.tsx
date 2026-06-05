/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Phone, Wrench } from 'lucide-react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  onOpenSearch: () => void;
}

export default function Header({
  currentPage,
  setCurrentPage,
  onOpenSearch,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', value: Page.Home },
    { label: 'SERVICES', value: Page.Services },
    { label: 'ABOUT', value: Page.About },
    { label: 'CONTACT', value: Page.Contact },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-200'
          : 'bg-stone-50/80 backdrop-blur-sm border-b border-stone-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div
            id="header-logo"
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick(Page.Home)}
          >
            <div className="w-9 h-9 bg-[#B45309] rounded text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 shrink-0">
              <Wrench className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <div>
              <span className="block text-lg font-extrabold tracking-tight text-[#1C1917] uppercase sm:text-xl font-sans">
                WITECH MEP
              </span>
              <span className="block text-[10px] font-bold text-[#44403C] tracking-widest uppercase font-sans leading-none opacity-80">
                Electronics & Plumbing Kings
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav id="desktop-navbar" className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.value;
              return (
                <button
                  id={`nav-link-${item.value}`}
                  key={item.value}
                  className={`relative px-1 py-2 text-xs font-bold tracking-wider font-sans transition-colors duration-200 uppercase ${
                    isActive ? 'text-[#B45309]' : 'text-[#44403C] hover:text-[#B45309]'
                  }`}
                  onClick={() => handleNavClick(item.value)}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B45309]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions & Buttons */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Search Button */}
            <button
              id="search-trigger-btn"
              onClick={onOpenSearch}
              className="p-2 text-[#44403C] hover:text-[#B45309] transition-colors rounded-full hover:bg-stone-100"
              aria-label="Search services"
            >
              <Search className="h-4.5 w-4.5" />
            </button>

            {/* Get a Quote Button */}
            <button
              id="quote-trigger-btn"
              className="px-5 py-2.5 bg-[#B45309] hover:bg-amber-800 text-white font-bold tracking-wider rounded text-xs transition-all duration-200 transform hover:scale-[1.03] active:scale-95 cursor-pointer shadow-sm uppercase font-sans"
              onClick={() => handleNavClick(Page.Contact)}
            >
              Get a Quote
            </button>
          </div>

          {/* Toggle buttons for Mobile Layout */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Search Trigger (Mobile) */}
            <button
              id="mobile-search-btn"
              onClick={onOpenSearch}
              className="p-2 text-[#44403C] hover:text-[#B45309] transition-colors rounded bg-stone-100"
              aria-label="Search"
            >
              <Search className="h-4.5 w-4.5" />
            </button>

            {/* Hamburger Button */}
            <button
              id="mobile-menu-trigger"
              className="p-2 text-[#44403C] hover:text-[#B45309] transition-colors focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-stone-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  id={`mobile-nav-link-${item.value}`}
                  key={item.value}
                  className={`block w-full text-left px-4 py-3 rounded text-sm font-bold tracking-wider transition-colors duration-200 uppercase ${
                    currentPage === item.value
                      ? 'bg-amber-50 text-white'
                      : 'text-[#44403C] hover:bg-stone-50 hover:text-[#B45309]'
                  }`}
                  onClick={() => handleNavClick(item.value)}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-stone-200 flex flex-col space-y-2">
                <button
                  id="mobile-quote-cta"
                  className="w-full py-3 bg-[#B45309] hover:bg-amber-850 text-white font-bold tracking-wider rounded text-xs transition-colors text-center uppercase"
                  onClick={() => handleNavClick(Page.Contact)}
                >
                  Get a Quote
                </button>
                <a
                  id="mobile-call-cta"
                  href="tel:+263775749729"
                  className="w-full py-3 bg-stone-100 hover:bg-stone-200 text-[#1C1917] font-bold tracking-wider rounded text-xs transition-colors flex items-center justify-center space-x-2 border border-stone-200"
                >
                  <Phone className="h-4 w-4 text-[#B45309]" />
                  <span>Call +263 775 749 729</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Page, QuickBookRequest } from '../types';
import { motion } from 'motion/react';
import FAQComponent from './FAQComponent';
import {
  Wrench,
  ChevronRight,
  ShieldCheck,
  Cpu,
  BadgeDollarSign,
  Truck,
  Sparkles,
  PhoneCall,
  Play,
  Pause,
  Clock,
  UserCheck,
  Send,
  Sliders,
  Tv,
  Refrigerator,
  Zap,
  Droplet
} from 'lucide-react';

interface HomeViewProps {
  setCurrentPage: (page: Page) => void;
  onSubmitInquiry: (inquiry: QuickBookRequest) => void;
}

export default function HomeView({ setCurrentPage, onSubmitInquiry }: HomeViewProps) {
  const [form, setForm] = useState<QuickBookRequest>({
    name: '',
    phone: '',
    applianceType: 'Washing Machine',
    faultDescription: '',
    location: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  // Video Demonstration simulator stats
  const [activeVideoSegment, setActiveVideoSegment] = useState<'microwave' | 'plumbing' | 'fridge'>('microwave');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.location) {
      alert('Please fill out Name, Phone Number, and Service Location.');
      return;
    }
    setIsSubmitting(true);

    setTimeout(() => {
      const code = 'WT-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedCode(code);
      setIsSubmitting(false);
      onSubmitInquiry(form);
    }, 800);
  };

  const handleWhatsAppShare = () => {
    const text = `Hello WITECH MEP Services, I have requested a repair checkup.
*Reference:* ${submittedCode}
*Name:* ${form.name}
*Phone:* ${form.phone}
*Appliance/Issue:* ${form.applianceType}
*Fault:* ${form.faultDescription}
*Location:* ${form.location}`;
    
    window.open(`https://wa.me/263775749729?text=${encodeURIComponent(text)}`, '_blank');
  };

  const applianceOptions = [
    'Television / TV',
    'Fridge / Freezer',
    'Stove / Oven',
    'Microwave',
    'Washing Machine',
    'Dishwasher',
    'Electrical Installation',
    'Plumbing Service'
  ];

  const valueProps = [
    {
      icon: Cpu,
      title: 'Fast Diagnosis',
      desc: 'We identify exactly what is wrong, giving a clear, straightforward breakdown before work begins.'
    },
    {
      icon: Wrench,
      title: 'Genuine Spares',
      desc: 'No quick-fixes with inferior materials. We utilize long-lasting, certified OEM manufacturer replacement parts.'
    },
    {
      icon: BadgeDollarSign,
      title: 'Affordable Rates',
      desc: 'Transparent upfront estimates. Restoring your existing high-value appliances is significantly cheaper than buying new.'
    },
    {
      icon: ShieldCheck,
      title: 'Warranty Included',
      desc: 'Standard backing and peace of mind on all services rendered. If a repaired part acts up, we fix it.'
    },
    {
      icon: Truck,
      title: 'We Travel to You',
      desc: 'Professional team equipped to diagnose and repair issues on-site, serving inside & outside Harare.'
    }
  ];

  const overviewPillars = [
    {
      icon: Tv,
      title: 'TVs & Smart Screens',
      problems: 'No power, no sound, dead HDMI ports, motherboard system restoration.',
      image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Refrigerator,
      title: 'Fridges & Freezers',
      problems: 'Fails to cool properly, fast frost buildup, compressor gas refills.',
      image: 'https://images.unsplash.com/photo-1571175432243-7f6df8497645?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Zap,
      title: 'Electrical Work',
      problems: 'Full premises rewiring, fault finding, solar power solutions & distribution panels.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Droplet,
      title: 'Plumbing Systems',
      problems: 'Leaking mains, geyser elements, clogged drain lines, booster pump plumbing.',
      image: 'https://images.unsplash.com/photo-1581242163695-19d0acfd486f?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div id="homepage-root" className="bg-[#FAF9F6] min-h-screen">
      {/* 1. HERO SECTION */}
      <section
        id="homepage-hero"
        className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden border-b border-stone-200"
      >
        {/* Background Image Overlay with ambient colors */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_technician_work_1780695619909.png"
            alt="WITECH technician diagnosing appliances in Harare"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-stone-900/60 to-stone-900/40" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Styled Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/90 border border-stone-200 px-4 py-1.5 rounded text-[#B45309] text-xs font-bold tracking-wider uppercase font-sans shadow-sm">
              <Sparkles className="h-4 w-4 animate-spin" strokeWidth={2.5} />
              <span>Harare's Premier Repairs & Installations</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-sans max-w-4xl mx-auto uppercase drop-shadow">
              Your Appliances Deserve a <span className="text-amber-400">Second Life</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-100 max-w-2xl mx-auto font-sans leading-relaxed drop-shadow">
              WITECH Electronics & Plumbing Kings provides expert domestic and industrial repairs and installations across Harare. Save money, reduce waste, and get robust guarantees.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                id="hero-view-services"
                onClick={() => setCurrentPage(Page.Services)}
                className="w-full sm:w-auto px-8 py-4 bg-[#B45309] hover:bg-amber-800 text-white font-bold tracking-wider rounded text-xs transition-all shadow-sm flex items-center justify-center space-x-2 uppercase cursor-pointer"
              >
                <span>Our Services</span>
                <ChevronRight className="h-4 w-4" />
              </button>

              <button
                id="hero-request-quote"
                onClick={() => setCurrentPage(Page.Contact)}
                className="w-full sm:w-auto px-8 py-4 bg-white/95 border border-stone-200 hover:border-[#B45309] text-[#1C1917] font-bold tracking-wider rounded text-xs transition-all flex items-center justify-center space-x-2 uppercase hover:bg-white cursor-pointer shadow-sm"
              >
                <span>Get a Quote</span>
              </button>
            </div>

            {/* Direct Contact Links */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-bold font-sans text-[#FAF9F6] border-t border-white/20 max-w-xl mx-auto">
              <a
                id="hero-call-now"
                href="tel:+263775749729"
                className="flex items-center space-x-2 hover:text-amber-400 transition-colors"
              >
                <PhoneCall className="h-4.5 w-4.5 text-amber-400" />
                <span>Call +263 775 749 729</span>
              </a>
              <span className="hidden sm:inline text-white/40">|</span>
              <a
                id="hero-wa-now"
                href="https://wa.me/263775749729"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <span>Direct WhatsApp Support</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUICK REQUEST FORM */}
      <section id="homepage-quick-request" className="relative z-20 -mt-10 max-w-5xl mx-auto px-4">
        <div className="bg-white border border-stone-200 rounded-lg p-6 md:p-8 shadow-xl">
          <div className="text-center md:text-left mb-6">
            <h2 className="text-xl font-extrabold text-[#1C1917] tracking-wider uppercase font-sans">
              Request a Home Visit
            </h2>
            <p className="text-xs text-stone-550 font-sans mt-1 font-semibold leading-relaxed">
              Need diagnostics? Book a certified technician right now. Most issues solved on the very first visit.
            </p>
          </div>

          {!submittedCode ? (
            <form onSubmit={handleInquirySubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Name field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold tracking-wider font-sans text-[#44403C] uppercase">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Irvine Chidza"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 focus:border-[#B45309] rounded py-2.5 px-3.5 text-sm text-[#1C1917] placeholder-stone-400 focus:ring-0 outline-none transition-colors"
                />
              </div>

              {/* Phone field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold tracking-wider font-sans text-[#44403C] uppercase">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+263 775 749 729"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 focus:border-[#B45309] rounded py-2.5 px-3.5 text-sm text-[#1C1917] placeholder-stone-400 focus:ring-0 outline-none transition-colors"
                />
              </div>

              {/* Location field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold tracking-wider font-sans text-[#44403C] uppercase">Service Location</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Glen Eagles, Harare"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 focus:border-[#B45309] rounded py-2.5 px-3.5 text-sm text-[#1C1917] placeholder-stone-400 focus:ring-0 outline-none transition-colors"
                />
              </div>

              {/* Appliance Type select */}
              <div className="space-y-1.5 lg:col-span-1">
                <label className="text-[10px] font-bold tracking-wider font-sans text-[#44403C] uppercase">Appliance / Service</label>
                <select
                  value={form.applianceType}
                  onChange={(e) => setForm({ ...form, applianceType: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 focus:border-[#B45309] rounded py-2.5 px-3.5 text-sm text-[#1C1917] focus:ring-0 outline-none transition-colors font-sans font-semibold"
                >
                  {applianceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-white text-[#1C1917]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Fault description */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-[10px] font-bold tracking-wider font-sans text-[#44403C] uppercase">Brief Action Description</label>
                <input
                  type="text"
                  placeholder="e.g. Oven not heating, washing machine leaking"
                  value={form.faultDescription}
                  onChange={(e) => setForm({ ...form, faultDescription: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 focus:border-[#B45309] rounded py-2.5 px-3.5 text-sm text-[#1C1917] placeholder-stone-400 focus:ring-0 outline-none transition-colors"
                />
              </div>

              {/* Submit button */}
              <div className="md:col-span-2 lg:col-span-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#B45309] hover:bg-amber-805 disabled:bg-stone-200 disabled:text-stone-400 text-white font-sans font-bold tracking-wider rounded text-xs transition-colors flex items-center justify-center space-x-2 uppercase cursor-pointer"
                >
                  <Send className="h-4.5 w-4.5" />
                  <span>{isSubmitting ? 'Processing Request...' : 'Get Instant Reference Code'}</span>
                </button>
              </div>
            </form>
          ) : (
            <div id="visit-booking-confirmation" className="text-center py-6 space-y-4">
              <div className="inline-flex p-3 bg-green-50 text-green-600 rounded-full border border-green-200">
                <ShieldCheck className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-black text-[#1C1917] uppercase font-sans tracking-wide">
                Booking Reference Assigned
              </h3>
              <p className="text-stone-600 text-sm max-w-lg mx-auto">
                Thank you, <span className="text-[#1C1917] font-bold">{form.name}</span>. Your service booking code is <span className="text-[#B45309] font-sans font-black tracking-wider">{submittedCode}</span>.
              </p>
              <p className="text-[10px] font-bold font-sans text-stone-400 uppercase leading-relaxed max-w-md mx-auto">
                We have registered this on our server. For urgent scheduling, dispatch, or diagnostic answers, click below to share via WhatsApp:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleWhatsAppShare}
                  className="w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded text-xs tracking-wider uppercase transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow"
                >
                  <span>Share on WhatsApp</span>
                </button>
                <button
                  onClick={() => setSubmittedCode(null)}
                  className="w-full sm:w-auto px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold rounded text-xs transition-colors uppercase font-sans cursor-pointer border border-stone-200"
                >
                  Submit Another
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. VALUE PROPOSITIONS BLOCK */}
      <section id="homepage-value-props" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs font-black tracking-widest text-[#B45309] uppercase font-sans">
            WHY CLIENTS CHOOSE WITECH
          </h2>
          <p className="text-3xl font-black text-[#1C1917] font-sans uppercase">
            Engineering Integrity & Reliable Delivery
          </p>
          <div className="w-16 h-1 bg-[#B45309] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200 hover:border-[#B45309] p-6 rounded transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between shadow-sm group"
              >
                <div>
                  <div className="p-3 bg-[#B45309]/10 text-[#B45309] rounded w-fit mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#1C1917] tracking-wide uppercase font-sans mb-2.5">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-stone-500 font-sans leading-relaxed">
                    {prop.desc}
                  </p>
                </div>
                <div className="w-8 h-0.5 bg-stone-200 mt-6 group-hover:bg-[#B45309] transition-colors" />
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. BRIEF SERVICE OVERVIEW */}
      <section id="homepage-brief-services" className="py-20 bg-stone-100/40 border-t border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16">
            <div className="space-y-3">
              <h2 className="text-xs font-black tracking-widest text-[#B45309] uppercase font-sans">
                COMPREHENSIVE EXPERTISE
              </h2>
              <p className="text-3xl font-black text-[#1C1917] font-sans uppercase">
                Appliances We Restore Daily
              </p>
            </div>
            <button
              id="view-all-services-link"
              onClick={() => setCurrentPage(Page.Services)}
              className="text-xs font-bold tracking-wider text-[#B45309] hover:text-amber-800 flex items-center space-x-1.5 group cursor-pointer mt-4 md:mt-0 uppercase font-sans"
            >
              <span>View Full Diagnostic Checklist</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-stone-200 rounded overflow-hidden group hover:border-[#B45309] transition-all duration-300 shadow-sm"
                >
                  <div className="h-44 relative overflow-hidden">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 animate-fade-in"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 p-2 bg-white text-[#B45309] border border-stone-200/50 shadow-sm rounded">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[#1C1917] text-sm font-extrabold uppercase tracking-wide mb-2 font-sans">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-stone-500 leading-relaxed max-w-sm mb-4 min-h-[40px] font-sans font-semibold">
                      {pillar.problems}
                    </p>
                    <button
                      onClick={() => setCurrentPage(Page.Services)}
                      className="text-xs font-bold text-[#B45309] hover:text-amber-800 tracking-wider uppercase font-sans flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Explore Repairs</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. VIDEO DEMONSTRATION SECTION */}
      <section id="homepage-video-demo" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Segment 1: Visual placeholder with simulated player triggers */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white p-3 rounded border border-stone-200 shadow-sm overflow-hidden">
              <div className="relative aspect-video bg-[#1C1917] rounded overflow-hidden border border-stone-300 flex items-center justify-center">
                {/* Background repair demo simulation screen */}
                <div className="absolute inset-0 opacity-45">
                  {activeVideoSegment === 'microwave' && (
                    <img
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
                      alt="Microwave repair showcase"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover animate-fade-in"
                    />
                  )}
                  {activeVideoSegment === 'plumbing' && (
                    <img
                      src="/src/assets/images/plumbing_tools_clean_1780695636589.png"
                      alt="Plumbing maintenance showcase"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover animate-fade-in"
                    />
                  )}
                  {activeVideoSegment === 'fridge' && (
                    <img
                      src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=80&w=800"
                      alt="Refrigeration cooling gas restoration"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover animate-fade-in"
                    />
                  )}
                </div>

                {/* Oscilloscope lines overlay for modern industrial tone */}
                <div className="absolute bottom-4 right-4 bg-[#1C1917]/90 px-3 py-1 text-[10px] font-sans font-bold text-[#B45309] rounded border border-[#B45309]/30 items-center space-x-1.5 flex select-none">
                  <span className="w-2 h-2 rounded bg-[#B45309] animate-ping shrink-0" />
                  <span>DIAGNOSTIC TELEMETRY FEED: STABLE</span>
                </div>

                {/* Main Interactive Button with audio or video loop toggle representation */}
                <div className="relative z-10 flex flex-col items-center space-y-3">
                  <button
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="p-5 bg-[#B45309] hover:bg-amber-800 text-white rounded-full transition-transform duration-300 transform hover:scale-110 shadow-lg flex items-center justify-center cursor-pointer"
                    aria-label={isVideoPlaying ? 'Pause demonstration feedback' : 'Play demonstration feedback'}
                  >
                    {isVideoPlaying ? <Pause className="h-7 w-7" /> : <Play className="h-7 w-7 fill-white text-white" />}
                  </button>
                  <span className="text-[10px] font-bold tracking-wider font-sans text-white/95 uppercase bg-stone-900/70 px-3 py-1 rounded">
                    {isVideoPlaying ? 'TESTING SEQUENCE ENGAGED' : 'ENGAGE TEST WORKFLOW'}
                  </span>
                </div>
              </div>
            </div>

            {/* Video selector controls */}
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => {
                  setActiveVideoSegment('microwave');
                  setIsVideoPlaying(true);
                }}
                className={`p-3 text-[10px] font-bold tracking-wider font-sans rounded transition-colors border uppercase text-center cursor-pointer ${
                  activeVideoSegment === 'microwave'
                    ? 'bg-[#B45309]/10 border-[#B45309] text-[#B45309]'
                    : 'bg-stone-50 border-stone-200 text-stone-500 hover:text-[#1C1917]'
                }`}
              >
                Microwave Repair
              </button>
              <button
                onClick={() => {
                  setActiveVideoSegment('plumbing');
                  setIsVideoPlaying(true);
                }}
                className={`p-3 text-[10px] font-bold tracking-wider font-sans rounded transition-colors border uppercase text-center cursor-pointer ${
                  activeVideoSegment === 'plumbing'
                    ? 'bg-[#B45309]/10 border-[#B45309] text-[#B45309]'
                    : 'bg-stone-50 border-stone-200 text-stone-500 hover:text-[#1C1917]'
                }`}
              >
                Copper Plumbing
              </button>
              <button
                onClick={() => {
                  setActiveVideoSegment('fridge');
                  setIsVideoPlaying(true);
                }}
                className={`p-3 text-[10px] font-bold tracking-wider font-sans rounded transition-colors border uppercase text-center cursor-pointer ${
                  activeVideoSegment === 'fridge'
                    ? 'bg-[#B45309]/10 border-[#B45309] text-[#B45309]'
                    : 'bg-stone-50 border-stone-200 text-stone-500 hover:text-[#1C1917]'
                }`}
              >
                Cooling Restoration
              </button>
            </div>
          </div>

          {/* Segment 2: Context Description */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xs font-black tracking-widest text-[#B45309] uppercase font-sans">
              DEMONSTRATED CRAFT
            </h2>
            <h3 className="text-3xl font-black text-[#1C1917] font-sans uppercase leading-tight">
              Honest Diagnoses, Transparently Conducted.
            </h3>
            <p className="text-sm text-stone-500 leading-relaxed font-sans font-semibold">
              We believe in transparency. In our daily operations, technicians show customers exactly where component failures occurred—whether it is a swollen capacitor on a TV power supply or hard water minerals cracking a stove heating element.
            </p>

            <ul className="space-y-4 text-xs font-sans text-stone-600 font-semibold">
              <li className="flex items-start space-x-3">
                <div className="p-1.5 bg-[#B45309]/10 rounded text-[#B45309] mt-0.5 shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <strong className="block text-[#1C1917] text-xs uppercase font-extrabold mb-0.5">Minimal Downtime</strong>
                  Most residential installations and diagnostic overhauls are resolved on the exact same visit.
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="p-1.5 bg-[#B45309]/10 rounded text-[#B45309] mt-0.5 shrink-0">
                  <UserCheck className="h-4 w-4" />
                </div>
                <div>
                  <strong className="block text-[#1C1917] text-xs uppercase font-extrabold mb-0.5">Experienced Master Technicians</strong>
                  Managed directly by expert engineer Irvine Chidza, carrying years of technical repair wisdom.
                </div>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={() => setCurrentPage(Page.About)}
                className="px-6 py-3.5 bg-white border border-stone-200 hover:border-[#B45309] text-[#1C1917] rounded text-xs font-bold tracking-wider font-sans transition-all flex items-center space-x-2 uppercase hover:bg-stone-50 shadow-sm cursor-pointer"
              >
                <span>Read Our Mission Statement</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Component */}
      <FAQComponent />
    </div>
  );
}

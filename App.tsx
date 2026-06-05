/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Page } from '../types';
import { motion } from 'motion/react';
import {
  Tv,
  Refrigerator,
  Flame,
  Zap,
  Droplet,
  Tv2,
  Wind,
  Wrench,
  ChevronRight,
  MessageSquare,
  Search,
  Filter,
  CheckCircle2
} from 'lucide-react';

export default function ServicesView() {
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'electronics' | 'utilities'>('all');

  // Exact 8 service pillars from user spec
  const pillars = [
    {
      id: 'tvs',
      category: 'electronics',
      title: 'TVs & Smart Screens',
      icon: Tv2,
      desc: 'Expert diagnostic overhauls for smart TV panels, LED backlights, and power boards. We test and restore delicate logic components safely.',
      problems: [
        'No power completely (Dead electrical input)',
        'Symptomatic loss of sound / internal audio board faults',
        'Cracked screen assessment or structural replacement support',
        'Burnt out or loose HDMI ports and audio jacks',
        'Smart TV booting loops and firmware brick repairs'
      ],
      whatsappSubject: 'Requesting expert TV repairs'
    },
    {
      id: 'fridges',
      category: 'utilities',
      title: 'Fridges & Freezers',
      icon: Refrigerator,
      desc: 'Proactive refrigeration support preventing food spoilage. Fast recharging, leak testing, and electronics calibration.',
      problems: [
        'Not cooling effectively or failing to drop temperature',
        'Excessive ice buildup / internal frosting blockages',
        'Refrigeration gas refills and leak pressure testing',
        'Thermostat faults and erratic cooling cycles'
      ],
      whatsappSubject: 'Requesting Fridge/Freezer servicing'
    },
    {
      id: 'stoves',
      category: 'utilities',
      title: 'Stoves & Ovens',
      icon: Flame,
      desc: 'High-power appliance diagnostics ensuring cooker heating elements, ignition keys, and safety controls operate securely.',
      problems: [
        'Gas burners not lighting or weak electric plates',
        'Uneven heat distribution / cold zone defects in ovens',
        'Failed thermostats, digital timers, or power control dial failures',
        'Severe internal wiring faults causing ground leaks'
      ],
      whatsappSubject: 'Requesting Oven/Stove repairs'
    },
    {
      id: 'microwaves',
      category: 'electronics',
      title: 'Commercial & Domestic Microwaves',
      icon: Wind,
      desc: 'High-voltage circuitry repair done safely under industrial guidelines. Magnetron and power supply optimization.',
      problems: [
        'Not heating food despite running correctly',
        'Severe internal sparking or scorched wave-guide covers',
        'Turntable rotators or motor gears jamming',
        'Dead keypad interface or failing control logic systems'
      ],
      whatsappSubject: 'Requesting Microwave troubleshooting'
    },
    {
      id: 'washing-machines',
      category: 'utilities',
      title: 'Washing Machines',
      icon: Wrench,
      desc: 'Mechanical drive component replacements, structural leak plugging, and electronics controller repairs.',
      problems: [
        'Baskets failing to spin or slipping motor drive belts',
        'Clogged drainage pumps leaving grey water trapped inside',
        'Loud violent knocking sounds or failed drum bearings',
        'Faulty safety door lock elements or digital dashboard readouts'
      ],
      whatsappSubject: 'Requesting Laundry appliance repairs'
    },
    {
      id: 'dishwashers',
      category: 'utilities',
      title: 'Dishwashers',
      icon: Droplet,
      desc: 'Professional grade dishwasher restoration for households, high-capacity restaurants, and executive offices.',
      problems: [
        'Failing to clean effectively due to spray arm blockages',
        'Violent leaking or bottom seal deterioration',
        'Clogged pumps, flow-meters, or heating elements'
      ],
      whatsappSubject: 'Requesting Dishwasher maintenance'
    },
    {
      id: 'electrical',
      category: 'electronics',
      title: 'Electrical Installations',
      icon: Zap,
      desc: 'Comprehensive electrical setup, structural wiring, solar distribution, and preventive fault-finding diagnostics.',
      problems: [
        'Full residential, commercial, or restaurant wiring overhauls',
        'Distribution board setups, circuit breakers, and trip troubleshooting',
        'Solar inverters, battery banks, and back-up power management',
        'Detailed electrical safety audits and structural fault localization'
      ],
      whatsappSubject: 'Requesting Electrical installation services'
    },
    {
      id: 'plumbing',
      category: 'utilities',
      title: 'Professional Plumbing Services',
      icon: Droplet,
      desc: 'Professional plumbing work supporting domestic pipelines, restaurant kitchens, corporate office facilities, and high-occupancy locations.',
      problems: [
        'Complete property plumbing audits and piping installations',
        'Severe copper or PVC pipe leak localization and structural repair',
        'Geyser element troubleshooting and high-pressure valves replacement',
        'Clogged main sewage runs, drain blockages, and booster pump setup'
      ],
      whatsappSubject: 'Requesting Plumbing & Pipeline maintenance'
    }
  ];

  // Filtering Logic
  const filteredPillars = pillars.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(filterQuery.toLowerCase()) ||
      p.problems.some((prob) => prob.toLowerCase().includes(filterQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'all' || p.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getWhatsAppBookLink = (subject: string, title: string) => {
    const text = `Hello WITECH MEP Services, I would like to book a lookup/repair.
*Service Category:* ${title}
*Topic:* ${subject}
Please advise of your earliest diagnostic technician availability in Harare.`;
    return `https://wa.me/263775749729?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="servicespage-root" className="bg-[#FAF9F6] min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO Header Metadata Area */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-white border border-stone-200 shadow-sm px-4 py-1.5 rounded text-[#B45309] text-xs font-bold tracking-wider uppercase font-sans">
            <CheckCircle2 className="h-4 w-4 text-[#B45309]" />
            <span>Harare, Zimbabwe Appliance Specialities</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1C1917] uppercase tracking-tight font-sans">
            Appliance Repairs & Installations
          </h1>
          <p className="text-sm md:text-base text-stone-500 font-sans font-semibold leading-relaxed">
            Professional commercial and residential appliance repairs in Harare. We identify core failure points and get your critical equipment up and running with manufacturer-certified spares.
          </p>
          <div className="w-16 h-1 bg-[#B45309] mx-auto rounded-full mt-4" />
        </div>

        {/* Dynamic Filters Section */}
        <div id="services-filtering-controls" className="bg-white border border-stone-200 shadow-sm rounded p-5 mb-12 flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Quick Search */}
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search problems (e.g., cooling, gas refill)..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 focus:border-[#B45309] rounded py-2 pl-10 pr-4 text-xs text-[#1C1917] placeholder-stone-450 focus:ring-0 outline-none transition-colors"
            />
          </div>

          {/* Categories Tab selector */}
          <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto scrollbar-none py-1">
            <span className="text-2xs font-bold font-sans tracking-wider text-stone-500 uppercase flex items-center space-x-1 pr-2">
              <Filter className="h-3 w-3" />
              <span>Filter:</span>
            </span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-1.5 rounded text-2xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#B45309] text-white'
                  : 'bg-stone-50 hover:bg-stone-100 border border-stone-250 text-stone-600'
              }`}
            >
              All Services ({pillars.length})
            </button>
            <button
              onClick={() => setSelectedCategory('electronics')}
              className={`px-4 py-1.5 rounded text-2xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'electronics'
                  ? 'bg-[#B45309] text-white'
                  : 'bg-stone-50 hover:bg-stone-100 border border-stone-250 text-stone-600'
              }`}
            >
              Electronics & Power
            </button>
            <button
              onClick={() => setSelectedCategory('utilities')}
              className={`px-4 py-1.5 rounded text-2xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'utilities'
                  ? 'bg-[#B45309] text-white'
                  : 'bg-stone-50 hover:bg-stone-100 border border-stone-250 text-stone-600'
              }`}
            >
              Utilities & Plumbing
            </button>
          </div>
        </div>

        {/* Diagnostic Results Grid */}
        <div id="services-pillars-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                id={`service-card-${p.id}`}
                className="bg-white border border-stone-205 hover:border-[#B45309]/50 shadow-sm hover:shadow-md rounded p-6 md:p-8 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Title and Category Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 bg-[#B45309]/10 text-[#B45309] rounded group-hover:bg-[#B45309] group-hover:text-white transition-colors duration-300">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <span className="text-[9px] font-bold tracking-wider font-sans uppercase px-2.5 py-1 bg-stone-50 text-stone-500 rounded border border-stone-200">
                      {p.category}
                    </span>
                  </div>

                  <h2 className="text-lg md:text-xl font-bold text-[#1C1917] uppercase tracking-wide mb-3">
                    {p.title}
                  </h2>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans mb-6 font-semibold">
                    {p.desc}
                  </p>

                  {/* Standard Diagnostic Problems List (Required) */}
                  <div className="space-y-3.5 mb-8">
                    <h3 className="text-[10px] font-extrabold tracking-wider font-sans text-[#B45309] uppercase border-b border-stone-200 pb-1.5">
                      COMMON PROBLEMS WE FIX:
                    </h3>
                    <ul className="space-y-2">
                      {p.problems.map((prob, i) => (
                        <li key={i} className="flex items-start space-x-2 text-xs text-stone-700 font-sans font-semibold">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#B45309] shrink-0 mt-0.5" />
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Action Link (Click-to-WhatsApp Booking) */}
                <div className="pt-4 border-t border-stone-150">
                  <a
                    id={`wa-book-button-${p.id}`}
                    href={getWhatsAppBookLink(p.whatsappSubject, p.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-stone-50 hover:bg-green-600 border border-stone-200 hover:border-green-500 text-stone-700 hover:text-white rounded text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center space-x-2.5 group/btn cursor-pointer"
                  >
                    <MessageSquare className="h-4 w-4 text-[#B45309]/80 group-hover/btn:text-white transition-colors" />
                    <span>Book This Repair Now</span>
                  </a>
                </div>
              </div>
            );
          })}

          {filteredPillars.length === 0 && (
            <div className="col-span-1 md:col-span-2 text-center py-20 bg-white border border-stone-200 shadow-sm rounded">
              <p className="text-sm text-stone-500 font-sans uppercase font-bold">
                No matching services or failure mechanisms identified
              </p>
              <button
                onClick={() => {
                  setFilterQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-4 py-1.5 bg-stone-50 border border-stone-200 text-[#B45309] text-[10px] font-bold uppercase rounded cursor-pointer hover:bg-stone-100"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

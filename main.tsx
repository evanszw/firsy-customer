/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Page } from '../types';
import { motion } from 'motion/react';
import {
  ShieldAlert,
  Leaf,
  Globe,
  Home,
  Building2,
  UtensilsCrossed,
  School,
  Clock,
  Sparkles,
  Award,
  Users,
  LineChart,
  CheckCircle,
  ThumbsUp
} from 'lucide-react';

interface AboutViewProps {
  setCurrentPage: (page: Page) => void;
}

export default function AboutView({ setCurrentPage }: AboutViewProps) {
  const customerBases = [
    {
      icon: Home,
      title: 'Residential Homes',
      desc: 'Washing machines, single/double door fridges, smart TVs, kitchen ovens, and local pipeline piping.'
    },
    {
      icon: UtensilsCrossed,
      title: 'Active Restaurants',
      desc: 'Heavy-duty industrial dishwashers, walk-in cold rooms, commercial stoves, microwave ovens, and hot water booster lines.'
    },
    {
      icon: Building2,
      title: 'Corporate Offices',
      desc: 'Central staff breakroom appliances, server-room environmental coolers, electrical setups, and restroom plumbing.'
    },
    {
      icon: School,
      title: 'Public Institutions',
      desc: 'Hospital utility lines, community centers, schools, and heavy kitchen maintenance services in the Harare region.'
    }
  ];

  const stats = [
    {
      value: '92%',
      label: 'FIRST VISIT RESOLUTION',
      desc: 'Our vans roll fully loaded with common diagnostic testing equipment and certified spares.'
    },
    {
      value: '4,800+',
      label: 'DEVICES RESTORED',
      desc: 'High-value modern consumer gadgets saved from becoming costly waste.'
    },
    {
      value: '100%',
      label: 'GENUINE PARTS CERTIFICATE',
      desc: 'We purchase exclusively through official manufacturers and authorized local distributors.'
    },
    {
      value: '< 2 Hours',
      label: 'EMERGENCY RESPONSE',
      desc: 'Fast regional dispatch for plumbing ruptures and electrical ground faults.'
    }
  ];

  const operationalTimeline = [
    {
      stage: '01',
      title: 'Surgical Diagnostic Run',
      desc: 'A skilled technician arrives at your site in Harare with testing rigs, identifies the failure mechanism, and details the raw material cost.'
    },
    {
      stage: '02',
      title: 'Certified OEM Component Sourcing',
      desc: 'If not already present in our mobile inventory, we fetch the exact certified replacement part matching your model specifications.'
    },
    {
      stage: '03',
      title: 'Calibrated Installation & Testing',
      desc: 'We mount the replacement part, test current draw, water pressure, or signals for a full operating cycle, and issue your warranty certificate.'
    }
  ];

  return (
    <div id="aboutpage-root" className="bg-[#FAF9F6] min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-white border border-stone-200 shadow-sm px-4 py-1.5 rounded text-[#B45309] text-xs font-bold tracking-wider uppercase font-sans">
            <Award className="h-4 w-4 text-[#B45309]" />
            <span>Professional Commercial Appliance Repairs Harare</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1C1917] uppercase tracking-tight font-sans">
            Our Mission & Philosophy
          </h1>
          <p className="text-sm md:text-base text-stone-500 font-sans font-semibold leading-relaxed">
            Reducing electronic waste, maximizing appliance lifespan, and supplying honest craftsmanship to households and institutions across Zimbabwe.
          </p>
          <div className="w-16 h-1 bg-[#B45309] mx-auto rounded-full mt-4" />
        </div>

        {/* Narrative Box with Waste reduction spotlight */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xs font-black tracking-widest text-[#B45309] uppercase font-sans">
              THE WITECH VISION
            </h2>
            <h3 className="text-2xl md:text-3xl font-black text-[#1C1917] uppercase tracking-wide leading-tight">
              Repairs Built on Quality & Trust
            </h3>
            <p className="text-sm text-stone-600 font-sans leading-relaxed font-semibold">
              Every year, thousands of perfectly salvageable smart TVs, refrigerators, and wash systems are discarded in Zimbabwe due to minor component failures. Our core philosophy is to fight this throwaway culture.
            </p>
            <p className="text-sm text-stone-500 font-sans leading-relaxed">
              Led by Irvine Chidza, WITECH Electronics & Plumbing Kings has established itself as Harare's benchmark for honest MEP engineering. We repair, restore, and maintain appliances to a high standard, preventing high replacement expenses for families and operating business complexes.
            </p>

            <div className="bg-stone-50 border border-stone-200 p-5 rounded border-l-4 border-l-[#B45309] flex items-start space-x-4 shadow-sm">
              <Leaf className="h-6 w-6 text-[#B45309] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-black text-[#1C1917] uppercase tracking-wide mb-1 font-sans">
                  Certified Ecological Stewardship
                </h4>
                <p className="text-2xs text-stone-500 font-sans leading-normal font-semibold">
                  Our professional repair processes successfully route salvaged copper lines, aluminum housings, and silicone core chips back into productive active cycles, keeping landfills free of hazardous residue.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            {/* Visual Callout block with image background */}
            <div className="relative bg-white border border-stone-200 rounded p-8 overflow-hidden aspect-square flex flex-col justify-between shadow-sm">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(#B45309_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>
              <div className="relative space-y-4">
                <span className="text-[10px] font-bold tracking-wider font-sans uppercase bg-[#B45309]/10 text-[#B45309] px-2.5 py-1 rounded">
                  Service Area Radius
                </span>
                <p className="text-lg font-black text-[#1C1917] uppercase font-sans">
                  Available in and around Harare, Chitungwiza, and Ruwa.
                </p>
              </div>
              <div className="relative pt-6 border-t border-stone-150">
                <p className="text-xs text-stone-500 leading-relaxed font-sans mb-4 font-semibold">
                  Whether you operate an active restaurant hot-kitchen, an institutional dormitory, or a family residence, our diagnostic teams travel to carry out complete testing.
                </p>
                <button
                  onClick={() => setCurrentPage(Page.Contact)}
                  className="px-5 py-3 bg-[#B45309] hover:bg-amber-800 text-white text-xs font-bold tracking-wider rounded font-sans uppercase transition-colors shadow-sm cursor-pointer"
                >
                  Contact Dispatch
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Efficiency Metrics Grid */}
        <section className="mb-24">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-xs font-black tracking-widest text-[#B45309] uppercase font-sans">
              ENGINEERING MATRIX
            </h2>
            <h3 className="text-2xl md:text-3xl font-black text-[#1C1917] uppercase font-sans">
              Performance Metrics In Action
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-stone-50 border border-stone-200 p-6 rounded flex flex-col justify-between shadow-sm"
              >
                <div className="text-4xl md:text-5xl font-black text-[#B45309] font-sans tracking-tight mb-4">
                  {stat.value}
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-wider text-[#1C1917] uppercase mb-2 font-sans">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-stone-500 font-sans leading-relaxed font-semibold">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sectors We Serve */}
        <section className="mb-24 py-16 bg-white rounded border border-stone-200 shadow-sm p-8">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-xs font-black tracking-widest text-[#B45309] uppercase font-sans">
              CUSTOMER PROFILE
            </h2>
            <h3 className="text-2xl font-black text-[#1C1917] uppercase font-sans">
              Societies & Businesses We Keep Dry and Running
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customerBases.map((base, idx) => {
              const Icon = base.icon;
              return (
                <div key={idx} className="space-y-4">
                  <div className="p-3 bg-[#B45309]/10 text-[#B45309] rounded w-fit">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-extrabold text-[#1C1917] uppercase tracking-wide font-sans">
                    {base.title}
                  </h4>
                  <p className="text-xs text-stone-500 leading-relaxed font-sans font-semibold">
                    {base.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline - Operational Methodology */}
        <section className="mb-8">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-xs font-black tracking-widest text-[#B45309] uppercase font-sans">
              WORKFLOW INTEGRITY
            </h2>
            <h3 className="text-2xl font-black text-[#1C1917] uppercase font-sans">
              How We Execute Our Quality Repairs and Installs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {operationalTimeline.map((step, idx) => (
              <div key={idx} className="bg-white border border-stone-200 p-6 rounded relative overflow-hidden shadow-sm">
                <span className="absolute top-4 right-4 text-4xl font-extrabold font-sans text-stone-100 scale-125 select-none leading-none">
                  {step.stage}
                </span>
                <h4 className="text-sm font-extrabold text-[#1C1917] uppercase tracking-wide mb-3 pr-8 font-sans">
                  {step.title}
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed font-sans pr-4 font-semibold">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

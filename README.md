/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * FAQComponent.tsx
 * A highly polished, tabbed accordion FAQ section that addresses common appliance diagnostics,
 * warranty guarantees, and regional service dispatches.
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ShieldCheck, MapPin, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  items: FAQItem[];
}

export default function FAQComponent() {
  const [activeCategory, setActiveCategory] = useState<string>('appliances');
  const [openItem, setOpenItem] = useState<string | null>('app-1');

  const categories: FAQCategory[] = [
    {
      id: 'appliances',
      label: 'Appliance Diagnostics',
      icon: Wrench,
      items: [
        {
          id: 'app-1',
          question: 'Why is my refrigerator running but not cooling properly?',
          answer: 'This is commonly caused by dusty condenser coils blocking heat dissipation, a malfunctioning evaporator fan motor, or a deteriorating door gasket. If the compressor runs constantly but temperatures remain high, there could also be a slow refrigerant leakage. We recommend cleaning the back coils first; if the issue persists, book/WhatsApp us to run a pressure test.'
        },
        {
          id: 'app-2',
          question: 'My microwave is sparking on the inside when turned on. Is it dangerous?',
          answer: 'Yes, microwave internal sparking (arcing) can cause localized fire or fry the magnetron. This is usually caused by food spatters absorbing microwave rays and burning, or a damaged waveguide cover (mica card) that has become saturated with grease. You should immediately stop using it, clean the interior, and have us replace the waveguide sheet.'
        },
        {
          id: 'app-3',
          question: 'My washing machine is not draining out water. What should I check?',
          answer: 'The most probable culprit is a clogged pump filter (which catches loose coins, buttons, and lint) or a kinked drain hose. Most automatic washers have a tiny access flap at the bottom front where you can drain the excess water and clear the filter pinwheel. If the filter is totally clear but water remains trapped, the drain pump motor may be burnt out and require replacement.'
        },
        {
          id: 'app-4',
          question: 'The television screen is totally black, but I hear sound. Can this be repaired?',
          answer: 'Absolutely. Sound without picture is a classic symptom of a failed LED backlight array. Modern LED smart TVs power their backlights in a series circuit; if a single LED bulb blows, the entire screen goes dark while the motherboard and speaker drivers keep working. We regularly swap failed backlights with factory-certified LED strips in our Harare workshop.'
        }
      ]
    },
    {
      id: 'warranty',
      label: 'Warranty & Policies',
      icon: ShieldCheck,
      items: [
        {
          id: 'war-1',
          question: 'Do you offer a formal warranty on your repairs and replacement parts?',
          answer: 'Yes, we back our craftsmanship. All WITECH repairs come with a standard written warranty of 3 to 12 months, depending on the service category and components installed. Our spare parts are sourced directly from authorized manufacturers (Samsung, LG, Defy, etc.) to ensure longevity.'
        },
        {
          id: 'war-2',
          question: 'What is your diagnostic fee policy, and is it subtracted from the final bill?',
          answer: 'We charge a transparent upfront diagnostic fee to cover the technician\'s transit and testing time. If you decide to proceed with the repair with WITECH, the entire diagnostic fee is absorbed into and subtracted from your final service repair quote.'
        },
        {
          id: 'war-3',
          question: 'What happens if the appliance fails again under the warranty window?',
          answer: 'In the extremely rare event that a replaced component or repair fails during your active warranty window, contact us immediately. We will schedule a priority dispatch to assess and fix the problem at absolutely no additional cost to you.'
        }
      ]
    },
    {
      id: 'dispatch',
      label: 'Service Areas & Dispatch',
      icon: MapPin,
      items: [
        {
          id: 'area-1',
          question: 'Which specific residential and commercial suburbs of Harare do you service?',
          answer: 'We provide comprehensive dispatches across all Harare neighborhoods, including Borrowdale, Mount Pleasant, Avondale, Glen Lorne, Highlands, Mabelreign, Westgate, Greendale, Ruwa, Chitungwiza, Belvedere, and Warren Park.'
        },
        {
          id: 'area-2',
          question: 'Do you offer emergency call-outs for plumbing or electrical crises?',
          answer: 'Yes, our mobile emergency response units remain on standby 24 hours a day, 7 days a week to tackle burst plumbing mains, electrical short-circuits, and critical cooling system failures for commercial restaurants, cold rooms, or households.'
        },
        {
          id: 'area-3',
          question: 'Can I book an appointment for a specific time slot on weekends?',
          answer: 'Yes, we respect your schedule. Through our booking form or WhatsApp, you can request dedicated Saturday or Sunday slots to prevent any disruption to your regular workweek.'
        }
      ]
    }
  ];

  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0];

  const handleToggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <section id="faq-section-root" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQ Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-1.5 bg-white border border-stone-200 shadow-sm px-4 py-1.5 rounded text-[#B45309] text-xs font-bold tracking-wider uppercase font-sans">
            <HelpCircle className="h-4 w-4" />
            <span>Frequestly Asked Questions & Help Desk</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#1C1917] tracking-tight uppercase font-sans">
            Have Questions? We Have Answers
          </h2>
          <p className="text-sm text-stone-500 font-sans font-semibold max-w-2xl mx-auto">
            Get instant solutions to common device failures, details on our professional warranty metrics, and mobile transit guidelines across Greater Harare.
          </p>
          <div className="w-12 h-1 bg-[#B45309] mx-auto rounded-full mt-3" />
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                id={`faq-tab-${cat.id}`}
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  // Auto-open first item of new category
                  if (cat.items.length > 0) {
                    setOpenItem(cat.items[0].id);
                  } else {
                    setOpenItem(null);
                  }
                }}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#B45309] text-white shadow'
                    : 'bg-white hover:bg-stone-100 text-stone-600 border border-stone-200'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="bg-white border border-stone-200 rounded divide-y divide-stone-150 shadow-sm overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="divide-y divide-stone-100"
            >
              {currentCategory.items.map((item) => {
                const isOpen = openItem === item.id;
                return (
                  <div
                    key={item.id}
                    id={`faq-accordion-item-${item.id}`}
                    className="transition-colors duration-200"
                  >
                    <button
                      id={`faq-btn-${item.id}`}
                      onClick={() => handleToggleItem(item.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left font-sans font-bold text-sm text-[#1C1917] hover:bg-stone-50/50 transition-colors cursor-pointer group"
                    >
                      <span className="pr-4 group-hover:text-[#B45309] transition-colors">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-4.5 w-4.5 text-stone-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#B45309]' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-xs text-stone-500 font-sans font-medium leading-relaxed bg-stone-50/30">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Direct dispatch banner */}
        <div className="mt-8 text-center bg-[#B45309]/5 border border-[#B45309]/10 rounded p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="block text-[10px] font-black text-[#B45309] uppercase tracking-widest font-sans">Still have a question?</span>
            <p className="text-xs text-stone-600 font-semibold font-sans mt-0.5 leading-relaxed">
              Speak directly to our Lead Engineer Irvine Chidza on WhatsApp for immediate feedback on symptoms.
            </p>
          </div>
          <a
            id="faq-help-whatsapp-btn"
            href="https://wa.me/263775749729"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold tracking-wider rounded text-xs uppercase flex items-center space-x-2 shrink-0 transition-all cursor-pointer shadow-sm"
          >
            <span>Ask via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}

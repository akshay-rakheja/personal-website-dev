"use client";

import React from "react";
import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { FiCheck, FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import Script from "next/script";

export default function Consulting() {
  return (
    <MainLayout>
      {/* Cal.com Script */}
      <Script id="cal-script" strategy="afterInteractive">
        {`
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "30min", {origin:"https://cal.com"});
          Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        `}
      </Script>

      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              AI Consulting & Development
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 dark:text-gray-300"
            >
              Let&apos;s build something amazing together. Book a free
              consultation to discuss your project.
            </motion.p>
          </div>

          {/* Process Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              How We&apos;ll Work Together
            </h2>

            <div className="grid grid-cols-1 gap-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                    <FiCalendar className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    1. Initial Consultation
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  We&apos;ll start with a discovery call to understand your
                  challenges, goals, and requirements. This helps me tailor a
                  solution specific to your needs.
                </p>
                <div className="mt-4">
                  <button
                    data-cal-link="akshay-rakheja/30min"
                    data-cal-namespace="30min"
                    data-cal-config='{"layout":"month_view"}'
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-sm"
                  >
                    Schedule Free Consultation <FiArrowRight className="ml-2" />
                  </button>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                    <FiCheck className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    2. Project Planning
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Based on our discussion, I&apos;ll create a detailed project
                  plan including timeline, deliverables, and pricing. We&apos;ll
                  iterate until it perfectly matches your vision.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                    <FiClock className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    3. Development & Delivery
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  I&apos;ll work closely with you throughout the development
                  process, providing regular updates and incorporating your
                  feedback. The result will be a polished, production-ready
                  solution.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Consulting Services
            </h2>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Book a Consultation
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-8">
                    Ready to discuss your project? Schedule a free 30-minute
                    consultation to get started.
                  </p>

                  <div className="mb-8">
                    <h3 className="flex items-center text-xl font-bold text-gray-900 dark:text-white mb-4">
                      <FiClock className="mr-2" /> Consulting Rate
                    </h3>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-md">
                      <p className="text-gray-700 dark:text-gray-300">
                        My standard consulting rate is:
                      </p>
                      <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">
                        $125 per hour
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="flex items-center text-xl font-bold text-gray-900 dark:text-white mb-4">
                      <FiCalendar className="mr-2" /> Free Initial Consultation
                    </h3>

                    <div className="bg-white dark:bg-gray-700 p-4 rounded-md">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        30-Min Discovery Call
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Let&apos;s discuss your project requirements and explore
                        how I can help
                      </p>
                      <button
                        data-cal-link="akshay-rakheja/30min"
                        data-cal-namespace="30min"
                        data-cal-config='{"layout":"month_view"}'
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-sm"
                      >
                        Schedule Free Call <FiArrowRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-12 text-white flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">Why Work With Me?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FiCheck className="mt-1 mr-3 text-blue-300" />
                      <span>
                        8X Hackathon Winner with proven expertise in AI, Web3,
                        and full-stack development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="mt-1 mr-3 text-blue-300" />
                      <span>
                        Specialized in RAG systems, LLM integration, and
                        intelligent automation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="mt-1 mr-3 text-blue-300" />
                      <span>
                        Experience with enterprise clients and complex technical
                        requirements
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="mt-1 mr-3 text-blue-300" />
                      <span>
                        Clear communication and regular updates throughout the
                        project lifecycle
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

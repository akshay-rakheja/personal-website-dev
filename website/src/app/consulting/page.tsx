"use client";

import React from "react";
import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import {
  FiCheck,
  FiCalendar,
  FiMail,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";
import Script from "next/script";

export default function Consulting() {
  return (
    <MainLayout>
      {/* Cal.com Scripts */}
      <Script id="cal-script" strategy="afterInteractive">
        {`
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          
          // Initialize 30-minute meetings
          Cal("init", "30min", {origin:"https://cal.com"});
          Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
          
          // Initialize 60-minute meetings
          Cal("init", "60min", {origin:"https://cal.com"});
          Cal.ns["60min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
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
              Consulting Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 dark:text-gray-300"
            >
              Expert guidance to solve your challenging technical problems and
              drive business value.
            </motion.p>
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What I Can Help You With
              </h2>
              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mr-3 mt-1">
                    <FiCheck className="text-blue-600 dark:text-blue-400" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      AI Solution Development
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Building custom AI solutions using RAG, LangChain, and
                      other advanced AI frameworks to solve complex business
                      problems.
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mr-3 mt-1">
                    <FiCheck className="text-blue-600 dark:text-blue-400" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Technical Architecture & Review
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Designing scalable system architectures and providing
                      expert code reviews to improve performance and
                      maintainability.
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mr-3 mt-1">
                    <FiCheck className="text-blue-600 dark:text-blue-400" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Cloud & Infrastructure Optimization
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Optimizing cloud resource usage and infrastructure on GCP
                      and AWS to reduce costs and improve efficiency.
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mr-3 mt-1">
                    <FiCheck className="text-blue-600 dark:text-blue-400" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Blockchain & Smart Contract Development
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Creating secure and efficient blockchain solutions and
                      smart contracts for various use cases.
                    </p>
                  </div>
                </motion.li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Process
              </h2>
              <div className="space-y-6">
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
                      Schedule Free Consultation{" "}
                      <FiArrowRight className="ml-2" />
                    </button>
                  </div>
                </motion.div>

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
                      2. Proposal & Agreement
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    After the initial consultation, I&apos;ll provide a proposal
                    outlining the scope, timeline, and cost. Once agreed, we can
                    begin the work.
                  </p>
                </motion.div>

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
                      3. Execution & Delivery
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    I&apos;ll keep you updated on progress with regular
                    check-ins and deliver high-quality solutions on schedule.
                    I&apos;m committed to ensuring your satisfaction.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Book a Consultation
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  Ready to discuss your project? Choose the best option for your
                  needs:
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
                    <FiCalendar className="mr-2" /> Choose Your Session
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* 30-min Quick Call */}
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-md">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        30-Min Quick Call
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Perfect for initial consultations and specific questions
                      </p>
                      <button
                        data-cal-link="akshay-rakheja/30min"
                        data-cal-namespace="30min"
                        data-cal-config='{"layout":"month_view"}'
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-sm"
                      >
                        Book Quick Call <FiArrowRight className="ml-2" />
                      </button>
                    </div>

                    {/* 60-min Deep Dive */}
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-md">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        60-Min Deep Dive
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Ideal for technical discussions and project scoping
                      </p>
                      <button
                        data-cal-link="akshay-rakheja/60min"
                        data-cal-namespace="60min"
                        data-cal-config='{"layout":"month_view"}'
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-sm"
                      >
                        Book Deep Dive <FiArrowRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-12 text-white flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Why Work With Me</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FiCheck className="text-blue-300 mr-3 mt-1" />
                    <span>
                      8X Hackathon Winner with proven problem-solving abilities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-blue-300 mr-3 mt-1" />
                    <span>
                      Experience working with Fortune 500 companies and startups
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-blue-300 mr-3 mt-1" />
                    <span>
                      Expertise in AI, cloud services, and software engineering
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-blue-300 mr-3 mt-1" />
                    <span>Master&apos;s degree in AI/ML specialization</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-blue-300 mr-3 mt-1" />
                    <span>Committed to delivering tangible business value</span>
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t border-blue-500">
                  <p className="flex items-center mb-2">
                    <FiMail className="mr-2" /> Email me directly:
                  </p>
                  <a
                    href="mailto:rakheja.akshay@gmail.com"
                    className="text-blue-200 hover:text-white"
                  >
                    rakheja.akshay@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

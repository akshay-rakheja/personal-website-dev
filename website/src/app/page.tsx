"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { FiArrowRight, FiCode, FiDatabase, FiCpu } from "react-icons/fi";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Akshay Rakheja
                </h1>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                  Software Engineer & AI Consultant
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
                  8X Hackathon Winner • AI/ML Engineer • Building products that
                  drive business value through AI and automation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    About Me <FiArrowRight className="ml-2" />
                  </Link>
                  <Link href="/projects" passHref legacyBehavior>
                    <a className="inline-flex items-center bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-md font-medium transition-colors">
                      View Projects <FiArrowRight className="ml-2" />
                    </a>
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
              >
                {/* Using an actual profile image */}
                <Image
                  src="/profile.jpg"
                  alt="Akshay Rakheja"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              My Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 dark:text-gray-300"
            >
              I specialize in developing AI-powered solutions that solve real
              business problems. With a strong foundation in software
              engineering and AI/ML, I can help you build scalable and efficient
              applications.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expertise 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FiCode className="text-blue-600 dark:text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                AI Solution Development
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Building custom AI solutions using RAG, LangChain, and other
                advanced AI frameworks to solve complex business problems.
              </p>
            </motion.div>

            {/* Expertise 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FiDatabase className="text-blue-600 dark:text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Cloud Architecture
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Designing scalable cloud architectures on GCP and AWS,
                optimizing for performance, cost, and security.
              </p>
            </motion.div>

            {/* Expertise 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FiCpu className="text-blue-600 dark:text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                ML Engineering
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Building machine learning systems that scale, from initial
                prototype to production deployment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 dark:bg-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Let&apos;s Work Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-blue-100 mb-8"
            >
              Ready to build something amazing? I&apos;m available for
              consulting and freelance projects.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href="/consulting"
                className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-md font-medium text-lg transition-colors"
              >
                Schedule a Consultation <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

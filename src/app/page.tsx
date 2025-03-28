"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
                <div className="flex space-x-4">
                  <Link
                    href="/projects"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center transition-colors"
                  >
                    View My Work <FiArrowRight className="ml-2" />
                  </Link>
                  <Link
                    href="/consulting"
                    className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    Hire Me
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
                {/* Replace with your own image */}
                <div className="w-full h-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-lg font-medium">
                  AR
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              My Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I specialize in creating AI-powered solutions that solve real
              business problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI/ML Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiCpu className="text-blue-600 dark:text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                AI & Machine Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building AI solutions using Vertex AI, RAG, Langchain, CrewAI,
                PyTorch, and more.
              </p>
            </motion.div>

            {/* Development Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiCode className="text-blue-600 dark:text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Software Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Developing efficient, robust solutions in Python, JavaScript,
                and other languages.
              </p>
            </motion.div>

            {/* Cloud Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiDatabase className="text-blue-600 dark:text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Cloud Infrastructure
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating scalable, reliable cloud solutions using GCP and AWS.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="text-blue-600 dark:text-blue-400 font-medium flex items-center"
            >
              View All <FiArrowRight className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">
                DEX-CEX Arbitrage
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Arbitrage-Alpaca
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A trading system that identifies and executes on arbitrage
                  opportunities between decentralized and centralized exchanges.
                </p>
                <div className="flex space-x-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded">
                    Python
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded">
                    Trading
                  </span>
                </div>
                <a
                  href="https://github.com/akshay-rakheja/arbitrage-alpaca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center"
                >
                  View on GitHub <FiArrowRight className="ml-1" />
                </a>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-48 bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                Trading Algorithms
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Trading-Algos
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A monorepo for various trading algorithms and strategies,
                  showcasing quantitative finance expertise.
                </p>
                <div className="flex space-x-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded">
                    Python
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded">
                    Algorithms
                  </span>
                </div>
                <a
                  href="https://github.com/akshay-rakheja/Trading-Algos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center"
                >
                  View on GitHub <FiArrowRight className="ml-1" />
                </a>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
                Chainlink Hackathon
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  PolyNodes
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A protocol for immutable, dynamic documents using IPFS and
                  Polygon, awarded 1st place at Chainlink Hackathon.
                </p>
                <div className="flex space-x-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded">
                    JavaScript
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded">
                    Blockchain
                  </span>
                </div>
                <a
                  href="https://github.com/rhdeck/chainlink2022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center"
                >
                  View on GitHub <FiArrowRight className="ml-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to work together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            I'm currently available for consulting at $125/hour. Let's build
            something amazing together.
          </p>
          <Link
            href="/consulting"
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-md font-medium text-lg transition-colors inline-block"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}

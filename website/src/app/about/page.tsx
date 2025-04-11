"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { FiDownload, FiAward, FiBook, FiCode } from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";

export default function About() {
  return (
    <MainLayout>
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
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 dark:text-gray-300"
            >
              Innovative software engineer with a Master&apos;s in AI/ML and a
              passion for building products that drive business value through AI
              and automation. Proven track record of delivering impactful
              solutions, including 8 hackathon wins in AI and blockchain.
            </motion.p>
          </div>

          {/* Experience Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center mb-8">
              <FiCode className="text-blue-600 dark:text-blue-400 text-2xl mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Experience
              </h2>
            </div>

            {/* CGI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 border-l-2 border-blue-600 dark:border-blue-400 pl-6"
            >
              <div className="flex items-start">
                <div className="hidden sm:block flex-shrink-0 mr-6">
                  <Image
                    src="/logo-cgi.png"
                    alt="CGI"
                    width={60}
                    height={60}
                    className="rounded"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    Sr. Software Engineer
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    CGI – Toronto, Ontario | Nov 2024 – Present
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Developed and maintained experience APIs using
                      Moveworks&apos; Creator Studio, enhancing system
                      scalability and user experience through seamless
                      ServiceNow integration.
                    </li>
                    <li>
                      Integrated REST APIs with Moveworks to enhance data
                      aggregation, automate workflows, and improve system
                      efficiency.
                    </li>
                    <li>
                      Led periodic access review campaigns with cross-functional
                      teams, improving compliance and data security.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Immigrate.ai */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-12 border-l-2 border-blue-600 dark:border-blue-400 pl-6"
            >
              <div className="flex items-start">
                <div className="hidden sm:block flex-shrink-0 mr-6">
                  <Image
                    src="/logo-immigrate.png"
                    alt="Immigrate.ai"
                    width={60}
                    height={60}
                    className="rounded"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    Software Engineer
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    Immigrate.ai – Etobicoke, Ontario | Mar 2023 – Oct 2024
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Developed a Chrome Extension that reduced webform filing
                      time by 95%, improving productivity and accuracy.
                    </li>
                    <li>
                      Built an agentic microservice that generates fully
                      researched and cited business documents, streamlining
                      documentation processes.
                    </li>
                    <li>
                      Integrated a Graph RAG-powered Q/A bot into ERP, reducing
                      user query resolution time by 30%.
                    </li>
                    <li>
                      Created DocCheck, an OCR tool for validating unstructured
                      documents, enhancing application review efficiency.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Pronti AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12 border-l-2 border-blue-600 dark:border-blue-400 pl-6"
            >
              <div className="flex items-start">
                <div className="hidden sm:block flex-shrink-0 mr-6">
                  <Image
                    src="/logo-pronti.png"
                    alt="Pronti AI"
                    width={60}
                    height={60}
                    className="rounded"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    Software Engineer
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    Pronti AI – Toronto, Ontario | Nov 2022 – Jan 2023
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Resolved lazy user engagement issue, driving downloads
                      beyond 1 million.
                    </li>
                    <li>
                      Designed a GCP-hosted microservice using Gmail parsing and
                      ResNet18 for image classification, auto-populating a
                      virtual app closet.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Alpaca Markets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-12 border-l-2 border-blue-600 dark:border-blue-400 pl-6"
            >
              <div className="flex items-start">
                <div className="hidden sm:block flex-shrink-0 mr-6">
                  <Image
                    src="/logo-alpaca.png"
                    alt="Alpaca Markets"
                    width={60}
                    height={60}
                    className="rounded"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    Growth Product Manager Intern
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    Alpaca Markets – Toronto, Ontario | Apr 2022 – Oct 2022
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Built a Slack integration for executing trades within
                      Slack.
                    </li>
                    <li>
                      Authored technical blogs with code samples, resulting in
                      ~45% increase in Crypto API usage.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hackathons */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center mb-8">
              <FiAward className="text-blue-600 dark:text-blue-400 text-2xl mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Hackathon Achievements
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Twelve Labs Hackathon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="hidden sm:block flex-shrink-0 mr-4">
                    <Image
                      src="/projects/twelve-labs.jpg"
                      alt="Twelve Labs"
                      width={50}
                      height={50}
                      className="rounded"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-1">
                      <div className="flex items-center text-yellow-500 mr-2">
                        <FaTrophy className="mr-1" />
                        <span className="text-sm font-semibold">1st Place</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Twelve Labs Weekend Hackathon
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">May 2024</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>
                    Built a React+TS web app for searchable chessboxing clips
                  </li>
                  <li>Integrated Marengo video understanding models</li>
                  <li>Used FFmpeg for AI-generated music</li>
                </ul>
                <a
                  href="https://lablab.ai/event/twelve-labs-weekend-hackathon/state-change-labs/grandmaster-gladiators-chessboxing-ai-insights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Project
                </a>
              </motion.div>

              {/* AI21 Labs Hackathon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="hidden sm:block flex-shrink-0 mr-4">
                    <Image
                      src="/projects/ai21-labs.jpg"
                      alt="AI21 Labs"
                      width={50}
                      height={50}
                      className="rounded"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-1">
                      <div className="flex items-center text-yellow-500 mr-2">
                        <FaTrophy className="mr-1" />
                        <span className="text-sm font-semibold">2nd Place</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        AI21 Labs Hackathon
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      July 2023
                    </p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>2nd Place Overall</li>
                  <li>Best AI Integration Solution</li>
                  <li>Integrated AI21 models with no-code automation tools</li>
                </ul>
                <a
                  href="https://lablab.ai/event/plug-into-ai-with-ai21/state-change-labs/ai21-no-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Project
                </a>
              </motion.div>

              {/* Chainlink Fall 2022 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="hidden sm:block flex-shrink-0 mr-4">
                    <Image
                      src="/nodeless_link.png"
                      alt="nodeless.link"
                      width={50}
                      height={50}
                      className="rounded"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-1">
                      <div className="flex items-center text-yellow-500 mr-2">
                        <FaTrophy className="mr-1" />
                        <span className="text-sm font-semibold">1st Place</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Chainlink Fall 2022 Hackathon
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      December 2022
                    </p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Chainlink Top Quality Projects - $20,000</li>
                  <li>Polygon - 1st Place - $10,000</li>
                  <li>Built with Chainlink, React & Solidity</li>
                </ul>
                <a
                  href="https://devpost.com/software/nodeless-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Project
                </a>
              </motion.div>

              {/* Polygon Build It */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="hidden sm:block flex-shrink-0 mr-4">
                    <Image
                      src="/buidl_it_logo.png"
                      alt="PolyDocs"
                      width={50}
                      height={50}
                      className="rounded"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-1">
                      <div className="flex items-center text-yellow-500 mr-2">
                        <FaTrophy className="mr-1" />
                        <span className="text-sm font-semibold">Winner</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Polygon Build It Hackathon
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      August 2022
                    </p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Pool Prize Winner</li>
                  <li>IPFS/Filecoin Sponsor Prize Winner</li>
                  <li>Built decentralized document management system</li>
                </ul>
                <a
                  href="https://devpost.com/software/jonsnow-eth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Project
                </a>
              </motion.div>

              {/* ETHGlobal HackFS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="hidden sm:block flex-shrink-0 mr-4">
                    <Image
                      src="/eth_global_logo.png"
                      alt="PolyDocs"
                      width={50}
                      height={50}
                      className="rounded"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-1">
                      <div className="flex items-center text-yellow-500 mr-2">
                        <FaTrophy className="mr-1" />
                        <span className="text-sm font-semibold">Finalist</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        ETHGlobal HackFS
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      July 2022
                    </p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>ETHGlobal HackFS Finalist</li>
                  <li>Top 5 Project by Polygon</li>
                  <li>
                    Built protocol for immutable documents using IPFS and
                    Polygon
                  </li>
                </ul>
                <a
                  href="https://ethglobal.com/showcase/polydocs-jw5s5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Project
                </a>
              </motion.div>

              {/* Supernova */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="hidden sm:block flex-shrink-0 mr-4">
                    <Image
                      src="/dfinity.png"
                      alt="DFINITY"
                      width={50}
                      height={50}
                      className="rounded"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-1">
                      <div className="flex items-center text-yellow-500 mr-2">
                        <FaTrophy className="mr-1" />
                        <span className="text-sm font-semibold">4th Place</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Supernova Hackathon
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      June 2022
                    </p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>4th Place - Blue Sky Category</li>
                  <li>Built with Azle & TypeScript</li>
                  <li>Implemented on Internet Computer blockchain</li>
                </ul>
                <a
                  href="https://devpost.com/software/decentralized-time"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Project
                </a>
              </motion.div>

              {/* Chainlink Spring 2022 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="hidden sm:block flex-shrink-0 mr-4">
                    <Image
                      src="/polynodes.png"
                      alt="PolyNodes"
                      width={50}
                      height={50}
                      className="rounded"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-1">
                      <div className="flex items-center text-yellow-500 mr-2">
                        <FaTrophy className="mr-1" />
                        <span className="text-sm font-semibold">2nd Place</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Chainlink Spring 2022 Hackathon
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">May 2022</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>2nd Place Overall</li>
                  <li>Best DeFi Project Runner-up</li>
                  <li>Created a no-code platform with Chainlink Oracles</li>
                </ul>
                <a
                  href="https://devpost.com/software/polynodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Project
                </a>
              </motion.div>

              {/* Web3Con */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="hidden sm:block flex-shrink-0 mr-4">
                    <Image
                      src="/web3con.png"
                      alt="Time Limited Tokens"
                      width={50}
                      height={50}
                      className="rounded"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-1">
                      <div className="flex items-center text-yellow-500 mr-2">
                        <FaTrophy className="mr-1" />
                        <span className="text-sm font-semibold">3rd Place</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Web3Con by Developer DAO
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      March 2022
                    </p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>3rd Place in Sponsor Prize Category</li>
                  <li>$5,000 Protocol Labs Grant for EIP Development</li>
                  <li>Developed Time-Limited Token standard</li>
                </ul>
                <a
                  href="https://devpost.com/software/time-limited-tokens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Project
                </a>
              </motion.div>
            </div>
          </div>

          {/* Education */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center mb-8">
              <FiBook className="text-blue-600 dark:text-blue-400 text-2xl mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Education
              </h2>
            </div>

            {/* Waterloo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 border-l-2 border-blue-600 dark:border-blue-400 pl-6"
            >
              <div className="flex items-start">
                <div className="hidden sm:block flex-shrink-0 mr-6">
                  <Image
                    src="/waterloo-logo.png"
                    alt="University of Waterloo"
                    width={60}
                    height={60}
                    className="rounded"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    M.Eng, Electrical and Computer Engineering – AI/ML
                    Specialization
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    University of Waterloo | 2022
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Purdue */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-12 border-l-2 border-blue-600 dark:border-blue-400 pl-6"
            >
              <div className="flex items-start">
                <div className="hidden sm:block flex-shrink-0 mr-6">
                  <Image
                    src="/purdue-logo.png"
                    alt="Purdue University"
                    width={60}
                    height={60}
                    className="rounded"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    BSc. Electrical Engineering
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    Purdue University | 2016
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center mb-8">
              <FiCode className="text-blue-600 dark:text-blue-400 text-2xl mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Skills
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  AI/ML
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded text-sm">
                    Vertex AI
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded text-sm">
                    RAG
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded text-sm">
                    Langchain
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded text-sm">
                    CrewAI
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded text-sm">
                    PyTorch
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded text-sm">
                    MCP
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded text-sm">
                    Pinecone
                  </span>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded text-sm">
                    Python
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded text-sm">
                    C
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded text-sm">
                    C++
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded text-sm">
                    JavaScript
                  </span>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  Cloud & Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded text-sm">
                    GCP
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded text-sm">
                    AWS
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <a
              href="/Resume_Akshay_Rakheja_March_2025.pdf"
              download
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              <FiDownload className="mr-2" /> Download My Resume
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

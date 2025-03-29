"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { FiGithub, FiExternalLink, FiAward } from "react-icons/fi";

// Project categories for filtering
const categories = ["All", "Hackathon", "AI/ML", "Trading", "Blockchain"];

// Project data
const projects = [
  {
    id: 1,
    title: "Twelve Labs Video Search",
    description:
      "A React+TS web app to create semantically searchable video clips of chessboxing matches.",
    category: ["Hackathon", "AI/ML"],
    image: "/projects/twelve-labs.jpg",
    imageAlt: "Twelve Labs Video Search Project",
    githubUrl: "https://github.com/statechangelabs/twelvelabs-hackathon",
    demoUrl:
      "https://lablab.ai/event/twelve-labs-weekend-hackathon/state-change-labs/grandmaster-gladiators-chessboxing-ai-insights",
    isHackathonWinner: true,
    hackathonName: "Twelve Labs Weekend Hackathon",
    hackathonPlace: "1st Place",
    technologies: ["React", "TypeScript", "AI", "FFmpeg"],
    details: [
      "Built a React+TS web app to create semantically searchable video clips of chessboxing matches.",
      "Integrated Marengo video understanding models for precise search (e.g., knockouts/checkmates).",
      "Used FFmpeg to overlay AI-generated music on clips.",
    ],
  },
  {
    id: 2,
    title: "Google Vertex AI Solution",
    description:
      "A private AI solution on GCP for audio imports and meeting summarization.",
    category: ["Hackathon", "AI/ML"],
    image: "/projects/vertex-ai.jpg",
    imageAlt: "Google Vertex AI Project",
    githubUrl: "https://github.com/statechangelabs/Vertex-AI-Hackathon",
    demoUrl:
      "https://lablab.ai/event/google-vertex-ai-hackathon/state-change-labs/private-ai-for-gcp",
    isHackathonWinner: false,
    hackathonName: "Google Vertex AI Hackathon",
    technologies: ["GCP", "Cloud Run", "Langchain", "Chirp"],
    details: [
      "Built a private AI solution on GCP for audio imports and meeting summarization using Chirp and Cloud Run.",
      "Implemented a langchain-enabled Chainlit interface using Gecko embeddings and Matching Engine.",
      "Replaced 3rd-party tools with Google-native services for security and compliance.",
    ],
  },
  {
    id: 3,
    title: "AI21 Labs Integration",
    description:
      "Integration of AI21 language models with no-code tools for complex automation.",
    category: ["Hackathon", "AI/ML"],
    image: "/projects/ai21-labs.jpg",
    imageAlt: "AI21 Labs Integration Project",
    demoUrl:
      "https://lablab.ai/event/plug-into-ai-with-ai21/state-change-labs/ai21-no-code",
    isHackathonWinner: true,
    hackathonName: "AI21 Labs Hackathon",
    hackathonPlace: "2nd Place",
    technologies: ["Zapier", "Make", "AI21 Labs", "No-code"],
    details: [
      "Integrated AI21 language models with no-code tools like Zapier & Make.",
      "Enabled complex automation for non-tech users via J2 and Task-Specific APIs.",
    ],
  },
  {
    id: 4,
    title: "DEX-CEX Arbitrage",
    description:
      "A trading system that identifies and executes on arbitrage opportunities between decentralized and centralized exchanges.",
    category: ["Trading", "Blockchain"],
    image: "/projects/dex-cex.jpg",
    imageAlt: "DEX-CEX Arbitrage Project",
    githubUrl: "https://github.com/akshay-rakheja/arbitrage-alpaca",
    technologies: ["Python", "Alpaca API", "DEX", "Blockchain"],
    details: [
      "Developed a system to identify price differences between decentralized and centralized exchanges.",
      "Used Alpaca API for executing trades.",
      "Implemented automated trade execution based on opportunity identification.",
    ],
  },
  {
    id: 5,
    title: "Trading Algorithms",
    description:
      "A monorepo for various trading algorithms and strategies, showcasing quantitative finance expertise.",
    category: ["Trading"],
    image: "/projects/trading-algos.png",
    imageAlt: "Trading Algorithms Project",
    githubUrl: "https://github.com/akshay-rakheja/Trading-Algos",
    technologies: ["Python", "Algorithms", "Quantitative Finance"],
    details: [
      "Collection of various trading strategies and algorithms.",
      "Includes backtesting frameworks and optimization tools.",
      "Demonstrates expertise in quantitative finance and algorithmic trading.",
    ],
  },
  {
    id: 6,
    title: "PolyNodes",
    description:
      "A protocol for immutable, dynamic documents using IPFS and Polygon.",
    category: ["Hackathon", "Blockchain"],
    image: "/projects/polynodes.jpg",
    imageAlt: "PolyNodes Project",
    githubUrl: "https://github.com/rhdeck/chainlink2022",
    demoUrl: "https://devpost.com/software/polynodes",
    isHackathonWinner: true,
    hackathonName: "Chainlink Fall Hackathon",
    hackathonPlace: "1st Place",
    technologies: ["JavaScript", "Blockchain", "Polygon", "IPFS"],
    details: [
      "Created a no-code platform linking smart contracts with off-chain webhooks via Chainlink Oracles.",
      "Used Xano, Moralis, and Netlify for back-end and on-chain listening.",
      "Supported ERC20/721/1155 contracts and markdown-based renderers for DeFi/NFT/DAO use cases.",
    ],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

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
              My Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 dark:text-gray-300"
            >
              A showcase of my work, hackathon wins, and coding projects.
            </motion.p>
          </div>

          {/* Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    filter === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-48 relative">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  {project.isHackathonWinner && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full flex items-center z-10">
                      <FiAward className="mr-1" />
                      {project.hackathonPlace || "Winner"}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  {project.hackathonName && (
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">
                      {project.hackathonName}
                    </p>
                  )}
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 flex items-center"
                      >
                        <FiGithub className="mr-1" /> GitHub
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 flex items-center"
                      >
                        <FiExternalLink className="mr-1" /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-16">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              See more of my projects on GitHub
            </p>
            <a
              href="https://github.com/akshay-rakheja"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              <FiGithub className="mr-2" /> Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

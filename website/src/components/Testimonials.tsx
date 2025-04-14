import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiAward, FiCalendar } from "react-icons/fi";
import Script from "next/script";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company?: string;
  text: string;
  rating: number;
  linkedinUrl?: string;
}

// Client testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Adam Miko",
    position: "Founder",
    company: "Echora.ai",
    text: "Akshay has been a driving force in advancing our product and streamlining our development process. His deep technical expertise, paired with a collaborative and forward-thinking approach, made him an essential part of our team. He navigates complex challenges with ease and always keeps the end user in mind - bringing a rare combination of logic, intuition, and empathy to every decision. His instincts are consistently on point, and his input has meaningfully elevated the value of our product. I can't recommend working with him highly enough.",
    rating: 5,
  },
];

interface HackathonWin {
  id: number;
  event: string;
  project: string;
  position: string;
  platform: string;
  link: string;
  date: string;
  image: string;
  achievements?: string[];
}

// Hackathon wins data
const hackathonWins: HackathonWin[] = [
  {
    id: 1,
    event: "Twelve Labs Weekend Hackathon",
    project: "Grandmaster Gladiators",
    position: "1st Place",
    platform: "lablab.ai",
    link: "https://lablab.ai/event/twelve-labs-weekend-hackathon/state-change-labs/grandmaster-gladiators-chessboxing-ai-insights",
    date: "May 2024",
    image: "/projects/twelve-labs.jpg",
  },
  {
    id: 2,
    event: "AI21 Labs Hackathon",
    project: "AI21 No-Code Integration",
    position: "2nd Place",
    platform: "lablab.ai",
    link: "https://lablab.ai/event/plug-into-ai-with-ai21/state-change-labs/ai21-no-code",
    date: "July 2023",
    image: "/projects/ai21-labs.jpg",
    achievements: ["2nd Place Overall", "Best AI Integration Solution"],
  },
  {
    id: 3,
    event: "Chainlink Fall 2022 Hackathon",
    project: "nodeless.link",
    position: "1st Place",
    platform: "Chainlink",
    link: "https://devpost.com/software/nodeless-link",
    date: "December 2022",
    image: "/nodeless_link.png",
    achievements: [
      "Chainlink Top Quality Projects - $20,000",
      "Polygon - 1st Place - $10,000",
      "Built with Chainlink, React & Solidity",
    ],
  },
  {
    id: 4,
    event: "Polygon Build It Hackathon",
    project: "PolyDocs",
    position: "Winner",
    platform: "Polygon",
    link: "https://devpost.com/software/jonsnow-eth",
    date: "August 2022",
    image: "/buidl_it_logo.png",
    achievements: [
      "Pool Prize Winner",
      "IPFS/Filecoin Sponsor Prize Winner",
      "Built decentralized document management system",
    ],
  },
  {
    id: 5,
    event: "ETHGlobal HackFS",
    project: "PolyDocs",
    position: "Finalist",
    platform: "ETHGlobal",
    link: "https://ethglobal.com/showcase/polydocs-jw5s5",
    date: "July 2022",
    image: "/eth_global_logo.png",
    achievements: [
      "ETHGlobal HackFS Finalist",
      "Top 5 Project by Polygon",
      "Built protocol for immutable documents using IPFS and Polygon",
    ],
  },
  {
    id: 6,
    event: "Supernova",
    project: "DeTi: Decentralized Time Travel",
    position: "4th Place",
    platform: "DFINITY",
    link: "https://devpost.com/software/decentralized-time",
    date: "June 2022",
    image: "/dfinity.png",
    achievements: [
      "4th Place - Blue Sky Category",
      "Built with Azle & TypeScript",
    ],
  },
  {
    id: 7,
    event: "Chainlink Spring 2022 Hackathon",
    project: "PolyNodes",
    position: "2nd Place",
    platform: "Chainlink",
    link: "https://devpost.com/software/polynodes",
    date: "May 2022",
    image: "/polynodes.png",
    achievements: ["2nd Place Overall", "Best DeFi Project Runner-up"],
  },
  {
    id: 8,
    event: "Web3Con by Developer DAO",
    project: "Time Limited Tokens",
    position: "3rd Place",
    platform: "Developer DAO",
    link: "https://devpost.com/software/time-limited-tokens",
    date: "March 2022",
    image: "/web3con.png",
    achievements: [
      "3rd Place in Sponsor Prize Category",
      "$5,000 Protocol Labs Grant for EIP Development",
      "Developed Time-Limited Token standard",
    ],
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      {/* Cal.com Script */}
      <Script id="cal-script" strategy="afterInteractive">
        {`
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "30min", {origin:"https://cal.com"});
          Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        `}
      </Script>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Success Stories & Achievements
          </motion.h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Client testimonials and hackathon achievements that showcase my
            expertise and impact.
          </p>
        </div>

        {/* Client Testimonials Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Client Testimonials
          </h3>
          <div className="grid grid-cols-1 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonial.position}
                      {testimonial.company && ` at ${testimonial.company}`}
                    </p>
                  </div>
                  {testimonial.linkedinUrl && (
                    <a
                      href={testimonial.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hackathon Achievements Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Hackathon Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hackathonWins.map((win) => (
              <motion.div
                key={win.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={win.image}
                    alt={win.project}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <FiAward className="text-yellow-500 mr-2" />
                    <span className="font-bold text-yellow-500">
                      {win.position}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {win.project}
                  </h4>
                  <div className="flex items-center mb-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {win.event}
                    </p>
                    <span className="mx-2 text-gray-400">•</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {win.date}
                    </p>
                  </div>
                  {win.achievements && (
                    <div className="mb-4">
                      {win.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 mb-1"
                        >
                          <FiAward className="text-yellow-500 w-4 h-4" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {win.platform}
                    </span>
                    <a
                      href={win.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Let&apos;s discuss how we can bring your ideas to life
          </p>
          <button
            data-cal-link="akshay-rakheja/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view"}'
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors"
          >
            Schedule a Free Consultation <FiCalendar className="ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

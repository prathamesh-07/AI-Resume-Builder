"use client";

import Header from "@/components/layout/Header";
import { AtomIcon, Edit, Share2, Check, Star, Award, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="hero relative">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-500"
            style={{
              backgroundImage: "url('/pexels-apasaric-3629227.jpg')",
              filter: "brightness(0.5) blur(4px)",
              zIndex: 0,
              height: "100vh",
            }}
          ></div>
          <motion.div
            className="relative z-10 container mx-auto flex flex-col items-center justify-center p-4 text-center"
            style={{ height: "100vh" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-4 text-5xl font-bold tracking-tight leading-none text-gray-700 md:text-6xl lg:text-7xl">
              Elevate Your Career with{" "}
              <span className="text-blue-600">AI-Powered Resumes</span>
            </h1>

            <p className="mb-8 text-xl font-normal text-gray-400 lg:text-2xl sm:px-16 xl:px-48">
              Craft a Masterpiece Resume with Our Cutting-Edge AI Technology
            </p>
            <motion.a
              href="/dashboard"
              className="inline-flex justify-center items-center py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </motion.a>
          </motion.div>
        </section>

        <section className="py-32 bg-white transition-all duration-700" style={{ marginTop: "-10vh" }}>
          <div className="container mx-auto px-4">
            <h2 className="font-bold text-4xl mb-8 text-center text-gray-800">
              Why Choose Our AI-Powered Resume Builder?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.03 }}
              >
                <Star className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-blue-600 mb-3">Intelligent Suggestions</h3>
                <p className="text-gray-700">
                  Our AI provides context-aware suggestions that elevate your resume, considering your unique career path and
                  aspirations.
                </p>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.03 }}
              >
                <Check className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-blue-600 mb-3">ATS-Optimized Content</h3>
                <p className="text-gray-700">
                  Ensure your resume passes Applicant Tracking Systems with our AI-optimized content, increasing your chances of
                  getting noticed.
                </p>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.03 }}
              >
                <Award className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-blue-600 mb-3">Tailored Excellence</h3>
                <p className="text-gray-700">
                  Our AI tailors every aspect of your resume to your specific industry, job role, and career level for maximum
                  impact.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="font-bold text-4xl mb-12 text-center">Your Path to Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {[
                {
                  icon: AtomIcon,
                  title: "Craft Your Story",
                  description:
                    "Input your experiences and watch our AI transform them into a compelling narrative.",
                },
                {
                  icon: Edit,
                  title: "Refine with Precision",
                  description:
                    "Use our intuitive editor with real-time AI suggestions to perfect your resume.",
                },
                {
                  icon: Share2,
                  title: "Impress and Progress",
                  description:
                    "Export your polished resume and track its performance with our analytics.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <step.icon className="h-16 w-16 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-lg">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-bold text-4xl mb-12 text-center text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "How does the AI create personalized resumes?",
                  answer:
                    "Our AI analyzes your input, compares it with millions of successful resumes, and considers current job market trends to craft a resume that's uniquely tailored to you and your target roles.",
                },
                {
                  question: "Is my data safe?",
                  answer:
                    "Absolutely. We use bank-level encryption and strict data protection protocols. Your information is never sold or shared with third parties.",
                },
                {
                  question: "Can I use this for multiple job applications?",
                  answer:
                    "Yes! Our AI can help you tailor your resume for different roles and companies, maximizing your chances of success across multiple applications.",
                },
                {
                  question: "How often should I update my AI-powered resume?",
                  answer:
                    "We recommend refreshing your resume every few months, or whenever you gain new skills or experiences. Our AI will automatically suggest updates based on changing job market trends.",
                },
              ].map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    className="flex justify-between items-center w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                    <ChevronDown
                      className={`h-6 w-6 text-gray-600 transform transition-transform duration-300 ${activeAccordion === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-gray-50 rounded-b-lg"
                    >
                      <p className="text-gray-700">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-bold text-4xl mb-8">Ready to Redefine Your Career?</h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Don't let an ordinary resume hold you back. Harness the power of AI to create a resume that not only tells your
              story but sells your potential.
            </p>
            <motion.a
              href="/sign-up"
              className="inline-block rounded-lg bg-green-500 px-12 py-4 text-lg font-medium text-white transition hover:bg-green-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create My AI-Powered Resume
            </motion.a>
            <p className="mt-6 text-sm text-gray-300">
              Join thousands of successful professionals who've elevated their careers with us.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
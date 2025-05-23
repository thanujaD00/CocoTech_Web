import { motion } from "framer-motion";
import TeamSection from "../components/TeamSection";

const AboutUsPage = () => {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-green-800 to-green-600 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About Us
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-white mx-auto mb-6"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-xl"
            >
              Meet the team behind the CocoTech project
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Project Overview */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#2e7d32" }}
            >
              Project Overview
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-xl shadow-xl p-8 max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="md:w-1/3">
                <img
                  src="/images/coconut-farm.jpg"
                  alt="Coconut Farm"
                  className="rounded-lg shadow-md w-full"
                  onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/400x300?text=Coconut+Farm";
                  }}
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-700 mb-6">
                  The Automated Smart Coconut Farm Management System is a
                  comprehensive solution designed to address key challenges in
                  coconut farming through innovative technology integration. Our
                  team combines expertise in software engineering, machine
                  learning, IoT, and agricultural science to create a system
                  that enhances productivity, quality, and sustainability.
                </p>
                <p className="text-lg text-gray-700">
                  The project is a collaboration between the Sri Lanka Institute
                  of Information Technology and the Coconut Research Institute
                  of Sri Lanka, bringing together academic research and
                  practical agricultural expertise to develop solutions tailored
                  to the needs of coconut farmers.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#2e7d32" }}
              >
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Yield Prediction</h4>
                    <p className="text-gray-600">
                      Using ML to forecast coconut yields based on environmental
                      and agronomic factors
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Smart Irrigation</h4>
                    <p className="text-gray-600">
                      IoT-based water management for optimal soil moisture and
                      tree health
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Copra Quality Assessment
                    </h4>
                    <p className="text-gray-600">
                      Automated detection of fungal infections and quality
                      grading
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Drying Time Prediction
                    </h4>
                    <p className="text-gray-600">
                      Optimizing copra drying process for maximum oil extraction
                      efficiency
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <TeamSection />

      {/* Institutional Support */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#2e7d32" }}
            >
              Institutional Support
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our project is supported by leading institutions in technology and
              agricultural research
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <img
                src="/images/sliit_logo.png"
                alt="Sri Lanka Institute of Information Technology"
                className="h-24 mb-6"
                onError={(e: any) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/200x100?text=SLIIT+Logo";
                }}
              />
              <h3 className="text-xl font-bold mb-4 text-center">
                Sri Lanka Institute of Information Technology
              </h3>
              <p className="text-center text-gray-700">
                Academic partner providing research guidance and technical
                expertise in software development, machine learning, and IoT
                technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <img
                src="/images/cri_logo.jpg"
                alt="Coconut Research Institute of Sri Lanka"
                className="h-24 mb-6"
                onError={(e: any) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/200x100?text=CRI+Logo";
                }}
              />
              <h3 className="text-xl font-bold mb-4 text-center">
                Coconut Research Institute of Sri Lanka
              </h3>
              <p className="text-center text-gray-700">
                Subject matter experts providing agricultural knowledge, access
                to research facilities, and industry connections for real-world
                testing and validation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-green-50 rounded-xl overflow-hidden shadow-lg">
            <div className="bg-green-700 text-white py-4 px-6">
              <h3 className="text-xl font-bold">Get in Touch</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                For more information about our project or collaboration
                opportunities, please reach out to us
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">cocotech@example.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">+94 11 234 5678</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUsPage;

import { motion } from "framer-motion";
import TimelineSection from "../components/TimelineSection";

const MilestonesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const completedMilestones = [
    "Project Proposal",
    "Progress Presentation I",
    "Research Paper",
    "Progress Presentation II",
    "Website Assessment",
    "Final Report",
    "Final Presentation & Viva",
  ];

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
              Project Milestones
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
              Tracking our journey from concept to completion through key
              achievements
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <TimelineSection />

      {/* Project Status */}
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
              Project Status
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Current progress overview and milestone achievements
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-xl shadow-xl p-8 max-w-5xl mx-auto"
          >
            <div className="mb-12">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "#2e7d32" }}
              >
                Overall Progress
              </h3>
              <div className="relative w-full bg-gray-200 rounded-full h-6 mb-6">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="bg-gradient-to-r from-green-700 to-green-500 rounded-full h-6"
                ></motion.div>
                <div className="absolute top-0 left-0 w-full h-full flex justify-end items-center pr-3">
                  <span className="text-white font-bold text-sm">100%</span>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-sm font-medium">
                <span className="text-gray-600 flex flex-col items-center">
                  <span className="bg-green-700 w-3 h-3 rounded-full mb-1"></span>
                  Start
                </span>
                <span className="text-gray-600 flex flex-col items-center">
                  <span className="bg-green-500 w-3 h-3 rounded-full mb-1"></span>
                  In Progress
                </span>
                <span className="text-gray-600 flex flex-col items-center">
                  <span className="bg-green-700 w-3 h-3 rounded-full mb-1"></span>
                  Completion
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Completed Milestones - First Column */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="bg-green-100 text-green-700 rounded-full w-10 h-10 inline-flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  Completed Milestones
                </h3>
                <ul className="space-y-4 ml-4">
                  {completedMilestones.slice(0, 4).map((milestone, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex items-center bg-green-50 rounded-lg py-3 px-4 hover:shadow-md transition-shadow"
                    >
                      <span className="bg-green-500 rounded-full w-4 h-4 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-800">{milestone}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Completed Milestones - Second Column */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="bg-green-100 text-green-700 rounded-full w-10 h-10 inline-flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  Completed Milestones
                </h3>
                <ul className="space-y-4 ml-4">
                  {completedMilestones.slice(4).map((milestone, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex items-center bg-green-50 rounded-lg py-3 px-4 hover:shadow-md transition-shadow"
                    >
                      <span className="bg-green-500 rounded-full w-4 h-4 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-800">{milestone}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Project completion message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-5xl mx-auto mt-8 text-center"
          >
            <div className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              Project Completed Successfully! 🎉
            </div>
          </motion.div>

          {/* Downloadable resources section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 max-w-5xl mx-auto bg-green-50 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="bg-green-700 text-white py-4 px-6">
              <h3 className="text-xl font-bold">Project Documentation</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Access our project documentation and deliverables related to
                completed milestones
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center border border-green-200 rounded-lg p-4 hover:bg-green-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-green-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Project Proposal
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center border border-green-200 rounded-lg p-4 hover:bg-green-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-green-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Progress Report I
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center border border-green-200 rounded-lg p-4 hover:bg-green-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-green-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  Research Paper
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MilestonesPage;

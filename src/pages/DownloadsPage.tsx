import { motion } from "framer-motion";
import DocumentsSection from "../components/DocumentsSection";

const DownloadsPage = () => {
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
              Downloads
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
              Access all documents and presentations related to our research
              project
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ color: "#2e7d32" }}
            >
              Research Documentation
            </h2>
            <p className="text-lg text-gray-700">
              Our project is thoroughly documented at every stage. Below you'll
              find all the relevant files from our research, including project
              proposals, progress reports, presentations, and the final research
              paper. Feel free to download and explore our work.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Documents Section */}
      <DocumentsSection />

      {/* Additional Resources Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6 text-center"
              style={{ color: "#2e7d32" }}
            >
              Related Resources
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ul className="space-y-6">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start"
                >
                  <div
                    className="flex-shrink-0 rounded-full bg-green-100 p-2 flex items-center justify-center mr-4"
                    style={{ color: "#2e7d32" }}
                  >
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Coconut Research Institute Publications
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Official research papers and technical bulletins from the
                      Coconut Research Institute of Sri Lanka providing valuable
                      insights on coconut cultivation and processing.
                    </p>
                    <a
                      href="https://www.cri.gov.lk/publications/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 font-medium hover:underline"
                    >
                      Visit Resource →
                    </a>
                  </div>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start"
                >
                  <div
                    className="flex-shrink-0 rounded-full bg-green-100 p-2 flex items-center justify-center mr-4"
                    style={{ color: "#2e7d32" }}
                  >
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
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Smart Agriculture IoT Resources
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Educational materials and implementation guides for IoT
                      technologies in agriculture, including sensor deployments,
                      data processing, and integration.
                    </p>
                    <a
                      href="#"
                      className="text-green-700 font-medium hover:underline"
                    >
                      Visit Resource →
                    </a>
                  </div>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-start"
                >
                  <div
                    className="flex-shrink-0 rounded-full bg-green-100 p-2 flex items-center justify-center mr-4"
                    style={{ color: "#2e7d32" }}
                  >
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
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Project Video Demonstrations
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Video tutorials demonstrating the implementation and
                      operation of our Smart Coconut Farm Management System
                      components, including sensor installation and mobile app
                      usage.
                    </p>
                    <a
                      href="#"
                      className="text-green-700 font-medium hover:underline"
                    >
                      View Videos →
                    </a>
                  </div>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Download Help Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-green-50 rounded-xl overflow-hidden shadow-lg">
            <div className="bg-green-700 text-white py-4 px-6">
              <h3 className="text-xl font-bold">Need Help?</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                If you encounter any issues downloading our resources or require
                additional materials not listed here, please don't hesitate to
                reach out.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  href="/contact-us"
                  className="bg-green-700 text-white px-6 py-3 rounded-md text-center hover:bg-green-800 transition-colors"
                >
                  Contact Us
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  href="/faq"
                  className="border border-green-700 text-green-700 px-6 py-3 rounded-md text-center hover:bg-green-50 transition-colors"
                >
                  View FAQ
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default DownloadsPage;

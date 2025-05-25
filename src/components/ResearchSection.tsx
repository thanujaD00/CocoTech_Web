import { motion } from "framer-motion";

const ResearchSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#2e7d32" }}>
            Literature Survey
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our comprehensive review of existing research has identified key
            challenges and opportunities in smart coconut farm management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Global Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-700"
          >
            <div className="flex items-center space-x-6">
              <div className="bg-white rounded-full p-8 relative shadow-md">
                <span
                  className="absolute inset-0 flex items-center justify-center text-6xl font-bold"
                  style={{ color: "#2e7d32" }}
                >
                  4
                </span>
                <div className="w-32 h-32 opacity-50 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    width="100%"
                    height="100%"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#2e7d32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12H22"
                      stroke="#2e7d32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                      stroke="#2e7d32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#2e7d32" }}
                >
                  Sri Lanka is the 4th largest coconut exporter in the world
                </h3>
                <p className="text-gray-700">
                  Contributing significantly to global coconut production and
                  trade.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Research Findings */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 mb-6">
              Agriculture and related industries employed more than a quarter of
              the Sri Lankan workforce by the year 2019. However, due to
              frequent changes in climatic conditions.
            </p>
            <p className="text-lg text-gray-700">
              Machine learning and IoT technologies have shown promise in
              enhancing agricultural practices. Recent studies demonstrate that
              Random Forest and ARIMA models achieve high accuracy in coconut
              yield prediction based on historical data and meteorological
              parameters, while IoT sensors enable real-time monitoring of soil
              and environmental conditions.
            </p>
          </motion.div>
        </div>

        {/* Production Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold mb-6" style={{ color: "#2e7d32" }}>
            Production Statistics
          </h3>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 h-64 flex items-center justify-center">
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500">
                <img
                  src="../../public/assests/common/stat.png"
                  alt="Annual coconut production statistics"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-600 text-center">
            Annual coconut production figures (in millions of nuts)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;

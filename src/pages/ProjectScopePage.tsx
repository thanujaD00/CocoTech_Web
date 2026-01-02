// import React from "react";
import { motion } from "framer-motion";

const ProjectScopePage = () => {
  // const researchGaps = [
  //   {
  //     title: "Coconut Yield Prediction",
  //     description:
  //       "Insufficient combination of agronomic and environmental elements in prediction models. Current systems focus on limited factors such as rainfall and temperature, but lack integration of soil type, tree variety, and other critical parameters that affect coconut productivity.",
  //     icon: "📊",
  //     color: "#4CAF50",
  //   },
  //   {
  //     title: "Copra Quality Assessment",
  //     description:
  //       "Traditional methods of copra quality assessment rely heavily on manual inspection, which can be subjective and inconsistent. There is a need for automated systems that can accurately detect fungal infections and grade copra quality based on objective parameters.",
  //     icon: "🔍",
  //     color: "#2196F3",
  //   },
  //   {
  //     title: "Water Management",
  //     description:
  //       "Conventional irrigation methods often lead to either overwatering or insufficient watering, affecting tree health and yield. Smart irrigation systems that optimize water usage based on real-time soil moisture data are needed for sustainable coconut farming.",
  //     icon: "💧",
  //     color: "#00BCD4",
  //   },
  //   {
  //     title: "Copra Drying Optimization",
  //     description:
  //       "The drying process for copra significantly impacts oil extraction efficiency. Current methods lack precision in monitoring moisture content and determining optimal drying times, leading to inconsistent quality and reduced oil yield.",
  //     icon: "🔆",
  //     color: "#FF9800",
  //   },
  // ];

  const objectives = [
    {
      title: "Coconut Yield Prediction",
      description:
        "Develop machine learning models that integrate multiple environmental and agronomic factors to accurately predict coconut yields. This will help in identifying patterns and trends to optimize production planning and resource allocation.",
      icon: "📈",
    },
    {
      title: "Copra Fungus Detection & Grading",
      description:
        "Create an automated system using computer vision and deep learning techniques to detect fungal contamination in copra and classify it into quality grades according to industry standards, ensuring consistent quality assessment.",
      icon: "🔬",
    },
    {
      title: "Intelligent Water Scheduling",
      description:
        "Design a smart irrigation system that combines IoT soil moisture sensors, weather data, and machine learning algorithms to provide precise watering recommendations, reducing water wastage while maintaining optimal soil moisture levels.",
      icon: "💦",
    },
    {
      title: "Copra Drying Time Prediction",
      description:
        "Implement an IoT-based moisture monitoring system that uses environmental data and initial moisture content to predict optimal drying times, maximizing oil extraction efficiency and ensuring consistent product quality.",
      icon: "⏱️",
    },
  ];

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  // };

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
              Project Scope
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
              Developing an Integrated IoT and Machine Learning System for Smart
              Coconut Farm Management
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Literature Survey */}
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
              Literature Survey
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-12 mb-12 max-w-5xl mx-auto"
          >
            <div className="md:w-1/3 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-full p-8 relative shadow-lg"
              >
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
              </motion.div>
            </div>

            <div className="md:w-2/3">
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl font-bold mb-4"
                style={{ color: "#2e7d32" }}
              >
                Sri Lanka is the 4th largest coconut exporter in the world
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-700"
              >
                Agriculture and related industries employed more than a quarter
                of the Sri Lankan workforce by the year 2019. However, due to
                frequent changes in climatic conditions, disease spread has
                increased resulting in severe crop losses in Sri Lankan
                cultivation.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-lg text-gray-700 mt-4"
              >
                Machine learning and IoT technologies have shown promise in
                enhancing agricultural practices. Recent studies demonstrate
                that Random Forest and ARIMA models achieve high accuracy in
                coconut yield prediction based on historical data and
                meteorological parameters, while IoT sensors enable real-time
                monitoring of soil and environmental conditions.
              </motion.p>
            </div>
          </motion.div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 max-w-4xl mx-auto"
          ></motion.div>
        </div>
      </section>

      {/* Research Gap */}
      <section className="py-16 bg-white">
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
              Research Gap
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto">
              Our analysis of existing research revealed significant gaps in the
              application of smart technologies to coconut farming:
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Problem & Solution */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "#2e7d32" }}
              >
                Research Problem
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: "#2e7d32" }}
                >
                  How can we integrate IoT, machine learning, and real-time data
                  analytics to optimize coconut farming practices and improve
                  yield and quality?
                </h3>
                <p className="text-gray-700">
                  The coconut industry in Sri Lanka faces challenges related to
                  yield prediction, water management, copra quality assessment,
                  and drying process optimization. Traditional farming methods
                  lack precision and efficiency, resulting in suboptimal
                  resource utilization and inconsistent product quality. There
                  is a need for an integrated system that addresses these
                  challenges through smart technology integration.
                </p>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "#2e7d32" }}
              >
                Proposed Solution
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-gray-700 mb-4">
                  CocoTech is an integrated smart farm management system that
                  combines multiple technologies to address key challenges in
                  coconut cultivation:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div
                      className="flex-shrink-0 rounded-full bg-green-100 p-1 flex items-center justify-center mr-3 mt-1"
                      style={{ color: "#2e7d32" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <span>
                      <strong style={{ color: "#2e7d32" }}>
                        Yield Prediction:
                      </strong>{" "}
                      Machine learning models that analyze environmental
                      factors, soil conditions, and historical data to forecast
                      coconut production
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div
                      className="flex-shrink-0 rounded-full bg-green-100 p-1 flex items-center justify-center mr-3 mt-1"
                      style={{ color: "#2e7d32" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <span>
                      <strong style={{ color: "#2e7d32" }}>
                        Copra Quality Management:
                      </strong>{" "}
                      Computer vision and deep learning for fungal detection and
                      automated grading of copra quality
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div
                      className="flex-shrink-0 rounded-full bg-green-100 p-1 flex items-center justify-center mr-3 mt-1"
                      style={{ color: "#2e7d32" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <span>
                      <strong style={{ color: "#2e7d32" }}>
                        Smart Irrigation:
                      </strong>{" "}
                      IoT soil moisture sensors and weather data integration for
                      optimized water scheduling
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div
                      className="flex-shrink-0 rounded-full bg-green-100 p-1 flex items-center justify-center mr-3 mt-1"
                      style={{ color: "#2e7d32" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <span>
                      <strong style={{ color: "#2e7d32" }}>
                        Drying Optimization:
                      </strong>{" "}
                      Moisture monitoring and predictive analytics for
                      optimizing copra drying process and maximizing oil
                      extraction
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Objectives */}
      <section className="py-16 bg-white">
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
              Research Objectives
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          </motion.div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {objectives.map((objective, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                key={index}
                className={`flex mb-16 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block md:w-1/6">
                  <div className="relative h-full">
                    <div
                      className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary transform -translate-x-1/2"
                      style={{ backgroundColor: "#2e7d32" }}
                    ></div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="absolute top-0 left-1/2 transform -translate-x-1/2"
                    >
                      <div
                        className="text-white rounded-full w-12 h-12 flex items-center justify-center"
                        style={{ backgroundColor: "#2e7d32" }}
                      >
                        <span className="text-xl">{objective.icon}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full md:w-5/6 bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: "#2e7d32" }}
                  >
                    {objective.title}
                  </h3>
                  <p className="text-gray-700">{objective.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
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
              Expected Outcomes
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start"
                >
                  <div
                    className="flex-shrink-0 rounded-full bg-green-100 p-1 flex items-center justify-center mr-3 mt-1"
                    style={{ color: "#2e7d32" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  </div>
                  <span>
                    <strong>Improved Crop Management:</strong> More efficient
                    resource allocation and farming practices through
                    data-driven decision making
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start"
                >
                  <div
                    className="flex-shrink-0 rounded-full bg-green-100 p-1 flex items-center justify-center mr-3 mt-1"
                    style={{ color: "#2e7d32" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  </div>
                  <span>
                    <strong>Enhanced Yield Prediction:</strong> More accurate
                    forecasting of coconut production, enabling better planning
                    and market strategies
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-start"
                >
                  <div
                    className="flex-shrink-0 rounded-full bg-green-100 p-1 flex items-center justify-center mr-3 mt-1"
                    style={{ color: "#2e7d32" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  </div>
                  <span>
                    <strong>Water Conservation:</strong> Reduction in water
                    usage by 20-30% through optimized irrigation scheduling
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-start"
                >
                  <div
                    className="flex-shrink-0 rounded-full bg-green-100 p-1 flex items-center justify-center mr-3 mt-1"
                    style={{ color: "#2e7d32" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  </div>
                  <span>
                    <strong>Improved Copra Quality:</strong> More consistent and
                    higher quality copra production with reduced fungal
                    contamination
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex items-start"
                >
                  <div
                    className="flex-shrink-0 rounded-full bg-green-100 p-1 flex items-center justify-center mr-3 mt-1"
                    style={{ color: "#2e7d32" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  </div>
                  <span>
                    <strong>Optimized Drying Process:</strong> Increased oil
                    extraction efficiency through precision drying time
                    prediction
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-start"
                >
                  <div
                    className="flex-shrink-0 rounded-full bg-green-100 p-1 flex items-center justify-center mr-3 mt-1"
                    style={{ color: "#2e7d32" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  </div>
                  <span>
                    <strong>Technology Transfer:</strong> Development of
                    user-friendly mobile and web applications for farmers to
                    access advanced agricultural technology
                  </span>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto bg-green-50 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="bg-green-700 text-white py-4 px-6">
              <h3 className="text-xl font-bold">Join Our Research</h3>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-gray-700 mb-6">
                Our project aims to revolutionize coconut farming through smart
                technology integration. We welcome collaboration with farmers,
                researchers, and industry stakeholders.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                {/* <motion.a
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  href="/contact"
                  className="bg-green-700 text-white px-6 py-3 rounded-md text-center hover:bg-green-800 transition-colors"
                >
                  Contact Research Team
                </motion.a> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectScopePage;

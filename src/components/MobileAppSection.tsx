import { motion } from "framer-motion";
// import { useState } from "react";

const MobileAppSection = () => {
  const appFeatures = [
    {
      title: "Copra Quality Assessment",
      description:
        "Take photos of copra to instantly detect fungal infections and get quality grading based on color, texture, and size parameters.",
      icon: "📸",
      screenshot: "/CocoTech_Web/assests/app/copra.jpeg",
    },
    {
      title: "Intelligent Water Scheduling",
      description:
        "Monitor soil moisture levels in real-time and receive intelligent watering recommendations based on weather data and plant needs.",
      icon: "💧",
      screenshot: "/CocoTech_Web/assests/app/watering_shedule.jpeg",
    },
    {
      title: "Yield Prediction",
      description:
        "Get accurate coconut yield forecasts based on environmental factors, historical data, and current growing conditions.",
      icon: "📊",
      screenshot: "/CocoTech_Web/assests/app/yeald_prediction.jpeg",
    },
    {
      title: "Drying Time Optimization",
      description:
        "Monitor copra moisture levels and get optimal drying time predictions to maximize oil extraction efficiency.",
      icon: "⏱️",
      screenshot: "/CocoTech_Web/assests/app/copra_reading.jpeg",
    },
  ];

  const appBenefits = [
    "Real-time monitoring and alerts",
    "Offline functionality for remote areas",
    "Multi-language support (English, Sinhala, Tamil)",
    "Easy-to-use interface designed for farmers",
    "Data synchronization across devices",
    "Weather integration and forecasting",
    "Historical data tracking and analytics",
    "Expert recommendations and tips",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#2e7d32" }}
          >
            CocoTech Mobile Application
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bringing smart farming technology directly to farmers' hands with
            our comprehensive mobile application
          </p>
        </motion.div>

        {/* App Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "#2e7d32" }}
            >
              Smart Farming at Your Fingertips
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Our mobile application is the central hub for all CocoTech
              features, designed specifically for coconut farmers and
              agricultural professionals. Built with React Native for
              cross-platform compatibility, the app provides seamless access to
              AI-powered insights and IoT sensor data.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Whether you're in the field checking copra quality or monitoring
              irrigation systems from home, the CocoTech app ensures you have
              all the tools needed for optimal farm management.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold text-green-700">95%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold text-green-700">24/7</div>
                <div className="text-gray-600">Monitoring</div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/drive/folders/12tewkcs4cQEJtant_Ewzc-fWTJe9wqGm?usp=sharing"
                className="flex items-center justify-center bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Download APK
              </motion.a>
              {/* <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://play.google.com/store/apps/details?id=com.cocotech.app"
                className="flex items-center justify-center border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </motion.a> */}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Phone mockup */}
              {/* Clean image display - No phone mockup */}
              <div className="relative mx-auto w-64 h-auto rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/CocoTech_Web/assests/app/home.jpeg"
                  alt="CocoTech App Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating feature icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-white p-3 rounded-full shadow-lg"
              >
                <span className="text-2xl">📱</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-12 -right-6 bg-white p-3 rounded-full shadow-lg"
              >
                <span className="text-2xl">🌱</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute bottom-12 -left-6 bg-white p-3 rounded-full shadow-lg"
              >
                <span className="text-2xl">📊</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* App Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center mb-12"
            style={{ color: "#2e7d32" }}
          >
            Key Features
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4 text-xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2 text-gray-800">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>

                {/* Feature Screenshot - No border */}
                <div className="flex justify-center">
                  <div className="w-48 h-72 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={feature.screenshot}
                      alt={`${feature.title} Screenshot`}
                      className="w-full h-full object-cover"
                      onError={(e: any) => {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/192x288/f0f0f0/888888?text=${encodeURIComponent(
                          feature.title
                        )}`;
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* App Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-20"
        >
          <h3
            className="text-2xl font-bold text-center mb-8"
            style={{ color: "#2e7d32" }}
          >
            Why Choose CocoTech Mobile App?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start"
              >
                <div className="bg-green-100 p-2 rounded-full mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-green-700"
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
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h4 className="text-xl font-bold mb-4" style={{ color: "#2e7d32" }}>
              Technical Specifications
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Platform:</strong> React Native (iOS & Android)
              </li>
              <li>
                <strong>Size:</strong> ~25 MB
              </li>
              <li>
                <strong>Requirements:</strong> Android 6.0+ / iOS 11.0+
              </li>
              <li>
                <strong>Languages:</strong> English, Sinhala, Tamil
              </li>
              <li>
                <strong>Offline Mode:</strong> Core features available
              </li>
              <li>
                <strong>Camera:</strong> Required for image analysis
              </li>
              <li>
                <strong>GPS:</strong> For location-based features
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h4 className="text-xl font-bold mb-4" style={{ color: "#2e7d32" }}>
              Development Stack
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Frontend:</strong> React Native, Expo
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express
              </li>
              <li>
                <strong>Database:</strong> Firebase, MongoDB
              </li>
              <li>
                <strong>ML Models:</strong> TensorFlow Lite
              </li>
              <li>
                <strong>Image Processing:</strong> OpenCV
              </li>
              <li>
                <strong>Weather API:</strong> OpenWeatherMap
              </li>
              <li>
                <strong>Maps:</strong> Google Maps API
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center bg-green-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#2e7d32" }}>
            Ready to Transform Your Coconut Farming?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Download the CocoTech mobile app today and start using cutting-edge
            technology to optimize your coconut farm management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/drive/folders/12tewkcs4cQEJtant_Ewzc-fWTJe9wqGm?usp=sharing"
              className="inline-flex items-center justify-center bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Now
            </motion.a>
            {/* <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/project-scope#features"
              className="inline-flex items-center justify-center border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-medium"
            >
              Learn More Features
            </motion.a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileAppSection;

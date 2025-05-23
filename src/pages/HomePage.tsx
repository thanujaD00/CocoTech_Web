import Hero from "../components/Hero";
import ResearchSection from "../components/ResearchSection";
import MethodologySection from "../components/MethodologySection";
import TeamSection from "../components/TeamSection";
import TechnologiesSection from "../components/TechnologiesSection";

const HomePage = () => {
  const researchGaps = [
    {
      title: "Coconut Yield Prediction",
      description:
        "Insufficient combination of agronomic and environmental elements in prediction models. Current systems focus on limited factors such as rainfall and temperature, but lack integration of soil type, tree variety, and other critical parameters.",
    },
    {
      title: "Copra Quality Assessment",
      description:
        "Traditional copra quality assessment relies on manual inspection, which is subjective and inconsistent. There is a need for automated systems that can accurately detect fungal infections and grade copra quality.",
    },
    {
      title: "Water Management",
      description:
        "Conventional irrigation methods often lead to either overwatering or insufficient watering, affecting tree health and yield. Smart irrigation systems are needed for sustainable and efficient coconut farming.",
    },
    {
      title: "Copra Drying Optimization",
      description:
        "Traditional copra drying methods rely on inconsistent techniques such as sun drying and kiln drying, which are weather-dependent and labor-intensive. There is a need for precise moisture monitoring and optimal drying time prediction to ensure consistent quality and maximize oil extraction efficiency.",
    },
  ];

  return (
    <div>
      <Hero />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#2e7d32" }}
            >
              Introduction
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Coconut farming in tropical regions faces significant challenges
              related to productivity, quality, and sustainability. Our project
              develops an Automated Smart Coconut Farm Management System that
              leverages machine learning and IoT technologies to revolutionize
              farming practices.
            </p>
            <p className="text-lg text-gray-700">
              This integrated system focuses on four key areas: coconut yield
              prediction, copra fungus detection and grading, intelligent water
              scheduling, and copra drying time optimization. By combining
              real-time monitoring, predictive analytics, and intelligent
              decision support, we aim to enhance productivity and
              sustainability in the coconut industry.
            </p>
          </div>
        </div>
      </section>

      <ResearchSection />

      {/* Research Gap Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "#2e7d32" }}
          >
            Research Gap
          </h2>

          <p className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto">
            Our analysis of existing research revealed significant gaps in the
            application of smart technologies to coconut farming:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {researchGaps.map((gap, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#2e7d32" }}
                >
                  {gap.title}
                </h3>
                <p className="text-gray-700">{gap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MethodologySection />

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "#2e7d32" }}
          >
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div
                  className="bg-green-100 p-3 rounded-full mr-4"
                  style={{ color: "#2e7d32" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
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
                <h3 className="text-xl font-bold" style={{ color: "#2e7d32" }}>
                  Yield Prediction
                </h3>
              </div>
              <p className="text-gray-700">
                Using machine learning algorithms to analyze environmental
                factors, historical data, and agronomic variables to predict
                coconut yields with high accuracy. This helps farmers and
                stakeholders in production planning and resource allocation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div
                  className="bg-green-100 p-3 rounded-full mr-4"
                  style={{ color: "#2e7d32" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
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
                <h3 className="text-xl font-bold" style={{ color: "#2e7d32" }}>
                  Copra Quality Assessment
                </h3>
              </div>
              <p className="text-gray-700">
                Automated detection of fungal infections in copra and quality
                grading using computer vision and deep learning techniques. This
                ensures consistent quality assessment and reduces the risk of
                contaminated products.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div
                  className="bg-green-100 p-3 rounded-full mr-4"
                  style={{ color: "#2e7d32" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
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
                <h3 className="text-xl font-bold" style={{ color: "#2e7d32" }}>
                  Smart Irrigation
                </h3>
              </div>
              <p className="text-gray-700">
                Optimized water scheduling using IoT soil moisture sensors,
                weather data, and machine learning algorithms. This reduces
                water wastage while maintaining optimal soil moisture levels for
                coconut tree health.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div
                  className="bg-green-100 p-3 rounded-full mr-4"
                  style={{ color: "#2e7d32" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
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
                <h3 className="text-xl font-bold" style={{ color: "#2e7d32" }}>
                  Drying Time Prediction
                </h3>
              </div>
              <p className="text-gray-700">
                IoT-based moisture monitoring system that predicts optimal
                drying times for copra production. This maximizes oil extraction
                efficiency and ensures consistent product quality across
                batches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use the Technologies component */}
      <TechnologiesSection />

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "#2e7d32" }}
          >
            Expected Impact
          </h2>

          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>
                  <strong>Increased Yield:</strong> Up to 20% improvement in
                  coconut production through optimized farming practices
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>
                  <strong>Resource Efficiency:</strong> 20-30% reduction in
                  water usage through smart irrigation scheduling
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>
                  <strong>Quality Improvement:</strong> Significant reduction in
                  fungal contamination and consistent copra quality
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>
                  <strong>Economic Benefits:</strong> Improved profitability for
                  coconut farmers through enhanced yields and reduced resource
                  costs
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>
                  <strong>Technology Adoption:</strong> Increased use of smart
                  farming technologies in the coconut industry
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <TeamSection />
    </div>
  );
};

export default HomePage;

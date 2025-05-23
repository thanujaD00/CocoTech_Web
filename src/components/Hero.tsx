const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('../../public/assests/common/main_logo.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10 text-white text-center">
        {/* Icon */}
        <div className="inline-block p-4 mb-8 bg-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-green-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Automated Smart Coconut Farm Management System
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10">
          Leveraging IoT, ML, and real-time analytics to revolutionize coconut
          farming
        </p>

        <button
          onClick={() => {
            const element = document.getElementById("projectScope");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="px-8 py-3 bg-green-700 text-white rounded-md text-lg font-medium hover:bg-green-800 transition-colors"
        >
          Learn More
        </button>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;

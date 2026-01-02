import { useRef, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import sections instead of pages
import Hero from "./components/Hero";
import ResearchSection from "./components/ResearchSection";
import MethodologySection from "./components/MethodologySection";
import TechnologiesSection from "./components/TechnologiesSection";
import TimelineSection from "./components/TimelineSection";
// import ContactForm from "./components/ContactForm";
import MobileAppSection from "./components/MobileAppSection";

// Reuse content from pages but as section components
import ProjectScopeContent from "./pages/ProjectScopePage";
import AboutUsContent from "./pages/ContactPage";

function App() {
  // Create refs for each section that we'll scroll to
  const homeRef = useRef<HTMLDivElement>(null);
  const projectScopeRef = useRef<HTMLDivElement>(null);
  const mobileAppRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    let targetRef;
    switch (sectionId) {
      case "home":
        targetRef = homeRef;
        break;
      case "projectScope":
        targetRef = projectScopeRef;
        break;
      case "mobileApp":
        targetRef = mobileAppRef;
        break;
      case "milestones":
        targetRef = milestonesRef;
        break;
      case "aboutUs":
        targetRef = aboutUsRef;
        break;
      case "contact":
        targetRef = contactRef;
        break;
      default:
        targetRef = null;
    }

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Effect to handle hash navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace("#", "");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, []);

  return (
    <Router basename="/cocotech-website">
      <div className="flex flex-col min-h-screen">
        <Navbar scrollToSection={scrollToSection} />
        <main className="flex-grow">
          {/* Home Section */}
          <div ref={homeRef} id="home">
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
                    Coconut farming in tropical regions faces significant
                    challenges related to productivity, quality, and
                    sustainability. Our project develops an Automated Smart
                    Coconut Farm Management System that leverages machine
                    learning and IoT technologies to revolutionize farming
                    practices.
                  </p>
                  <p className="text-lg text-gray-700">
                    This integrated system focuses on four key areas: coconut
                    yield prediction, copra fungus detection and grading,
                    intelligent water scheduling, and copra drying time
                    optimization. By combining real-time monitoring, predictive
                    analytics, and intelligent decision support, we aim to
                    enhance productivity and sustainability in the coconut
                    industry.
                  </p>
                </div>
              </div>
            </section>

            <ResearchSection />
            <TechnologiesSection />
          </div>

          {/* Project Scope Section */}
          <div ref={projectScopeRef} id="projectScope">
            <ProjectScopeContent />
          </div>

          {/* Mobile App Section */}
          <div ref={mobileAppRef} id="mobileApp">
            <MobileAppSection />
          </div>

          {/* Milestones Section */}
          <div ref={milestonesRef} id="milestones">
            <TimelineSection />
            <MethodologySection />
          </div>

          {/* About Us Section */}
          <div ref={aboutUsRef} id="aboutUs">
            <AboutUsContent />
          </div>

          {/* Contact Section */}
          {/* <div ref={contactRef} id="contact">
            <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: "#2e7d32" }}
                  >
                    Contact Us
                  </h2>
                  <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
                  <p className="text-xl">
                    Get in touch with our team for any inquiries or collaborations
                  </p>
                </div>
              </div>
              <ContactForm />
            </section>
          </div> */}
        </main>
        <Footer scrollToSection={scrollToSection} />
      </div>
    </Router>
  );
}

export default App;

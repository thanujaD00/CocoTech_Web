import { motion } from "framer-motion";
import { FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTensorflow,
  SiKeras,
  SiMongodb,
  SiFirebase,
  SiApachekafka,
  SiGooglecolab,
  SiGooglemaps,
  SiJsonwebtokens,
  SiThreedotjs,
} from "react-icons/si";

const TechnologiesSection = () => {
  const technologies = [
    { name: "Python", icon: <FaPython size={40} />, color: "#3776AB" },
    { name: "React Native", icon: <FaReact size={40} />, color: "#61DAFB" },
    { name: "TensorFlow", icon: <SiTensorflow size={40} />, color: "#FF6F00" },
    { name: "Keras", icon: <SiKeras size={40} />, color: "#D00000" },
    { name: "MongoDB", icon: <SiMongodb size={40} />, color: "#47A248" },
    { name: "Firebase", icon: <SiFirebase size={40} />, color: "#FFCA28" },
    {
      name: "Node",
      icon: <FaNodeJs size={40} />,
      color: "#339933",
    },
    { name: "Kafka", icon: <SiApachekafka size={40} />, color: "#231F20" },

    { name: "Google Maps", icon: <SiGooglemaps size={40} />, color: "#4285F4" },
    { name: "JWT", icon: <SiJsonwebtokens size={40} />, color: "#000000" },
  ];

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
            Technologies Used
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our project leverages cutting-edge technologies to create an
            integrated system for smart coconut farm management.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div
                className="rounded-full p-4 mb-3 w-20 h-20 flex items-center justify-center shadow-md"
                style={{
                  backgroundColor: "white",
                  color: tech.color,
                }}
              >
                {tech.icon}
              </div>
              <h3 className="text-lg font-medium text-center">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;

// import { useState } from "react";
// import { motion } from "framer-motion";

// const TimelineSection = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   const milestones = [
//     {
//       date: "March 2021",
//       title: "Project Proposal",
//       description:
//         "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
//       marks: 6,
//       percentage: 6,
//       icon: "📝",
//       color: "#4CAF50",
//     },
//     {
//       date: "June 2021",
//       title: "Progress Presentation I",
//       description:
//         "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
//       marks: 10,
//       percentage: 10,
//       icon: "📊",
//       color: "#2196F3",
//     },
//     {
//       date: "July 2021",
//       title: "Research Paper",
//       description:
//         "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge",
//       marks: 10,
//       percentage: 10,
//       icon: "📄",
//       color: "#9C27B0",
//     },
//     {
//       date: "September 2021",
//       title: "Progress Presentation II",
//       description:
//         "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.",
//       marks: 18,
//       percentage: 18,
//       icon: "🔍",
//       color: "#FF9800",
//     },
//     {
//       date: "October 2021",
//       title: "Website Assessment",
//       description:
//         "The Website helps to promote our research project and reveals all details related to the project.",
//       marks: 2,
//       percentage: 2,
//       icon: "🌐",
//       color: "#00BCD4",
//     },
//     {
//       date: "November 2021",
//       title: "Final Report",
//       description:
//         "Final Report evaluates the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.",
//       marks: 19,
//       percentage: 19,
//       icon: "🏆",
//       color: "#F44336",
//     },
//   ];

//   const fadeInVariants = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-16"
//         >
//           <h2
//             className="text-3xl md:text-4xl font-bold mb-4"
//             style={{ color: "#2e7d32" }}
//           >
//             Project Timeline
//           </h2>
//           <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Track our project's journey from inception to completion through
//             these key milestones
//           </p>
//         </motion.div>

//         <div className="relative max-w-5xl mx-auto">
//           {/* Vertical timeline line */}
//           <div className="absolute left-6 md:left-1/2 top-0 h-full w-1 bg-gray-200 transform md:-translate-x-1/2"></div>

//           {milestones.map((milestone, index) => (
//             <motion.div
//               key={index}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={fadeInVariants}
//               className={`relative mb-16 ${
//                 index % 2 === 0 ? "md:flex-row-reverse" : ""
//               } flex flex-col md:flex-row`}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* Timeline dot */}
//               <div
//                 className="absolute left-6 md:left-1/2 w-12 h-12 rounded-full bg-white border-4 transform translate-y-2 md:-translate-x-1/2 z-10 flex items-center justify-center shadow-lg"
//                 style={{ borderColor: milestone.color }}
//               >
//                 <span className="text-xl">{milestone.icon}</span>
//               </div>

//               {/* Content */}
//               <div
//                 className={`pl-20 md:pl-0 ${
//                   index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
//                 } md:w-1/2 relative`}
//               >
//                 <div
//                   className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4`}
//                   style={{
//                     borderColor: milestone.color,
//                     transform:
//                       hoveredIndex === index ? "scale(1.03)" : "scale(1)",
//                   }}
//                 >
//                   <div
//                     className="text-white text-sm font-semibold px-4 py-1 inline-block rounded-full mb-3"
//                     style={{ backgroundColor: milestone.color }}
//                   >
//                     {milestone.date}
//                   </div>
//                   <h3
//                     className="text-xl font-bold mb-3"
//                     style={{ color: milestone.color }}
//                   >
//                     {milestone.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4">{milestone.description}</p>

//                   <div>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-sm font-medium text-gray-500">
//                         Marks Allocated
//                       </span>
//                       <span className="text-sm font-bold">
//                         {milestone.marks}/100
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-3">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${milestone.percentage}%` }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 1, delay: 0.3 }}
//                         className="h-3 rounded-full"
//                         style={{ backgroundColor: milestone.color }}
//                       ></motion.div>
//                     </div>
//                     <div
//                       className="mt-2 text-sm text-right font-semibold"
//                       style={{ color: milestone.color }}
//                     >
//                       {milestone.percentage}%
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Empty space for alternating layout */}
//               <div className={`hidden md:block md:w-1/2`}></div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Current status indicator */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//           className="mt-12 text-center"
//         >
//           <div className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
//             Project Completed Successfully! 🎉
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default TimelineSection;
import { useState } from "react";
import { motion } from "framer-motion";

const TimelineSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const milestones = [
    {
      date: "December 2024",
      title: "Project Proposal",
      description:
        "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
      marks: 6,
      percentage: 6,
      icon: "📝",
      color: "#4CAF50",
    },
    {
      date: "February 2025",
      title: "Progress Presentation I",
      description:
        "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
      marks: 10,
      percentage: 10,
      icon: "📊",
      color: "#2196F3",
    },

    {
      date: "April 2025",
      title: "Progress Presentation II",
      description:
        "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.",
      marks: 15,
      percentage: 15,
      icon: "🔍",
      color: "#FF9800",
    },
    {
      date: "March 2025",
      title: "Research Paper",
      description:
        "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge",
      marks: 10,
      percentage: 10,
      icon: "📄",
      color: "#9C27B0",
    },
    {
      date: "May 2025",
      title: "Website Assessment",
      description:
        "The Website helps to promote our research project and reveals all details related to the project.",
      marks: 2,
      percentage: 2,
      icon: "🌐",
      color: "#00BCD4",
    },
    {
      date: "May 2025",
      title: "Logbook",
      description:
        "Status of the project is validated through the Logbook. This also includes 'Status documents' I & II.",
      marks: 8,
      percentage: 8,
      icon: "📒",
      color: "#795548",
    },
    {
      date: "May 2025",
      title: "Final Report",
      description:
        "Final Report evaluates the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.",
      marks: 19,
      percentage: 19,
      icon: "🏆",
      color: "#F44336",
    },
    {
      date: "May 2025",
      title: "Final Presentation & Viva",
      description:
        "Viva is held individually to assess each members contribution to the project and knowledge gained.",
      marks: 30,
      percentage: 30,
      icon: "🎤",
      color: "#E91E63",
    },
  ];

  const fadeInVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#2e7d32" }}
          >
            Project Timeline
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track our project's journey from inception to completion through
            these key milestones
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-1 bg-gray-200 transform md:-translate-x-1/2"></div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
              className={`relative mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } flex flex-col md:flex-row`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-6 md:left-1/2 w-12 h-12 rounded-full bg-white border-4 transform translate-y-2 md:-translate-x-1/2 z-10 flex items-center justify-center shadow-lg"
                style={{ borderColor: milestone.color }}
              >
                <span className="text-xl">{milestone.icon}</span>
              </div>

              {/* Content */}
              <div
                className={`pl-20 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                } md:w-1/2 relative`}
              >
                <div
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4`}
                  style={{
                    borderColor: milestone.color,
                    transform:
                      hoveredIndex === index ? "scale(1.03)" : "scale(1)",
                  }}
                >
                  <div
                    className="text-white text-sm font-semibold px-4 py-1 inline-block rounded-full mb-3"
                    style={{ backgroundColor: milestone.color }}
                  >
                    {milestone.date}
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: milestone.color }}
                  >
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{milestone.description}</p>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-500">
                        Marks Allocated
                      </span>
                      <span className="text-sm font-bold">
                        {milestone.marks}/100
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${milestone.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-3 rounded-full"
                        style={{ backgroundColor: milestone.color }}
                      ></motion.div>
                    </div>
                    <div
                      className="mt-2 text-sm text-right font-semibold"
                      style={{ color: milestone.color }}
                    >
                      {milestone.percentage}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className={`hidden md:block md:w-1/2`}></div>
            </motion.div>
          ))}
        </div>

        {/* Current status indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
            Project In Progress - December 2024 to May 2025 🚀
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;

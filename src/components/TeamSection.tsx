import { motion } from "framer-motion";

const TeamSection = () => {
  const supervisors = [
    {
      name: "Dr. Sanvitha Kasthuriarachchi",
      role: "Supervisor",
      institution: "Sri Lanka Institute of Information Technology",
      department: "Information Technology",
      image: "/CocoTech_Web/assests/team/supervisor.jpeg",
    },
    {
      name: "Miss. Sadeepa Kuruppu",
      role: "Co-Supervisor",
      institution: "Sri Lanka Institute of Information Technology",
      department: "Software Engineering",
      image: "/CocoTech_Web/assests/team/co_supervisor.jpeg",
    },
    {
      name: "Dr. Chandi Yalegama",
      role: "External-Supervisor",
      institution: "Coconut Research Institute of Sri Lanka",
      department: "Crop Protection Division",
      image: "/CocoTech_Web/assests/team/external_supervisor.jpeg",
    },
  ];

  const members = [
    {
      name: "Ruwanpura M.W.H.S.L",
      role: "Group Member",
      studentId: "IT21191688",
      institution: "Sri Lanka Institute of Information Technology",
      department: "Software Engineering",
      image: "/CocoTech_Web/assests/team/sadeepa.jpeg",
    },
    {
      name: "Rathnayaka G.T.S.T",
      role: "Group Member",
      studentId: "IT21191442",
      institution: "Sri Lanka Institute of Information Technology",
      department: "Software Engineering",
      image: "/CocoTech_Web/assests/team/sandeepa.jpeg",
    },
    {
      name: "Hewapathiranage T.K",
      role: "Group Member",
      studentId: "IT21071652",
      institution: "Sri Lanka Institute of Information Technology",
      department: "Software Engineering",
      image: "/CocoTech_Web/assests/team/kamishka.jpeg",
    },
    {
      name: "Wickramasinghe T.D.B",
      role: "Group Member",
      studentId: "IT21096570",
      institution: "Sri Lanka Institute of Information Technology",
      department: "Software Engineering",
      image: "/CocoTech_Web/assests/team/thanuja.jpeg",
    },
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
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our dedicated team of researchers combines expertise in software
            engineering, IoT, and machine learning to create innovative
            solutions for coconut farming.
          </p>
        </motion.div>

        {/* Supervisors */}
        <div className="mb-16">
          <h3
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: "#2e7d32" }}
          >
            Supervisors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supervisors.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = `https://via.placeholder.com/300x300?text=${person.name.charAt(
                        0
                      )}`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{person.name}</h4>
                  <div className="bg-green-100 text-green-800 text-sm px-3 py-1 inline-block rounded mb-3">
                    {person.role}
                  </div>
                  <p className="text-gray-700 mb-1">{person.institution}</p>
                  <p className="text-gray-700">
                    <strong>Department:</strong> {person.department}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: "#2e7d32" }}
          >
            Team Members
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = `https://via.placeholder.com/300x300?text=${person.name.charAt(
                        0
                      )}`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{person.name}</h4>
                  <div className="bg-green-100 text-green-800 text-sm px-3 py-1 inline-block rounded mb-3">
                    {person.role}
                  </div>
                  <p className="text-gray-700 mb-2">
                    <strong>Student ID:</strong> {person.studentId}
                  </p>
                  <p className="text-gray-700 mb-1">{person.institution}</p>
                  <p className="text-gray-700">
                    <strong>Department:</strong> {person.department}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

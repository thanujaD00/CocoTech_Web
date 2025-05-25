import { motion } from "framer-motion";
// import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  // const contactInfo = [
  //   {
  //     title: "Email",
  //     value: "cocotech@example.com",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         className="h-6 w-6"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         stroke="currentColor"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth={2}
  //           d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     title: "Phone",
  //     value: "+94 11 234 5678",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         className="h-6 w-6"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         stroke="currentColor"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth={2}
  //           d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     title: "Address",
  //     value: "SLIIT, New Kandy Road, Malabe, Sri Lanka",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         className="h-6 w-6"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         stroke="currentColor"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth={2}
  //           d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
  //         />
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth={2}
  //           d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
  //         />
  //       </svg>
  //     ),
  //   },
  // ];

  return (
    <div className="pt-16">
      {/* Page Header */}

      {/* Contact Info Cards */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="py-16 bg-white"
      ></motion.section>
    </div>
  );
};

export default ContactPage;

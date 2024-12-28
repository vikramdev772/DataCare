import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center min-h-screen flex justify-center items-center relative overflow-hidden"
        style={{
          backgroundColor: "black",
        }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, #0066ff 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, #0066ff 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, #0066ff 0%, transparent 50%)",
              "radial-gradient(circle at 100% 0%, #0066ff 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <motion.div
          className="text-center text-white relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <h1 className="text-[90px] font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              All in one cloud.
            </h1>
            <motion.div
              className="absolute -inset-1 opacity-30 blur-xl bg-gradient-to-r from-blue-400 to-blue-600"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.4, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl mb-8 text-blue-100"
          >
            Develop, train, and scale AI models with Data Care.
          </motion.h2>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              className="inline-block outline-none cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-full shadow-lg text-lg relative group overflow-hidden"
              to="/sidebar"
            >
              <span className="relative z-10">Get started</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute right-4 inline-block ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.8,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <Footer/>
    </>
  );
};

export default LandingPage;
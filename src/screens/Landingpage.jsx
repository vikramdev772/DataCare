import React, { useMemo } from "react";
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

  // Generate random positions for background dots
  const dots = useMemo(() => {
    return Array.from({ length: 50 }).map(() => ({
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen flex justify-center items-center relative overflow-hidden">
        {/* Enhanced animated background with multiple layers */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />

          {/* Multiple gradient orbs */}
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={`gradient-${index}`}
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  `radial-gradient(600px circle at ${index * 50}% ${index * 50}%, #0066ff 0%, transparent 70%)`,
                  `radial-gradient(600px circle at ${100 - index * 50}% ${index * 50}%, #0066ff 0%, transparent 70%)`,
                  `radial-gradient(600px circle at ${index * 50}% ${100 - index * 50}%, #0066ff 0%, transparent 70%)`,
                ],
              }}
              transition={{
                duration: 10 + index * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
                delay: index * 2,
              }}
            />
          ))}

          {/* Animated dots background */}
          <div className="absolute inset-0 pointer-events-none">
            {dots.map((dot, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: dot.size,
                  height: dot.size,
                  left: `${dot.x}%`,
                  top: `${dot.y}%`,
                  background: `rgba(${Math.random() > 0.5 ? '96, 165, 250' : '59, 130, 246'}, ${Math.random() * 0.5 + 0.3})`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: dot.duration,
                  repeat: Infinity,
                  delay: dot.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC41Ii8+PC9zdmc+')]" />
        </motion.div>

        <motion.div
          className="text-center text-white relative z-10 px-4 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="relative mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-400">
              All in one cloud.
            </h1>
            <motion.div
              className="absolute -inset-x-20 -inset-y-10 opacity-30 blur-3xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-blue-100/90 font-light"
          >
            Develop, train, and scale AI models with enterprise-grade security and performance.
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg text-lg relative overflow-hidden group"
                to="/sidebar"
              >
                <span className="relative z-10 flex items-center">
                  Get started
                  <motion.span
                    className="ml-2 inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>

            <Link
              className="text-blue-200 hover:text-white font-medium transition-colors duration-200"
              to="/documentation"
            >
              View Documentation →
            </Link>
          </motion.div>

          {/* Glowing orbs in foreground */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute w-32 h-32 rounded-full blur-3xl"
              style={{
                background: `rgba(37, 99, 235, 0.1)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* 🧭 Sticky Navbar */}
      <header className="sticky top-0 z-50 w-full py-6 px-8 bg-transparent text-white flex justify-between items-center">
        <h1 onClick={closeMenu} className="text-xl font-bold cursor-pointer">
          Rahul Yadav
        </h1>

        {/* 🖥️ Desktop Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" onClick={closeMenu} className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">About</a>
          <a href="#skills" onClick={closeMenu} className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Skills</a>
          <a href="#projects" onClick={closeMenu} className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Projects</a>
          <a href="#contact" onClick={closeMenu} className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact</a>
        </nav>

        {/* 📱 Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* 📱 Mobile Slide-In Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 text-white fixed top-16 left-0 w-full px-8 py-6 flex flex-col space-y-4 z-40 backdrop-blur"
          >
            <a href="#about" onClick={closeMenu} className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">About</a>
            <a href="#skills" onClick={closeMenu} className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Skills</a>
            <a href="#projects" onClick={closeMenu} className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Projects</a>
            <a href="#contact" onClick={closeMenu} className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

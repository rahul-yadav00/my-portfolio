"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full px-6 py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto">
        {/* Animated Opening Quote */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-lg italic text-gray-600 dark:text-gray-400 mb-8"
        >
          “I believe great work needs patience, intention, and an eye for the invisible details.”
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10"
        >
          About Me
        </motion.h2>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
        >
          <p>
            I’m someone who prefers clarity over chaos and depth over speed. Whether it’s writing backend
            logic, understanding how a system fits together, or simply learning something new, I find joy in
            the process — not just the outcome.
          </p>

          <p>
            My background in mechanical engineering taught me to think in terms of systems, structure, and
            precision. Over time, that same mindset evolved into a passion for building in the digital world.
            Software gave me the space to create things that are not just functional, but elegant and purposeful.
          </p>

          <p>
            Outside of work, I’m endlessly curious about how things function — from the quiet mechanics of
            real-world systems to the small details that make good tools feel great. I find peace in stillness,
            beauty in clean design, and inspiration in thoughtful ideas.
          </p>

          <p>
            You’ll rarely find me rushing — I value quiet focus, honest effort, and building something meaningful —
            not to impress, but because it feels right.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

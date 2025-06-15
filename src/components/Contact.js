'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const contactLinks = [
  {
    name: 'Email',
    href: 'mailto:rahulyadavme97@gmail.com',
    icon: '/icons/gmail.svg', // place this in public/icons/
  },
  {
    name: 'GitHub',
    href: 'https://github.com/rahul-yadav00',
    icon: '/icons/github.svg',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rahul-yadav-810a7528b/',
    icon: '/icons/linkedin.svg',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-transparent text-black dark:text-white w-full px-8 py-16 flex items-center"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-semibold mb-4">Say Hello</h2>
        <p className="text-lg mb-10">
          Let&apos;s connect — whether it&apos;s a project, opportunity, or just to chat.
        </p>

        <div className="flex justify-center items-center gap-10">
          {contactLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="transition-transform"
              title={link.name}
            >
              <Image
                src={link.icon}
                alt={link.name}
                width={50}
                height={50}
                className="hover:drop-shadow-lg dark:invert"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

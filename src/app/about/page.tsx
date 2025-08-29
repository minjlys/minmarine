"use client";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex flex-col items-center px-6 py-10 text-xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ borderRadius: "12px", overflow: "hidden", width: "50%" }}
      >
        <div className="text-5xl font-bold mb-12 text-center">about</div>

        <div className="w-full max-w-3xl space-y-8">
          <section>
            <div className="text-2xl font-semibold mb-2">at UCR,</div>
            <div>
              im a business administration major with a concentration in
              information systems. i grew surrounded by technology, and want to
              apply those skills in the business world!
            </div>
          </section>

          <section>
            <div className="text-2xl font-semibold mb-2">
              {" "}
              for my pastimes,{" "}
            </div>
            <div>
              {" "}
              i enjoy making websites and listening to music. web development is
              a fun way to learn coding and express yourself through design!
            </div>
          </section>

          <section>
            <div className="text-2xl font-semibold mb-2">outside of class,</div>
            <div>
              i love running, listening to music (beabadoobee, sorry), and
              playing games. youll probably catch me playing splatoon.
            </div>
          </section>

          <section>
            <div className="text-2xl font-semibold mb-2">techstack</div>
          </section>

          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              React
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              Next.js
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
              JavaScript
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
              Tailwind CSS
            </span>
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
              Node.js
            </span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
              Figma
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;

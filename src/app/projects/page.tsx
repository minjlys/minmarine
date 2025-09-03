"use client";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 text-base sm:text-xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-xl overflow-hidden w-full max-w-3xl sm:w-3/4 md:w-1/2"
      >
        <div className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12 text-center">
          projects
        </div>

        <div className="w-full space-y-6 sm:space-y-8">
          <section>
            <div className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
              minjlys/minmarine
            </div>
            <div>
              personal site built with next.js, tailwindcss, and react - hosted
              through vercel.
            </div>
          </section>

          <section>
            <div className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
              Website - UCR Undergraduate Learning Assistants
            </div>
            <div>
              built during ACM @ UCR 2025 Summer Spark program, utilizing
              tailwindcss, next.js, node.js, figma, and react.
            </div>
          </section>

          <section>
            <div className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
              InterScholar
            </div>
            <div>
              built during DesignCo Spring Case Study, utilizing Figma to
              develop interactive educational app InterScholar.
            </div>
          </section>

          <section>
            <div className="text-xl sm:text-2xl font-semibold">techstack</div>
          </section>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              React
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              Next.js
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              TypeScript
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              Tailwind CSS
            </span>
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              Node.js
            </span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              Figma
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;

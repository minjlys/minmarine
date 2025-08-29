"use client";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="flex flex-col items-center px-6 py-10 text-xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ borderRadius: "12px", overflow: "hidden", width: "50%" }}
      >
        <div className="text-5xl font-bold mb-12 text-center">projects</div>

        <div className="w-full max-w-3xl space-y-8">
          <section>
            <div className="text-2xl font-semibold mb-2">minjlys/minmarine</div>
            <div>
              {" "}
              personal site built with next.js, tailwindcss, and react.
            </div>
          </section>

          <section>
            <div className="text-2xl font-semibold mb-2">
              Undergraduate Learning Assistants Website
            </div>
            <div>
              built during ACM @ UCR 2025 Summer Spark program, utilizing
              tailwindcss, next.js, node.js and react.
            </div>
          </section>

          <section>
            <div className="text-2xl font-semibold mb-2">InterScholar</div>
            <div>
              built during DesignCo Spring Case Study, utilizing Figma to
              develop an interactive educational app.
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;

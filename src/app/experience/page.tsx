"use client";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="flex flex-col items-center px-6 py-10 text-xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ borderRadius: "12px", overflow: "hidden", width: "50%" }}
      >
        <div className="text-5xl font-bold mb-12 text-center">experience</div>

        <div className="w-full max-w-3xl space-y-8">
          <section>
            <div className="text-2xl font-semibold mb-2">
              University of California, Riverside{" "}
            </div>
            <div> Residential Advisor • ND2</div>
          </section>

          <section>
            <div className="text-2xl font-semibold mb-2">ACM @ UCR </div>
            <div> Web Developer • Summer Spark, ULA Website </div>
          </section>

          <section>
            <div className="text-2xl font-semibold mb-2">UCR RHA </div>
            <div>Marketing Assistant</div>
          </section>

          <div className="text-5xl font-bold mb-12 text-center">activities</div>

          <section>
            <div className="text-2xl font-semibold mb-2"> RoseHack @ UCR</div>
            <div>Operations Committee </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;

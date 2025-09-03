"use client";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 text-base sm:text-xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-xl overflow-hidden w-full max-w-3xl sm:w-3/4 md:w-1/2"
      >
        <div className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12 text-center">
          about
        </div>

        <div className="w-full max-w-3xl space-y-8">
          <section>
            <div className="text-2xl font-semibold mb-2">at UCR,</div>
            <div>
              im a business administration major with a concentration in
              information systems. i grew up surrounded by tech through games
              and aspire to apply these skills in the business world!
            </div>
          </section>

          <section>
            <div className="text-2xl font-semibold mb-2">for my pastimes,</div>
            <div>
              i enjoy making websites, starting out on the platform spacehey in
              high school. i found web development as a fun way to learn coding
              and expressing yourself through design.
            </div>
          </section>

          <section>
            <div className="text-2xl font-semibold mb-2">outside of class,</div>
            <div>
              i love exploring new places, running, listening to music, and
              gaming. interestingly but unfortunately, ive been playing splatoon
              for over 10 years - challenge me anytime :D
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

export default About;

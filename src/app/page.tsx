"use client";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 rounded-xl overflow-hidden text-center"
      >
        <a
          href="https://github.com/minjlys/minmarine"
          target="_blank"
          rel="noopener noreferrer"
          className="block font-bold text-3xl sm:text-4xl md:text-5xl break-words"
        >
          minjlys/minmarine
        </a>

        <div className="py-5">created with the help of music.</div>

        <iframe
          src="https://open.spotify.com/embed/playlist/7q5EFozXW7MRFuOH0rumez?utm_source=generator"
          width="100%"
          height="500"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
        />
      </motion.div>
    </div>
  );
}
export default Home;

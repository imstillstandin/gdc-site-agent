import React from "react";
import { motion } from "framer-motion";

const BUY_URL = ""; // put your real buy link here later

export default function App() {
  const buyHref = BUY_URL || "https://firstledger.net";

  const fade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-green-900 min-h-screen text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <motion.img
          src="/mascot.png"
          alt="Green Dildo Coin Mascot"
          className="mx-auto w-48 h-48 mb-6"
          initial="hidden"
          animate="show"
          variants={fade}
        />
        <h1 className="text-5xl font-bold mb-4">Green Dildo Coin</h1>
        <p className="text-lg max-w-xl mx-auto mb-8">
          The memecoin making waves and court appearances — as seen dropped on the WNBA court.
        </p>
        <a
          href={buyHref}
          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition"
        >
          Buy Now
        </a>
      </section>

      {/* About Section */}
      <section className="bg-green-800 py-20 px-4 text-center">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl font-bold mb-6">The WNBA Court Drop</h2>
          <img
            src="/court-drop.png"
            alt="Green Dildo Coin on WNBA Court"
            className="mx-auto w-96 h-auto rounded-lg shadow-lg mb-6"
          />
          <p className="max-w-2xl mx-auto text-lg">
            In one of the most unexpected moments in sports history, a Green Dildo made its way onto the WNBA court. 
            Now immortalized in memecoin glory, this is your chance to hold a piece of the legend.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 py-8 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Green Dildo Coin. All Rights Reserved.
      </footer>
    </div>
  );
}

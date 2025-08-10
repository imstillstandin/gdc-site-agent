// src/App.jsx
import { XRPL_ISSUER, BUY_URL } from "./config";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45 } }
};

export default function App() {
  const buyHref = BUY_URL || "https://firstledger.net";

  return (
    <div className="bg-black text-white font-sans selection:bg-emerald-500/30">
      {/* HERO */}
      <motion.header
        className="relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <motion.img
            src="/mascot.png"
            alt="Green D Coin mascot"
            className="mx-auto w-40 h-40 object-contain shadow-2xl"
            variants={fadeUp}
          />
          <motion.h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight" variants={fadeUp}>
            The Green D is <span className="text-emerald-400">for holders</span>
          </motion.h1>
          <motion.p className="mt-4 text-lg text-white/80" variants={fadeUp}>
            Pixel vibes. BONK the dip. Arcade-grade memes on XRPL.
          </motion.p>

          <motion.div className="mt-8 flex items-center justify-center gap-4" variants={fadeUp}>
            <a
              href={buyHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black hover:brightness-110 active:brightness-95 transition"
            >
              Buy GDC <span className="text-black/70">→</span>
            </a>
            <a
              href="#tokenomics"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10 transition"
            >
              Read Tokenomics
            </a>
          </motion.div>

          <motion.div className="mt-6 text-sm text-white/60" variants={fadeUp}>
            XRPL Issuer: <code className="text-white/80">{XRPL_ISSUER || "TBA"}</code>
          </motion.div>
        </div>
      </motion.header>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="border-t border-white/10 bg-gradient-to-b from-black to-[#0B0F14]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold">What is Green D Coin?</h2>
            <p className="mt-4 text-white/80">
              A cheeky eco-friendly memecoin on XRPL featuring a pixel mascot with
              main-character energy. Built for fun, turbo-shareability, and light-speed vibes.
            </p>
            <ul className="mt-6 space-y-2 text-white/80">
              <li>• Fast + low fees on XRPL</li>
              <li>• Meme-first brand with real community tools</li>
              <li>• Transparent tokenomics and no gotchas</li>
            </ul>
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl"
            variants={fadeUp}
          >
            <img src="/court-drop.png" alt="BONK court drop" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </motion.section>

      {/* TOKENOMICS */}
      <motion.section
        id="tokenomics"
        className="border-t border-white/10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Tokenomics</h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Total Supply", body: "1,000,000,000 GDC — plenty to bonk around." },
              { title: "Liquidity", body: "Initial LP seeded and locked post-launch." },
              { title: "Treasury", body: "10% for community bribes, memes, and marketing chaos." },
              { title: "Airdrops", body: "Targeted meme missions. Holders get the goodies." },
            ].map((c) => (
              <motion.div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
                variants={fadeUp}
              >
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-white/80">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* HOW TO BUY */}
      <motion.section
        id="buy"
        className="border-t border-white/10 bg-[#0B0F14]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">How to Buy</h2>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Get an XRPL wallet", body: "Xumm or Ledger. Fund with XRP for gas." },
              { step: "2", title: "Add the trustline", body: XRPL_ISSUER ? `Add trustline for GDC issued by ${XRPL_ISSUER}.` : "Trustline details will be posted at launch." },
              { step: "3", title: "Trade", body: BUY_URL ? "Open the DEX link and swap for GDC." : "Use FirstLedger when the pair goes live." },
            ].map((s) => (
              <motion.div
                key={s.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
                variants={fadeUp}
              >
                <div className="text-emerald-400 font-bold text-2xl">{s.step}</div>
                <h3 className="mt-2 font-semibold">{s.title}</h3>
                <p className="mt-2 text-white/80">{s.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={buyHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-7 py-3 font-semibold text-black hover:brightness-110 active:brightness-95 transition"
            >
              Go to FirstLedger <span className="text-black/70">↗</span>
            </a>
          </div>
        </div>
      </motion.section>

      {/* ROADMAP */}
      <motion.section
        id="roadmap"
        className="border-t border-white/10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Roadmap</h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { h: "Phase 1 — The Drop", p: "Launch site, mint, LP, and first meme missions." },
              { h: "Phase 2 — Community Arcade", p: "Weekly meme bounties, pixel art contests, airdrops." },
              { h: "Phase 3 — Listings & Tools", p: "Trackers, dashboards, and integrations." },
              { h: "Phase 4 — ???", p: "Surprise utilities because memes evolve." },
            ].map((r, i) => (
              <motion.div
                key={r.h}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
                variants={fadeUp}
                transition={{ delay: 0.04 * i }}
              >
                <h3 className="font-semibold">{r.h}</h3>
                <p className="mt-2 text-white/80">{r.p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Green D Coin. The Green D is for holders.
        </div>
      </footer>
    </div>
  );
}

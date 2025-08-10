import { XRPL_ISSUER, BUY_URL } from './config';
import { motion } from 'framer-motion';

const fade = { hidden:{opacity:0, y:12}, show:{opacity:1, y:0, transition:{duration:0.35}} };

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,#123,transparent_40%),radial-gradient(circle_at_80%_0%,#0b2,transparent_35%)]">
      {/* NAV */}
      <nav className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/mascot.png" alt="GDC Mascot" className="h-8 w-8" />
            <span className="font-semibold tracking-wide">GDC</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#buy" className="text-sm opacity-80 hover:opacity-100">How to buy</a>
            <a href="#tokenomics" className="text-sm opacity-80 hover:opacity-100">Tokenomics</a>
            <a href={BUY_URL} target="_blank" rel="noreferrer"
               className="rounded-lg px-3 py-1.5 bg-emerald-500/90 hover:bg-emerald-400 text-black font-semibold">
              Buy GDC
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div variants={fade} initial="hidden" animate="show" className="space-y-5">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              The <span className="text-emerald-400 drop-shadow">Green D</span> is for holders
            </h1>
            <p className="text-white/80 text-lg">
              Pixel vibes. Chaotic-good energy. Bonk the dip, hodl the drip.
            </p>
            <div className="flex gap-3">
              <a href={BUY_URL} target="_blank" rel="noreferrer"
                 className="rounded-xl px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold">
                Buy GDC
              </a>
              <a href="#tokenomics"
                 className="rounded-xl px-5 py-3 border border-white/20 hover:border-white/40">
                Read Tokenomics
              </a>
            </div>
            <div className="text-sm text-white/60">
              XRPL Issuer: <span className="font-mono">{XRPL_ISSUER}</span>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:0.4}}>
            <img src="/assets/mascot.png" alt="GDC Mascot" className="mx-auto w-[320px] md:w-[420px] drop-shadow-[0_0_30px_#22ee66aa]" />
          </motion.div>
        </div>
      </header>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{once:true}}>
          <img src="/assets/court-drop.png" alt="Court drop" className="rounded-2xl shadow-2xl border border-white/10" />
        </motion.div>
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{once:true}} className="space-y-4">
          <h2 className

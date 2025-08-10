import { XRPL_ISSUER, BUY_URL } from "./config";

export default function App() {
  const buyHref = BUY_URL || "https://firstledger.net";

  return (
    <div className="bg-black text-white font-sans selection:bg-emerald-500/30">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
            src="/mascot.png"
            alt="Green D Coin mascot"
            className="mx-auto w-40 h-40 object-contain drop-shadow-[0_0_40px_rgba(34,238,102,0.35)]"
          />
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight">
            The Green D is <span className="text-emerald-400">for holders</span>
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Pixel vibes. BONK the dip. Arcade-grade memes on XRPL.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href={buyHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black hover:brightness-110 active:brightness-95 transition"
            >
              Buy GDC
              <span className="text-black/70">→</span>
            </a>
            <a
              href="#tokenomics"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10 transition"
            >
              Read Tokenomics
            </a>
          </div>

          <div className="mt-6 text-sm text-white/60">
            XRPL Issuer: <code className="text-white/80">{XRPL_ISSUER || "TBA"}</code>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10 bg-gradient-to-b from-black to-[#0B0F14]">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">What is Green D Coin?</h2>
            <p className="mt-4 text-white/80">
              A cheeky eco-friendly memecoin on XRPL featuring a pixel mascot with
              main-character energy. Built for fun, turbo-shareability, and light-speed
              vibes. We’re not reinventing finance—we’re making it entertaining.
            </p>
            <ul className="mt-6 space-y-2 text-white/80">
              <li>• Fast + low fees on XRPL</li>
              <li>• Meme-first brand with real community tools</li>
              <li>• Transparent tokenomics and no gotchas</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_50px_rgba(34,238,102,0.15)]">
            <img
              src="/court-drop.png"
              alt="BONK court drop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" className="border-t border-white/10

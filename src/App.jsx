import { XRPL_ISSUER, BUY_URL } from './config';
// Import mascot and court‑drop images so Vite can bundle them correctly
import mascotImg from '../mascot.png';
import courtImg from '../court-drop.png';

export default function App() {
  // This component renders the complete Green D Coin landing page.  
  // It includes a hero section, about section with a court‑drop image,
  // tokenomics, how to buy instructions, a roadmap and a footer.  
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero section with mascot and CTA */}
      <header className="text-center p-12">
        <img
          src={mascotImg}
          alt="Green D Coin Mascot"
          className="mx-auto w-32 h-32 mb-4"
        />
        <h1 className="text-5xl font-bold">Green D Coin</h1>
        <p className="mt-4 text-xl">
          The cheeky eco‑friendly memecoin on XRPL
        </p>
        {/* Call‑to‑action button linking to the buy URL */}
        <a
          href={BUY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-500"
        >
          Buy GDC
        </a>
      </header>

      {/* About section */}
      <section className="py-16 px-6 text-center bg-gray-900">
        <h2 className="text-4xl font-semibold mb-4">About</h2>
        <p className="max-w-xl mx-auto text-lg mb-8">
          Green D Coin is a playful, pixel‑powered token bringing humor and fun
          to the eco‑conscious crypto community. Bounce into the GDC movement—
          every purchase supports green initiatives.
        </p>
        <img
          src={courtImg}
          alt="Court Drop Scene"
          className="mx-auto w-80 border border-gray-700 rounded-xl"
        />
      </section>

      {/* Tokenomics section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">Tokenomics</h2>
        <div className="max-w-2xl mx-auto grid grid-cols-2 gap-6 text-lg">
          <div className="p-4 bg-gray-900 rounded-xl">
            <h3 className="text-2xl font-bold mb-2">Total Supply</h3>
            <p>1,000,000,000 GDC</p>
          </div>
          <div className="p-4 bg-gray-900 rounded-xl">
            <h3 className="text-2xl font-bold mb-2">Liquidity</h3>
            <p>80% locked for 1 year</p>
          </div>
          <div className="p-4 bg-gray-900 rounded-xl col-span-2">
            <h3 className="text-2xl font-bold mb-2">Taxes</h3>
            <p>0% buy / 0% sell – it’s a free throw!</p>
          </div>
        </div>
      </section>

      {/* How to buy section */}
      <section id="buy" className="py-16 px-6 text-center bg-gray-900">
        <h2 className="text-4xl font-semibold mb-4">How to Buy</h2>
        <ol className="max-w-xl mx-auto text-left list-decimal list-inside space-y-4 text-lg">
          <li>Set up an XRPL wallet (XUMM recommended).</li>
          <li>Trust the GDC issuer: {XRPL_ISSUER}</li>
          <li>Swap XRP for GDC using the XRPL DEX.</li>
          <li>Check your wallet—you're now part of the green revolution!</li>
        </ol>
      </section>

      {/* Roadmap section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">Roadmap</h2>
        <ul className="max-w-xl mx-auto text-left list-disc list-inside space-y-4 text-lg">
          <li>Launch token & community website.</li>
          <li>Release pixel‑plant NFT drop.</li>
          <li>Partner with eco charities for GDC donations.</li>
          <li>Introduce mobile game & merch store.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900">
        <p>© {new Date().getFullYear()} Green D Coin. All rights reserved.</p>
      </footer>
    </div>
  );
}
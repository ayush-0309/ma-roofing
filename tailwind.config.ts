import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Redesigned palette — elegant, minimal
        darknavy: "#0C0C0C",       // near-black for deep sections
        irishred: "#B91C1C",       // refined, less saturated red
        slate: "#1C1C1C",          // dark section alternate
        offwhite: "#F8F6F2",       // warm parchment-white
        gold: "#B59A5A",           // muted antique gold
        muted: "#888888",          // refined grey text
        stone: "#EDEBE7",          // warm divider/border grey
        ink: "#111111",            // primary text
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
    },
  },
  plugins: [],
};
export default config;

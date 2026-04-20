import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505"
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "Helvetica Neue", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.45)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.25), transparent 40%), radial-gradient(circle at 70% 30%, rgba(56,189,248,0.2), transparent 45%), radial-gradient(circle at 50% 80%, rgba(244,63,94,0.18), transparent 50%)"
      }
    }
  },
  plugins: []
};

export default config;

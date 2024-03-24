import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        w40: "31.25rem",
        auto: "auto",
        h25: "25rem",
        margAuto: "0 auto",
      },
      zIndex: {
        minus: "-1",
        plus: "1",
      },
      maxWidth: {
        laptop: "1400px",
      },
      colors: {
        slate: "#ddd6cb",
      },
    },
  },
  plugins: [],
};
export default config;

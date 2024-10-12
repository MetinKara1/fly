import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px"
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-red": {
          primary: "#E81932"
        },
        "main-blue": {
          primary: "#063048",
          secondary: "#60697799",
          background: "#3685e7",
        },
        "main-gray": {
          primary: "#a7a7a7",
          secondary: "#eaeeef",
          third: "#f4f5f9",
          background: "#242a38",
        },
        "main-black": {
          primary: "#242a38"
        }
      },
    },
  },
  plugins: [],
};
export default config;

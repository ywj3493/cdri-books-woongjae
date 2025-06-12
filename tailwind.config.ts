import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Noto Sans KR"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

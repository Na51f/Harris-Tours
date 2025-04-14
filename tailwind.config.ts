import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002540',
        secondary: '#375170',
        accent: '#dfa01f', 
        neutral: '#daf3ff',
      },
    },
  },
  plugins: [],
}

export default config;
import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary:{
            DEFAULT: '#000000',
            foreground: '#FFFFFF',
          },
          secondary: {
            DEFAULT: '#FFFFFF',
            foreground: '#000000',
          },
        },
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: '#FFFFFF',
            foreground: '#000000',
          },
          secondary: {
            DEFAULT: '#000000',
            foreground: '#FFFFFF',
          },
        },
      },
    },
  })],
} satisfies Config;

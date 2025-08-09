import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'xs': '0.6rem',      // 12px -> 9.6px
        'sm': '0.7rem',      // 14px -> 11.2px
        'base': '0.8rem',    // 16px -> 12.8px
        'lg': '0.9rem',      // 18px -> 14.4px
        'xl': '1rem',        // 20px -> 16px
        '2xl': '1.2rem',     // 24px -> 19.2px
        '3xl': '1.5rem',     // 30px -> 24px
        '4xl': '1.8rem',     // 36px -> 28.8px
        '5xl': '2.4rem',     // 48px -> 38.4px
        '6xl': '3rem',       // 60px -> 48px
        '7xl': '3.6rem',     // 72px -> 57.6px
        '8xl': '4.8rem',     // 96px -> 76.8px
        '9xl': '6.4rem',     // 128px -> 102.4px
      },
    },
  },
  plugins: [],
};

export default config; 
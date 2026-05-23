/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        nordic: {
          blue:  '#4c050d',   /* Night-bordeaux — The Stamp / primary action */
          teal:  '#94b1c8',   /* Powder-blue — The Folder / data */
          sand:  '#FDF9ED',   /* Bone — The Canvas / backgrounds */
          dark:  '#1a0905',   /* Coffee-bean — The Ink / body text */
          muted: '#5c4840',   /* Warm muted mid-tone */
        }
      },
      fontFamily: {
        sans:  ['Roboto Flex', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono:  ['IBM Plex Mono', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
}

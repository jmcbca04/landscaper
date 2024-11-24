/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2D4B3D",     // Dark green
        secondary: "#E6EFE9",   // Light sage
        accent: "#BB9A3C",      // Gold accent
        neutral: "#F5F5F5",     // Light gray
        "base-100": "#FFFFFF",  // White
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#2D4B3D",
          secondary: "#E6EFE9",
          accent: "#BB9A3C",
          neutral: "#F5F5F5",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
}

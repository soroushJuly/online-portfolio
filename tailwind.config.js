/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        "colorBg": "#FAF9F6",
        "colorBgAccent": "#F4F1ED",
        "colorCardPrimary": "#EAF6F6",
        "colorCardSecondary": "#FEE4E1",
        "colorLinkHover": "#FFC857",
        "colorSecondary": "#8A8B49",
        "colorTertiary": "#f26c62",
        "text-color": "#333333",
        "warning": "#FFD700",
        "success": "#50C878",
        "error": "#DC143C",
        "active": "#4169E1",
      }
    },
  },
  plugins: [],
};

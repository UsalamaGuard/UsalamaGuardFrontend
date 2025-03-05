/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2563eb", // Vibrant blue (adjust as needed)
        secondary: "#9333ea", // Deep purple
        accent: "#facc15", // Bright yellow for highlights
        muted: "#64748b", // Subtle text color
        border: "#e5e7eb", // Soft border color
      },

   
      screens: {
        xs: "400px", // Smallest screens
        sm: "640px", // Mobile
        md: "768px", // Tablets
        lg: "1024px", // Laptops
        xl: "1280px", // Desktops
        "2xl": "1536px", // Large screens
        "3xl": "1800px", // Extra-large screens
      },

      // Custom fonts for modern UI feel
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },

      // Enhanced spacing and layout
      spacing: {
        18: "4.5rem", // Between sm & md
        22: "5.5rem",
        26: "6.5rem",
      },

      // Improved typography styles
      typography: {
        DEFAULT: {
          css: {
            color: "var(--foreground)",
            a: {
              color: "#2563eb",
              "&:hover": {
                color: "#1e40af",
              },
            },
            h1: {
              fontSize: "2.25rem",
              fontWeight: "700",
            },
            h2: {
              fontSize: "1.875rem",
              fontWeight: "600",
            },
            h3: {
              fontSize: "1.5rem",
              fontWeight: "500",
            },
            p: {
              fontSize: "1.125rem",
              lineHeight: "1.75",
            },
          },
        },
      },

      // Subtle animations for modern feel
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.6s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },

      // Beautiful box shadows for depth
      boxShadow: {
        soft: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        strong: "0px 4px 12px rgba(0, 0, 0, 0.25)",
      },

      // Smoother border radius
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Better form styles
    require("@tailwindcss/typography"), // Enhanced text styling
    require("@tailwindcss/aspect-ratio"), // Controls aspect ratio for images/videos
    require("@tailwindcss/line-clamp"), // Text truncation for better UI
  ],
};

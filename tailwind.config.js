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
        primary: "#2563eb", 
        secondary: "#9333ea", 
        accent: "#facc15",
        muted: "#64748b", 
        border: "#e5e7eb", 
      },

      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1800px",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },

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

      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.6s ease-in-out",
        pageTransition: "pageTransition 0.4s ease-in-out",
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
        pageTransition: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },

     
      transitionProperty: {
        'all': 'all', 
        'transform-opacity': 'transform, opacity', 
      },
      transitionDuration: {
        '400': '400ms', 
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)', 
      },

      boxShadow: {
        soft: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        strong: "0px 4px 12px rgba(0, 0, 0, 0.25)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
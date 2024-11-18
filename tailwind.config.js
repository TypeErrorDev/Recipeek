/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mono: ['"Fira Code"', "monospace"],
      sans: ['"Inter"', "sans-serif"],
      body: ["Outfit", "sans-serif"],
    },
    colors: {
      // Core Colors
      main_text: {
        dark: "#2D3436",
        light: "#E5E9F0",
      },
      secondary_text: {
        dark: "#A0AEC0",
        light: "#636E72",
      },
      tertiary_text: {
        dark: "#718096",
        light: "#B2BEC3",
      },
      background: {
        dark: "#1A1E23",
        light: "#F7F9FC",
      },
      foreground: {
        dark: "#232931",
        light: "#FFFFFF",
      },
      border: {
        dark: "#2D3748",
        light: "#E2E8F0",
      },
      divider: {
        dark: "#2D3748",
        light: "#EDF2F7",
      },

      // Interactive Elements
      link: {
        dark: "#FF9F7D",
        light: "#E17055",
      },
      link_hover: {
        dark: "#FFB299",
        light: "#FF8C6B",
      },
      button: {
        dark: "#FF9F7D",
        light: "#E17055",
      },
      button_hover: {
        dark: "#FFB299",
        light: "#FF8C6B",
      },
      button_disabled: {
        dark: "#4A5568",
        light: "#CBD5E0",
      },

      // Input Fields
      input_bg: {
        dark: "#2D3748",
        light: "#FFFFFF",
      },
      input_border: {
        dark: "#4A5568",
        light: "#CBD5E0",
      },
      input_focus: {
        dark: "#FF9F7D",
        light: "#E17055",
      },
      input_placeholder: {
        dark: "#718096",
        light: "#A0AEC0",
      },

      // Status Colors
      success: {
        dark: "#2ECC71",
        light: "#26DE81",
      },
      error: {
        dark: "#E74C3C",
        light: "#EB4D4B",
      },
      warning: {
        dark: "#F1C40F",
        light: "#FED330",
      },
      info: {
        dark: "#3498DB",
        light: "#45AAF2",
      },

      // Category/Tag Colors
      tag_bg: {
        dark: "#2D3748",
        light: "#F1F5F9",
      },
      tag_text: {
        dark: "#A0AEC0",
        light: "#64748B",
      },
    },
    extend: {},
  },
  plugins: [],
};

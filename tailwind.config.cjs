const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      sans: ["Arimo", "system-ui"],
    },
    extend: {
      colors: {
        "greenish-100": "#659d89",
        "whiteish-100": "#f8f8f6",
      },
    },
  },

  plugins: [],
};

module.exports = config;

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      fantasy: ["copperplate"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    extend: {
      pitchBg: "url('./src/images/pitch.jpg')"
    },
  },
  plugins: [],
};

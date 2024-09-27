module.exports = {
  content: [
    './index.html', // Important to include this if you're using Vite
    './src/**/*.{js,jsx,ts,tsx}', // Include all React component files
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#e87d20",
        secondaryColor: "#333333",
      },
    },
  },
  plugins: [],
};

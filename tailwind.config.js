module.exports = {
 content: ["./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
  extend: {
    colors: {
      discordIdle: '#7289da',
      discordHover: '#5d74c9',
    },
    animation: {
      'bounce1': 'bounce 0.6s infinite 0.1s',
      'bounce2': 'bounce 0.6s infinite 0.2s',
      'bounce3': 'bounce 0.6s infinite 0.3s',
      'pulse': 'pulse 2s infinite',
    },
  },
 },
 plugins: [],
}

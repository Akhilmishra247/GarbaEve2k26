export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { ink: '#150c0f', plum: '#241519', burnt: '#ff4d1c', sun: '#ffc93c', crimson: '#d92a4b', bone: '#f3e9df' },
    fontFamily: { display: ['"Archivo Black"', 'Impact', 'sans-serif'], body: ['"Space Grotesk"', 'system-ui', 'sans-serif'] },
    fontSize: { title: ['11.5vw', '0.95'], titlesm: ['17vw', '0.95'], mega: ['21vw', '0.8'], rules: ['clamp(3rem, 9vw, 8rem)', '0.95'] },
    boxShadow: { hard: '6px 6px 0 #ff4d1c', hardsm: '3px 3px 0 #ff4d1c', hardsun: '6px 6px 0 #ffc93c', hardsunsm: '3px 3px 0 #ffc93c', hardink: '6px 6px 0 #150c0f', hardbone: '6px 6px 0 #f3e9df' },
    letterSpacing: { ultra: '0.3em' },
    aspectRatio: { portrait: '3 / 4' },
    zIndex: { 100: '100' }
  } },
  plugins: []
}

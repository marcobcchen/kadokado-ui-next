const gray = [
  '#ffffff', //gray.0
  '#f7fafc', //gray.1
  '#edf2f7', //gray.2
  '#e2e8f0', //gray.3
  '#cbd5e0', //gray.4
  '#a0aec0', //gray.5
  '#718096', //gray.6
  '#4a5568', //gray.7
  '#2d3748', //gray.8
  '#1a202c', //gray.9
]

const secondary = [
  '#F0FCFA', // secondary.0
  '#D6FBF6', // secondary.1
  '#C3F8F3', // secondary.2
  '#88E8DF', // secondary.3
  '#4BD0C3', // secondary.4
  '#35BCBC', // secondary.5
  '#1DABAB', // secondary.6
  '#009B9B', // secondary.7
  '#106F6F', // secondary.8
  '#004243', // secondary.9
]

const palette = {
  vividTangerine: '#FF8674',
  mineShaft: '#2F2F2F',
  pelorus: '#35BCBC',
  bermuda: '#81D8D0',
  harvestGold: '#D7AF70',
  alabaster: '#F9F7EB',
  fairPink: '#FFF4F2',
  polar: '#F0FCFA',
  poloBlue: '#92AACA',
}

const colors = {
  ...palette,
  text: '#1a202c',
  background: '#fff',
  primary: '#FF8674',
  error: '#E65442',
  success: '#35BCBC',
  gray,
  secondary,
  modes: {
    dark: {
      background: '#1A202C',
      gray: [...gray].reverse(),
      fairPink: '#722218',
      polar: '#004243',
    },
  },
}

export default colors

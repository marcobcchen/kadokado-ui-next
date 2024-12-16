const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
}

const lineHeights = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
  body: '1.625',
  heading: '1.25',
}

const typography = {
  display: {
    48: {
      fontSize: 7,
      fontWeight: 'regular',
      lineHeight: 'normal',
      letterSpacing: 'wider',
      color: 'gray.9',
    },
    32: {
      fontSize: 6,
      fontWeight: 'regular',
      lineHeight: 'normal',
      letterSpacing: 'wider',
      color: 'gray.9',
    },
  },
  title: {
    28: {
      fontSize: 5,
      fontWeight: 'regular',
      lineHeight: 'normal',
      letterSpacing: 'wider',
      color: 'gray.9',
    },
    24: {
      fontSize: 4,
      fontWeight: 'regular',
      lineHeight: 'normal',
      letterSpacing: 'wider',
      color: 'gray.9',
    },
    20: {
      fontSize: 3,
      fontWeight: 'regular',
      lineHeight: 'normal',
      letterSpacing: 'wider',
      color: 'gray.8',
    },
  },
  headline: {
    16: {
      fontSize: 2,
      fontWeight: 'regular',
      lineHeight: 'normal',
      letterSpacing: 'wider',
      color: 'gray.8',
    },
  },
  article: {
    24: {
      fontSize: 4,
      fontWeight: 'light',
      lineHeight: 'normal',
      letterSpacing: 'wider',
      color: 'gray.8',
    },
    20: {
      fontSize: 3,
      fontWeight: 'light',
      lineHeight: 'relaxed',
      letterSpacing: 'wider',
      color: 'gray.8',
    },
    16: {
      fontSize: 2,
      fontWeight: 'regular',
      lineHeight: 'loose',
      letterSpacing: 'wider',
      color: 'gray.8',
    },
    14: {
      fontSize: 1,
      fontWeight: 'light',
      lineHeight: 'loose',
      letterSpacing: 'wider',
      color: 'gray.7',
    },
  },
  body: {
    14: {
      regular: {
        fontSize: 1,
        fontWeight: 'regular',
        lineHeight: 'loose',
        letterSpacing: 'wider',
        color: 'gray.8',
      },
      medium: {
        fontSize: 1,
        fontWeight: 'medium',
        lineHeight: 'normal',
        letterSpacing: 'wider',
        color: 'gray.8',
      },
    },
  },
  caption: {
    12: {
      fontSize: 0,
      fontWeight: 'regular',
      lineHeight: 'relaxed',
      letterSpacing: 'wider',
      color: 'gray.6',
    },
    small_12: {
      fontSize: 0,
      fontWeight: 'light',
      lineHeight: 'relaxed',
      letterSpacing: 'wider',
      color: 'gray.5',
    },
  },
  link: {
    14: {
      regular: {
        fontSize: 1,
        fontWeight: 'regular',
        lineHeight: 'loose',
        letterSpacing: 'wider',
        color: 'primary',
        textDecoration: 'underline',
      },
      medium: {
        fontSize: 1,
        fontWeight: 'medium',
        lineHeight: 'normal',
        letterSpacing: 'wider',
        color: 'primary',
        textDecoration: 'underline',
      },
    },
  },
  rwd_display: {
    32: {
      fontSize: [6, 6, 6, 7],
      fontWeight: 'regular',
      lineHeight: 'normal',
      letterSpacing: 'wider',
      color: 'gray.9',
    },
  },
  rwd_title: {
    24: {
      fontSize: [4, 4, 4, 6],
      fontWeight: 'regular',
      lineHeight: 'normal',
      letterSpacing: 'wider',
      color: 'gray.9',
    },
  },
  rwd_headline: {
    16: {
      fontSize: [2, 2, 2, 4],
      fontWeight: 'regular',
      lineHeight: 'normal',
      letterSpacing: 'wider',
      color: 'gray.9',
    },
  },
  rwd_body: {
    14: {
      fontSize: [0, 0, 0, 1],
      fontWeight: 'regular',
      lineHeight: ['loose', 'loose', 'loose', 'relaxed'],
      letterSpacing: 'wider',
      color: 'gray.8',
    },
  },
  rwd_caption: {
    12: {
      fontSize: [0, 0, 0, 1, 1],
      fontWeight: 'regular',
      lineHeight: 'loose',
      letterSpacing: 'wider',
      color: 'red',
    },
  },
}

export { letterSpacings, lineHeights, typography }

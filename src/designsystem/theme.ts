// theme.ts
import { createTheme } from '@shopify/restyle';

const palette = {
  espresso: '#4B2E2B',
  latte: '#C8B6A6',
  cappuccino: '#DCC6AE',
  milk: '#F4ECE1',
  caramel: '#D9A76C',
  mocha: '#362C2A',
  cream: '#EFE6DD',
  white: '#FFFFFF',
  black: '#000000',
  error: '#FF4D4D',
  success: '#2ECC71',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.milk,
    cardBackground: palette.cream,
    primary: palette.espresso,
    secondary: palette.caramel,
    text: palette.mocha,
    muted: palette.latte,
    white: palette.white,
    black: palette.black,
    error: palette.error,
    success: palette.success,
  },

  spacing: {
    lN: -24,
    none: 0,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },

  borderRadii: {
    s: 4,
    m: 10,
    l: 20,
    xl: 30,
  },

  textVariants: {
    defaults: {
      fontSize: 16,
      color: 'text',
    },
    header: {
      fontSize: 32,
      fontWeight: 'bold',
      color: 'primary',
    },
    subheader: {
      fontSize: 24,
      fontWeight: '600',
      color: 'secondary',
    },
    body: {
      fontSize: 16,
      color: 'text',
    },
    subbody: {
      fontSize: 12,
      color: 'text',
      fontWeight: '400',
    },
    caption: {
      fontSize: 12,
      color: 'muted',
    },
    button: {
      fontSize: 16,
      fontWeight: '600',
      color: 'white',
    },
  },

  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export default theme;

// theme.ts

export const theme = {
  COLORS: {
    BACKGROUND_1000: "#1A1A1E",
    BACKGROUND_900: "#232129",
    BACKGROUND_800: "#312E38",
    BACKGROUND_700: "#3E3B47",
    WHITE: "#F4EDE8",
    BLACK: "rgba(0, 0, 0, 0.50)",
    BLACK_900: "rgba(0, 0, 0, 0.50)",
    GREEN: "#5AE4A8",
    RED: '#FF859B',
    RED_200: "#F75A68",
    HOVER: "#10C275",
    YELLOW: "#ffb500",
    GRAY_100: "#E1E1E6",
    GRAY_300: "#666360",
    GRAY_400: "#7C7C8A",
    GRAY_600: "#323238",
  },

  FONTS: {
    ROBOTO_REGULAR: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '1.6rem',
      fontWeight: '400'
    },
  },
} as const

// Tipagem do tema usando typeof
export type ThemeType = typeof theme
export default theme

export const themes = {
  light: {
    primary: '#FF3A5E',
    white: '#ffffff',
    black: '#000000',
    grey: '#BFBFBF',
    alternativeBG: '#ffffff',
    dark: '#040405',
    dark200: '#09090b',
    dark400: '#101013',
    btnText: '#ffffff',
    border: '#FF3A5E',
    skillText: '#000'
  },
  dark: {
    primary: '#FF3A5E',
    white: '#040405',
    black: '#ffffff',
    grey: '#101013',
    alternativeBG: '#09090b',
    dark: '#040405',
    btnText: '#ffffff',
    border: '#101013',
    skillText: '#FF3A5E'
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
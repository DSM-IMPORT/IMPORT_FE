export const Colors = {
  blue100: '#CEECFE',
  blue200: '#9ED5FE',
  blue300: '#6EB9FC',
  blue400: '#4A9FFA',
  blue500: '#0F75F8',
  blue600: '#0A5AD5',
  blue700: '#0743B2',
  blue800: '#042F8F',
  blue900: '#022177',
  black: '#000000',
  gray900: '#1A1A1A',
  gray800: '#333333',
  gray700: '#4D4D4D',
  gray600: '#666666',
  gray500: '#808080',
  gray400: '#999999',
  gray300: '#E8E8E8',
  gray200: '#F0F0F0',
  gray100: '#F7F7F7',
  gray50: '#FBFBFB',
  white: '#FFFFFF',
  green: '#04DF00',
  green100: '#04C900',
  red: '#E84045',
  red100: '#D13A3E'
} as const

export type colorsKeyOfType = keyof typeof Colors

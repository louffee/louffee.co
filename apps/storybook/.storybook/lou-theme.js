import { create } from '@storybook/theming'

const LouTheme = create({
  base: 'light',
  colorPrimary: 'hsl(346.8 77.2% 49.8%)',
  colorSecondary: 'hsl(240 3.7% 15.9%)',
  appContentBg: 'hsl(0 0% 100%)',
  brandTitle: 'Louffee',
  brandUrl: 'https://louffee.co',
  brandImage: '/assets/logo.svg',
  brandTarget: '_self',
  fontBase: 'Inter',
})

export default LouTheme

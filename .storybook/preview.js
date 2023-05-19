import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';

export const parameters = {
  darkMode: {
    classTarget: 'html',
    dark: {
      ...themes.dark,
      appContentBg: 'black',
      appBg: '#101010',
    },
    light: {
      ...themes.light,
      appBg: 'white',
    },
  },
};

import { create } from '@storybook/theming';

const customTheme = create({
  base: 'light',
  brandTitle: 'Quark Web Components',
  brandUrl: 'https://fermionix.github.io/quark-web-components/',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
});

export { customTheme }
import { css } from '@emotion/react';
import { colors } from 'shared/styles/variables';

export const global = css`
  @import url(https://fonts.googleapis.com/css?family=Inter:regular,bold,italic&subset=latin,latin-ext);
  @import url(http://fonts.cdnfonts.com/css/optician-sans);
  @import url(//db.onlinewebfonts.com/c/8f2a9d487bbbc60974cd132fc3a63862?family=Aeonik);

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    min-height: 100vh;
  }

  body {
    font-family: 'Inter', 'Optician Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    background-color: ${colors.backgroundPrimaryLighter};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a,
  u {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

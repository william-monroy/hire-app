import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Custom CSS libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, NextUIProvider } from '@nextui-org/react';

import './index.css';

const densoLightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      // brand colors
      primaryLight: '#DC0032',
      primary: '#DC0032',
      primaryDark: '#DC0032',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider theme={densoLightTheme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

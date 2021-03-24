import './App.css';
import HomePage from './components/index';
//css reset from Material UI
import CssBaseline from '@material-ui/core/CssBaseline';

//override Material UI global styles
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
        light: "#f0eefa",
        main: "#252A2D",
    },
    secondary: {
        main: "#219afd",
        dark:'#186aad'
    }
  }
});


function App() {
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline /> 
      <HomePage />
  </ThemeProvider>
     
  );
}

export default App;

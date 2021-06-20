import Home from './components/Home';
import logo from './logo.svg';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    pink: '#FF6392',
    yellow: '#FFE45E',
    white: '#F9F9F9',
    lightblue: '#7FC8F8',
    blue: '#5AA9E6',
  },
  typography: {
    fontFamily: ['Segoe UI']
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Home/>
      </ThemeProvider>
    </div>
  );
}

export default App;

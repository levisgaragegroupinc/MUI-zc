import "./App.css";
import {
  ThemeProvider,
  createTheme,
  Button,
  Divider,
  Typography,
} from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#FFF",
    },
    primary: {
      main: "#276D9B",
      light: "#276D9B",
      dark: "#1A4867",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#F4F4F4",
      light: "#EFEFEF",
      dark: "#D3D5D8",
      contrastText: "#303030",
    },
    error: {
      main: "#F22002",
      light: "#F2F52C",
      dark: "#CA1B02",
      contrastText: "#FFF",
    },
    warning: {
      main: "#F9A31A",
      light: "#FAB240",
      dark: "#CF8816",
      contrastText: "#FFF",
    },
    info: {
      main: "#2A2A2A",
      light: "#2A2A2A",
      dark: "#2A2A2A",
      contrastText: "#FFF",
    },
    success: {
      main: "#1AB318",
      light: "#40C03E",
      dark: "#169514",
      contrastText: "#FFF",
    },
    text: {
      primary: "#303030",
      secondary: "#303030",
      disabled: "#3030308A",
    },
    background: {
      paper: "#FFF",
      default: "#FFF",
    },
    action: {
      active: "rgba(0,0,0,0.54)",
      hover: "rgba(0,0,0,0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0,0,0,0.8)",
      selectedOpacity: 0.08,
      disabled: "rgba(0,0,0,0.26)",
      disabledBackground: "rgba(0,0,0,0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0,0,0,0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
    fontSize: "14px",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 300,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 400,
      fontSize: "2.125",
      lineHeight: 1.235,
      letterSpacing: "-0.00735em",
    },
    h5: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    button: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
      textTransform: "uppercase",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <main className="Main">
          <h1>Hello there this is the page</h1>
          <Divider textAlign="left" className="zc-padding-top-bottom">
            Primary Buttons Enabled
          </Divider>
          <Button>Primary Text</Button>
          <Button variant="contained">Primary Contained</Button>
          <Button variant="outlined">Primary Outlined</Button>
          <Divider textAlign="left" className="zc-padding-top-bottom">
            Primary Button Disabled
          </Divider>
          <Button disabled="true">Primary Text Disabled</Button>
          <Button variant="contained" disabled="true">
            Primary Contained Disabled
          </Button>
          <Button variant="outlined" disabled="true">
            Primary Outlined Disabled
          </Button>
          <Divider textAlign="left" className="zc-padding-top-bottom">
            Secondary Buttons Enabled
          </Divider>
          <Button color="secondary">Secondary Text</Button>
          <Button color="secondary" variant="contained">
            Secondary Contained
          </Button>
          <Button color="secondary" variant="outlined">
            Secondary Outlined
          </Button>
          <Divider textAlign="left" className="zc-padding-top-bottom">
            Typography
          </Divider>
          <Typography variant="body1">body1</Typography>
          <Typography variant="button">button</Typography>
          <Typography variant="caption">caption</Typography>
          <Typography variant="h1">h1</Typography>
          <Typography variant="h2">h2</Typography>
          <Typography variant="h3">h3</Typography>
          <Typography variant="h4">h4</Typography>
          <Typography variant="h5">h5</Typography>
          <Typography variant="h6">h6</Typography>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            Edit Divider
          </Divider>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

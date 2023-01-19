import "./App.css";
import {
  ThemeProvider,
  createTheme,
  Button,
  Divider,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  CssBaseline,
  InputLabel,
  MenuItem,
  Select,
  Box,
  TextField,
  Alert,
  Stack,
} from "@mui/material";

const theme = createTheme({
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       root: {
  //         backgroundColor: "#CA1B02",
  //       },
  //     },
  //   },
  // },
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#FFF",
    },
    primary: {
      main: "#276C9B",
      light: "#6F9DBC",
      dark: "#205A81",
      // contrastText: "#FFF",
    },
    // secondary: {
    //   main: "#F4F4F4",
    //   light: "#9DA2A8",
    //   dark: "#222F3A",
    // },
    secondary: {
      main: "#6C747C",
      light: "#9DA2A8",
      dark: "#222F3A",
    },
    error: {
      main: "#F22002",
      light: "#F66A56",
      dark: "#CA1B02",
      // contrastText: "#FFF",
    },
    warning: {
      main: "#F9A31A",
      light: "#FBC266",
      dark: "#CF8816",
      // contrastText: "#FFF",
    },
    // info: {
    //   main: "#0D2434",
    //   light: "#1A4867",
    //   dark: "#08161F",
    //   // contrastText: "#FFF",
    // },
    // info: {
    //   main: "#A1C5D4",
    //   light: "#C1ECFE",
    //   dark: "#819DA9",
    //   // contrastText: "#FFF",
    // },
    // info: {
    //   main: "#91DCFB",
    //   light: "#B6E8FC",
    //   dark: "#79B7D1",
    //   // contrastText: "#FFF",
    // },
    info: {
      main: "#71D5FE",
      light: "#A0E3FE",
      dark: "#5EB1D4",
      // contrastText: "#FFF",
    },
    // success: {
    //   main: "#1AB318",
    //   light: "#66CC65",
    //   dark: "#169514",
    //   contrastText: "#FFF",
    // },
    success: {
      main: "#099531",
      light: "#5BB876",
      dark: "#077C29",
      contrastText: "#FFF",
    },
    // text: {
    //   primary: "#303030",
    //   secondary: "#303030",
    //   disabled: "#3030308A",
    // },
    // background: {
    //   paper: "#efefef",
    //   default: "#efefef",
    // },
    // action: {
    //   active: "rgba(0,0,0,0.54)",
    //   hover: "rgba(0,0,0,0.04)",
    //   hoverOpacity: 0.04,
    //   selected: "rgba(0,0,0,0.8)",
    //   selectedOpacity: 0.08,
    //   disabled: "rgba(0,0,0,0.26)",
    //   disabledBackground: "rgba(0,0,0,0.12)",
    //   disabledOpacity: 0.38,
    //   focus: "rgba(0,0,0,0.12)",
    //   focusOpacity: 0.12,
    //   activatedOpacity: 0.12,
    // },
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
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "24px",
      letterSpacing: "0.0em", //-0.01562em
    },
    h2: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 200,
      fontSize: "20px",
      lineHeight: "24px",
      letterSpacing: "0.0em",
    },
    h3: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "23px",
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "23px",
      letterSpacing: "0.0em",
    },
    h5: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "23px",
      letterSpacing: "0.0em",
    },
    h6: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "23px",
      letterSpacing: "0.0em",
    },
    subtitle1: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "23px",
      letterSpacing: "0.0em",
    },
    subtitle2: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "23px",
      letterSpacing: "0.0em",
    },
    body1: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: "23px",
      letterSpacing: "0.0em",
    },
    body2: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "23px",
      letterSpacing: "0.0em",
    },
    button: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "23px",
      letterSpacing: "0.0em",
    },
    caption: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: "23px",
      letterSpacing: "0.0em",
    },
    overline: {
      fontFamily: '"Segoe UI","Tahoma","Geneva","Vardana","sans-serif"',
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: "23px",
      letterSpacing: "0.0em",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: "capitalize" } } },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      <CssBaseline />
      <div className="App">
        <main className="Main">
          <h1>Hello there this is the page</h1>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Primary Enabled</h3>
          </Divider>
          <div className="myflexbox">
            <Button variant="text">Primary Text</Button>
            <Button variant="contained">Primary Contained</Button>
            <Button variant="outlined">Primary Outlined</Button>
          </div>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Primary Disabled</h3>
          </Divider>
          <div className="myflexbox">
            <Button variant="text" disabled="true">
              Text Disabled
            </Button>
            <Button variant="contained" disabled="true">
              Contained Disabled
            </Button>
            <Button variant="outlined" disabled="true">
              Outlined Disabled
            </Button>
          </div>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Secondary Enabled</h3>
          </Divider>
          <div className="myflexbox">
            <Button color="secondary" variant="text">
              Text Secondary
            </Button>
            <Button color="secondary" variant="contained">
              Contained Secondary
            </Button>
            <Button color="secondary" variant="outlined">
              Outlined Secondary
            </Button>
          </div>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Secondary Buttons Disabled</h3>
          </Divider>
          <div className="myflexbox">
            <Button color="secondary" variant="text" disabled="true">
              Text Secondary
            </Button>
            <Button color="secondary" variant="contained" disabled="true">
              Contained Secondary
            </Button>
            <Button color="secondary" variant="outlined" disabled="true">
              Outlined Secondary
            </Button>
          </div>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Success</h3>
          </Divider>
          <div className="myflexbox">
            <Button variant="text" color="success">
              Success Text
            </Button>
            <Button variant="contained" color="success">
              Success Contained
            </Button>
            <Button variant="outlined" color="success">
              Success Oultined
            </Button>
          </div>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Error</h3>
          </Divider>
          <div className="myflexbox">
            <Button variant="text" color="error">
              Error Text
            </Button>
            <Button variant="contained" color="error">
              Error Contained
            </Button>
            <Button variant="outlined" color="error">
              Error Outlined
            </Button>
          </div>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Info</h3>
          </Divider>
          <div className="myflexbox">
            <Button variant="text" color="info">
              Info Text
            </Button>
            <Button variant="contained" color="info">
              Info Contained
            </Button>
            <Button variant="outlined" color="info">
              Info Outlined
            </Button>
          </div>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Warning</h3>
          </Divider>
          <div className="myflexbox">
            <Button variant="text" color="warning">
              Warning Text
            </Button>
            <Button variant="contained" color="warning">
              Warning Contained
            </Button>
            <Button variant="outlined" color="warning">
              Warning Outlined
            </Button>
          </div>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Radio Buttons</h3>
          </Divider>

          <div className="myflexbox">
            <Radio />
          </div>

          <div className="myflexbox">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Radio Buttons Group
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="RadioEnabled"
                  control={<Radio />}
                  label="Radio Enabled"
                />
                <FormControlLabel
                  value="RadioDisabled"
                  disabled
                  control={<Radio />}
                  label="Radio Disabled"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Checkbox</h3>
          </Divider>
          <div className="myflexbox">
            <Checkbox />
          </div>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Select</h3>
          </Divider>
          <div className="myflexbox">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select></Select>
            </FormControl>
          </div>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Text Field</h3>
          </Divider>
          <div className="myflexbox">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
          </div>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Text Field w/ label</h3>
          </Divider>
          <div className="myflexbox">
            <TextField
              id="filled-basic"
              label="Select"
              variant="filled"
              helperText="Helper text here"
              defaultValue="Default value here"
            />
          </div>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Text Field Color Values</h3>
          </Divider>
          <div className="myflexbox">
            <TextField
              id="enter-text-filled"
              label="Enter text"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <TextField
              id="enter-text-filled"
              label="Enter text"
              defaultValue="Correct"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              color="success"
            />
            <TextField
              id="enter-text-filled"
              label="Enter text"
              defaultValue="Error"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              color="error"
            />
            <TextField
              id="enter-text-filled"
              label="Enter text"
              defaultValue="Info"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              color="info"
            />
            <TextField
              id="enter-text-filled"
              label="Enter text"
              defaultValue="Warning"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              color="warning"
            />
          </div>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Text Field Widths</h3>
          </Divider>
          <div className="myflexbox">
            <TextField
              id="select-text-field"
              select
              label="320px"
              defaultValue="Select a value"
              variant="filled"
              style={{ width: 320 }}
            />
            <TextField
              id="select-text-field"
              select
              label="150px"
              defaultValue="Select a value"
              variant="filled"
              style={{ width: 150 }}
            />
          </div>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Edit Section</h3>
          </Divider>
          <div className="myflexbox"></div>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Alerts</h3>
          </Divider>
          <div className="myflexbox">
            <Alert severity="error">
              This is an error alert — check it out!
            </Alert>
            <Alert severity="warning">
              This is a warning alert — check it out!
            </Alert>
            <Alert severity="info">This is an info alert — check it out!</Alert>
            <Alert severity="success">
              This is a success alert — check it out!
            </Alert>
          </div>

          <Divider textAlign="left" className="zc-padding-top-bottom">
            <h3>Typography</h3>
          </Divider>
          <div className="myflexcolumn">
            <Typography variant="h1">h1 20px weight 600</Typography>
            <Typography variant="h2">h2 20px weight 400</Typography>
            <Typography variant="h3">h3 16px weight 600</Typography>
            <Typography variant="h4">h4 16px weight 400</Typography>
            <Typography variant="h5">h5 14px weight 600</Typography>
            <Typography variant="h6">h6 14px weight 400</Typography>
            <Typography variant="subtitle1">
              subtitle1 12px weight 600
            </Typography>
            <Typography variant="subtitle2">
              subtitle2 12px weight 400
            </Typography>
            <Typography variant="body1">body1 14px weight 400</Typography>
            <Typography variant="body2">body2 12px weight 400</Typography>
            <Typography variant="button">button 14px weight 400</Typography>
            <Typography variant="caption">caption</Typography>
            <Typography variant="overline">overline</Typography>
          </div>
          <Divider textAlign="left" className="zc-padding-top-bottom">
            Edit Divider
          </Divider>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

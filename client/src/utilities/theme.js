
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';



const generateTheme = type => {
  const purple = {
    light: "#b085f5",
    main: "#7e57c2",
    dark: "#4d2c91",
  };
  const blue = {
    light: "#62efff",
    main: "#00bcd4",
    dark:"#008ba3",
  }
  const lightPurple = {
    light: "#e4b5ff",
    main: "#b085f5",
    dark: "#7e57c2"
  }
  const rawTheme = createMuiTheme({
    palette: {
      type: type,
      primary: purple,
      secondary: lightPurple,
      // primary: {
      //   light: '#45909e',
      //   main: '#006270',
      //   dark: '#003845',
      // },
      // secondary: {
      //   light: '#fff5f8',
      //   main: '#ff3366',
      //   dark: '#e62958',
      // },
      warning: {
        main: '#ffc071',
        dark: '#ffb25e',
      },
      error: {
        xLight: red[50],
        main: red[500],
        dark: red[700],
      },
      success: {
        xLight: green[50],
        dark: green[700],
      },
    },
    typography: {
      fontFamily: "'RTRaleway'",
      fontSize: 14,
      fontWeightLight: 300, // Work Sans
      fontWeightRegular: 400, // Work Sans
      fontWeightMedium: 700, // Roboto Condensed
      //fontFamilySecondary: "'Roboto Condensed', sans-serif",
    },
  });
  
  const fontHeader = {
    color: rawTheme.palette.text.primary,
    fontWeight: rawTheme.typography.fontWeightMedium,
    fontFamily: rawTheme.typography.fontFamilySecondary,
    textTransform: 'uppercase',
  };
  
  const theme = {
    ...rawTheme,
    palette: {
      ...rawTheme.palette,
      background: {
        ...rawTheme.palette.background,
        default: rawTheme.palette.common.white,
        placeholder: grey[200],
      },
    },
    typography: {
      ...rawTheme.typography,
      fontHeader,
      h1: {
        ...rawTheme.typography.h1,
        ...fontHeader,
        letterSpacing: 0,
        fontSize: 60,
      },
      h2: {
        ...rawTheme.typography.h2,
        ...fontHeader,
        fontSize: 48,
      },
      h3: {
        ...rawTheme.typography.h3,
        ...fontHeader,
        fontSize: 42,
      },
      h4: {
        ...rawTheme.typography.h4,
        ...fontHeader,
        fontSize: 30,
      },
      h5: {
        ...rawTheme.typography.h5,
        ...fontHeader,
        fontSize: 20,
        textTransform: "none",
        //fontWeight: rawTheme.typography.fontWeightLight,
      },
      h6: {
        ...rawTheme.typography.h6,
        ...fontHeader,
        fontSize: 18,
      },
      subtitle1: {
        ...rawTheme.typography.subtitle1,
        fontSize: 18,
      },
      body1: {
        ...rawTheme.typography.body2,
        fontWeight: rawTheme.typography.fontWeightRegular,
        fontSize: 16,
      },
      body2: {
        ...rawTheme.typography.body1,
        fontSize: 14,
      },
    },
  };
  return theme;
}

export default generateTheme;
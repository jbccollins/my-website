import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import "./DemoComponent.scss";

const muiTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  textField: {
    margin: theme.spacing(1),
    width: "400px",
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  data: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1),
    borderRadius: "4px",
    background: "lightgrey",
    minHeight: "20px",
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
});

class DemoComponent extends React.Component {
  state = {
    tempData: ""
  }
  handleChange = e => {
    this.setState({tempData: e.target.value})
  }
  render() {
    const { classes, data, onDisplayModeClick, onSetDataClick } = this.props;
    const { tempData } = this.state;
    return (
      <div className="DemoComponent">
        <div className="input-container">
          <Paper className={classes.paper} elevation={1}>
            <Typography variant="h4" component="h3">
              Simple Reducer Example:
            </Typography>
            <Button
              className={classes.button}
              variant="contained"
              onClick={onDisplayModeClick}
              color="secondary"
            >
              Change Background Color
            </Button>
          </Paper>
          <Paper className={classes.paper} elevation={1}>
            <Typography variant="h4" component="h3">
              Complex Reducer Example:
            </Typography>
            <Typography variant="h6" component="h3">
              Current Data From Server:
            </Typography>
            {data && !data.fetching && !data.error &&
              <Typography className={classes.data}>
                {data.data}
              </Typography>
            }
            <Divider className={classes.divider} />
            <TextField
              label="Set New Data"
              value={tempData}
              onChange={this.handleChange}
              multiline
              rowsMax="20"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <div>
              <Button
                className={classes.button}
                disabled={tempData === data.data || tempData === ""}
                variant="contained"
                onClick={() => onSetDataClick(tempData)}
                color="secondary"
              >
                Set Data
              </Button>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

DemoComponent.propTypes = {
  onDisplayModeClick: PropTypes.func.isRequired,
  onSetDataClick: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const themedDemoComponent = props => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <DemoComponent {...props}/>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(themedDemoComponent);
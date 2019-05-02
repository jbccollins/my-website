import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import "./EmailModal.scss";
import {
  isMobile,
} from "react-device-detect";

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  appBar: {
    position: isMobile ? 'fixed' : 'sticky',
  },
  flex: {
    flex: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class EmailModal extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };
  handleSubmit = () => {
    console.log("submit");
  }
  render() {
    const { classes, open } = this.props;
    return (
      <div className="EmailModal">
        <Dialog
          className={`EmailModalDialog ${isMobile ? "mobile" : "desktop"}`}
          fullScreen={isMobile}
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Email Me
              </Typography>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div className="modal-content">
            <form onSubmit={this.handleSubmit}>
              <Grid container spacing={24}>
                {/* {sections.map(({ name, content }) => {
                  return (
                    <Grid item xs={12} sm={12} md={12} lg={12} key={name}>
                      <Paper className={classes.paper} elevation={1}>
                        {name}
                        {content}
                      </Paper>
                    </Grid>
                  );
                })} */}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    required
                    id="name"
                    label="Your Name"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    required
                    id="standard-required"
                    label="email"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextField
                    required
                    id="body"
                    label="Email Body"
                    multiline
                    rowsMax="20"
                    //value={this.state.multiline}
                    //onChange={this.handleChange('multiline')}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleSubmit}>
                    Send
                    {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                    <SendIcon className={classes.rightIcon}/>
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Dialog>
      </div>
    );
  }
}
EmailModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(EmailModal);
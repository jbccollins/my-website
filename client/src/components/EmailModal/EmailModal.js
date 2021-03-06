import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import CircularProgress from '@material-ui/core/CircularProgress';
import { sendEmail } from "utilities/api";
import "./EmailModal.scss";
import {
  isMobile,
} from "react-device-detect";

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  progress: {
    margin: theme.spacing(1),
  },
  appBar: {
    position: isMobile ? 'fixed' : 'sticky',
  },
  flex: {
    flex: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
});

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" {...props} ref={ref} />
));

const initialInputState = {
  fromName: "",
  fromEmail: "",
  body: "",
  fromNameErrorEmpty: false,
  fromEmailErrorEmpty: false,
  bodyErrorEmpty: false,
  fromEmailErrorInvalid: false,
};

const initialModalState = {
  sending: false,
  sendingError: false,
  sendingSuccess: false,
  ...initialInputState,
}

const REQUIRED_HELPER_TEXT = "Required Field Missing";
const validateEmail = email => {
  // eslint-disable-next-line
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class EmailModal extends React.Component {
  state = {
    ...initialModalState
  }

  inputChangeHandler = key => {
    return e => {
      this.setState({[key]: e.target.value});
    }
  }

  getBlurHandler = key => {
    if (key === "fromEmailErrorEmpty") {
      return this.emailBlurHandler;
    }
    return this.defaultBlurHandler;
  }

  defaultBlurHandler = (key, e) => {
    this.setState({[key]: e.target.value === ""});
  }

  emailBlurHandler = (key, e) => {
    this.defaultBlurHandler(key, e);
    if (!validateEmail(e.target.value)) {
      this.setState({
        fromEmailErrorInvalid: true,
      });
    }
  }

  inputBlurHandler = key => e => this.getBlurHandler(key)(key, e);

  inputFocusHandler = keys => {
    const s = {};
    keys.forEach(k => {
      s[k] = false;
    })
    return () => {
      this.setState({...s});
    }
  }

  resetDialog = () => {
    this.setState({...initialModalState});
  }

  handleClose = () => {
    const { sendingSuccess, sendingError, sending } = this.state;
    // Prevent a visually jarring UI change while the close animation occurs
    if (sendingSuccess || sendingError || sending) {
      setTimeout(this.resetDialog, 1000);
    } else {
      this.resetDialog();
    }
    this.props.onClose();
  };
  handleSubmit = async () => {
    const { fromName, fromEmail, body, fromEmailErrorEmpty, fromNameErrorEmpty, fromEmailErrorInvalid, bodyErrorEmpty } = this.state;
    if (
      fromName === "" ||
      fromEmail === "" ||
      body === "" ||
      fromEmailErrorEmpty ||
      fromNameErrorEmpty ||
      fromEmailErrorInvalid ||
      bodyErrorEmpty) {
      return false;
    }
    this.setState({
      sending: true,
    });
    const res = await sendEmail(fromEmail, fromName, body);
    this.setState({
      sending: false,
      sendingError: res.messageId ? false : true,
      sendingSuccess: res.messageId ? true : false,
    })
  }
  render() {
    const { classes, open } = this.props;
    const {
      fromName,
      fromEmail,
      body,
      fromEmailErrorEmpty,
      fromNameErrorEmpty,
      fromEmailErrorInvalid,
      bodyErrorEmpty,
      sending,
      sendingError,
      sendingSuccess
    } = this.state;
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
            <Grid container spacing={3}>
              {!sendingSuccess && [
                <Grid key="name-input" item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    error={fromNameErrorEmpty}
                    required
                    label="Your Name"
                    value={fromName}
                    onChange={this.inputChangeHandler("fromName")}
                    onBlur={this.inputBlurHandler("fromNameErrorEmpty")}
                    onFocus={this.inputFocusHandler(["fromNameErrorEmpty"])}
                    className={classes.textField}
                    margin="normal"
                    disabled={sending}
                    helperText={`${fromNameErrorEmpty ? REQUIRED_HELPER_TEXT : ""}`}
                  />
                </Grid>,
                <Grid key="email-input" item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    error={fromEmailErrorEmpty || fromEmailErrorInvalid}
                    required
                    type="email"
                    label="Your Email Address"
                    value={fromEmail}
                    onChange={this.inputChangeHandler("fromEmail")}
                    onBlur={this.inputBlurHandler("fromEmailErrorEmpty")}
                    onFocus={this.inputFocusHandler(["fromEmailErrorEmpty", "fromEmailErrorInvalid"])}
                    className={classes.textField}
                    margin="normal"
                    disabled={sending}
                    helperText={`${fromEmailErrorInvalid ? "Invalid Email" : (fromEmailErrorEmpty ? REQUIRED_HELPER_TEXT : "")}`}
                  />
                </Grid>,
                <Grid key="body-input" item xs={12} sm={12} md={12} lg={12}>
                  <TextField
                    error={bodyErrorEmpty}
                    required
                    label="Email Body"
                    value={body}
                    onChange={this.inputChangeHandler("body")}
                    onBlur={this.inputBlurHandler("bodyErrorEmpty")}
                    onFocus={this.inputFocusHandler(["bodyErrorEmpty"])}
                    multiline
                    rowsMax="20"
                    //value={this.state.multiline}
                    //onChange={this.handleChange('multiline')}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    disabled={sending}
                    helperText={`${bodyErrorEmpty ? REQUIRED_HELPER_TEXT : ""}`}
                  />
                </Grid>
              ]}
              <Grid item xs={12} sm={12} md={12} lg={12}>
                {!sending && !sendingSuccess &&
                  <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}>
                    Send
                    <SendIcon className={classes.rightIcon}/>
                  </Button>
                }
                {sending &&
                  <CircularProgress color="primary" className={classes.progress} />
                }
                {sendingSuccess &&
                  <Typography color="inherit">
                    Got it! I'll get back to you soon <span role="img" aria-label="smiley face">😀</span>
                  </Typography>
                }
                {sendingError &&
                  <Typography color="error">
                    Hmmm... something went wrong when trying to send the email <span role="img" aria-label="sad face">😞</span>
                  </Typography>
                }
              </Grid>
            </Grid>
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
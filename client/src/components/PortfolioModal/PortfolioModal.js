import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./PortfolioModal.scss";
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
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class PortfolioModal extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };
  render() {
    const { classes, open, name, sections } = this.props;
    return (
      <div className="PortfolioModal">
        <Dialog
          className={isMobile ? "mobile" : "desktop"}
          fullScreen={isMobile}
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                {name}
              </Typography>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div className="modal-content">
            <Grid container spacing={24}>
              {sections.map(({ name, content }) => {
                return (
                  <Grid item xs={12} sm={12} md={12} lg={12} key={name}>
                    <Paper className={classes.paper} elevation={1}>
                      {name}
                      {content}
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Dialog>
      </div>
    );
  }
}
PortfolioModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  website: PropTypes.object,
  description: PropTypes.string.isRequired,
  sections: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(PortfolioModal);
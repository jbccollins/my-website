import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import profile from 'assets/profile.jpeg';
import "./ProfileAvatar.scss";

const styles = {
  bigAvatar: {
    //margin: 10,
    width: 80,
    height: 80,
  },
};

class ProfileAvatar extends React.Component {
  render() {
    return (
      <div className="ProfileAvatar">
        <Avatar alt="James Collins" src={profile} className={this.props.classes.bigAvatar} />
      </div>
    );
  }
}

ProfileAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileAvatar);

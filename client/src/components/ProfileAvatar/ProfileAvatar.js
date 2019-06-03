import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import profile from 'assets/social/profile.jpeg';
//import profile from 'assets/logos/git.png';
import {
  isMobile,
} from "react-device-detect";

import "./ProfileAvatar.scss";

const styles = {
  bigAvatar: {
    //margin: 10,
    width: 120,
    height: 120,
  },
  smallAvatar: {
    width: 30,
    height: 30, 
  }
};

class ProfileAvatar extends React.Component {
  render() {
    const { bigAvatar, smallAvatar } = this.props.classes;
    return (
      <div className="ProfileAvatar">
        <Avatar alt="James Collins" src={profile} className={isMobile ? smallAvatar : bigAvatar} />
      </div>
    );
  }
}

ProfileAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileAvatar);

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import profile from 'assets/profile.jpeg';
//import profile from 'assets/profile-2.png';
import "./ProfileAvatar.scss";

const styles = {
  bigAvatar: {
    //margin: 10,
    width: 100,
    height: 100,
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

import React from "react";
import PropTypes from "prop-types";
import linkedinIcon from "assets/linkedin-social.png";
import githubIcon from "assets/github-social.png";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from '@material-ui/core/styles';
import "./SidebarInfo.scss";

const styles = {
  smallAvatar: {
    //margin: 10,
    width: 24,
    height: 24,
  },
};

class SidebarInfo extends React.Component {	
  handleGithubClick = () => {
    window.open('https://github.com/jbccollins');
  }
  handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/james-collins-41349124/');
  }
  render() {
    return (	
      <div className="SidebarInfo">	
        <div className="name">James Collins</div>
        <div className="social">
          <Avatar
            onClick={this.handleGithubClick}
            className={this.props.classes.smallAvatar}
            alt="github"
            src={githubIcon}
          />
          <Avatar
            onClick={this.handleLinkedInClick}
            className={this.props.classes.smallAvatar}
            alt="linkedin"
            src={linkedinIcon}
          />
        </div>
      </div>	
    );	
  }	
}	
 SidebarInfo.propTypes = {	
  	classes: PropTypes.object.isRequired,
};	
 export default withStyles(styles)(SidebarInfo)
import React from "react";
import PropTypes from "prop-types";
import linkedinIcon from "assets/linkedin-social.svg";
import githubIcon from "assets/github-social.svg";
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
          <div onClick={this.handleGithubClick}>
            <img
              className={this.props.classes.smallAvatar}
              alt="github"
              src={githubIcon}
            />
          </div>
          <div style={{marginLeft: '8px'}} onClick={this.handleLinkedInClick}>
            <img
              className={this.props.classes.smallAvatar}
              alt="linkedin"
              src={linkedinIcon}
            />
          </div>
        </div>
      </div>	
    );	
  }	
}	
 SidebarInfo.propTypes = {	
  	classes: PropTypes.object.isRequired,
};	
 export default withStyles(styles)(SidebarInfo)
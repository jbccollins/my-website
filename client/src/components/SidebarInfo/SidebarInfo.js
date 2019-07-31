import React from "react";
import PropTypes from "prop-types";
import linkedinIcon from "assets/social/linkedin-social.svg";
import resumeIcon from "assets/resume/resume-icon-alt.png";
import githubIcon from "assets/social/github-social.svg";
import Tooltip from "@material-ui/core/Tooltip";
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
          <Tooltip title="GitHub" placement="bottom">
            <div onClick={this.handleGithubClick}>
              <img
                className={this.props.classes.smallAvatar}
                alt="github"
                src={githubIcon}
              />             
            </div>
          </Tooltip>
          <Tooltip title="LinkedIn" placement="bottom">
            <div style={{marginLeft: '8px'}} onClick={this.handleLinkedInClick}>
              <img
                className={this.props.classes.smallAvatar}
                alt="LinkedIn"
                src={linkedinIcon}
              />
            </div>
          </Tooltip>
          <Tooltip title="Résumé" placement="bottom">
            <div style={{marginLeft: '8px'}} onClick={this.props.handleResumeClick}>
              <img
                className={this.props.classes.smallAvatar}
                alt="Résumé"
                src={resumeIcon}
              />
            </div>
          </Tooltip>
          {/* <Tooltip title="Email" placement="bottom">
            <div style={{marginLeft: '8px'}} onClick={this.handleLinkedInClick}>
              <img
                className={this.props.classes.smallAvatar}
                alt="email"
                src={gmailIcon}
              />
            </div>
          </Tooltip> */}
        </div>
      </div>	
    );	
  }	
}	
 SidebarInfo.propTypes = {	
    classes: PropTypes.object.isRequired,
    handleResumeClick: PropTypes.func.isRequired,
};	
 export default withStyles(styles)(SidebarInfo)
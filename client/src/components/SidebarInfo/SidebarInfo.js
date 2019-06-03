import React from "react";
import PropTypes from "prop-types";
import linkedinIcon from "assets/social/linkedin-social.svg";
import resumeIcon from "assets/resume/resume-icon-alt.png";
import githubIcon from "assets/social/github-social.svg";
import Tooltip from "@material-ui/core/Tooltip";
import fetch from "isomorphic-fetch";
import { RESUME_DOWNLOAD } from "common/constants/urls";
import { withStyles } from '@material-ui/core/styles';
import { saveAs } from 'file-saver';
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
  handleResumeClick = async () => {
    let res = await fetch(RESUME_DOWNLOAD, {
      method: "GET",
    });
    res = await res.blob();
    var fileBlob = new Blob([res], {type: "application/pdf"})
    saveAs(fileBlob, "James-Collins-Resume.pdf");
    
  }
  render() {
    return (	
      <div className="SidebarInfo">	
        <div className="name">James Collins</div>
        <div className="social">
          <Tooltip title="Github" placement="bottom">
            <div onClick={this.handleGithubClick}>
              <img
                className={this.props.classes.smallAvatar}
                alt="github"
                src={githubIcon}
              />             
            </div>
          </Tooltip>
          <Tooltip title="Linkedin" placement="bottom">
            <div style={{marginLeft: '8px'}} onClick={this.handleLinkedInClick}>
              <img
                className={this.props.classes.smallAvatar}
                alt="linkedin"
                src={linkedinIcon}
              />
            </div>
          </Tooltip>
          <Tooltip title="Resume" placement="bottom">
            <div style={{marginLeft: '8px'}} onClick={this.handleResumeClick}>
              <img
                className={this.props.classes.smallAvatar}
                alt="resume"
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
};	
 export default withStyles(styles)(SidebarInfo)
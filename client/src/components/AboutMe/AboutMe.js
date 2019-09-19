import React from "react";	
import PropTypes from "prop-types";
import ConditionalReveal from "components/ConditionalReveal";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//import profile from 'assets/logos/git.png';
//import profile from 'assets/profile-2.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import EmailModal from 'components/EmailModal';
import differenceInYears from 'date-fns/difference_in_years'
import "./AboutMe.scss";	

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
});

const yearsOfExperience = differenceInYears(
  new Date(),
  new Date(2014, 6, 1)
);

class AboutMe extends React.Component {
  state = {
    reveal: false,
    emailModalOpen: false,
  }
  enableReveal = () => {
    this.setState({
      reveal: true,
    });
  }

  handleOpenEmailModal = () => {
    this.setState({ emailModalOpen: true });
  };

  handleCloseEmailModal = () => {
    this.setState({ emailModalOpen: false });
  };


  componentDidMount() {
    // 1000 is the default reveal time
    setTimeout(this.enableReveal, 1000)
  }
  render() {
    const { classes, handleResumeClick } = this.props;
    const { reveal, emailModalOpen } = this.state;
    return (
      <div className="AboutMe">
        <ConditionalReveal right>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className="secondary-section-title"><span>Introduction</span></div>
              <Typography className="about-me-text" variant="h5">
                Hi, I'm James!
              </Typography>
              <Typography className="about-me-text" component="p">
                I am a Full Stack Software Engineer with over {yearsOfExperience} years
                of experience developing web based applications and services.
              </Typography>
              <Typography className="about-me-text" component="p">
                I nerd out over geospatial data, fun visualizations and slick user interfaces.
              </Typography>
              <Typography className="about-me-text" component="p">
                I currently work in Washington D.C. for <a className="fireside-link" href="https://www.fireside21.com/" rel="noopener noreferrer" target="_blank">Fireside</a>, building
                CRM tools used by congressional staffers.
              </Typography>
              <Typography className="about-me-text" component="p">
                Have fun exploring my website and feel free to shoot me an email or check out my resume if you are so inclined.
              </Typography>
              <div className="about-me-buttons-wrapper">
                <Button variant="contained" color="primary" className={classes.button} onClick={this.handleOpenEmailModal}>
                  Email Me
                  {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                  <SendIcon className={classes.rightIcon}/>
                </Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={handleResumeClick}>
                  Résumé
                  {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                  <PersonIcon className={classes.rightIcon}/>
                </Button>
              </div>
              <EmailModal open={emailModalOpen} onClose={this.handleCloseEmailModal}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              {/* <ConditionalReveal component="zoom" delay={1000}>
                <div className="image-wrapper">
                  <div className="image" style={{backgroundImage: `url(${profile})`}}></div>
                </div>
              </ConditionalReveal> */}
              <div className="secondary-section-title"><span>Work and Education</span></div>
              <VerticalTimeline layout='1-column' animate={false}>
                <ConditionalReveal when={reveal} component="zoom">
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ color: '#fff' }}
                    icon={<WorkIcon />}
                  >
                    <Paper>
                      <div className="timeline-element-wrapper">
                        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                          <a href="https://www.fireside21.com/" target="_blank" rel="noopener noreferrer">Fireside</a>
                        </h4>
                        <p className="vertical-timeline-element-date">April 2018 - present</p>
                      </div>
                    </Paper>
                  </VerticalTimelineElement>
                </ConditionalReveal>
                <ConditionalReveal when={reveal} component="zoom">
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ color: '#fff' }}
                    icon={<WorkIcon />}
                  >
                    <Paper>
                      <div className="timeline-element-wrapper">
                        <h3 className="vertical-timeline-element-title">Software Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                          <a href="https://www.cattlab.umd.edu/" target="_blank" rel="noopener noreferrer">
                            Center for Advanced Transportation Technology
                          </a>
                        </h4>
                        <p className="vertical-timeline-element-date">June 2014 - April 2018</p>
                      </div>
                    </Paper>
                  </VerticalTimelineElement>
                </ConditionalReveal>
                <ConditionalReveal when={reveal} component="zoom">
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ color: '#fff' }}
                    icon={<SchoolIcon />}
                  >
                    <Paper>
                      <div className="timeline-element-wrapper">
                        <h3 className="vertical-timeline-element-title">Bachelor's Degree in Computer Science</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                          <a href="https://www.umd.edu/" target="blank" rel="noopener noreferrer">
                            University of Maryland College Park
                          </a>  
                        </h4>
                        <p className="vertical-timeline-element-date">September 2012 - May 2016</p>
                      </div>
                    </Paper>
                  </VerticalTimelineElement>
                </ConditionalReveal>
              </VerticalTimeline>
            </Grid>
          </Grid>
        </ConditionalReveal>
      </div>
    );
  }
}
AboutMe.propTypes = {
  classes: PropTypes.object.isRequired, 
  handleResumeClick: PropTypes.func.isRequired, 	
};	
export default withStyles(styles)(AboutMe);
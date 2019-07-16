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
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import EmailModal from 'components/EmailModal';
//import differenceInYears from 'date-fns/difference_in_years'
import "./AboutMe.scss";	

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

// const yearsOfExperience = differenceInYears(
//   new Date(),
//   new Date(2014, 6, 1)
// );

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
    const { classes } = this.props;
    const { reveal, emailModalOpen } = this.state;
    return (
      <div className="AboutMe">
        <ConditionalReveal right>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className="secondary-section-title">Introduction</div>
              <Typography className="about-me-text" variant="h5">
                Hi, I'm James!
              </Typography>
              <Typography className="about-me-text" component="p">
                I am a software developer based out of Washington DC.
              </Typography>
              <Typography className="about-me-text" component="p">
                I nerd out over geospatial data, fun visualizations and intuitive user interfaces.
                I currently work for <a className="fireside-link" href="https://www.fireside21.com/" rel="noopener noreferrer" target="_blank">Fireside</a>, building
                tools used by congressional staffers.
              </Typography>
              {/* <Typography className="about-me-text" component="p">
                I have over {yearsOfExperience} years of experience building websites.
              </Typography> */}
              <Typography className="about-me-text" component="p">
                Have fun exploring my website and feel free to shoot me an email if you are so inclined.
              </Typography>
              <div className="contact-me-button-wrapper">
                <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleOpenEmailModal}>
                  Email Me
                  {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                  <SendIcon className={classes.rightIcon}/>
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
              <div className="secondary-section-title">Work and Education</div>
              <VerticalTimeline layout='1-column' animate={false}>
                <ConditionalReveal when={reveal} component="zoom">
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#007082', color: '#fff' }}
                    icon={<WorkIcon />}
                  >
                    <Paper>
                      <div className="timeline-element-wrapper">
                        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                          <a href="https://www.fireside21.com/" target="_blank" rel="noopener noreferrer">Fireside</a>
                        </h4>
                        <p>April 2018 - present</p>
                      </div>
                    </Paper>
                  </VerticalTimelineElement>
                </ConditionalReveal>
                <ConditionalReveal when={reveal} component="zoom">
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#007082', color: '#fff' }}
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
                        <p>June 2014 - April 2018</p>
                      </div>
                    </Paper>
                  </VerticalTimelineElement>
                </ConditionalReveal>
                <ConditionalReveal when={reveal} component="zoom">
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: '#007082', color: '#fff' }}
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
                        <p>September 2012 - May 2016</p>
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
};	
export default withStyles(styles)(AboutMe);
import React from "react";	
//import PropTypes from "prop-types";
import ConditionalReveal from "components/ConditionalReveal";
import Typography from '@material-ui/core/Typography';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//import profile from 'assets/logos/git.png';
import profile from 'assets/profile-2.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

import "./AboutMe.scss";	
class AboutMe extends React.Component {
  state = {
    reveal: false,
  }
  enableReveal = () => {
    this.setState({
      reveal: true,
    });
  }
  componentDidMount() {
    // 1000 is the default reveal time
    setTimeout(this.enableReveal, 1000)
  }
  render() {
    const { reveal } = this.state;
    return (
      <div className="AboutMe">
        <ConditionalReveal right>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography variant="h5">
                Hi, I'm James!
              </Typography>
              <Typography variant="h6">
                I am a software developer based out of Washington DC.
              </Typography>
              <Typography component="p">
                I nerd out over geospatial data, fun visualizations and intuitive user interfaces.
                I currently work for
                <a className="fireside-link" href="https://www.fireside21.com/" rel="noopener noreferrer" target="_blank">Fireside</a>
                building tools used by congressional staffers.
              </Typography>
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
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                  >
                    <Paper>
                      <div className="timeline-element-wrapper">
                        <h3 className="vertical-timeline-element-title">Software Engineer at Fireside</h3>
                        <h4 className="vertical-timeline-element-subtitle">Washington, DC</h4>
                        <p>April 2018 - present</p>
                      </div>
                    </Paper>
                  </VerticalTimelineElement>
                </ConditionalReveal>
                <ConditionalReveal when={reveal} component="zoom">
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                  >
                    <Paper>
                      <div className="timeline-element-wrapper">
                        <h3 className="vertical-timeline-element-title">Software Developer at CATT</h3>
                        <h4 className="vertical-timeline-element-subtitle">College Park, MD</h4>
                        <p>June 2014 - April 2018</p>
                      </div>
                    </Paper>
                  </VerticalTimelineElement>
                </ConditionalReveal>
                <ConditionalReveal when={reveal} component="zoom">
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                  >
                    <Paper>
                      <div className="timeline-element-wrapper">
                        <h3 className="vertical-timeline-element-title">Bachelor's Degree in Computer Science</h3>
                        <h4 className="vertical-timeline-element-subtitle">University of Maryland College Park</h4>
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
  	
};	
 export default AboutMe;
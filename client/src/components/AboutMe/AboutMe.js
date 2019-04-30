import React from "react";	
//import PropTypes from "prop-types";
import ConditionalReveal from "components/ConditionalReveal";
import Typography from '@material-ui/core/Typography';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
//import profile from 'assets/logos/git.png';
import profile from 'assets/profile-2.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CodeIcon from '@material-ui/icons/Code';

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
              <VerticalTimeline layout='1-column' animate={false}>
                <ConditionalReveal when={reveal} component="zoom">
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="April 2018 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<CodeIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">Software Engineer at Fireside</h3>
                    <h4 className="vertical-timeline-element-subtitle">Washington, DC</h4>
                  </VerticalTimelineElement>
                </ConditionalReveal>
                <ConditionalReveal when={reveal} component="zoom">
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="June 2014 - April 2018"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<CodeIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">Software Developer at CATT</h3>
                    <h4 className="vertical-timeline-element-subtitle">College Park, MD</h4>
                  </VerticalTimelineElement>
                </ConditionalReveal>
                <ConditionalReveal when={reveal} component="zoom">
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="September 2013 - May 2016"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<CodeIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">University of Maryland College Park</h4>
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
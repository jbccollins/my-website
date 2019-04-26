import React from "react";
import Portfolio from "components/Portfolio";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import "../../../fonts/style.css";
import Grid from '@material-ui/core/Grid';
import "./app.scss";
import { portfolioItems } from "data/portfolioItems";
import { logos } from "data/logos";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Sidebar from "components/Sidebar";
import GradientScroll from 'react-gradient-scroll-indicator'
import SectionHeader from "components/SectionHeader";
import AboutMe from "components/AboutMe";
import Skills from "components/Skills";
//import{ Waypoint } from "react-waypoint";
import Fade from 'react-reveal/Fade';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = {
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.6em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      borderRadius: '0.3em',
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  }
};



class App extends React.Component {
  componentDidMount() {
    this.gradientScroll.scrollableElement.id = "gradient-scroll-id";
  }
  render() {
    return (
      <div>
        <main>
          <GradientScroll ref={r => this.gradientScroll = r}>
            <div className="sidebar-and-content-wrapper">
              <Sidebar/>
              <Fade bottom>
                  <div className="content-wrapper">
                    <div id="sections">
                      <div className="section">
                        <SectionHeader id="projects" name="projects">Portfolio</SectionHeader>
                        <div className="section-content">
                          <Portfolio items={portfolioItems} />
                        </div>
                      </div>
                      <div className="section">
                        <SectionHeader id="about-me" name="about-me">About Me</SectionHeader>
                        <div className="section-content">
                          <AboutMe/>
                        </div>
                      </div>
                      <div className="section">
                        <SectionHeader id="skills" name="skills">Skills</SectionHeader>
                        <div className="section-content">
                          <Skills items={logos} />
                        </div>
                      </div>
                    </div>
                  </div>
              </Fade>
            </div>
          </GradientScroll>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));

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
import SectionHeader from "components/SectionHeader";
import AboutMe from "components/AboutMe";
import Skills from "components/Skills";
//import{ Waypoint } from "react-waypoint";
import ConditionalReveal from "components/ConditionalReveal";
import {
  isMobile,
} from "react-device-detect";

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

let styles = {
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

if (isMobile) {
  styles = {};
}

class App extends React.Component {
  render() {
    return (
      <div className={isMobile ? "mobile" : "desktop"}>
        <main id="main">
          <div className="sidebar-and-content-wrapper">
            <Sidebar/>
            <ConditionalReveal right>
                <div className="content-wrapper">
                  <div id="sections">
                    <div className="section" id="projects" name="projects">
                      <SectionHeader>Portfolio</SectionHeader>
                      <div className="section-content">
                        <Portfolio items={portfolioItems} />
                      </div>
                    </div>
                    <div className="section" id="about-me" name="about-me">
                      <SectionHeader>About Me</SectionHeader>
                      <div className="section-content">
                        <AboutMe/>
                      </div>
                    </div>
                    <div className="section" id="skills" name="skills">
                      <SectionHeader>Skills</SectionHeader>
                      <div className="section-content">
                        <Skills/>
                      </div>
                    </div>
                  </div>
                </div>
            </ConditionalReveal>
          </div>
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

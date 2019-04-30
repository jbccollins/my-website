import React from "react";
import Portfolio from "components/Portfolio";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import "../../../fonts/style.css";
import "./app.scss";
import { portfolioItems } from "data/portfolioItems";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Sidebar from "components/Sidebar";
import SectionHeader from "components/SectionHeader";
import AboutMe from "components/AboutMe";
import Skills from "components/Skills";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
//import{ Waypoint } from "react-waypoint";
import ConditionalReveal from "components/ConditionalReveal";
import {
  isMobile,
  BrowserView,
} from "react-device-detect";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: '"RTRaleway"',
  },
});

let styles = theme => ({
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
});

if (isMobile) {
  styles = {};
}

const year = new Date().getFullYear();

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className={isMobile ? "mobile" : "desktop"}>
          <main id="main">
            <div className="sidebar-and-content-wrapper">
              <Sidebar/>
              <ConditionalReveal right>
                  <div className="content-wrapper">
                    <div id="sections">
                    <div className="section" id="about-me" name="about-me">
                        <SectionHeader>About Me</SectionHeader>
                        <div className="section-content">
                          <AboutMe/>
                        </div>
                      </div>
                      <div className="section" id="projects" name="projects">
                        <SectionHeader>Portfolio</SectionHeader>
                        <div className="section-content">
                          <Portfolio items={portfolioItems} />
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
            <BrowserView>
              <div className="footer">
                © {year} James Collins
              </div>
            </BrowserView>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(App));

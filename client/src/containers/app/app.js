import React from "react";
import Portfolio from "components/Portfolio";
import { setSelectedSidebarItem, setDisplayMode } from "actions/controls";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./app.scss";
import { portfolioItems } from "data/portfolioItems";
import { withStyles } from "@material-ui/core/styles";
import Sidebar from "components/Sidebar";
import Resume from "components/Resume";
import SectionHeader from "components/SectionHeader";
import AboutMe from "components/AboutMe";
import Skills from "components/Skills";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from "utilities/theme";
import ConditionalReveal from "components/ConditionalReveal";
import { DARK, LIGHT } from "common/constants/theme";
import {
  isMobile,
  BrowserView,
} from "react-device-detect";

// const theme = createMuiTheme({
//   typography: {
//     useNextVariants: true,
//     fontFamily: '"RTRaleway"',
//   },
// });

let styles = () => ({
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

const sidebarItems = [
  {
    link: "about-me",
    name: "About Me",
  },
  {
    link: "projects",
    name: "Projects",
  },
  {
    link: "skills",
    name: "Skills",
  },
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTheme: theme(props.displayMode),
      navigationClick: false,
      resumeOpen: false,
      overlayClasses: [],
    }
  }

  componentDidMount() {
    this.handleScroll();
    this.handleDisplayModeChange();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this.handleScroll();
    }
    if (prevProps.displayMode !== this.props.displayMode) {
      this.setState({currentTheme: theme(this.props.displayMode)});
    }
  }

  handleDisplayModeChange = () => {
    const { displayMode, setDisplayMode } = this.props;
    const oppositeDisplayMode = displayMode === LIGHT ? DARK : LIGHT;
    setDisplayMode(oppositeDisplayMode);
    document.querySelector('body').classList.add(`${oppositeDisplayMode}-mode`);
    document.querySelector('body').classList.remove(`${displayMode}-mode`);
  };

  handleNavigationClick = link => {
    this.setState({
      navigationClick: true,
      overlayClasses: ["top"]
    });
    this.props.setSelectedSidebarItem(link);
  }

  handleScroll = () => {
    const { setSelectedSidebarItem } = this.props;
    const { navigationClick } = this.state;
    if (navigationClick) {
      // Clicking the navigation triggers a scroll but we don't want the gradient to hide section titles
      this.setState({
        navigationClick: false
      });
      return;
    }
    setSelectedSidebarItem(null);
    const scrollableScrollTop = this.scrollableElement.scrollTop;
    const overlayClasses = [];
    if (scrollableScrollTop === 0) {
      overlayClasses.push("top");
    }
    // If at bottom enforce last sidebar menu item
    if (this.scrollableElement.scrollTop >= (this.scrollableElement.scrollHeight - this.scrollableElement.offsetHeight)) {
      this.handleNavigationClick(sidebarItems[sidebarItems.length - 1]["link"]);
    }
    this.setState({overlayClasses});
  }

  handleResumeCloseClick = () => {
    this.setState({resumeOpen: false});
  }

  handleResumeOpenClick = () => {
    this.setState({resumeOpen: true});
  }

  render() {
    const { overlayClasses, currentTheme, resumeOpen } = this.state;
    const { selectedSidebarItem } = this.props;
    return (
      <MuiThemeProvider theme={currentTheme}>
        <CssBaseline />
        <div className={`${isMobile ? "mobile" : "desktop"}`}>
          <main id="main" onScroll={this.handleScroll} ref={r => (this.scrollableElement = r)}>
            <div className="sidebar-and-content-wrapper" >
              <Resume onClose={this.handleResumeCloseClick} open={resumeOpen}/>
              <Sidebar handleResumeClick={this.handleResumeOpenClick} onDisplayModeChange={this.handleDisplayModeChange} onNavigationClick={this.handleNavigationClick} sidebarItems={sidebarItems} selectedSidebarItem={selectedSidebarItem}/>
              <div className="not-sidebar">
                <ConditionalReveal right>
                    <div className={`content-wrapper ${overlayClasses.join(' ')}`} ref={r => (this.contentElement = r)}>
                      <div id="sections">
                        {/* <div className="section" id="blog" name="blog">
                          <SectionHeader>Blog</SectionHeader>
                          <div className="section-content">
                            <Blog/>
                          </div>
                        </div> */}
                        <div className="section" id="about-me" name="about-me">
                          <SectionHeader>About Me</SectionHeader>
                          <div className="section-content">
                            <AboutMe handleResumeClick={this.handleResumeOpenClick}/>
                          </div>
                        </div>
                        <div className="section" id="projects" name="projects">
                          <SectionHeader>Personal Projects</SectionHeader>
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

const mapStateToProps = state => ({
  selectedSidebarItem: state.selectedSidebarItem,
  displayMode: state.displayMode,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setSelectedSidebarItem,
  setDisplayMode,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(App));

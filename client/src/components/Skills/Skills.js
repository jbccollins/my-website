import React from "react";	
import PropTypes from "prop-types";
import Logo from "components/Logo";
import Grid from '@material-ui/core/Grid';
import ConditionalReveal from "components/ConditionalReveal";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import {
  logos,
  ANGULAR,
  ATLASSIAN,
  BABEL,
  CSHARP,
  D3,
  DJANGO,
  DOTNET,
  ESLINT,
  GIT,
  GITHUB,
  GOOGLE,
  HEROKU,
  JAVA,
  JAVASCRIPT,
  JEST,
  JQUERY,
  LEAFLET,
  MATERIALUI,
  MSSQL,
  NODE,
  NPM,
  POSTGRESQL,
  PYTHON,
  R,
  REACT,
  REDUX,
  SASS,
  TRAVIS,
  TYPESCRIPT,
  VANILLAWEB,
  VISUALSTUDIO,
  WEBPACK,
  YARN,
} from "data/logos";
import "./Skills.scss";

const LANGUAGES = [JAVASCRIPT, PYTHON, CSHARP, JAVA, TYPESCRIPT, POSTGRESQL, MSSQL, R];
const FRAMEWORKS_AND_ECOSYSTEMS = [REACT, ANGULAR, DOTNET, DJANGO, VANILLAWEB, NODE];
const POPULAR_LIBRARIES = [D3, MATERIALUI, REDUX, WEBPACK, BABEL, ESLINT, JEST, LEAFLET, SASS];
const CODE_MANAGEMENT = [GIT, GITHUB, NPM, YARN, TRAVIS, ATLASSIAN, GOOGLE, HEROKU];

const sections = [
  {
    title: "Languages",
    items: LANGUAGES.map(i => logos.find(({name}) => name === i)),
  },
  {
    title: "Frameworks and Environments",
    items: FRAMEWORKS_AND_ECOSYSTEMS.map(i => logos.find(({name}) => name === i)),
  },
  {
    title: "Popular Libraries",
    items: POPULAR_LIBRARIES.map(i => logos.find(({name}) => name === i)),
  },
  {
    title: "Code Management",
    items: CODE_MANAGEMENT.map(i => logos.find(({name}) => name === i))
  }
];

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});
	
class Skills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="Skills">
        {sections.map(({title, items}) => {
          return (          
            <div key={title} className="skills-section">
              <Paper className={classes.root} elevation={1}>
                <ConditionalReveal>
                  <div className="skills-section-title">{title}</div>
                </ConditionalReveal>
                <Grid container spacing={24}>
                  {items.map(({name, image, color}) => {
                    console.log(name, image);
                    return (
                      <Grid item xs={6} sm={6} md={3} lg={2} key={name}>
                        <div className="skills-item-wrapper">
                          <div className="skills-item">
                            <ConditionalReveal component="zoom"><Logo name={name} image={image} color={color}/></ConditionalReveal>
                          </div>
                        </div>
                      </Grid>
                    );
                  })}
                </Grid>
              </Paper>
            </div>
          );
        })}
      </div>
    );
  }
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);
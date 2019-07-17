import React from "react";	
import PropTypes from "prop-types";
import Logo from "components/Logo";
import Grid from '@material-ui/core/Grid';
import ConditionalReveal from "components/ConditionalReveal";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
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
  //GOOGLE,
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
  WEBPACK,
  YARN,
} from "data/logos";
import "./Skills.scss";

const LANGUAGES = [JAVASCRIPT, PYTHON, CSHARP, JAVA, TYPESCRIPT, POSTGRESQL, MSSQL, R];
const FRAMEWORKS_AND_ECOSYSTEMS = [REACT, ANGULAR, DOTNET, DJANGO, VANILLAWEB, NODE];
const POPULAR_LIBRARIES = [REDUX, JQUERY, LEAFLET, MATERIALUI,  SASS, D3, WEBPACK, BABEL, ESLINT, JEST];
const CODE_MANAGEMENT = [GIT, GITHUB, NPM, YARN, TRAVIS, ATLASSIAN, HEROKU];

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
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  button: {
    //marginTop: theme.spacing(3),
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // display: 'inline-block',
    marginTop: '-58px',
    float: 'right',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
});
	
class Skills extends React.Component {
  state = {
    expanded: false,
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    return (
      <div className="Skills">
        {/* <Button color="secondary"
          variant="outlined"
          className={classes.button}
          //onClick={this.handleExpandClick}
          onClick={this.handleExpandClick}
          aria-expanded={this.state.expanded}
          aria-label="Toggle More Skills Items"
        >
          {expanded ? "Show Best Skills" : "Show All Skills"}
          <ExpandMoreIcon className={classnames(classes.expand, classes.rightIcon, {
                        [classes.expandOpen]: this.state.expanded,
                      })}/>
        </Button> */}
        {sections.map(({title, items}) => {
          const itemsToRender = items;//expanded ? items : items.filter(({proficiency}) => proficiency > 2);
          return (          
            <div key={title} className="skills-section">
              <ConditionalReveal>
                <div className="secondary-section-title">{title}</div>
              </ConditionalReveal>
              <Grid container spacing={3}>
                {itemsToRender.map(({name, image, color, proficiency}) => {
                  return (
                    <Grid item xs={6} sm={6} md={3} lg={2} key={name}>
                      <div className="skills-item-wrapper">
                        <div className="skills-item">
                          <ConditionalReveal component="zoom">
                            <Logo proficiency={proficiency} name={name} image={image} color={color} showStars={expanded && false}/>
                          </ConditionalReveal>
                        </div>
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
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
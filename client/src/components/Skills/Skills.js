import React from "react";	
import PropTypes from "prop-types";
import Logo from "components/Logo";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import ConditionalReveal from "components/ConditionalReveal";
import { withStyles } from '@material-ui/core/styles';
import heart from "assets/heart.png";
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

const LANGUAGES = [JAVASCRIPT, PYTHON, CSHARP, JAVA, TYPESCRIPT, MSSQL, R];
const FRAMEWORKS_AND_ECOSYSTEMS = [ANGULAR, DOTNET, DJANGO, VANILLAWEB];
const POPULAR_LIBRARIES = [REDUX, JQUERY, LEAFLET, MATERIALUI,  SASS, D3, WEBPACK, BABEL, ESLINT, JEST];
const CODE_MANAGEMENT = [GIT, GITHUB, NPM, YARN, TRAVIS, ATLASSIAN, HEROKU];

const FAVORITE_STACK = [REACT, NODE, POSTGRESQL].map(i => logos.find(({name}) => name === i));

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
    const { expanded } = this.state;
    return (
      <div className="Skills">
        <div className="skills-prologue">
          <Typography component="p" className="section-text">
            I am a proficient Full Stack Software Engineer with expertise in building
            beautiful and functional user interfaces.
          </Typography>
          <Typography component="p" className="section-text">
            While I am always excited to learn and work with new languages and frameworks,
            my current favorite techology stack for web development is comprised of a React+Redux 
            front-end with a Node+Express server backed by a PostgreSQL database.
          </Typography>
          <div className="favorite-stack">
            {FAVORITE_STACK.map(({name, image, color, proficiency, style}, index) => {
              return ([
                <div key={`${name}`} className="skills-item-wrapper">
                  <div className="skills-item">
                    <ConditionalReveal component="zoom">
                      <Logo style={style} proficiency={proficiency} name={name} image={image} color={color} showStars={expanded && false}/>
                    </ConditionalReveal>
                  </div>
                </div>,
                <div key={`${name}-plus`} className={`${index === FAVORITE_STACK.length - 1 ? "hidden" : ""} plus`}>+</div>  
              ]);
            })}
            <div className="equals">=</div>
            <ConditionalReveal component="zoom" delay={500}>
              <div><img className="heart" src={heart} style={{width: "50px", height: "50px"}} alt="heart"/></div>
            </ConditionalReveal>
          </div>
          <Typography component="p" className="section-text">
            Here are some other tools and systems that I have worked with:
          </Typography>
        </div>
        {sections.map(({title, items}) => {
          const itemsToRender = items;//expanded ? items : items.filter(({proficiency}) => proficiency > 2);
          return (          
            <div key={title} className="skills-section">
              <ConditionalReveal>
                <div className="secondary-section-title"><span>{title}</span></div>
              </ConditionalReveal>
              <Grid container spacing={3}>
                {itemsToRender.map(({name, image, color, proficiency, style}) => {
                  return (
                    <Grid item xs={6} sm={6} md={3} lg={2} key={name}>
                      <div className="skills-item-wrapper">
                        <div className="skills-item">
                          <ConditionalReveal component="zoom">
                            <Logo style={style} proficiency={proficiency} name={name} image={image} color={color} showStars={expanded && false}/>
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
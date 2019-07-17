import React from "react";
import PropTypes from "prop-types";
import "./Portfolio.scss";
import Grid from '@material-ui/core/Grid';
import PortfolioCard from "components/PortfolioCard";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import classnames from 'classnames';
import ConditionalReveal from "components/ConditionalReveal";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  otherGrid: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(3),
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // display: 'inline-block',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
});

class Portfolio extends React.Component {
  state = {
    expanded: false,
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
/*
                      className={classnames(classes.expand, {
                        [classes.expandOpen]: this.state.expanded,
                      })}
 */
  render() {
    const { items, classes } = this.props;
    const { expanded } = this.state;
    const firstFourItems = items.slice(0, 4);
    const otherItems = items.slice(4);
    return (
      <div className="Portfolio">
        <Grid container spacing={3}>
          {firstFourItems.map(({ name, image, id, tags, description, website, sections }) => {
            return (              
              <PortfolioCard
                key={id}
                website={website}
                sections={sections}
                name={name}
                image={image}
                id={id}
                tags={tags}
                description={description}
              />
            );
          })}
        </Grid>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Grid className={classes.otherGrid} container spacing={3}>
            {otherItems.map(({ name, image, id, tags, description, website, sections, disabled }) => {
              if (disabled) {
                return false;
              }
              return (              
                <PortfolioCard
                  key={id}
                  website={website}
                  sections={sections}
                  name={name}
                  image={image}
                  id={id}
                  tags={tags}
                  description={description}
                />
              );
            })}
          </Grid>
        </Collapse>
        <div className="show-more-button-wrapper">
          <ConditionalReveal component="pulse" delay={500}>
            <Button color="secondary"
              variant="outlined"
              className={classes.button}
              //onClick={this.handleExpandClick}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Toggle More Portfolio Items"
            >
              {expanded ? "Show Fewer Items" : "Show More Items"}
              <ExpandMoreIcon className={classnames(classes.expand, classes.rightIcon, {
                            [classes.expandOpen]: this.state.expanded,
                          })}/>
            </Button>
          </ConditionalReveal>
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  items: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portfolio);
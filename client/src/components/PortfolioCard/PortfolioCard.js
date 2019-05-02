import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import PortfolioModal from "components/PortfolioModal";
import ConditionalReveal from "components/ConditionalReveal";
import Grid from '@material-ui/core/Grid';
//console.log(derp)
import "./PortfolioCard.scss";

const styles = theme => ({
  card: {
    //maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  moreButton: {
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  button: {
    //color: 'rgba(0, 0, 0, 0.4)',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class PortfolioCard extends React.Component {
  state = {
    expanded: false,
    open: false,
    showClickHint: false,
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleGithubClick = () => {
    const { id } = this.props;
    window.open(`https://github.com/jbccollins/${id}`);
  };

  handleActionAreaMouseEnter = () => {
    this.setState({
      showClickHint: true
    });
  }

  handleActionAreaMouseLeave = () => {
    this.setState({
      showClickHint: false
    });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  generateActionArea = children => {
    const { showClickHint } = this.state;
    if (this.props.sections) {
      return (
        <CardActionArea onClick={this.handleClickOpen} onMouseEnter={this.handleActionAreaMouseEnter} onMouseLeave={this.handleActionAreaMouseLeave}>
          <div className={`click-hint${showClickHint ? " visible" : ""}`}>
            <div>
              <Typography variant="h5" component="h2">
                More Info
              </Typography>
            </div>
          </div>
          {children}
        </CardActionArea>
      );
    }
    return children;
  }

  render() {
    const { classes, ...other } = this.props;
    const { image, name, description, website, sections } = other;
    const { open, showClickHint } = this.state;

    return (
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <ConditionalReveal>
          <Card className={classes.card}>
            {this.generateActionArea(
              <CardMedia
                className={classes.media}
                image={image}
                title={name}
              />
            )}
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography className="description" component="p">
                {description}
              </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <Tooltip title="View on Github" placement="bottom">
                <IconButton aria-label="Code" onClick={this.handleGithubClick}>
                  <CodeIcon />
                </IconButton>
              </Tooltip>
              {website &&
                <Tooltip title={website.text} placement="bottom">
                  <IconButton href={website.url} target="_blank" color="default">
                    <OpenInNewIcon/>
                  </IconButton>
                </Tooltip>
              }
              {sections &&
                [
                  <Button key="more-button" color="secondary"
                    className={classnames(classes.button, classes.moreButton)}
                    //onClick={this.handleExpandClick}
                    onClick={this.handleClickOpen}
                    aria-expanded={this.state.expanded}
                    aria-label="More Info"
                  >
                    More Info
                    <InfoIcon className={classes.rightIcon}/>
                  </Button>,
                  <PortfolioModal
                    key="more-modal"
                    onClose={this.handleClose}
                    open={open}
                    {...other}
                    />
                ]
              }
            </CardActions>
            {/* <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                {motivation &&
                  <div>
                    <Typography component="h4">Motivation:</Typography>
                    <Typography paragraph>{motivation}</Typography>
                  </div>
                }
                {solution &&
                  <p>
                    <Typography paragraph>Solution:</Typography>
                    <Typography paragraph>{solution}</Typography>
                  </p>
                }
                {learned &&
                  <p>
                    <Typography paragraph>Learned:</Typography>
                    <Typography paragraph>{learned}</Typography>
                  </p>
                }
              </CardContent>
            </Collapse> */}
          </Card>
        </ConditionalReveal>
      </Grid>
    )
  }
}

PortfolioCard.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  website: PropTypes.object,
  sections: PropTypes.array,
  description: PropTypes.string.isRequired,
};

export default withStyles(styles)(PortfolioCard);

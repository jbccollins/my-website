import React from "react";	
import PropTypes from "prop-types";	
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import CodeIcon from '@material-ui/icons/Code';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from "@material-ui/core/Tooltip";
import Divider from '@material-ui/core/Divider';
import "./Logo.scss";

const styles = theme => ({
  card: {
    maxWidth: 200,
  },
  media: {
    height: 0,
    backgroundSize: 'contain',
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
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Logo extends React.Component {	
  render() {
    const { classes, name, image, color } = this.props
    return (
      <div className="Logo" style={{border: `2px solid ${color}`}}>
        {/* <Card className={classes.card}>
          <CardHeader
            title={name}
            //subheader="September 14, 2016"
          />
          {image &&
            <CardMedia
              className={classes.media}
              image={image}
              title={name}
            />
          }
          <Divider/>
          <CardContent>
            <Typography className="description" component="p">
              {name}
            </Typography>
          </CardContent>
        </Card> */}
        <div className="image-wrapper">
          <span className="helper"/>
          <img alt="name" src={image}/>
        </div>
        <div className="image-name">{name}</div>
      </div>
    );
  }
}
Logo.propTypes = {	
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};	
 export default withStyles(styles)(Logo);
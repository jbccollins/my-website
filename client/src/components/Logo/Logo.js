import React from "react";	
import PropTypes from "prop-types";	
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import "./Logo.scss";
import StarRatings from 'react-star-ratings';

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
    const { name, image, color, proficiency } = this.props
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
        <StarRatings
          rating={proficiency}
          starDimension="14px"
          starRatedColor="rgba(0, 0, 0, 0.4)"
          numberOfStars={3}
          starSpacing="1px"
          name='rating'
        />
      </div>
    );
  }
}
Logo.propTypes = {	
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  proficiency: PropTypes.number.isRequired,
};	
 export default withStyles(styles)(Logo);
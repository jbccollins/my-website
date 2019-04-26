import React from "react";	
import PropTypes from "prop-types";
import Logo from "components/Logo";
import Grid from '@material-ui/core/Grid';
import Zoom from 'react-reveal/Zoom';

import "./Skills.scss";	
class Skills extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div className="Skills">
        <Grid container spacing={24}>
          {items.map(({name, image, color}) => {
            return (
              <Grid item xs={12} sm={6} md={3} lg={2} key={name}>
                <Zoom><Logo name={name} image={image} color={color}/></Zoom>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}
Skills.propTypes = {
  items: PropTypes.array.isRequired,
};	
export default Skills;
import React from "react";	
import PropTypes from "prop-types";
import { Element } from 'react-scroll'

import "./SectionHeader.scss";

class SectionHeader extends React.Component {	
  render() {
    const { children, name } = this.props;
    return (
      <Element name={name}>
        <div className="SectionHeader">
          {children}
        </div>	
      </Element>
    );	
  }	
}	
 SectionHeader.propTypes = {	
  	children: PropTypes.node,
    name: PropTypes.string.isRequired,
};	
 export default SectionHeader;
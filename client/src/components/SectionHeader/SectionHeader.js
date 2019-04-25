import React from "react";	
import PropTypes from "prop-types";
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade';

import "./SectionHeader.scss";

class SectionHeader extends React.Component {
  state = {
    fade: false,
  }
  enableFade = () => {
    this.setState({
      fade: true,
    });
  }
  componentDidMount() {
    // 1000 is the default fade time
    setTimeout(this.enableFade, 1000)
  }
  render() {
    const { children, name } = this.props;
    const { fade } = this.state;
    return (
      <Element name={name}>
        <Fade when={fade} top>
          <div className="SectionHeader">
            {children}
          </div>	
        </Fade>
      </Element>
    );	
  }	
}	
 SectionHeader.propTypes = {	
  	children: PropTypes.node,
    name: PropTypes.string.isRequired,
};	
 export default SectionHeader;
import React from "react";	
import PropTypes from "prop-types";
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
    const { children } = this.props;
    const { fade } = this.state;
    return (
      <Fade when={fade} top>
        <div className="SectionHeader">
          {children}
        </div>	
      </Fade>
    );	
  }	
}	
 SectionHeader.propTypes = {	
  	children: PropTypes.node,
};	
 export default SectionHeader;
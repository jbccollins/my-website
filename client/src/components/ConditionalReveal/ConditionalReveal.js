import React from "react";
import PropTypes from "prop-types";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Pulse from 'react-reveal/Pulse';

import "./ConditionalReveal.scss";
import {
  isMobile,
} from "react-device-detect";

const getRevealComponent = key => {
  switch (key) {
    case "zoom":
      return Zoom;
    case "fade":
      return Fade;
    case "bounce":
      return Bounce;
    case "pulse":
      return Pulse;
    default:
      return Fade;
  }
}

class ConditionalReveal extends React.Component {
  render() {
    const { children, component, ...rest } = this.props;
    if (isMobile) {
      return (
        <div>
          {children}
        </div>
      );
    }
    const Reveal = getRevealComponent(component);
    return (
      <Reveal {...rest}>
        {children}
      </Reveal>
    );
  }
}
ConditionalReveal.propTypes = {
    children: PropTypes.node.isRequired,
    component: PropTypes.node.isRequired,
};

ConditionalReveal.defaultProps = {
  component: "fade",
}

 export default ConditionalReveal;
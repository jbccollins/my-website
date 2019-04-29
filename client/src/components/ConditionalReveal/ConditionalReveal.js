import React from "react";
import PropTypes from "prop-types";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import "./ConditionalReveal.scss";
import {
  isMobile,
} from "react-device-detect";
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
    const Reveal = component === "zoom" ? Zoom : Fade;
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
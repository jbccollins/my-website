import React from "react";	
import PropTypes from "prop-types";
import ConditionalReveal from "components/ConditionalReveal";

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
      <ConditionalReveal when={fade} top>
        <div className="SectionHeader">
          {children}
        </div>	
      </ConditionalReveal>
    );	
  }	
}	
 SectionHeader.propTypes = {	
  	children: PropTypes.node,
};	
 export default SectionHeader;
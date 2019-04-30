import React from "react";	
import PropTypes from "prop-types";
import ConditionalReveal from "components/ConditionalReveal";

import "./SectionHeader.scss";

class SectionHeader extends React.Component {
  state = {
    reveal: false,
  }
  enableReveal = () => {
    this.setState({
      reveal: true,
    });
  }
  componentDidMount() {
    // 1000 is the default reveal time
    setTimeout(this.enableReveal, 1000)
  }
  render() {
    const { children } = this.props;
    const { reveal } = this.state;
    return (
      <ConditionalReveal when={reveal} top>
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
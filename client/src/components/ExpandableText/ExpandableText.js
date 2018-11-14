import React from "react";
import PropTypes from "prop-types";
import "./ExpandableText.scss";

export default class ExpandableText extends React.Component {
  render() {
    const { text, expanded } = this.props;
    return (
      <div className={`ExpandableText${expanded ? " expanded" : ""}`}>
        <div className="text-container">{text}</div>
      </div>
    );
  }
}

ExpandableText.propTypes = {
  text: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired
};

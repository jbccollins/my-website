import React from "react";
import PropTypes from "prop-types";
import "./PortfolioItem.scss";
import ExpandableText from "components/ExpandableText";
import Button from "@material-ui/core/Button";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import LapidaryDiamond from "components/LapidaryDiamond";

export default class PortfolioItem extends React.Component {
  state = {
    mouseOver: false,
    expanded: false
  };

  handleMouseOver = () => {
    this.setState({
      mouseOver: true
    });
  };

  handleMouseLeave = () => {
    this.setState({
      mouseOver: false
    });
  };

  handleExpandChange = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { name, tags, description, id } = this.props;
    const { mouseOver, expanded } = this.state;
    return (
      <div
        className={`${id} PortfolioItem${mouseOver ? " mouseover" : ""}${
          expanded ? " expanded-item" : ""
        }`}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="content-wrapper">
          {/*id === 'lapidary' &&
            <LapidaryDiamond/>
          */}
          <div className="header">
            <div className="name">{name}</div>
            <Button
              mini
              className="expandable-toggle-text"
              onClick={this.handleExpandChange}
            >
              {expanded && <ExpandLess />}
              {!expanded && <ExpandMore />}
            </Button>
          </div>
          <div className="tags-container">
            {tags.map(({ className, text }) => {
              return (
                <div key={text} className={`${className} tag`}>
                  {text}
                </div>
              );
            })}
          </div>
          <ExpandableText
            text={description}
            expanded={expanded}
            onExpandChange={this.handleExpandChange}
          />
        </div>
      </div>
    );
  }
}

PortfolioItem.propTypes = {
  name: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

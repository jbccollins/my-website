import React from "react";
import PropTypes from "prop-types";
import "./PortfolioItem.scss";
import ExpandableText from "components/ExpandableText";
import GithubButton from "components/GithubButton";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import { ExpandMore, ExpandLess } from "@material-ui/icons";

export default class PortfolioItem extends React.Component {
  state = {
    expanded: false
  };

  handleMouseOver = () => {
    const { id, onActivationChange } = this.props;
    onActivationChange(id);
  };

  handleMouseLeave = () => {
    const { onActivationChange } = this.props;
    onActivationChange();
  };

  handleMouseClick = () => {
    const { id, onActivationChange } = this.props;
    onActivationChange(id);
  };

  handleExpandChange = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  handleTagClick = () => {
    console.log("tag clicked");
  };

  handleGithubClick = () => {
    const { id } = this.props;
    window.open(`https://github.com/jbccollins/${id}`);
  };

  render() {
    const { name, tags, description, id, active } = this.props;
    const { expanded } = this.state;
    return (
      <div
        className={`${id} PortfolioItem${active ? " active" : ""}${
          expanded ? " expanded-item" : ""
        }`}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleMouseClick}
      >
        <div className="portfolio-item-content-wrapper">
          {/*id === 'lapidary' &&
            <LapidaryDiamond/>
          */}
          <div className="header">
            <div className="name">{name}</div>
            <GithubButton onClick={this.handleGithubClick} />
          </div>
          <div className="tags-container">
            {tags.map(({ className, text }) => {
              return (
                <Chip
                  onClick={this.handleTagClick}
                  color="primary"
                  variant="outlined"
                  key={text}
                  label={text}
                />
              );
            })}
          </div>
          <ExpandableText text={description} expanded={expanded} />
          <div className="expand-toggle-wrapper">
            <Button
              mini
              className="expandable-toggle-text"
              onClick={this.handleExpandChange}
            >
              {expanded && <ExpandLess />}
              {!expanded && <ExpandMore />}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

PortfolioItem.propTypes = {
  name: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onActivationChange: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

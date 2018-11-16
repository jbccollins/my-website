import React from "react";
import PropTypes from "prop-types";
import "./Portfolio.scss";
import PortfolioItem from "components/PortfolioItem";

export default class Portfolio extends React.Component {
  state = {
    activeItem: null
  };

  handleActiveItemChange = id => {
    this.setState({ activeItem: id });
  };

  render() {
    const { items } = this.props;
    const { activeItem } = this.state;
    return (
      <div className="Portfolio">
        {items.map(({ name, id, tags, description }) => {
          return (
            <PortfolioItem
              active={id === activeItem}
              onActivationChange={this.handleActiveItemChange}
              key={id}
              name={name}
              id={id}
              tags={tags}
              description={description}
            />
          );
        })}
      </div>
    );
  }
}

Portfolio.propTypes = {
  items: PropTypes.array.isRequired
};

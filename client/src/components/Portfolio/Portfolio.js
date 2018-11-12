import React from "react";
import PropTypes from "prop-types";
import "./Portfolio.scss";
import PortfolioItem from "components/PortfolioItem";

export default class Portfolio extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div className="Portfolio">
        {items.map(({ name, id, tags, description }) => {
          return (
            <PortfolioItem
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

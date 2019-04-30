import React from "react";
import PropTypes from "prop-types";
import "./Portfolio.scss";
import Grid from '@material-ui/core/Grid';
import PortfolioCard from "components/PortfolioCard";

export default class Portfolio extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div className="Portfolio">
        <Grid container spacing={24}>
          {items.map(({ name, image, id, tags, description, website, sections }) => {
            return (              
              <PortfolioCard
                key={id}
                website={website}
                sections={sections}
                name={name}
                image={image}
                id={id}
                tags={tags}
                description={description}
              />
            );
          })}
        </Grid>
      </div>
    );
  }
}

Portfolio.propTypes = {
  items: PropTypes.array.isRequired
};

import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-scroll'
import "./SidebarItem.scss";

class SidebarItem extends React.Component {
  render() {
    const { name, link } = this.props;
    return (
      <Link className="SidebarItem" href={link} to={link} containerId="main" offset={-40} activeClass="selected" spy>       
        <div className="item-content">
          <span>{name}</span>
        </div>
      </Link>
    );
  }
}

SidebarItem.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SidebarItem;

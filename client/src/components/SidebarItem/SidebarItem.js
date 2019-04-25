import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-scroll'
import "./SidebarItem.scss";

class SidebarItem extends React.Component {
  render() {
    const { name, selected, onClick, link } = this.props;
    return (
      // -20 offset to ensure the gradient scroll fade container doesn't affect this
      <Link to={link} containerId="gradient-scroll-id" smooth={true} offset={-20} duration={300}>
        <div className={`SidebarItem${selected ? " selected" : ""}`} onClick={() => onClick(link)}>
          <div className="item-content">
            <span>{name}</span>
          </div>
        </div>
      </Link>
    );
  }
}

SidebarItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default SidebarItem;

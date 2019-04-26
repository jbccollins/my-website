import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-scroll'
import "./SidebarItem.scss";

class SidebarItem extends React.Component {
  render() {
    const { name, selected, onClick, link } = this.props;
    return (
      // -20 offset to ensure the gradient scroll fade container doesn't affect this
      <Link href={link} to={link} containerId="gradient-scroll-id" offset={-20}>       
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

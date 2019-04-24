import React from "react";
import PropTypes from "prop-types";
import "./SidebarItem.scss";

class SidebarItem extends React.Component {
  render() {
    const { name, selected, onClick, link } = this.props;
    return (
      <div className={`SidebarItem${selected ? " selected" : ""}`} onClick={() => onClick(link)}>
        <div className="item-content">
          <a>{name}</a>
        </div>
      </div>
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

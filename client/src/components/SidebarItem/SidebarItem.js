import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-scroll'
import {
  isMobile,
} from "react-device-detect";
import "./SidebarItem.scss";

class SidebarItem extends React.Component {
  state = {
    forceSelected: false
  }
  handleClick = () => {
    const { onClick, link } = this.props;
    // setTimeout(this.props.onClick, 0);
    onClick(link);
  }
  render() {
    const { name, link, selected, coerceSpy } = this.props;
    return (
      <Link
        className={`SidebarItem${selected ? " selected" : ""}${ coerceSpy ? " coerce-spy" : ""}`}
        onClick={this.handleClick}
        to={link}
        containerId="main"
        offset={isMobile ? -60 : -40}
        activeClass="active"
        spy>
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
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  coerceSpy: PropTypes.bool.isRequired,
};

export default SidebarItem;

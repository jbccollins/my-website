import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-scroll'
import {
  isMobile,
} from "react-device-detect";
import "./SidebarItem.scss";

class SidebarItem extends React.Component {
  handleClick = () => {
    console.log('click');
    // setTimeout(this.props.onClick, 0);
    this.props.onClick();
  }
  render() {
    const { name, link, onClick } = this.props;
    return (
      <Link className="SidebarItem" onClick={this.handleClick} to={link} containerId="main" offset={isMobile ? -60 : -40} activeClass="selected" spy>       
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
};

export default SidebarItem;

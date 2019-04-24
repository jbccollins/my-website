import React from "react";
import PropTypes from "prop-types";
import ProfileAvatar from "components/ProfileAvatar";
import SidebarItem from "components/SidebarItem";
import "./Sidebar.scss";

const items = [
  {
    link: "projects",
    name: "Projects",
  },
  {
    link: "about-me",
    name: "About Me",
  },
  {
    link: "contact-me",
    name: "Contact Me",
  },
  {
    link: "blog",
    name: "Blog",
  },
];

class Sidebar extends React.Component {
  state = {
    selected: "projects"
  }

  handleItemClick = link => {
    this.setState({
      selected: link,
    });
  }

  render() {
    return (
      <div className="Sidebar">
        <ProfileAvatar />
        <div className="sidebar-items">
          {
            items.map(({link, name}) => {
              return (<SidebarItem key={link} onClick={this.handleItemClick} link={link} name={name} selected={link === this.state.selected}/>)
            })
          }
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  //onClick: PropTypes.func.isRequired
};

export default Sidebar;

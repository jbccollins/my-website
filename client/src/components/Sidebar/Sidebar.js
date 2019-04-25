import React from "react";
import PropTypes from "prop-types";
import ProfileAvatar from "components/ProfileAvatar";
import SidebarItem from "components/SidebarItem";
import Fade from 'react-reveal/Fade';
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
        <Fade left>
          <ProfileAvatar />
        </Fade>
        <div className="sidebar-items">
          {
            items.map(({link, name}, i) => {
              return (<Fade key={link} delay={(i + 1) * 200} left><SidebarItem onClick={this.handleItemClick} link={link} name={name} selected={link === this.state.selected}/></Fade>)
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

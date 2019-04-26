import React from "react";
import PropTypes from "prop-types";
import ProfileAvatar from "components/ProfileAvatar";
import SidebarItem from "components/SidebarItem";
import Fade from 'react-reveal/Fade';
import SidebarInfo from "components/SidebarInfo";
import "./Sidebar.scss";
/*
using react-waypoint and onEnter and onLeave to create a push/pop stack we could use that to get the current thing that's inveiw
*/
const items = [
  {
    link: "projects",
    name: "Portfolio",
  },
  {
    link: "about-me",
    name: "About Me",
  },
  {
    link: "skills",
    name: "Skills",
  },
  // {
  //   link: "contact-me",
  //   name: "Contact Me",
  // },
  // {
  //   link: "blog",
  //   name: "Blog",
  // },
];

class Sidebar extends React.Component {
  state = {
    selected: "projects",
    rootEl: 'body',
  }

  handleItemClick = link => {
    this.setState({
      selected: link,
    });
  }

  componentDidMount() {
    this.setState({rootEl: '#gradient-scroll-id'})
  }

  render() {
    const { rootEl } = this.state;
    return (
      <div className="Sidebar">
        <Fade left>
          <ProfileAvatar />
          <SidebarInfo />
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

import React from "react";
import PropTypes from "prop-types";
import ProfileAvatar from "components/ProfileAvatar";
import SidebarItem from "components/SidebarItem";
import ConditionalReveal from "components/ConditionalReveal";
import SidebarInfo from "components/SidebarInfo";
import MyLogo from "components/KoalaSVG";
import "./Sidebar.scss";
/*
using react-waypoint and onEnter and onLeave to create a push/pop stack we could use that to get the current thing that's inveiw
*/
const items = [
  {
    link: "about-me",
    name: "About Me",
  },
  {
    link: "projects",
    name: "Portfolio",
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
  render() {
    return (
      <div className="Sidebar">
        <ConditionalReveal left>
          <div className="sidebar-identity">
            {false &&
              <MyLogo />
            }
            <ProfileAvatar />
            <SidebarInfo />
          </div>
        </ConditionalReveal>
        <div className="sidebar-items">
          {
            items.map(({link, name}, i) => {
              return (<ConditionalReveal key={link} delay={(i + 1) * 200} left><SidebarItem onClick={this.props.onNavigationClick} link={link} name={name}/></ConditionalReveal>)
            })
          }
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  onNavigationClick: PropTypes.func.isRequired
};

export default Sidebar;

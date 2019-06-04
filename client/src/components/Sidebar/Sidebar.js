import React from "react";
import PropTypes from "prop-types";
import ProfileAvatar from "components/ProfileAvatar";
import SidebarItem from "components/SidebarItem";
import ConditionalReveal from "components/ConditionalReveal";
import SidebarInfo from "components/SidebarInfo";
import MyLogo from "components/KoalaSVG";
import "./Sidebar.scss";

class Sidebar extends React.Component {
  render() {
    const { selectedSidebarItem, sidebarItems } = this.props;
    const coerceSelectedSidebarItem = selectedSidebarItem !== null;
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
            sidebarItems.map(({link, name}, i) => {
              return (
                <ConditionalReveal key={link} delay={(i + 1) * 200} left>
                  <SidebarItem coerceSpy={coerceSelectedSidebarItem} selected={link === selectedSidebarItem} onClick={this.props.onNavigationClick} link={link} name={name}/>
                </ConditionalReveal>
              )
            })
          }
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  onNavigationClick: PropTypes.func.isRequired,
  selectedSidebarItem: PropTypes.string,
  sidebarItems: PropTypes.array.isRequired,
};

export default Sidebar;

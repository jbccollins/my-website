import React from "react";
import PropTypes from "prop-types";
import ProfileAvatar from "components/ProfileAvatar";
import SidebarItem from "components/SidebarItem";
import ConditionalReveal from "components/ConditionalReveal";
import SidebarInfo from "components/SidebarInfo";
import MyLogo from "components/KoalaSVG";
import { DARK, LIGHT } from "common/constants/theme";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  isMobile,
} from "react-device-detect";
import "./Sidebar.scss";

class Sidebar extends React.Component {
  render() {
    const { selectedSidebarItem, sidebarItems, onDisplayModeChange, displayMode, handleResumeClick } = this.props;
    const coerceSelectedSidebarItem = selectedSidebarItem !== null;
    return (
      <div className="Sidebar">
        <ConditionalReveal left>
          <div className="sidebar-identity">
            {false &&
              <MyLogo />
            }
            <ProfileAvatar />
            <SidebarInfo handleResumeClick={handleResumeClick}/>
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
        {!isMobile &&
          <div className="display-mode-toggle-wrapper">
            
            <FormControlLabel
              control={
                <Switch
                color="primary"
                checked={displayMode === DARK}
                onChange={onDisplayModeChange}
                //value="checkedA"
                inputProps={{ 'aria-label': 'display-mode-toggle' }}
              />
              }
              label={`${displayMode} mode`}
            />
          </div>
        }
      </div>
    );
  }
}

Sidebar.propTypes = {
  onNavigationClick: PropTypes.func.isRequired,
  selectedSidebarItem: PropTypes.string,
  sidebarItems: PropTypes.array.isRequired,
  handleResumeClick: PropTypes.func.isRequired,
  displayMode: PropTypes.oneOf([DARK, LIGHT]).isRequired,
};

const mapStateToProps = state => ({
  displayMode: state.displayMode,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
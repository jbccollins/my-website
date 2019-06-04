const SET_DISPLAY_MODE = "controls/SET_DISPLAY_MODE";
const SET_SELECTED_SIDEBAR_ITEM = "controls/SET_SELECTED_SIDEBAR_ITEM";

// Simple reducer example
const setDisplayMode = displayMode => {
  return dispatch => {
    dispatch({
      type: SET_DISPLAY_MODE,
      payload: { displayMode }
    });
  };
};

const setSelectedSidebarItem = selectedSidebarItem => {
  return dispatch => {
    dispatch({
      type: SET_SELECTED_SIDEBAR_ITEM,
      payload: { selectedSidebarItem }
    });
  };
};


export { SET_DISPLAY_MODE, SET_SELECTED_SIDEBAR_ITEM, setSelectedSidebarItem, setDisplayMode };

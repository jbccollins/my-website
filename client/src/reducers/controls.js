import {
  SET_DISPLAY_MODE,
  SET_SELECTED_SIDEBAR_ITEM,
} from "actions/controls";
import { LIGHT } from "common/constants/theme";

const displayMode = (state = LIGHT, action) => {
  switch (action.type) {
    case SET_DISPLAY_MODE:
      return action.payload.displayMode;
    default:
      return state;
  }
};

const selectedSidebarItem = (state = null, action) => {
  switch (action.type) {
    case SET_SELECTED_SIDEBAR_ITEM:
      return action.payload.selectedSidebarItem;
    default:
      return state;
  }
};

export { displayMode, selectedSidebarItem };

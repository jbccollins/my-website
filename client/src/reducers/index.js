import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { displayMode, selectedSidebarItem } from "./controls";
export default history =>
  combineReducers({
    displayMode,
    selectedSidebarItem,
    router: connectRouter(history)
  });

import changeAddNewMessagesReducer from "./messages-reducer";
import changeAddNewPostsReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import navlinkReducer from "./navlink-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    profilePage: changeAddNewPostsReducer,
    messagesPage: changeAddNewMessagesReducer,
    sidebarPage: sidebarReducer,
    navBarListData: navlinkReducer
});

console.log(reducers);

let store = createStore(reducers);

export default store;
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {usersReducer} from "./components/redux/usersReducer";

const store = createStore(
    usersReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
export default store
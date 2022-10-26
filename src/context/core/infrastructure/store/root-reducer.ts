import { combineReducers } from "redux";
import { counterReducer } from "../../../public/counter/infrastruture/store";

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;
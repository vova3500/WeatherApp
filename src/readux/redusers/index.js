import { combineReducers } from "redux";

import weather from "./weather";

const rootReduser = combineReducers({
    weather
});

export default rootReduser;
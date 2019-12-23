import {createStore, applyMiddleware} from "redux";

import { rootReducer } from "../reducers/index"

//for chrome extension only (in order to use redux dev tools)
import thunk from "redux-thunk"

export const store = createStore(rootReducer, (applyMiddleware(thunk)));
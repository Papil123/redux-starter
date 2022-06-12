import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authreducer } from "./auth/auth.reducer";
import { feedreducer } from "./feed/feed.reducer";
import thunk from "redux-thunk";
export const rootReducer = combineReducers({
    auth:authreducer,
    feed:feedreducer,
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
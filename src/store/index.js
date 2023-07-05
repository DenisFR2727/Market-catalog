import { configureStore } from "@reduxjs/toolkit"; 
import tovarsReducer from "../components/content/tovars/tovarsSlice";

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
        reducer: tovarsReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
        devTools: process.env.NODE_ENV !== 'production', 
    })
export default store;


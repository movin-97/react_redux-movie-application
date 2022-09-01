// import {createStore} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import SliceReducers from "./Movies/MovieSlice";
import UsersSlice from "./Users/UsersSlice";

// export const store = createStore(SliceReducers)

const store = configureStore({
  reducer: { 
    movies: SliceReducers, 
    user: UsersSlice },
});
export default store

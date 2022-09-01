import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name:'',
    password:''
  },
};
const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export const setUser = (state) => state.user;
export default userSlice.reducer;

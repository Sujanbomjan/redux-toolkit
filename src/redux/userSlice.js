import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "Sujan",
      email: "bommjan@gmial.com",
    },
    pending: false,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateError: (state) => {
      state.error = true;
      state.pending = false;
    },
    deleteUser: (state) => {
      state.userInfo = {};
    },
  },
});

export const { updateStart, updateError, updateSuccess, deleteUser } =
  userSlice.actions;
export default userSlice.reducer;

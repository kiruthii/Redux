import { createSlice } from "@reduxjs/toolkit";

const initialState1 = {
  name: "",
  age: 0,
  email: "",
};

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState=initialState1,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setName, setAge, setEmail } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;

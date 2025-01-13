import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import User from "../interface/IUser";

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const addUserAsync = createAsyncThunk<User, User>
("user/addUserAsync", 
  async (user) => {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      resolve(user);
    }, 1000);
  });
});


const userSliceReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.users.push(action.payload);
      });
  },
  // reducers: {
  //   addUser: (state, action: PayloadAction<User>) => {
  //     state.users.push(action.payload);
  //   },
  // },
});

export default userSliceReducer.reducer;

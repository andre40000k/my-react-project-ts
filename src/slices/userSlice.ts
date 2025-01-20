import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import User from "../interface/IUser";

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsersAsync = createAsyncThunk<User[], void, { rejectValue: string }>(
  "user/fetchUsersAsync",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: User[] = await response.json();
      return data.map((user) => ({ id: user.id, name: user.name }));
    } catch (error) {
      return rejectWithValue("Failed to load users");
    }
  }
);

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
      })
      .addCase(fetchUsersAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  }
});

export default userSliceReducer.reducer;

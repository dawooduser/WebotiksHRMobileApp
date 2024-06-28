import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
   name: 'user',
   initialState: {
      auth: false,
   },
   reducers: {
      login: (state, action) => ({
         ...state, auth: true, ...action.payload
      }),
      logout: (state, action) => ({
         auth: false
      }),
      
   },
});

export const { login, logout } = UserSlice.actions;

export default UserSlice.reducer;
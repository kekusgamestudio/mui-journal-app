import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  status: string;
  uid: string | null;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  errorMessae: string | null;
}

const initialState: AuthState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessae: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated';
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessae = payload.errorMessage;            
    },
    logout: (state, { payload } ) => {
      state.status = 'not-authenticated';
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessae = payload.errorMessage;      
    },
    checkCredentials: (state) => {
      state.status = 'checking';
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkCredentials } = authSlice.actions;


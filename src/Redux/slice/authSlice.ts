import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthData {
  username: string;
  phone: number;
  email: string;
}

interface AuthState {
  authData: AuthData;
}

const initialState: AuthState = {
  authData: {
    username: '',
    phone: 0,
    email: '',
  },
};

const authDataStore = createSlice({
  name: 'authStore',
  initialState,
  reducers: {
    setAuthDataStore: (state, action: PayloadAction<AuthData>) => {
      state.authData = action.payload;
    },
  },
});

export const {setAuthDataStore} = authDataStore.actions;
export default authDataStore.reducer
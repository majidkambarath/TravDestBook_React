import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthData {
  _id:string;
  name: string;
  phone: number;
  email: string;
  profile:string;
  address:string;
  first:string;
  last:string
}

interface AuthState {
  authData: AuthData;
}

const initialState: AuthState = {
  authData: {
    _id:"",
    name: '',
    phone: 0,
    email: '',
    profile:'',
    address:'',
    first:'',
    last:''
  },
};

const authDataStore = createSlice({
  name: 'authStore',
  initialState,
  reducers: {
    setAuthDataStore: (state, action: PayloadAction<AuthData>) => {
      state.authData = action.payload;
    },
    resetAuthDataStore: (state) => {
      state.authData = {
        _id: "",
        name: "",
        phone: 0,
        email: "",
        profile: "",
        address: "",
        first: "",
        last: "",
      };
    },
  },
});

export const {setAuthDataStore,resetAuthDataStore} = authDataStore.actions;
export default authDataStore.reducer
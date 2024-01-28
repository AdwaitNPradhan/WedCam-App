import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './appStore';

export interface AppState {
  token: string;
  isLoggedIn: boolean;
  user: object;
  pastWeddings: string[];
  currentWedding: string;
  isInWedding: boolean;
}

const initialState: AppState = {
  token: '',
  isLoggedIn: false,
  user: {},
  pastWeddings: [],
  currentWedding: '',
  isInWedding: false,
};

export const appState = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<{isLoggedIn: boolean}>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    setIsInWedding: (state, action: PayloadAction<{isInWedding: boolean}>) => {
      state.isInWedding = action.payload.isInWedding;
    },
    setUser: (state, action: PayloadAction<{user: object}>) => {
      state.user = action.payload.user;
    },
    setToken: (state, action: PayloadAction<{token: string}>) => {
      state.token = action.payload.token;
    },
    setPastWeddings: (
      state,
      action: PayloadAction<{pastWeddings: string[]}>,
    ) => {
      state.pastWeddings = action.payload.pastWeddings;
    },
    setCurrentWedding: (
      state,
      action: PayloadAction<{currentWedding: string}>,
    ) => {
      state.currentWedding = action.payload.currentWedding;
    },
    clearState: state => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIsLoggedIn,
  clearState,
  setCurrentWedding,
  setIsInWedding,
  setPastWeddings,
  setToken,
  setUser,
} = appState.actions;

export const SelectToken = (state: RootState) => state.appState.token;
export const SelectIsLoggedIn = (state: RootState) => state.appState.isLoggedIn;
export const SelectUser = (state: RootState) => state.appState.user;
export const SelectPastWeddings = (state: RootState) =>
  state.appState.pastWeddings;
export const SelectCurrentWedding = (state: RootState) =>
  state.appState.currentWedding;

export default appState.reducer;

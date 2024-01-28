import {configureStore} from '@reduxjs/toolkit';
import appSlice from './appSlice';

export const appStore = configureStore({
  reducer: {
    appState: appSlice,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

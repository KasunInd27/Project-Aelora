import { configureStore } from '@reduxjs/toolkit';  // Redux Toolkit import
import uiReducer from './features/uiSlice';  // Importing a sample UI slice reducer
import { api } from './query';  // Importing the RTK Query API slice
import { setupListeners } from '@reduxjs/toolkit/query';

// Configure the Redux store
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

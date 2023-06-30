import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from 'redux-persist';
import themeReducer from '../features/ModeSlice'
import { productapi } from '../api/ProductApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import cartReducer from '../features/CartSlice'
import logger from 'redux-logger';


const persistConfig={
  key:"root",
  version:1,
  storage,
}
const reducer=combineReducers({
  theme:themeReducer,
  carts:cartReducer,
  [productapi.reducerPath]:productapi.reducer

})

const persistedReducer=persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:{ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],},}).concat(logger,productapi.middleware)
});


setupListeners(store.dispatch)

import { configureStore } from '@reduxjs/toolkit';
import { favoritesSlice } from './features/favorites/favoritesSlice';

const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

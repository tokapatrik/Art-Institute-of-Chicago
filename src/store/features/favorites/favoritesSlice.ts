import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from './models';

const favorites = localStorage.getItem('favorites')
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      JSON.parse(localStorage.getItem('favorites')!)
    : [];

const initialState: InitialState = {
    loading: false,
    arts: favorites,
    error: '',
};

export const favoritesSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.arts.push(action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.arts));
        },
        deleteFavorite: (state, action) => {
            state.arts = state.arts.filter(
                (item) => item.id !== action.payload
            );
            localStorage.setItem(
                'favorites',
                JSON.stringify(
                    state.arts.filter((item) => item.id !== action.payload)
                )
            );
        },
    },
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;

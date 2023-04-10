import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Art {
    id: number;
    title: string;
    artist: string;
    imageUrl: string;
}

interface ArtState {
    data: Art[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ArtState = {
    data: [],
    status: 'idle',
    error: null,
};

export const fetchArt = createAsyncThunk(
    'art/fetchArt',
    async (): Promise<Art[]> => {
        const response = await fetch('https://api.artic.edu/api/v1/artworks');
        if (!response.ok) {
            throw new Error('Failed to fetch art data.');
        }
        const data = await response.json();
        return data;
    }
);

export const artSlice = createSlice({
    name: 'arts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArt.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchArt.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchArt.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Something went wrong.';
            });
    },
});

export default artSlice.reducer;

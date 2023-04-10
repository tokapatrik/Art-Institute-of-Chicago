import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import artsReducer from './features/Arts';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

const store = configureStore({
    reducer: {
        arts: artsReducer,
    },
});

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

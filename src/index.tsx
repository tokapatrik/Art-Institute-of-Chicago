import React from 'react';
import { createRoot } from 'react-dom/client';
import store from './store/store';
import { Provider } from 'react-redux';
import App from './app';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

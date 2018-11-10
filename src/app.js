import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Application from './routes';

const store = configureStore({});

const app = () => (
    <Provider store={store}>
        <Application />
    </Provider>
);

export default app;

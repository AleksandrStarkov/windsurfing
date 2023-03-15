import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './i18';
import { CircularProgress } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <BrowserRouter basename="windsurfing">
      <Suspense fallback={<CircularProgress />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();

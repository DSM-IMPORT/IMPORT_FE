import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from "react-redux"
import App from './pages/App';
import { store } from './stores';
import GlobalStyle from './styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalStyle/>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

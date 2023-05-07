import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ErrorBoundary } from "./utils/ErrorBoundary";
import ServerError from './Components/Message/500'
import { PersistGate } from "redux-persist/integration/react";
import {persistor,store} from './Redux/store'
require("tw-elements");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENTID}`}>
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary fallback={<ServerError />}>
       <App />
      </ErrorBoundary>
      </PersistGate>
    </Provider>
  </React.StrictMode>
  </GoogleOAuthProvider>
);

reportWebVitals();

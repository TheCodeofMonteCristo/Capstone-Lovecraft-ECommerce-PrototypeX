// src/main.jsx or src/index.jsx (entry point)

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './state/store'; // Import the store from state folder

// Wrap the entire app with the Redux Provider to make the store available to the rest of the app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);





//Second Version Below, Commented Out 


// src/index.js
//
//import React from 'react'; // Importing React
//import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering the app to the DOM
//import App from './App'; // Importing the main App component
//import './index.css'; // Importing global styles

/**
 * The entry point for the app. This file renders the main App component
 * into the root element in the index.html file.
 */
//const root = ReactDOM.createRoot(document.getElementById('root')); // Creating a root element to mount the React app
//root.render(
  //<React.StrictMode>
   // <App /> {/* The App component is the root component of the app */}
  //</React.StrictMode>
//);

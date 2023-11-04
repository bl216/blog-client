import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer/index';
import { BrowserRouter } from 'react-router-dom'
import Counter from "./container/appContainer";

// redux example... https://www.tutorialspoint.com/redux/redux_react_example.htm
const store = createStore(
    reducer,
    //window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //window.__REDUX_DEVTOOLS_EXTENSION__()
)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <Counter/>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

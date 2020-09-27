import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const questionResults = {
    question1: '',
    question2: '',
    question3: '',
    question4: ''
}

const resultsReducer = (state = questionResults, action) => {

    if (action.type === "SET_QUESTION_1") {
        return {
            ...state,
            question1: action.payload
        }
    }

    if (action.type === "SET_QUESTION_2") {
        return {
            ...state,
            question2: action.payload
        }
    }

    if (action.type === "SET_QUESTION_3") {
        return {
            ...state,
            question3: action.payload
        }
    }

    if (action.type === "SET_QUESTION_4") {
        return {
            ...state,
            question4: action.payload
        }
    }

    return state;
}


console.log('questionResults are:', questionResults);


const store = createStore(
    combineReducers({
        resultsReducer

    })
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')

);
registerServiceWorker();

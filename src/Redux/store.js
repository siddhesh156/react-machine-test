import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'

import rootReducer from './rootReducer'

const history = createBrowserHistory();


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

export { store, history };
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import logger from 'redux-logger'

const middlewares = [
  logger,
]

let store = createStore(reducers, applyMiddleware(...middlewares))

export default store

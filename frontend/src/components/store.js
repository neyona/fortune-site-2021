// frontend/src/components/store.js
import { createStore, compose } from 'redux'
import rootReducer from './redux/index.js'

const initialState = {}

const store = createStore(rootReducer, initialState)

export default store

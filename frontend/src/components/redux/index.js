// frontend/src/components/redux/index.js
import { combineReducers } from 'redux'

import nameAuraReducer from './nameaura/nameAuraReducer'

export default combineReducers({
  nameAura: nameAuraReducer,
})

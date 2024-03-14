import { configureStore } from '@reduxjs/toolkit'
import subjects from './Reducer/DataReducer'

const store = configureStore({
  reducer: {
    masterData: subjects,
  },
})

export default store

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  subjects: null,
  error: null,
}

const subjectsSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {
    Requesting: (state) => {
      state.loading = true
    },
    Requesting_Success: (state, action) => {
      state.loading = false
      state.masterData = action.payload
      state.error = null
    },
    Requesting_Failure: (state, action) => {
      state.loading = false
      state.masterData = null
      state.error = action.payload
    },
  },
})

export const { Requesting, Requesting_Success, Requesting_Failure } =
  subjectsSlice.actions

export default subjectsSlice.reducer

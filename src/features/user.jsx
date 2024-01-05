import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'tyler',
    age: 23,
    email: 'tylerdurden@kinofist',
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },
  },
})

export default userSlice.reducer

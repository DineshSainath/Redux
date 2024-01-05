import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'tyler',
    age: 23,
    email: 'tyler@kinofist',
  },
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.age,
        email: action.payload.email,
      }
    },
    logout: (state) => {
      return { ...state, name: '', age: 0, email: '' }
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer

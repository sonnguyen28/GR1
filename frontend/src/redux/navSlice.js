import { createSlice } from '@reduxjs/toolkit'

const navSlice = createSlice({
  name: 'navState',
  initialState: {
    sidebarShow: true,
    sidebarUnfoldable: false,
  },
  reducers: {
    changeState(state, action) {
      if (action.payload.sidebarShow != null) {
        state.sidebarShow = action.payload.sidebarShow
      }
      if (action.payload.sidebarUnfoldable != null) {
        state.sidebarUnfoldable = action.payload.sidebarUnfoldable
      }
    },
  },
})

export const { changeState } = navSlice.actions

export default navSlice.reducer

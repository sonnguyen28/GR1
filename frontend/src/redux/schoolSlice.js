import { createSlice } from '@reduxjs/toolkit'

const schoolSlice = createSlice({
  name: 'school',
  initialState: {
    schools: {
      allSchools: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    getSchoolsStart: (state) => {
      state.schools.isFetching = true
    },
    getSchoolsSuccess: (state, action) => {
      state.schools.isFetching = false
      state.schools.allSchools = action.payload
    },
    getSchoolsFailed: (state) => {
      state.schools.isFetching = false
      state.schools.error = true
    },
    deleteSchoolStart: (state) => {
      state.schools.isFetching = true
    },
    deleteSchoolsSuccess: (state, action) => {
      state.schools.isFetching = false
      state.msg = action.payload
    },
    deleteSchoolFailed: (state, action) => {
      state.schools.isFetching = false
      state.schools.error = true
      state.msg = action.payload
    },
  },
})

export const {
  getSchoolsStart,
  getSchoolsSuccess,
  getSchoolsFailed,
  deleteSchoolStart,
  deleteSchoolsSuccess,
  deleteSchoolFailed,
} = schoolSlice.actions

export default schoolSlice.reducer

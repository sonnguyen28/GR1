import axios from 'axios'
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logOutFailed,
  logOutStart,
  logOutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from './authSlice'
//npm install axios

import { getSchoolsStart, getSchoolsSuccess, getSchoolsFailed } from './schoolSlice'

const myURL = 'http://localhost:8000'

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart())
  try {
    const res = await axios.post(myURL + '/v1/auth/login', user)
    dispatch(loginSuccess(res.data))
    navigate('/')
  } catch (err) {
    dispatch(loginFailed(err.response.data))
  }
}

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart())
  try {
    await axios.post(myURL + '/v1/auth/register', user)
    dispatch(registerSuccess())
    navigate('/login')
  } catch (err) {
    dispatch(registerFailed())
  }
}

export const logOut = async (dispatch, id, navigate, accessToken, axiosJWT) => {
  dispatch(logOutStart())
  try {
    await axiosJWT.post(myURL + '/v1/auth/logout', id, {
      headers: { token: `Bearer ${accessToken}` },
    })
    dispatch(logOutSuccess())
    navigate('/login')
  } catch (err) {
    dispatch(logOutFailed())
  }
}

export const getAllSchools = async (token, dispatch, axios) => {
  dispatch(getSchoolsStart())
  try {
    const res = await axios.get(myURL + '/v1/schools/')
    dispatch(getSchoolsSuccess(res.data))
  } catch (err) {
    dispatch(getSchoolsFailed())
  }
}

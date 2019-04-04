import axios from 'axios'

export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILURE = 'AUTH_FAILURE'


function authRequest () {
  return {
    type: AUTH_REQUEST
  }
}

function authSuccess (user) {
  return {
    type: AUTH_SUCCESS,
    user
  }
}

function authFailure () {
  return {
    type: AUTH_FAILURE
  }
}

export function fetchUser() {
  return async dispatch => {
    dispatch(authRequest())
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/me`)             
      dispatch(authSuccess(res.data))
    } catch (err) {
      console.log(err)
      dispatch(authFailure())
    }
  }
}
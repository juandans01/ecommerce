import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from '../actions/auth'

export default function auth (state = {
  attempted: false,
  fetching: false,
  authenticated: false,
  failed: false,
  user: null
}, action) {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        attempted: false,
        fetching: true,
        authenticated: false,
        failed: false,
        user: null
      }
    case AUTH_SUCCESS:
      return {
        attempted: true,
        fetching: false,
        authenticated: true,
        failed: false,
        user: action.user
      }
    case AUTH_FAILURE:
      return {
        attempted: true,
        fetching: false,
        authenticated: false,
        failed: true,
        user: null
      }    
    default:
      return state
  }
}

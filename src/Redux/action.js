
 const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
 const LOGOUT = 'LOGOUT';

export function loginSuccess(user) {
  return { type: LOGIN_SUCCESS, payload: user };
}

export function logout() {
  return { type: LOGOUT };
}
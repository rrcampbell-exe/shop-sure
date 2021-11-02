import decode from 'jwt-decode';

class AuthService {
  // fetch data stored in token
  getProfile() {
    return decode(this.getToken());
  }

  // verify user's logged in status
  loggedIn() {
    // confirm whether a saved token exists and if it's valid
    const token = this.getToken();
    // use type coercion to confirm token is NOT undefined and NOT expired
    return !!token && !this.isTokenExpired(token);
  }

  // verify whether token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  // fetch token from localStorage
  getToken() {
    // retrieve token from localStorage
    return localStorage.getItem('id_token');
  }

  // set token to localStorage, reload page to homepage
  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);

    window.location.assign('/warehouse');
  }

  // on logout, clear token from localStorage, force logout via reload of homepage
  logout() {
    // clear user token from localStorage
    localStorage.removeItem('id_token');
    // reload page, reset application state
    window.location.assign('/');
  }
}

export default new AuthService();
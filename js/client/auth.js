/**
* auth.js
* Handles all of the authentication functions the client needs
* to perform in conjunction with the server.
* Author: Nick Rabb <nrabb@outlook.com>
* Yes And Games (C) 2016
* yesandgames@gmail.com
*/

// Private variables
var RESPONSE_OK = 0;
var RESPONSE_INVALID_LOGIN = 1;
var RESPONSE_UNKNOWN_ERROR = 2;
var RESPONSE_SERVER_UPDATING = 3;
var RESPONSE_USERNAME_TAKEN = 4;
var RESPONSE_ACCOUNT_CREATED = 5;
var RESPONSE_LOGGED_IN = 6;

/**
 * Attempt to authenticate a user.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {string} username     The username to send to the server.
 * @param {string} password    The password to authenticate this user with.
 * @return {number} The login response sent back from the server or LOGGED_IN if the user is already logged in.
 */
function authLogin(username, password) {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": yag_api_endpoint + "auth/login",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "cache-control": "no-cache"
    },
    "processData": false,
    "data": "{\n    \"username\": \"" + username + "\",\n    \"password\": \"" + password + "\"\n}"
  }

  // Make sure the user isn't already logged in
  if(dataCacheRetrieve('userAuth') !== 'undefined') {
    $.ajax(settings).done(function (response) {
      if(isset(response)) {
        switch(response.loginResponse) {
          case(RESPONSE_OK):
            dataCacheStore("userAuth", response);
            break;
        }
        return response.loginResponse;
      }
    });
  } else {
    return RESPONSE_LOGGED_IN;
  }
}

/**
 * Attempt to create a user account.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {string} username     The username to send to the server.
 * @param {string} password    The password to use for this user account.
 * @return {number} The login response sent back from the server.
 */
function authCreateAccount(username, password) {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": yag_api_endpoint + "auth/create",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "cache-control": "no-cache"
    },
    "processData": false,
    "data": "{\n    \"username\": \"" + username + "\",\n    \"password\": \"" + password + "\"\n}"
  }

  $.ajax(settings).done(function (response) {
    if(isset(response)) {
      switch(response.loginResponse) {
        case(RESPONSE_ACCOUNT_CREATED):
          dataCacheStore("userAuth", response);
          break;
      }
      return response.loginResponse;
    }
  });
}

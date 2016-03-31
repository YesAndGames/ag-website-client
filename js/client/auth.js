/**
* auth.js
* Handles all of the authentication functions the client needs
* to perform in conjunction with the server.
* Author: Nick Rabb <nrabb@outlook.com>
* Yes And Games (C) 2016
* yesandgames@gmail.com
*/

/*global $*/
/*global yag_api_endpoint*/
/*global dataCacheRetrieve*/
/*global dataCacheStore*/
/*global dataCacheAuthVar*/

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
 * @param {string}   username        The username to send to the server.
 * @param {string}   password        The password to authenticate this user with.
 * @param {function} callback        Code to run with the login response.
 */
function authLogin(username, password, callback) {
  'use strict';
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": yag_api_endpoint + "auth/login",
    "method": "POST",
    "headers": {
      "content-type": "application/json"
    },
    "processData": false,
    "data": "{\n    \"username\": \"" + username + "\",\n    \"password\": \"" + password + "\"\n}"
  };

  // Make sure the user isn't already logged in
  if (dataCacheRetrieve(dataCacheAuthVar) !== 'undefined') {
    $.ajax(settings).done(function (response) {
      if (response !== 'undefined') {
        switch (response[0].loginResponse) {
        case (RESPONSE_OK):
          dataCacheStore(dataCacheAuthVar, response[0]);
          break;
        }
        callback(response[0].loginResponse);
      }
    });
  } else {
    callback(RESPONSE_LOGGED_IN);
  }
}

/**
 * Attempt to create a user account.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {string}   username        The username to send to the server.
 * @param {string}   password        The password to use for this user account.
* @param {string}   email            The email to use for this user.
 * @param {function} callback        Code to run after the with the create account response.
 */
function authCreateAccount(username, password, email, callback) {
  'use strict';
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": yag_api_endpoint + "auth/create",
    "method": "POST",
    "headers": {
      "content-type": "application/json"
    },
    "processData": false,
    "data": "{\n    \"username\": \"" + username + "\",\n    \"password\": \"" + password + "\",\n  \"email\": \"" + email + "\n}"
  };

  $.ajax(settings).done(function (response) {
    if (response !== 'undefined') {
      switch (response.loginResponse) {
      case (RESPONSE_ACCOUNT_CREATED):
        dataCacheStore(dataCacheAuthVar, response);
        break;
      }
      callback(response.loginResponse);
    }
  });
}

/**
 * Confirm a user's account.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {string}   confirmUUID     A unique ID to confirm the account.
 * @param {function} callback        Code to run after the with the create account response.
 */
function authConfirmAccount(confirmUUID, callback) {
    'use strict';
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": yag_api_endpoint + "auth/confirm",
      "method": "POST",
      "headers": {
        "content-type": "application/json"
      },
      "processData": false,
      "data": "{\n    \"confirmUUID\": \"" + confirmUUID + "\"\n}"
    };

    $.ajax(settings).success(function (response, textStatus, xhr) {
      console.log(response);
      if (typeof response !== 'undefined') {
          callback(response, xhr.status);
      }
    });
}

/**
 * Request a password change for a user.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {string}   username        The username to send to the server.
 * @param {string}   password        The password to use for this user account.
 * @param {function} callback        Code to run after the with the create account response.
 */
function authRequestPasswordChange(username, password, callback) {
    'use strict';
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": yag_api_endpoint + "auth/" + username + "/password",
      "method": "POST",
      "headers": {
        "content-type": "application/json"
      },
      "processData": false,
      "data": "{\n    \"password\": \"" + password + "\n}"
    };

    $.ajax(settings).done(function (response, status) {
      if (response !== 'undefined') {
        callback(response);
      }
    });
}

/**
 * Submit a user's password change.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {string}   username        The username to send to the server.
 * @param {string}   oldPass         The user's old password
 * @param {string}   newPass         The user's new password
 * @param {function} callback        Code to run after the with the create account response.
 */
function authChangePassword(username, oldPass, newPass) {
    'use strict';
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": yag_api_endpoint + "auth/" + username + "/password/change",
      "method": "POST",
      "headers": {
        "content-type": "application/json"
      },
      "processData": false,
      "data": "{\n    \"oldPassword\": \"" + oldPass + "\",\n    \"newPassword\": \"" + newPass + "\n}"
    };

    $.ajax(settings).done(function (response) {
      if (response !== 'undefined') {
        callback(response);
      }
    });
}

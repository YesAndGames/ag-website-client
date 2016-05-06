/**
* user.js
* Handles all of the user functions the client needs
* to perform in conjunction with the server.
* Author: Nick Rabb <nrabb@outlook.com>
* Yes And Games (C) 2016
* yesandgames@gmail.com
*/

/*global $*/
/*global yag_api_endpoint*/

/**
 * Get the details of a user's data.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {number} userId     The ID of the user to fetch data for.
 * @param {function} callback Code to run after the request comes back.
 */
function userGetData(userId, callback) {
  'use strict';
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": yag_api_endpoint + "users/" + userId,
    "method": "GET",
    "headers": {
      "content-type": "application/json",
    },
    "processData": false
  };

  $.ajax(settings).done(function (response) {
    callback(response);
  });
}

/**
 * Set a user's email address.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {number} userId     The ID of the user to fetch data for.
 * @param {string} email      The email address to use for the user.
 * @param {string} password   The user's password.
 * @param {function} callback Code to run after the request comes back.
 */
function userSetEmail(userId, email, password, callback) {
    'use strict';
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": yag_api_endpoint + "users/" + userId + "/setEmail",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
      },
      "data": "{\n  \"email\": \"" + email + "\", \"password\":\"" + password + "\"\n}",
      "processData": false
    };

    $.ajax(settings).done(function (response) {
      callback(response);
    });
}

/**
* user.js
* Handles all of the user functions the client needs
* to perform in conjunction with the server.
* Author: Nick Rabb <nrabb@outlook.com>
* Yes And Games (C) 2016
* yesandgames@gmail.com
*/

/**
 * Get the details of a user's data.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {number} userId     The ID of the user to fetch data for.
 */
function userGetData(userId) {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": yag_api_endpoint + "users/" + userId,
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "cache-control": "no-cache"
    },
    "processData": false
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

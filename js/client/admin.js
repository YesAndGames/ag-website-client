/**
* admin.js
* Handles all of the administration functions the client needs to perform in conjunction with the server.
* Author: Nick Rabb <nrabb@outlook.com>
* Yes And Games (C) 2016
* yesandgames@gmail.com
*/

/*global $*/
/*global yag_api_endpoint*/
/*global dataCacheRetrieve*/
/*global dataCacheStore*/
/*global dataCacheAuthVar*/


// VARIABLES

var USAGE_PER_HOUR = 0;
var USAGE_PER_DAY = 1;
var USAGE_PER_MONTH = 2;
var USAGE_PER_YEAR = 3;

// FUNCTIONS
// ==================

/**
 * Get tracked login data from the YAG database.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {number}   usage      A usage enum (as specified above)
 * @param {string}   start_date The date to start the search at
 * @param {string}   end_date   The date to end the search at
 * @param {function} callback   Code to run with the result of the AJAX call.
 */

function adminGetLoginData(usage, start_date, end_date, callback) {
  'use strict';
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": yag_api_endpoint + "usage/logins/" + usage + "/" + start_date.replace(/\//g, "") + "/" + end_date.replace(/\//g, ""),
    "method": "POST",
    "headers": {
      "content-type": "application/json"
    },
    "processData": false
  };

  // Make sure the user is logged in and an admin
  if (dataCacheRetrieve(dataCacheAuthVar) !== 'undefined' 
//      && dataCacheRetrieve(dataCacheAuthVar).group === 'ADMIN') {
      ){
    $.ajax(settings).done(function (response) {
      if (response !== 'undefined') {
        callback(response);
      }
    });
  }
}
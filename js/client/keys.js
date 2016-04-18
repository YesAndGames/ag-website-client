/**
* keys.js
* Handles all of the order key functions the client needs
* to perform in conjunction with the server.
* Author: Nick Rabb <nrabb@outlook.com>
* Yes And Games (C) 2016
* yesandgames@gmail.com
*/

/*global $*/
/*global yag_api_endpoint*/
/*global dataCacheRetrieve*/
/*global dataCacheAuthVar*/

// Private variables
var KEY_TYPE_NONE = 0;
var KEY_TYPE_EARLY_ACCESS = 1;
var KEY_TYPE_VANITY_ITEM = 2;
var KEY_TYPE_GUILDIUM = 3;

/**
 * Attempt to authenticate a user.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {string}   type            The type of key to grant.
 * @param {string}   vanityItemId    The id of the vanity item to grant.
 * @param {function} callback        Code to run with the login response.
 */
function keysGenerateKey(type, vanityItemId, callback) {
    'use strict';
    var userId = dataCacheRetrieve(dataCacheAuthVar).id,
        settings = {
            "async": true,
            "crossDomain": true,
            "url": yag_api_endpoint + "keys/generate",
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "processData": false,
            "data": "{\n    \"type\": \"" + type + "\",\n    \"vanityItemId\": \"" + vanityItemId + "\",\n\"userId\": \"" + userId + "\"\n}"
        };
    $.ajax(settings).done(function (response) {
        if (response !== undefined) {
            callback(response);
        }
    });
}

/**
 * Consume a key granted to a user.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {string}   key             The key to consume.
 * @param {function} callback        Code to run with the login response.
 */
function keysConsumeKey(key, callback) {
    'use strict';
    var userId = dataCacheRetrieve(dataCacheAuthVar).id,
        settings = {
            "async": true,
            "crossDomain": true,
            "url": yag_api_endpoint + "keys/" + userId + "/" + key + "/consume",
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "processData": false
        };
    $.ajax(settings).done(function (response) {
        if (response !== undefined) {
            callback(response);
        }
    });
}

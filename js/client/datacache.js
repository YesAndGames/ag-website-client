/**
* datacache.js
* An object to handle all of the data caching needs of the client.
* Author: Nick Rabb <nrabb@outlook.com>
* Yes And Games (C) 2016
* yesandgames@gmail.com
*/

/*global storage*/

// VARIABLES
var varPrefix = 'yagapi-';
// hash('userauth', MD5)
var dataCacheAuthVar = varPrefix + '89344e9d14eefd2b8c4363c5dc46cefd';

/**
 * Set a cookie.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {string} cname    The name of the cookie to set.
 * @param {string} cvalue   The value to set.
 */
function setCookie(cname, cvalue) {
  'use strict';
  var d = new Date(), expires;
  d.setTime(d.getTime() + (0.0416 * 24 * 60 * 60 * 1000));
  expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

/**
 * Get the value of a cookie.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {string} cname    The name of the cookie to get
 * @return {string} The value of the cookie cname
 */
function getCookie(cname) {
  'use strict';
  var name = cname + "=",
    ca = document.cookie.split(';'),
    i,
    c;
  for (i = 0; i < ca.length; i += 1) {
    c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteCookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

/**
 * Store a variable into the data cache.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {string} name     The name of the variable to store.
 * @param {string} value    The value to store.
 * @return {string}         The value that got set.
 */
function dataCacheStore(name, value) {
  'use strict';
  if (typeof (sessionStorage) !== 'undefined') {
    sessionStorage[name] = JSON.stringify(value);
    return sessionStorage[name];
  } else {
    setCookie(name, JSON.stringify(value));
    return getCookie(name);
  }
}

/**
 * Get a variable from the data cache.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {string} name     The name of the variable to retrieve.
 * @return {string}         The value for that variable.
 */
function dataCacheRetrieve(name) {
  'use strict';
  if (typeof (sessionStorage) !== 'undefined') {
    return sessionStorage[name] === undefined ? null : JSON.parse(sessionStorage[name]);
  } else {
    return JSON.parse(getCookie(name));
  }
}

function dataCacheRemove(name) {
  'use strict';
  if (typeof (sessionStorage !== 'undefined')) {
    delete sessionStorage[name];
  } else {
    deleteCookie(name);
  }
}

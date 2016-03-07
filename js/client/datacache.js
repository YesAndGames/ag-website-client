/**
* datacache.js
* An object to handle all of the data caching needs of the client.
* Author: Nick Rabb <nrabb@outlook.com>
* Yes And Games (C) 2016
* yesandgames@gmail.com
*/

/**
 * Store a variable into the data cache.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {string} name     The name of the variable to store.
 * @param {string} value    The value to store.
 * @return {string}         The value that got set.
 */
function dataCacheStore(name, value) {
  if(typeof(storage) !== 'undefined') {
    sessionStorage[name] = value;
    return sessionStorage[name];
  } else {
    setCookie(name, value);
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
  if(typeof(storage) !== 'undefined') {
    return sessionStorage[name];
  } else {
    return getCookie(name);
  }
}

/**
 * Set a cookie.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {string} cname    The name of the cookie to set.
 * @param {string} cvalue   The value to set.
 */
function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (0.0416*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

/**
 * Get the value of a cookie.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {string} cname    The name of the cookie to get
 * @return {string} The value of the cookie cname
 */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

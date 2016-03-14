/**
* store.js
* Handles all of the store functions the client needs
* to perform in conjunction with the server.
* Author: Nick Rabb <nrabb@outlook.com>
* Yes And Games (C) 2016
* yesandgames@gmail.com
*/

/*global $*/
/*global yag_api_endpoint*/
/*global dataCacheRetrieve*/
/*global dataCacheAuthVar*/

/**
 * Get the store inventory.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {function} callback   Code to run with the response.
 */
function storeGetInventory(callback) {
  'use strict';
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": yag_api_endpoint + "store/items/",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "cache-control": "no-cache"
    },
    "processData": false
  };

  $.ajax(settings).done(function (response) {
    if (response !== 'undefined') {
      callback(response);
    }
  });
}

/**
 * Request to add an item to the store inventory.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {string}   name        The name of the item to add.
 * @param {string}   description A description for the item to add.
 * @param {number}   price       The price of the item in US cents.
 * @param {string}   imageURL    A URL for an image that will be shown for this item.
 * @param {function} callback    Code to run with the response.
 */
function storeAddInventoryItem(name, description, price, imageURL, callback) {
  'use strict';
  var userId = dataCacheRetrieve(dataCacheAuthVar).id,
    settings = {
      "async": true,
      "crossDomain": true,
      "url": yag_api_endpoint + "auth/items/",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": {
        "name": name,
        "description": description,
        "price": price,
        "imageURL": imageURL,
        "userId": userId
      }
    };

  $.ajax(settings).done(function (response) {
    if (response !== 'undefined') {
      callback(response);
    }
  });
}

/**
 * Get a store item's details.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {number}   itemId   The ID of the item to retrieve.
 * @param {function} callback Code to run with the response.
 */
function storeGetItem(itemId, callback) {
  'use strict';
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": yag_api_endpoint + "store/items/" + itemId,
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "cache-control": "no-cache"
    },
    "processData": false
  };

  $.ajax(settings).done(function (response) {
    if (response !== 'undefined') {
      callback(response);
    }
  });
}

/**
 * Create an order for a specific user through the store.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {function} callback Code to run with the result of the request.
 */

function storeCreateOrder(callback) {
  'use strict';
  // Make sure the user is logged in
  if (dataCacheRetrieve(dataCacheAuthVar) !== 'undefined') {
    var userId = dataCacheRetrieve(dataCacheAuthVar).id,
      settings = {
        "async": true,
        "crossDomain": true,
        "url": yag_api_endpoint + "store/orders/",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": {
          "userId": userId
        }
      };

    $.ajax(settings).done(function (response) {
      if (response !== 'undefined') {
        callback(response);
      }
    });
  }
}


/**
 * storeDeleteOrder - Delete an order that a user has for the store.
 *
 * @param  {number}   orderId  The id of the order to delete
 * @param  {function} callback Code to run with the result
 */
function storeDeleteOrder(orderId, callback) {
  'use strict';
  if (dataCacheRetrieve(dataCacheAuthVar) !== 'undefined') {
    var userId = dataCacheRetrieve(dataCacheAuthVar).id,
      settings = {
        "async": true,
        "crossDomain": true,
        "url": yag_api_endpoint + "store/orders/" + orderId,
        "method": "DELETE",
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": {
          "userId": userId
        }
      };

    $.ajax(settings).done(function (response) {
      if (response !== 'undefined') {
        callback(response);
      }
    });
  }
}


/**
 * storeGetOrder - Get the details of an order.
 *
 * @param  {number}   orderId  The id of the order to retrieve.
 * @param  {function} callback Code to run with the result.
 */
function storeGetOrder(orderId, callback) {
  'use strict';
  if (dataCacheRetrieve(dataCacheAuthVar) !== 'undefined') {
    var userId = dataCacheRetrieve(dataCacheAuthVar).id,
      settings = {
        "async": true,
        "crossDomain": true,
        "url": yag_api_endpoint + "store/orders/" + orderId,
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": {
          "userId": userId
        }
      };

    $.ajax(settings).done(function (response) {
      if (response !== 'undefined') {
        callback(response);
      }
    });
  }
}


/**
 * storeAddItemToOrder - Add an item to a user's order.
 *
 * @param  {number}   orderId  The id of the order to add an item to.
 * @param  {number}   itemId   The id of the item to add.
 * @param  {function} callback Code to run with the result.
 */
function storeAddItemToOrder(orderId, itemId, callback) {
  'use strict';
  if (dataCacheRetrieve(dataCacheAuthVar) !== 'undefined') {
    var userId = dataCacheRetrieve(dataCacheAuthVar).id,
      settings = {
        "async": true,
        "crossDomain": true,
        "url": yag_api_endpoint + "store/orders/" + orderId + "/items/",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": {
          "itemId": itemId,
          "userId": userId
        }
      };

    $.ajax(settings).done(function (response) {
      if (response !== 'undefined') {
        callback(response);
      }
    });
  }
}


/**
 * storeRemoveItemFromOrder - Remove an item from a user's order.
 *
 * @param  {number}   orderId       The id of the order to remove an item from.
 * @param  {number}   orderItemId   The id of the order item to remove.
 * @param  {function} callback      Code to run with the result.
 */
function storeRemoveItemFromOrder(orderId, orderItemId, callback) {
  'use strict';
  if (dataCacheRetrieve(dataCacheAuthVar) !== 'undefined') {
    var userId = dataCacheRetrieve(dataCacheAuthVar).id,
      settings = {
        "async": true,
        "crossDomain": true,
        "url": yag_api_endpoint + "store/orders/" + orderId + "/items/",
        "method": "DELETE",
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": {
          "orderItemId": orderItemId,
          "userId": userId
        }
      };

    $.ajax(settings).done(function (response) {
      if (response !== 'undefined') {
        callback(response);
      }
    });
  }
}

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
                "content-type": "application/json"
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
        if (response !== undefined) {
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
                "url": yag_api_endpoint + "store/orders/" + userId,
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
                "url": yag_api_endpoint + "store/orders/" + userId + "/" + orderId,
                "method": "DELETE",
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
                "url": yag_api_endpoint + "store/orders/" + userId + "/" + orderId,
                "method": "GET",
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
}

/**
* Get orders for a specific user through the store.
* @author Nick Rabb <nrabb@outlook.com>
* @param {function} callback Code to run with the result of the request.
*/
function storeGetUserOrders(callback) {
    'use strict';
    if (dataCacheRetrieve(dataCacheAuthVar) !== 'undefined') {
        var userId = dataCacheRetrieve(dataCacheAuthVar).id,
            settings = {
                "async": true,
                "crossDomain": true,
                "url": yag_api_endpoint + "store/orders/" + userId,
                "method": "GET",
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
                "url": yag_api_endpoint + "store/orders/" + userId + "/" + orderId + "/items/",
                "method": "POST",
                "headers": {
                    "content-type": "application/json"
                },
                "data": "{\n    \"itemId\":" + itemId + "\n}",
                "processData": false
            };

        $.ajax(settings).done(function (response) {
            if (response !== undefined) {
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
                "url": yag_api_endpoint + "store/orders/" + userId + "/" + orderId + "/items/" + orderItemId,
                "method": "DELETE",
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
}

/**
* Authorize an order to be executed through payment.
* @author Nick Rabb <nrabb@outlook.com>
* @param {orderId} The id of the order to authorize
* @param {function} callback Code to run with the result of the request.
*/
function storeAuthorizePayPalOrder(orderId, callback) {
    'use strict';
    if (dataCacheRetrieve(dataCacheAuthVar) !== 'undefined') {
        var userId = dataCacheRetrieve(dataCacheAuthVar).id,
            settings = {
                "async": true,
                "crossDomain": true,
                "url": yag_api_endpoint + "store/orders/" + userId + "/" + orderId + "/paypal/authorize/",
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
}

/**
* Execute an order to be executed through payment.
* @author Nick Rabb <nrabb@outlook.com>
* @param {paymentID} The id of the paypal payment
* @param {payerID} The id of the paypal payer
* @param {function} callback Code to run with the result of the request.
*/
function storeExecutePayPalOrder(paymentID, payerID, callback) {
    'use strict';
    if (dataCacheRetrieve(dataCacheAuthVar) !== 'undefined') {
        var userId = dataCacheRetrieve(dataCacheAuthVar).id,
            settings = {
                "async": true,
                "crossDomain": true,
                "url": yag_api_endpoint + "store/orders/paypal/execute/" + paymentID + "/" + payerID,
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
}

/**
* Execute an order to be executed through Stripe.
* @author Nick Rabb <nrabb@outlook.com>
* @param {orderId} The id of the order to execute
* @param {token} The token
* @param {function} callback Code to run with the result of the request.
*/
function storeExecuteStripeOrder(orderID, token, callback) {
    'use strict';
    if (dataCacheRetrieve(dataCacheAuthVar) !== 'undefined') {
        var settings = {
                "async": true,
                "crossDomain": true,
                "url": yag_api_endpoint + "store/orders/" + orderID + "/stripe/execute/" + token,
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
}

function createStripeOrder(token, itemId) {
    'use strict';
    if (itemId == 5) {
        keysGenerateKey(1, -1, function (response) {
            storeCreateOrder(function(createResponse) {
                var orderId = createResponse.id;
                storeAddItemToOrder(orderId, itemId, function(itemResponse) {
                    storeExecuteStripeOrder(orderId, token, function(stripeResponse) {
                        console.log(stripeResponse);
                        if (stripeResponse.status === "succeeded") {
                            keysConsumeKey(response.key, function (consumeResponse) {
                                // Update the user data
                                dataCacheStore(dataCacheAuthVar, consumeResponse);
                                openModal(null, earlyAccessSuccessModal);
                            });
                        } else {
                            document.getElementById("modalContainer").children[0].children[0].getElementsByTagName("p")[0].textContent = "There was an error processing your payment! Please try again, or if your issue persists, contact yesandgames@gmail.com";
                        }
                        document.getElementById("paymentLoader").setAttribute("style", "display: none;");
                        document.getElementById("modalContainer").children[0].children[0].getElementsByTagName("button")[1].setAttribute("style", "display: block;");
                    });
                });
            });
        });
    } else {
        storeCreateOrder(function(createResponse) {
            var orderId = createResponse.id;
            storeAddItemToOrder(orderId, itemId, function(itemResponse) {
                storeExecuteStripeOrder(orderId, token, function(stripeResponse) {
                    console.log(stripeResponse);
                    if (stripeResponse.status === "succeeded") {
                        document.getElementById("modalContainer").children[0].children[0].getElementsByTagName("p")[0].textContent = "Your payment was successful!\n\nGo use your new purchase and do something cool!";
                    } else {
                        document.getElementById("modalContainer").children[0].children[0].getElementsByTagName("p")[0].textContent = "There was an error processing your payment! Please try again, or if your issue persists, contact yesandgames@gmail.com";
                    }
                    document.getElementById("paymentLoader").setAttribute("style", "display: none;");
                    document.getElementById("modalContainer").children[0].children[0].getElementsByTagName("button")[1].setAttribute("style", "display: block;");
                });
            });
        });
    }

}

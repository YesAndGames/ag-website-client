// This identifies your website in the createToken call below
Stripe.setPublishableKey('pk_test_wMdM3C9AkAjyMxC4qO4kv9xT');

function createPayPalOrder(itemId) {
    storeCreateOrder(function(response) {
        var orderId = response.id;
        storeAddItemToOrder(orderId, itemId, function(itemResponse) {
            storeAuthorizeOrder(orderId, function(authorizeResponse) {
                window.location = authorizeResponse.links[1].href;
            });
        });
    });
}

function createStripeOrder(token, itemId) {
    storeCreateOrder(function(response) {
        var orderId = response.id;
        storeAddItemToOrder(orderId, itemId, function(itemResponse) {
            storeExecuteStripeOrder(orderId, token, function(stripeResponse) {
                console.log(stripeResponse);
                if (stripeResponse.status === "success") {

                } else {

                }
            });
        });
    });
}

// Create the guildium shop component.
var guildiumShop = {
  view: function () {
    return m("section", {class: "guildium-shop hero"}, [
      m("div", [
        m("div", {class: "col span_5_of_12 vertical-center"}, [
          m(".purchase-guildium", [
            m("h1", "Buy Guildium"),
            m("p", "Guildium is our in-game microtransaction currency. "
              + "You can spend Guildium in Adventure Guild at Bretti's Shop on cosmetic-and-convenience-only items. "
              + "You'll never to be able to purchase power or progression using real money in Adventure Guild. "
              + "Purchasing Guildium helps us support future development on the game."),
            m("img", {src: "imgs/icons/guildium.png", alt: "Guildium Bars"})
          ])
        ]),
        m("div", {class: "col span_7_of_12 vertical-center"},
        dataCacheRetrieve(dataCacheAuthVar) == null ?
        [
          m.component(mustLogin),
        ]
        :
        [
          m(".purchase-options", [
            m("ul", [
              m("hr", {class: "hr-gradient"}),
              m("li", [
                m("div", [
                  m("h3", "50 Guildium"),
                  m("h4", "$5.00")
                ]),
                m("button", {type: "button", onclick: function(e) { openModal(e, purchaseItemModal, {
                    itemId: 2,
                    imgPath: "",
                    headerText: "Purchase 50 Guildium",
                    contentText: "Purchase 50 points of in-game currency for Adventure Guild"
                }); }}, "Buy")
              ]),
              m("hr", {class: "hr-gradient"}),
              m("li", [
                m("div", [
                  m("h3", "100 Guildium"),
                  m("h4", "$10.00")
                ]),
                m("button", {type: "button", onclick: function(e) { openModal(e, purchaseItemModal, {
                    itemId: 3,
                    imgPath: "",
                    headerText: "Purchase 100 Guildium",
                    contentText: "Purchase 100 points of in-game currency for Adventure Guild"
                }); }}, "Buy")
              ]),
              m("hr", {class: "hr-gradient"}),
              m("li", [
                m("div", [
                  m("h3", "200 Guildium"),
                  m("h4", "$20.00")
                ]),
                m("button", {type: "button", onclick: function(e) { openModal(e, purchaseItemModal, {
                    itemId: 4,
                    imgPath: "",
                    headerText: "Purchase 200 Guildium",
                    contentText: "Purchase 200 points of in-game currency for Adventure Guild"
                }); }}, "Buy")
              ]),
              m("hr", {class: "hr-gradient"}),
            ])
          ])
        ])
      ])
    ]);
  }
}

// Create the shop component.
var shop = {
  view: function () {
    return [
      m.component(nav, {page: "shop"}),
      m.component(guildiumShop),
      m.component(footer)
    ]
  }
}

// m.mount (document.body, shop);

// This component handles a transaction response and that's it. It should never appear except as a response.
var payment = {
  vm: {
    handleQueryParameters: function() {

      // Interpret query parameters.
      var paymentID = m.route.param("paymentId");
      var token = m.route.param("token");
      var payerID = m.route.param("PayerID");

      // If query parameters aren't provided, route to home.
      if (paymentID == null || paymentID == "" ||
          payerID == null || payerID == "") {
        if (token != null && token != "") {
          m.route("/");
          openModal(null, genericMessageModal,
            {
              messageTitle:"Payment cancelled!",
              message:"Returning to the Adventure Guild website.",
            }
          );
        }
        else {
          m.route("/");
          openModal(null, genericMessageModal,
            {
              messageTitle:"Payment error!",
              message:"No payment data to process.",
            }
          );
        }
      }
      else {
        // Make the payment and wait for a response.
        storeExecuteOrder(paymentID, payerID, function(response) {
            m.route("/");
            openModal(null, genericMessageModal,
                {
                    messageTitle: "Thank You!",
                    message: "Your purchase has been completed!\n\nYou can now use the Guildium you purchased inside our in-game store. Happy Adventuring!"
                }
            );
        });
      }
    }
  },
  view: function() {
    return [
      m.component(nav, {page: "payment"}),
      m.component(waitingForPayment),
      m.component(footer)
    ];
  }
}

// Component that displays while waiting for a response from the ajax call.
var waitingForPayment = {
  view: function() {
    return m("section", {
      class: "hero position-under-nav",
      config: function(el, isInit) {if(!isInit){payment.vm.handleQueryParameters();}}
    }, [
      m(".vertical-center-always payment-processing", [
        m("h1", "Processing Payment..."),
        m("img", {src:"imgs/icons/ajax-loader.gif", alt:"AJAX"})
        ])
    ])
  }
}

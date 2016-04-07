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
          token == null || token == "" ||
          payerID == null || payerID == "") {
        m.route("/");
        openModal(null, genericMessageModal,
          {
            messageTitle:"Payment error!",
            message:"No payment data to process.",
          }
        );
      }
      else {
        // Make the payment and wait for a response.
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
      m(".vertical-center-always payment-processing", m("div", [
        m("h1", "Processing Payment..."),
        m("div", m("img", {src:"imgs/icons/ajax-loader.gif", alt:"AJAX"}))
      ]))
    ])
  }
}

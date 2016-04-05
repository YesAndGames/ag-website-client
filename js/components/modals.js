// Modal that enables the user to change their password.
var changePasswordModal = {
  view: function() {
    return m(".modal", {onclick: function (e) { closeModals (e); }},
      m(".modalContent", {onclick: function (e) { e.stopPropagation (); }}, [
        m("h2", "Change Password"),
        m("p", "Change your Adventure Guild account password."),
        m("div", m("form", {id: "changePasswordForm"}, [
          m("input", {type: "password", name: "old-password", placeholder: "Old Password"}),
          m("input", {type: "password", name: "new-password", placeholder: "New Password"}),
          m("input", {type: "password", name: "confirm-new-password", placeholder: "Confirm New Password"}),
          m("button", {type: "button", onclick: function (e) {}}, "Submit")
        ]))
      ])
    );
  }
}

// Modal that waits for a response from the server indicating that the user's email is confirmed.
var emailConfirmationModal = {

  // The response from the server.
  response: m.prop(null),

  view: function() {
    return m(".modal",
      m(".modalContent", [
        m("h2", "Confirming Your Email"),
        (emailConfirmationModal.response() == null || emailConfirmationModal.response() == "") ?
          [
            m("p", "Waiting for a response from the server."),
            m("div", m("img", {src:"imgs/icons/ajax-loader.gif", alt:"AJAX"}))
          ]
          :
          [
            m("div", m("p", emailConfirmationModal.response())),
            m("br"),
            m("button", {onclick:function(e){emailConfirmationModal.close()}}, "OK")
          ],
      ])
    );
  },

  setResponse(message) {
    emailConfirmationModal.response(message);
    m.redraw(true);
  },

  close: function() {
    m.route("/account");
    emailConfirmationModal.response = m.prop(null);
    closeModals(null);
  }
}

var genericPurchaseModal = {
  controller: function(args) {
    this.imgPath = m.prop(args.imgPath);
    this.headerText = m.prop(args.headerText);
    this.contentText = m.prop(args.contentText);
  },
  view: function(controller) {
    return m(".modal", {onclick: function (e) { closeModals (e); }},
      m(".modalContent", {onclick: function (e) { e.stopPropagation (); }}, [
        m("h2", controller.headerText()),
        m("hr", {class:"hr-gradient"}),
        m(".purchase-content", [
          m(".col span_5_of_12_always", m("img", {src:controller.imgPath(), alt:"Purchase"})),
          m(".col span_7_of_12_always vertical-center-always", m("div", m("p", controller.contentText()))),
        ]),
        m("hr", {class:"hr-gradient"}),
        m(".paypal-purchase", [
          m("button", "Buy"),
        ])
      ])
    );
  }
}

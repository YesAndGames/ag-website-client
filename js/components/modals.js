function limitInput(event, length) {
    'use strict';
    var el = event.srcElement;
    if (el.value.length > length) {
        el.value = el.value.slice(0, length);
    }
}

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
          m("p", {class: "color-error", style: "display: none;"}, "Incorrect current password."),
          m("button", {type: "submit", onclick: function (e) {return changePasswordModal.changePassword();}}, "Submit")
        ]))
      ])
    );
  },

  // Request that the server change the user's password.
  changePassword: function() {

    // Collect data from form input.
    var oldPassword = document.getElementById("changePasswordForm").getElementsByTagName("input")[0].value;
    var newPassword = document.getElementById("changePasswordForm").getElementsByTagName("input")[1].value;
    var confirmNewPassword = document.getElementById("changePasswordForm").getElementsByTagName("input")[2].value;
    document.getElementById("changePasswordForm").getElementsByTagName("p")[0].style.display = "none";

    // Client-side validation.
    if (oldPassword === 'undefined' || oldPassword == '') {
      alert("Please enter your current password.");
    }
    else if (newPassword === 'undefined' || newPassword == '') {
      alert("Please enter a new password.");
    }
    else if (confirmNewPassword != newPassword) {
      alert("Passwords do not match.");
    }

    // Success with client-side validation.
    else {

      // Send the request.
      var username = JSON.parse(dataCacheRetrieve(dataCacheAuthVar)).username;
      authChangePassword(username, oldPassword, newPassword, function(response) {

        // Successful password change.
        if (response.success) {
          closeModals();
          openModal(null, genericMessageModal,
          {
            messageTitle:"Password Changed!",
            message:"Your new password has been set.",
          });
        }

        // Error with the password change request.
        else {
          switch (response.loginResponse) {
            case (RESPONSE_INVALID_LOGIN):
              document.getElementById("changePasswordForm").getElementsByTagName("p")[0].style.display = "block";
              break;
            default:
              alert("Unknown response code: " + loginResponse + ".");
              break;
          }
        }
      });
    }

    // Suppress page refresh on submit.
    return false;
  }
}

var genericPurchaseModal = {
    controller: function(args) {
      this.itemId = m.prop(args.itemId);
      this.imgPath = m.prop(args.imgPath);
      this.headerText = m.prop(args.headerText);
      this.contentText = m.prop(args.contentText);
    },
    view: function(controller) {
        return m(".modal", {onclick: function (e) { closeModals (e); }},
            m(".modalContent", {onclick: function (e) { e.stopPropagation(); }}, [
                m("input", {type: "hidden", id: "paymentItemId", itemId: controller.itemId()}),
                m("div", {id: "paymentDescription"},
                    m("h2", controller.headerText()),
                    m("hr", {class:"hr-gradient"}),
                    m(".purchase-content", [
                      m(".col span_5_of_12_always", m("img", {src:controller.imgPath(), alt:"Purchase"})),
                      m(".col span_7_of_12_always vertical-center-always", m("div", m("p", controller.contentText()))),
                    ])
                ),
                m("p", ""),
                m("p", {class: "modal-warning"}, "Adventure Guild is currently only available for download in the US app stores, and our servers are currently only located in the US. We don't gate this purchase by location, but please be aware that you may not be able to access the app if you are located outside the US."),
                m("div", m("form", {id: "purchaseForm", method:"POST", action:""}, [
                    m("span", {class:"payment-errors"}),
                    m("label", m("span", "Credit Card Number"), m("input", {type: "number", name: "", size:"20", "data-stripe": "number", placeholder:"Credit Card Number", oninput: function (e) {limitInput(e, 16);}})),
                    m("label", m("span", "CVC"), m("input", {type: "number", name: "", size:"4", "data-stripe": "cvc", placeholder:"CVC", oninput: function (e) {limitInput(e, 4);}})),
                    m("label", m("span", "Expiration (MM/YYYY)"),
                        m("div", [
                            m("div", {class: "half-width"},
                                m("input", {type: "number", name: "", size:"2", "data-stripe": "exp-month", placeholder:"MM", oninput: function (e) {limitInput(e, 2);}})),
                            m("span", "/"),
                            m("div", {class: "half-width"},
                                m("input", {type: "number", name: "", size:"4", "data-stripe": "exp-year", placeholder:"YYYY", oninput: function (e) {limitInput(e, 4);}}))
                        ])
                    ),
                    m("button", {type: "submit", onclick: function (e) { return genericPurchaseModal.submitPayment(); }}, "Submit Payment")
                ])),
                m("div", [
                  m("span", "Secure purchases processed by "),
                  m("span", m("a", {href: "https://stripe.com/"}, "Stripe")),
                  m("span", ".")
                ]),
                m("div", {id: "paymentLoader", style: "display: none;"}, m("img", {src:"imgs/icons/ajax-loader.gif", alt:"AJAX"})),
                m("button", {type: "button", style: "display: none;", onclick: function (e) { closeModals(e); }}, "Close")
            ])
        )
    },

    // Handle the response from fetching a token client-side
    handleTokenResponse(status, response) {
        document.getElementById("modalContainer").children[0].children[0].getElementsByTagName("p")[0].textContent = "Submitting your payment...";
        if (response.error) {
            var form = document.getElementById("purchaseForm");
            form.getElementsByTagName("button")[0].removeAttribute('disabled');
            form.setAttribute("style", "display: block;");
            document.getElementById("paymentLoader").setAttribute("style", "display: none;");
            document.getElementById("modalContainer").children[0].children[0].getElementsByTagName("p")[0].textContent = "Error! " + response.error.message;
        } else {
            var token = response.id;
            createStripeOrder(token, document.getElementById("paymentItemId").getAttribute("itemId"));
        }
    },

    // Submit the payment information to the server and handle the response
    submitPayment: function() {
        var form = document.getElementById("purchaseForm");
        form.getElementsByTagName("button")[0].setAttribute('disabled', true);
        Stripe.card.createToken($(form), genericPurchaseModal.handleTokenResponse);
        document.getElementById("modalContainer").children[0].children[0].getElementsByTagName("p")[0].textContent = "Verifying your payment information...";
        form.setAttribute("style", "display: none;");
        document.getElementById("paymentLoader").setAttribute("style", "display: block;");

        // Repress submission causing page refresh
        return false;
    }
}

// Modal that helps the user retrieve their password.
var forgotPasswordModal = {
  view: function() {
    return m(".modal", {onclick: function (e) { closeModals (e); }},
      m(".modalContent", {onclick: function (e) { e.stopPropagation (); }}, [
        m("h2", "Forgot Password"),
        m("p", "Help us get you a new Adventure Guild password, and don't forget it this time!"),
        m("div", m("form", {id: "forgotPasswordForm"}, [
          m("input", {type: "text", name: "username", placeholder: "Username"}),
          m("input", {type: "email", name: "email", placeholder: "Email"}),
          m("p", {class: "color-error", style: "display: none;"}, "Invalid username and email combination."),
          m("button", {type: "submit", onclick: function (e) {return forgotPasswordModal.requestNewPassword();}}, "Submit"),
          m("a", {href:"mailto:yesandgames@gmail.com"}, "If you don't have a registered email address, email us at yesandgames@gmail.com."),
        ]))
      ])
    );
  },

  // Request that the server send this user a new password.
  requestNewPassword: function() {

    // Collect data from form input.
    var username = document.getElementById("forgotPasswordForm").getElementsByTagName("input")[0].value;
    var email = document.getElementById("forgotPasswordForm").getElementsByTagName("input")[1].value;
    document.getElementById("forgotPasswordForm").getElementsByTagName("p")[0].style.display = "none";

    // Client-side validation.
    if(username === 'undefined' || username == '') {
      alert("Please enter your username.");
    }
    else if (!validateEmail(email)) {
      alert("Invalid email address.");
    }

    // Successful client-side validation.
    else {

      // Send the request.
      authResetPassword(username, email, function(response) {

        // Successful response.
        if (response.success) {
          closeModals();
          openModal(null, genericMessageModal,
          {
            messageTitle:"Password Changed!",
            message:"Your new password has been sent to your email address. Make sure you change it after you log in!",
          });
        }

        // Error with the password request.
        else {
          document.getElementById("forgotPasswordForm").getElementsByTagName("p")[0].style.display = "block";
        }
      });
    }

    // Suppress submission causing page refresh.
    return false;
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

// Renders a modal that lets the user redeem a key.
var redeemKeyModal = {
  view: function() {
    return m(".modal", {onclick: function (e) { closeModals (e); }},
      m(".modalContent", {onclick: function (e) { e.stopPropagation (); }}, [
        m("h2", "Redeem a Key"),
        m ("p", "If you were given a key to redeem a digital item, enter it here to redeem the item for this account."),
        m("div", m("form", {id: "redeemKeyForm"}, [
          m("input", {type: "text", name: "key", placeholder: "Key"}),
          m("p", {class: "color-error", style: "display: none;"}, "The key you submitted is invalid."),
          m("button", {type: "submit", onclick: function (e) {return redeemKeyModal.redeemKey();}}, "Submit"),
        ]))
      ])
    );
  },

  redeemKey: function() {

    // Collect data from form.
    var key = document.getElementById("redeemKeyForm").getElementsByTagName("input")[0].value;
      document.getElementById("redeemKeyForm").getElementsByTagName("p")[0].style.display = "none";

    // Client-side verifications.
    if (key === 'undefined' || key == '') {
      alert ("Please enter a redemption key.");
    }

    // Valid input.
    else {

      // Send the request.
      keysConsumeKey(key, function(response) {

        // Check success.
        if (response.success) {

          // Early-Access key.
          switch (response.key_type) {
          case (KEY_TYPE_EARLY_ACCESS):
            closeModals();
            openModal(null, earlyAccessSuccessModal);
            break;
            case (KEY_TYPE_VANITY_ITEM):
            closeModals();
            openModal(null, genericMessageModal,
            {
              messageTitle:"Key redeemed!",
              message:"Login to Adventure Guild to equip your new cosmetic item!",
            });
          }
        }
        else {
          document.getElementById("redeemKeyForm").getElementsByTagName("p")[0].style.display = "block";
        }
      });
    }

    // Suppress submission causing page refresh.
    return false;
  }
}

// Renders a modal containing a generic message and means to close itself.
var genericMessageModal = {
  controller: function(args) {
    this.messageTitle = m.prop(args.messageTitle);
    this.message = m.prop(args.message);
  },
  view: function(controller) {
    return m(".modal", {onclick: function (e) { closeModals (e); }},
      m(".modalContent generic-message-modal", {onclick: function (e) { e.stopPropagation (); }}, [
        m("h2", controller.messageTitle()),
        m("hr", {class:"hr-gradient"}),
        m(".message-content vertical-center-always", [
          m("p", controller.message()),
        ]),
        m("hr", {class:"hr-gradient"}),
        m("button", {onclick: function (e) { closeModals (e); }}, "OK"),
      ])
    );
  }
}

// Renders a modal that thanks the user and welcomes them to early access.
var earlyAccessSuccessModal = {
  view: function() {
    return m(".modal", {onclick: function (e) { closeModals (e); }},
      m(".modalContent", {onclick: function (e) { e.stopPropagation (); }}, [
        m("h2", "Welcome to Early Access!"),
        m("hr", {class:"hr-gradient"}),
        m(".message-content", [
          m("div", m("img", {src: "imgs/logos/adventure-guild.png", width: "50%"})),
          m("p", "Thank you for purchasing early access to Adventure Guild. Download the app on your device and log in with the account credentials you created here!"),
        ]),
        m("hr", {class:"hr-gradient"}),
        m("button", {onclick: function (e) { closeModals (e); }}, "OK"),
      ])
    );
  }
}

// Modal that shows you how to contact us.
var contactUsModal = {
  view: function() {
    return m(".modal", {onclick: function (e) { closeModals (e); }},
      m(".modalContent", {onclick: function (e) { e.stopPropagation (); }}, [
        m("h2", "Contact us!"),
        m("hr", {class:"hr-gradient"}),
        m(".message-content", [
          m("p", "Our site is still in development, so we don't have resources on our site for sharing bugs and feedback. " +
          "Reach out to us by tweeting at us for now. Our developers and users are regularly active and can respond and address your question or feedback as soon as possible!"),
          // "Reach out to us by posting on our subreddit, where our developers and users are regularly active and can respond and address your question or feedback as soon as possible!"),
        ]),
        m("br"),
        m(".message-content", [
          m("p",
            m("strong", "If you have a query or issue related to your account, payments, microtransactions, critical technical difficulties, or otherwise need to contact us privately, please email us at ",
              m("a", {href:"mailto:yesandgames@gmail.com"}, "yesandgames@gmail.com")
            )
          ),
        ]),
        m("hr", {class:"hr-gradient"}),
        m("a", {href: "http://twitter.com/AdvGuildGame"}, m("button", "@AdvGuildGame")),
        // m("a", {target: "_blank", href: "http://reddit.com/r/adventureguild"}, m("button", "/r/AdventureGuild")),
      ])
    );
  }
}

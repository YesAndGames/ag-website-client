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
          m("button", {type: "submit", onclick: function (e) {return forgotPasswordModal.requestNewPassword();}}, "Submit")
        ]))
      ])
    );
  },

  // Request that the server send this user a new password.
  requestNewPassword: function() {

    // Collect data from form input.
    var username = document.getElementById("changePasswordForm").getElementsByTagName("input")[0].value;
    var email = document.getElementById("changePasswordForm").getElementsByTagName("input")[1].value;
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

// Renders a modal containing a generic message and means to close itself.
var genericMessageModal = {
  controller: function(args) {
    this.messageTitle = m.prop(args.messageTitle);
    this.message = m.prop(args.message);
  },
  view: function(controller) {
    return m(".modal", {onclick: function (e) { closeModals (e); }},
      m(".modalContent", {onclick: function (e) { e.stopPropagation (); }}, [
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

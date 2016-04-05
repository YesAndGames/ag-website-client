// Create the account component.
var account = {
  user: m.prop(null),

  vm: {
    init: function() {
      var json = dataCacheRetrieve(dataCacheAuthVar);
      if (json != null && json != "") {
        account.user = m.prop(JSON.parse(json));
      }
    },

    // Interpret confirmation code query string.
    checkConfirmationParameter: function() {
      var confirmUUID = m.route.param("c");
      if (confirmUUID != null && confirmUUID != "") {
        this.submitConfirmCode(confirmUUID);
      }
    },

    // Sends a confirmation to the server.
    submitConfirmCode: function(confirmCode) {
      openModal(null,emailConfirmationModal);
      authConfirmAccount(confirmCode, this.submitConfirmCodeResponse);
    },

    // Callback response from the server that indicates whether or not the account confirmation succeeded.
    submitConfirmCodeResponse: function(response) {
      if (response.success) {
        emailConfirmationModal.setResponse("Successfully confirmed your email address!");
      }
      else {
        emailConfirmationModal.setResponse(response.message);
      }
    }
  },

  controller: function () {
    account.vm.init();
  },

  view: function() {
    return [
      m.component(nav, {page: "account"}),
      m.component(account.user() == null ? missingAccountDetails : accountDetails),
      m.component(footer)
    ];
  },
}

// Create the missing account component, in case the user lost their session or something.
var missingAccountDetails = {
  view: function() {
    return m("section", {class: "hero position-under-nav"}, m("div", [
      m("h1", "Please log in!")
    ]));
  }
}

// Create the account details component.
var accountDetails = {
  controller: function() {
    console.log (account.user());
  },
  view: function() {
    return m("section", {
      class: "hero position-under-nav",
      config: function(el, isInit) {if(!isInit){account.vm.checkConfirmationParameter();}}},
    m(".account-details", [
      m("h1", account.user().username),
      m(".col span_8_of_12", [
        m("h3", "Account Details"),
        m("div", [
          m("h4", "Email Address"),
          m.component(emailField),
        ]),
        m("div", [
          m("h4", "Supporter Titles"),
          m.component(kickstarterTitle),
        ]),
      ]),
      m(".col span_4_of_12", [
        m("h3", "Manage Account"),
        m("ul", [
          m("li", m("a", {onclick:function(e){openModal(e,changePasswordModal);}}, "Change Password")),
          //m("li", m("a", "Change Email Address")),
          //m("li", m("a", "Redeem Key")),
          //m("li", m("a", "View Transactions")),
        ]),
      ]),
    ]));
  }
}

// Renders elements based on whether or not the user's email is found.
var emailField = {
  view: function() {
    var email = account.user().email;
    if (email != null && email != "") {
      return m("p", email);
    }
    else {
      return m("a", {onclick:function(e){openModal(e,missingEmailModal);}}, "Missing email, click to register!");
    }
  }
}

// Renders the user's Kickstarter title if they have one.
var kickstarterTitle = {
  view: function() {
    var tier = account.user().tier;
    if (tier > 0) {
      return m("p", kickstarterTitle.getBackerTitle (tier));
    }
    else {
      return null;
    }
  },

  // returns the string representation of a backer tier
  getBackerTitle: function(tier) {
    switch(tier) {
      case 1:
        return "Bronze Adventurer";
      case 2:
        return "Silver Adventurer";
      case 3:
        return "Gold Adventurer";
      case 4:
        return "Platinum Adventurer";
      case 5:
        return "Renowned Adventurer";
      case 6:
        return "Heroic Adventurer";
      case 7:
        return "Epic Adventurer";
      case 8:
        return "Legendary Adventurer";
      case 9:
        return "Mythic Adventurer";
    }
  }
}

// Renders a component that asks the user to login.
var mustLogin = {
  view: function() {
    return m(".vertical-center", m(".must-login", [
      m("h3", "You need an account to purchase"),
      m("button", {type:"button", onclick:function(e){openModal(e, loginModal)}}, "Login"),
      m("button", {type:"button", onclick:function(e){openModal(e, registrationModal)}}, "Register"),
    ]));
  }
}

// Create the account component.
var account = {
  user: m.prop(null),

  vm: {
    init: function() {
      account.user = m.prop(JSON.parse(dataCacheRetrieve(dataCacheAuthVar)));
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
  }
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
    return m("section", {class: "hero position-under-nav"}, m(".account-details", [
      m("h1", account.user().username),
      m(".col span_8_of_12", [
        m("h3", "Account Details"),
      ]),
      m(".col span_4_of_12", [
        m("h3", "Manage Account"),
        m("ul", [
          m("li", m("a", "Change Password")),
          m("li", m("a", "Redeem Key")),
          m("li", m("a", "View Transactions")),
        ]),
      ]),
    ]));
  }
}

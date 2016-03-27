// Create the account component.
var account = {
  user: m.prop(null),

  vm: {
    init: function() {
      this.user = m.prop(JSON.parse(dataCacheRetrieve(dataCacheAuthVar)));
      console.log(this.user().username);
    }
  },

  controller: function () {
    account.vm.init();
  },

  view: function() {
    return [
      m.component(nav, {page: "account"}),
      m.component(this.user() == null ? missingAccountDetails : accountDetails),
      m.component(footer)
    ];
  }
}

// Create the missing account component, in case the user lost their session or something.
var missingAccountDetails = {
  view: function() {
    return m("section", {class: "hero"}, m("div", [
      m("h1", "Please log in!")
    ]));
  }
}

// Create the account details component.
var accountDetails = {
  view: function() {
    return m("section", {class: "hero"}, m("div", [
      m("h1", account.user().username)
    ]));
  }
}

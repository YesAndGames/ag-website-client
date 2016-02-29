// Create the nav component.
var nav = {};

// Create the nav view-model.
nav.vm = {
  init: function() {
    console.log ("nav vm init");
  }
}

// Create the nav controller.
nav.controller = function() {
  nav.vm.init ();
}

// Create the nav view.
nav.view = function() {
  return m("header", [
    m("div", {class: "nav-header"}, [
      m("div", {class: "nav-collapse"}, [
        m("ul", [
          m("li", [
            m("a", "Home")
          ]),
          m("li", [
            m("a", "Game")
          ]),
          m("li", [
            m("a", "Forums")
          ]),
          m("li", [
            m("a", "Shop")
          ]),
        ])
      ])
    ])
  ]);
}

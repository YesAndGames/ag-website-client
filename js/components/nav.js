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
    m("div", {class: "title-header"}, [
      m("h1", [
        m("span", {class: "color-adventure-blue"}, "Adventure "),
        m("span", {class: "color-guild-gold"}, "Guild")
      ])
    ]),
    m("div", {class: "nav-header"}, [
      m("div", {class: "nav-collapse"}, [
        m("ul", [
          m("li", [
            m("a", {href: "#home"}, "Home")
          ]),
          m("li", [
            m("a", {href: "#about"},  "About")
          ]),
          m("li", [
            m("a", {href: "#play", onclick: "m.route('/play')"}, "Play")
          ]),
          m("li", [
            m("a", {href: "#"},  "Forums")
          ]),
          m("li", [
            m("a", {href: "#"},  "Shop")
          ]),
        ])
      ])
    ]),
    m("hr", {class: "hr-gradient"})
  ]);
}

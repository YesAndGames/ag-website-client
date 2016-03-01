// Create the nav component.
var nav = {

  // Create the view-model.
  vm: {
    init: function() {
      console.log ("nav vm init");
    }
  },

  // Create the controller.
  controller: function() {
    nav.vm.init ();
  },

  // Create the view.
  view: function() {
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
              m("a", {href: "#play"}, "Play")
            ]),

            /*
            m("li", [
              m("a", {href: "#"},  "Forums")
            ]),

            */

            m("li", [
              m("a", {href: "#"},  "Donate")
            ]),
          ])
        ])
      ]),
      m("hr", {class: "hr-gradient"})
    ]);
  }
}

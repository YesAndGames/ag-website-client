// Create the nav component.
var nav = {

  // Currently active page.
  activePage: m.prop(""),

  // Create the view-model.
  vm: {
    init: function() {
      console.log ("nav vm init");
    }
  },

  // Create the controller.
  controller: function(args) {
    nav.vm.init ();
    nav.activePage(args.page);
  },

  // Create the view.
  view: function() {
    return m("header", [
      m("div", {class: "nav-container"}, [
        m("div", {class: "title-header"}, [
          m("h1", [
            m("span", {class: "color-adventure-blue"}, "Adventure "),
            m("span", {class: "color-guild-gold"}, "Guild")
          ])
        ]),
        m("div", {class: "nav-header"}, [
          m("div", {class: "nav-collapse"}, [
            m("ul", [
              m("li", {class: nav.activePage() == "home" ? "active" : ""}, [
                m("a", {href: "./index.html"}, "Home")
              ]),
              m("li", {class: nav.activePage() == "about" ? "active" : ""}, [
                m("a", {href: "./about.html"},  "About")
              ]),
              m("li", {class: nav.activePage() == "play" ? "active" : ""}, [
                m("a", {href: "./play.html"}, "Play")
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
        m("hr", {class: "hr-gradient"}),
      ]),
      m("div", {class: "nav-login-hang"}, [
        m("div", {class: "nav-login-module vertical-center"}, [
          m("div", [
            m("button", {type: "button"}, "Log In"),
            m("button", {type: "button"}, "Register")
          ])
        ])
      ])
    ]);
  }
}

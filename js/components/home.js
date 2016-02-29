// Create the home component.
var home = {};

// Create the home view-model.
home.vm = {
  init: function() {
    console.log ("home vm init");
  }
}

// Create the home controller.
home.controller = function() {
  home.vm.init ();
}

// Create the home view.
home.view = function() {
  return m("html", [
      m("head"), [
        m("title", "Adventure Guild"),
        m("link", {rel: "stylesheet", href: "style/main.css"})
      ],
      m("body"), [
        m.component(nav)
      ]
  ]);
}

// Initialize the home component chain.
m.mount(document, {controller: home.controller, view: home.view});

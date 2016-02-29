// Create the call to action banner component.
var callToAction = {

  // Create the view-model.
  vm: {
    init: function() {
      console.log ("home call to action banner vm init");
    }
  },

  // Create the controller.
  controller: function() {
    callToAction.vm.init ();
  },

  // Create the view.
  view: function() {
    return m("section", {class: "call-to-action hero first-hero"}, [
      m("div", [
        m("div", {class: "vertical-center col span_6_of_12"}, [
          m("div", [
            m("h2", "Join the"),
            m("h1", "Adventure Guild")
          ])
        ]),
        m("div", {class: "vertical-center col span_6_of_12"}, [
          m("div", [
            m("div", [
              m("button", "Play Free", {type: "button"}),
            ]),
            m("div", [
              m("button", "Learn More", {type: "button"}),
            ])
          ])
        ])
      ])
    ]);
  }
}

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
    return [
      m.component(nav),
      m.component(callToAction)
    ]
}

// Initialize the home component chain.
m.mount(document.body, {controller: home.controller, view: home.view});

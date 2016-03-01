// Create the beta signup component.
var betaSignup = {

  // Create the view-model.
  vm: {
    init: function() {
      console.log ("play beta signup vm init");
    }
  },

  // Create the controller.
  controller: function() {
    betaSignup.vm.init ();
  },

  // Create the view.
  view: function() {
    return m("section", {class: "beta-signup hero"}, [
      m("div", [
        m("div", {class: "vertical-center"}, [
          m("div", {class: "col span_4_of_12"}, [
            m("h2", "Sign up for"),
            m("h1", "Open Beta"),
            m("div", [
              m("p", "Adventure Guild will eventually be publicly available via an Open Beta event before the official release of the game. "
              + "Open Beta will follow an Early Alpha Access event, but will be free to access on all available platforms. "
              + "Our testing events may have limited space, and participants will be chosen at random. "
              + "To register for our public events and get email notifications when we broadcast updates, sign up here. ")
            ]),
            m("div", {class: "platform-images"}, [
              m("img", {src: "imgs/logos/ios.png", alt: "iOS"}),
              m("img", {src: "imgs/logos/android.png", alt: "Android"}),
              m("img", {src: "imgs/logos/windows.png", alt: "Windows 10 Mobile"})
            ])
          ]),
          m("div", {class: "cold span_8_of_12"}, [
          ])
        ])
      ])
    ]);
  }
}

// Create the play component.
var play = {

    // Create the view-model.
    vm: {
      init: function() {
        console.log ("play vm init");
      }
    },

    // Create the controller.
    controller: function() {
      play.vm.init ();
    },

    // Create the view.
    view: function() {
        return [
          m.component(nav),
          m.component(betaSignup),
          m.component(footer)
        ]
    }
}

// Initialize the home component chain.
m.mount (document.body, play);

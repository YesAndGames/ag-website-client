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
    return m("section", {class: "call-to-action hero"}, [
      m("div", [
        m("div", {class: "vertical-center col span_6_of_12"}, [
          m("div", [
            m("h2", "Join the"),
            m("h1", [
              m("span", {class: "color-adventure-blue"}, "Adventure "),
              m("span", {class: "color-guild-gold"}, "Guild")
            ])
          ])
        ]),
        m("div", {class: "vertical-center col span_6_of_12"}, [
          m("div", [
            m("img", {class: "devices-image", src: "imgs/home/devices.png", alt: "Play Anytime, Anywhere"}),
            m("div", [
              m("button", {type: "button"}, "Play Free"),
            ]),
            m("div", [
              m("button", {type: "button"}, "Learn More"),
            ])
          ])
        ])
      ])
    ]);
  }
}

// Create the media reel component.
var mediaReel = {

  // Create the view-model.
  vm: {
    init: function() {
      console.log ("home media reel banner vm init");
    }
  },

  // Create the controller.
  controller: function() {
    mediaReel.vm.init ();
  },

  // Create the view.
  view: function() {
    return m("section", {class: "media-reel hero"}, [
      m("div", {class: "vertical-center"}, [
        m("div", {id: "media-reel-slick"}, [
          m("div", [
            m("div", {class: "embed-container"}, [
              m("iframe", {src: "https://www.youtube.com/embed/YSaL_rk1i9Y", frameborder: "0", allowfullscreen: "true"})
            ])
          ]),
          m("div", [
            m("img", {src: "imgs/screenshots/combat.png", alt: "Combat"})
          ]),
          m("div", [
            m("img", {src: "imgs/screenshots/combat.png", alt: "Combat"})
          ]),
          m("div", [
            m("img", {src: "imgs/screenshots/combat.png", alt: "Combat"})
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
      m.component(callToAction),
      m.component(mediaReel),
      m.component(footer)
    ]
}

// Initialize the home component chain.
m.mount (document.body, home);

/* routing chain doesn't work yet
m.route(document.body, "/", {
  "/": home,
  "/play": play
  }
);
*/

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
          m("div", "my content"),
          m("div", "my content"),
          m("div", "my content"),
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
m.route(document.body, "/", {
  "/": home
  }
);

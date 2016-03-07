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
            m("img", {class: "logo-image", src: "imgs/logos/adventure-guild.png", alt: "Adventure Guild"})
          ])
        ]),
        m("div", {class: "vertical-center col span_6_of_12"}, [
          m("div", [
            m("img", {class: "devices-image", src: "imgs/home/devices.png", alt: "Play Anytime, Anywhere"}),
            m("div", [
              m("a", {href: "./play.html"}, [
                m("button", {type: "button"}, "Play Free")
              ])
            ]),
            m("div", [
              m("a", {href: "./about.html"}, [
                m("button", {type: "button"}, "Learn More")
              ])
            ])
          ])
        ]),
      ]),
      m("hr", {class: "hr-gradient"})
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
      m("div", [
        m("div", {config: function(el, isInit) {$(el).slick({ dots: true, adaptiveHeight: true});}}, [
          m("div", [
            m("div", {class: "embed-container"}, [
              m("iframe", {src: "https://www.youtube.com/embed/YSaL_rk1i9Y", frameborder: "0", allowfullscreen: "true"})
            ]),
            m("p", "Online development feature online by ", [
              m("a", {href: "Reporter at RIT"}, "Reporter at RIT"),
              "."
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
    console.log("home vm init");
  }
}

// Create the home controller.
home.controller = function() {
  home.vm.init ();
}

// Create the home view.
home.view = function() {
  return [
    m.component(nav, {page: "home"}),
    m.component(callToAction),
    m.component(mediaReel),
    m.component(footer)
  ]
}

m.route.mode = "pathname";
m.route(document.body, "/", {
    "/": home,
    "/play": play,
    "/about": about,
    "/donations": shop
  }
);

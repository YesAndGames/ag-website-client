// Create the features component.
var features = {

  // Create the view-model.
  vm: {
    init: function() {
      console.log ("about features vm init");
    }
  },

  // Create the controller.
  controller: function() {
    features.vm.init ();
  },

  // Create the view.
  view: function() {

    // Kickstarter video
    return m("section", {class: "about-features"}, [

      // Overview
      m("div", [
        m("div", {class: "about-features-overview hero"}, [
          m("div", [
            m("div", {class: "vertical-center col span_4_of_12"}, [
              m("div", [
                m("h3", "The Mobile RPG You've Been Waiting For"),
                m("p", "Adventure Guild is a social Roguelike RPG built for mobile devices. "
                + "Party up with your friends to explore the farthest reaches of the world. "
                + "Tackle tactically challenging turn-based combat that forces you to work as a team."),
                m("img", {src: "imgs/features/back-to-back.png", alt: "Party Up"})
              ])
            ]),
            m("div", {class: "vertical-center col span_8_of_12"}, [
              m("div", {class: "kickstarter-video-container"}, [
                m("iframe", {src: "https://www.kickstarter.com/projects/yesandgames/adventure-guild/widget/video.html", frameborder: "0", scrolling: "no", allowfullscreen: true})
              ])
            ])
          ])
        ])
      ]),

      m("hr", {class: "hr-gradient"}),

      // Mobility features
      m("div", [
        m("div", {class: "about-features-mobile hero"}, [
          m("div", [
            m("div", {class: "vertical-center col span_4_of_12"}, [
              m("div", [
                m("h3", "Adventure Anytime, Anywhere, with Anyone"),
                m("p", "Adventure Guild is built for mobility from the ground up. "
                + "Adventure with your friends from your computer, phone, or tablet from iOS, Android, Windows, or your favorite browser. "
                + "Our unbeatable cross-platform systems will make sure you never miss a beat."),
                m("div", {class: "platform-images"}, [
                  m("img", {src: "imgs/logos/ios.png", alt: "iOS"}),
                  m("img", {src: "imgs/logos/android.png", alt: "Android"}),
                  m("img", {src: "imgs/logos/windows.png", alt: "Windows 10 Mobile"})
                ])
              ])
            ]),
            m("div", {class: "col span_8_of_12"}, [

            ])
          ])
        ])
      ]),

      m("hr", {class: "hr-gradient"}),

      //
    ]);
  }
}

// Create the about component.
var about = {

    // Create the view-model.
    vm: {
      init: function() {
        console.log ("about vm init");
      }
    },

    // Create the controller.
    controller: function() {
      about.vm.init ();
    },

    // Create the view.
    view: function() {
        return [
          m.component(nav, {page: "about"}),
          m.component(features),
          m.component(footer)
        ]
    }
}

// Initialize the home component chain.
// m.mount (document.body, about);

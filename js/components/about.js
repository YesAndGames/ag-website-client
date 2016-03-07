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

      // RPG features
      m("div", [
        m("div", {class: "about-features-rpg hero"}, [
          m("div", [
            m("div", {class: "vertical-center col span_4_of_12"}, [
              m("div", [
                m("h3", "A Full-Fledged Multiplayer Tactics RPG"),
                m("p", "Adventure Guild is one of the most full-featured multiplayer RPGs ever developed for mobile platforms. " +
                  "Gone are the expectations that mobile games lack depth and complexity. " +
                  "Adventure Guild strikes the perfect balance between the substantial gameplay of a real RPG and the simplicity of design mobile games demand."),
              ])
            ]),
            m("div", {class: "vertical-center col span_8_of_12"}, [
              m(".embed-container", {class: "youtube-video-container"},
                m("iframe", {src:"https://www.youtube.com/embed/ySlAPkteu5k", frameborder: "0", allowfullscreen: "yes"})
              ),
            ])
          ])
        ])
      ]),

      m("hr", {class: "hr-gradient"}),

      // Character customization features
      m("div", [
        m("div", {class: "about-features-customization hero"}, [
          m("div", [
            m("div", {class: "vertical-center col span_4_of_12"}, [
              m("div", [
                m("h3", "Completely Customize Your Adventurers"),
                m("p", "Create, customize, and grow a totally unique party of Adventurers. " +
                  "Tweak everything visual from their facial features to their hair color to their wearable cosmetics without affecting equipment stats. " +
                  "Personalize their strategic playstyle by equipping new weapons and armor and choosing the loaded out Skills they take into battle."),
              ])
            ]),
            m("div", {class: "vertical-center col span_8_of_12"}, m("div", [
                m("img", {src: "imgs/screenshots/character.png", alt: "Adventurer"})
            ]))
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

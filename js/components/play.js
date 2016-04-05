// Create the alpha signup component.
var alphaSignup = {
  view: function() {
    return m("section", {class: "alpha-signup hero"}, [
      m("div", [
        m("div", {class: "col span_4_of_12 vertical-center"}, [
          m("div", [
            m("h2", "Join the"),
            m("h1", "Early-Access Alpha"),
            m("p", "Play Adventure Guild NOW by registering for our closed Early-Access Alpha if you haven't already as a Platinum Adventurer or above on Kickstarter. "
              + "Get the earliest possible public access, and play on the account you will use when the game releases. "
              + "Your progress may be reset between this event and release, but your user account and purchases will carry over at launch."),
            m("div", {class: "platform-images"}, [
              m("img", {src: "imgs/logos/ios.png", alt: "iOS"}),
              m("img", {src: "imgs/logos/android.png", alt: "Android"}),
              //m("img", {src: "imgs/logos/windows.png", alt: "Windows 10 Mobile"})
              //m("img", {src: "imgs/logos/chrome.png", alt: "Google Chrome"})
            ])
          ])
        ]),
        m("div", {class: "col span_8_of_12 vertical-center"}, [
          m(".purchase-options", [
            m("ul", [
              m("hr", {class: "hr-gradient"}),
              m("li", [
                m("div", [
                  m("h3", "Early-Access Pass"),
                  m("h4", "$10.00")
                ]),
                m("button", {type: "button", onclick:function(e){
                  openModal(e, genericPurchaseModal,
                    {
                      imgPath:"imgs/logos/adventure-guild.png",
                      headerText:"Early Access Key",
                      contentText:"Join the Guild now by purchasing an Early Access Key. This will enable you to log in to your account in the mobile and app and play today."
                    }
                  );}},
                     "Buy")
              ]),
              m("hr", {class: "hr-gradient"}),
            ]),
          ]),
        ]),
      ]),
      m("hr", {class: "hr-gradient"})
    ]);
  }
}

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
              + "Open Beta will follow an Early-Access Alpha event, but will be free to access on all available platforms. "
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
          m.component(nav, {page: "play"}),
          m.component(alphaSignup),
          //m.component(betaSignup),
          m.component(footer)
        ]
    }
}

// Initialize the home component chain.
// m.mount (document.body, play);

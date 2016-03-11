var footer = {

    // Create the view-model.
    vm: {
      init: function() {
        console.log ("footer vm init");
      }
    },

    // Create the controller.
    controller: function() {
      footer.vm.init ();
    },

    // Create the view.
    view: function() {
      return m("footer", [
        m("hr", {class: "hr-gradient"}),
        m("div", [
          m(".contact", {class: "col span_5_of_12"}, [
            m("h2", "Follow Us!"),
            m("div", [
              m("ul", [
                m("li", [
                  m("a", {target: "_blank", href: "http://twitter.com/AdvGuildGame"}, [
                    m("span", {class: "fa fa-twitter fa-fw"}),
                    "@AdvGuildGame"
                  ])
                ]),
                m("li", [
                  m("a", {target: "_blank", href: "http://facebook.com/AdventureGuildGame"}, [
                    m("span", {class: "fa fa-facebook fa-fw"}),
                    "/AdventureGuildGame"
                  ])
                ]),
                m("li", [
                  m("a", {target: "_blank", href: "http://twitch.tv/YesAndGames"}, [
                    m("span", {class: "fa fa-twitch fa-fw"}),
                    "/YesAndGames"
                  ])
                ]),
                m("li", [
                  m("a", {target: "_blank", href: "http://kickstarter.com/projects/yesandgames/adventure-guild"}, [
                    m("span", {class: "fa fa-external-link fa-fw"}),
                    "Kickstarter"
                  ])
                ]),
              ])
            ])
          ]),
          m("div", {class: "col span_4_of_12"}, [
            m("a", {target: "_blank", href: "http://yesandgames.com/"}, [
              m("img", {class: "footer-logo-yag", src: "imgs/logos/yesandgames.png", alt: "Yes And Games"})
            ])
          ]),
          m("div", {class: "col span_3_of_12"}, [
            m("a", {target: "_blank", href: "http://magic.rit.edu/studios/"}, [
              m("img", {class: "footer-logo-magic", src: "imgs/logos/magic.png", alt: "MAGIC Spell Studios"})
            ])
          ])
        ])
      ]);
    }
}

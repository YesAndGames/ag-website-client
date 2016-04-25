// Create the call to action banner component.
var callToAction = {
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
              m("a", {onclick: function (e) {m.route("/about");}}, [
                m("button", {type: "button"}, "Learn More")
              ])
            ]),
            m("div", [
              /*
              m("h2", "Stay Connected!"),
              m("a", {target: "_blank", href: "http://twitter.com/AdvGuildGame"}, m("span", {class: "fa fa-twitter fa-fw"})),
              m("a", {target: "_blank", href: "http://facebook.com/AdventureGuildGame"}, m("span", {class: "fa fa-facebook fa-fw"})),
              */
              m("a", {onclick: function (e) {m.route("/play");}}, [
                m("button", {type: "button"}, "Get Early Access")
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
  // Create the view.
  view: function() {
    return m("section", {class: "media-reel hero"}, [
      m("div", [
        m("div", {config: function(el, isInit) {$(el).slick({ dots: true, adaptiveHeight: true});}}, [
          m("div", [
            m("img", {src: "imgs/screenshots/combat.png", alt: "Combat"})
          ]),
          m("div", [
            m("img", {src: "imgs/screenshots/character.png", alt: "Character Customization"})
          ]),
          m("div", [
            m("img", {src: "imgs/screenshots/items.png", alt: "Procedural Items"})
          ])
        ])
      ])
    ]);
  }
}

// Create the home component.
var home = {

  // Create the home view.
  view: function() {
    return [
      m.component(nav, {page: "home"}),
      m.component(callToAction),
      m.component(mediaReel),
      m.component(footer)
    ]
  }
}

m.route.mode = "pathname";
m.route(document.body, "/", {
    "/": home,
    "/play": play,
    "/about": about,
    "/donations": shop,
    "/press": press,
    "/adventurers": characters,
    "/account": account,
    "/payment": payment,
    "/privacy": privacy,
  }
);

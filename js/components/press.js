var presskit = {
  view: function() {
    return m("section", {class: "presskit"}, m("div", [
      m(".press-header"),
      m("hr", {class: "hr-gradient"}),
      m(".presskit-container", [
        m("div", {class: "col span_4_of_12"}, m("div", [
          m.component(pressFactsheet)
        ])),
        m("div", {class: "col span_8_of_12"}, m("div", [
          m.component(pressDescription)
        ]))
      ])
    ]));
  }
}

var pressFactsheet = {
  view: function() {
    return m(".press-factsheet", [
      m("h1", "Facts"),

      m("h2", "Founder"),
      m("p", "Yes And Games"),
      m("p", "based in Rochester, NY"),

      m("h2", "Website"),
      m("a", {target: "_blank", href: "http://yesandgames.com"}, "yesandgames.com"),

      m("h2", "Press/Business Contact"),
      m("p", "yesandgames@gmail.com"),

      m("h2", "Social"),
      m("a", {target: "_blank", href: "http://twitter.com/AdvGuildGame"}, "Twitter"),
      m("a", {target: "_blank", href: "http://facebook.com/AdventureGuildGame"}, "Facebook"),
      m("a", {target: "_blank", href: "http://twitch.tv/YesAndGames"}, "Twitch.tv"),
      m("a", {target: "_blank", href: "https://www.kickstarter.com/projects/yesandgames/adventure-guild"}, "Kickstarter"),
    ]);
  }
}

var pressDescription = {
  view: function() {
    return m(".press-description", [
      m("h1", "Adventure Guild")
    ]);
  }
}

var press = {
  view: function() {
    return [
      m.component(nav, {page: "press"}),
      m.component(presskit),
      m.component(footer)
    ]
  }
}

var playerWarning = {
  view: function() {
    return m("div", m(".playerWarning", m("div", [
        m("h2", "Create your Adventurer!"),
        m(".playerWarningContent", [
          m("p", "Try out our Adventurer creator through the experimental Unity WebGL player. "
            + "Mobile browsers are unsupported and there may be issues with small screen sizes. "
            + "If you find a bug, shoot us an email! We want to make the player as accessible as possible."),
          m("br"),
          m("strong", "Throughout this week, take a screenshot of your Adventurer and tweet it to @AdvGuildGame with the hashtag #AdventureGuildGDC for a chance to win a t-shirt!")
        ])
      ])),
      m("hr", {class:"hr-gradient"})
    );
  }
}

var characterCreatorPlayer = {
  view: function() {
    return m(".playerContainer", m(".template", m("div", {class: "embed-container clear"}, [
      m("canvas", {class: "emscripten", id: "canvas",
        oncontextmenu: "event.preventDefault()"}),
      m("script", {src: "js/plugins/UnityLoader.js"})
    ])));
  }
}

var characters = {
  view: function() {
    return [
      m.component(nav, {page: "adventurers"}),
      m.component(playerWarning),
      m.component(characterCreatorPlayer),
      m.component(footer)
    ];
  }
}

var characterCreatorPlayer = {
  view: function() {
    return m(".hero", m(".template", m("div", {class: "template-wrap clear"}, [
      m("canvas", {class: "emscripten", id: "canvas",
        oncontextmenu: "event.preventDefault()"}),
      m("script", {src: "js/plugins/UnityLoader.js"})
    ])));
  }
}

var characters = {
  view: function() {
    return [
      m.component(nav, {page: "characters"}),
      m.component(characterCreatorPlayer),
      m.component(footer)
    ];
  }
}

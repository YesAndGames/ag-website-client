var characterCreatorPlayer = {
  view: function() {
    return m(".template", m("div", {class: "template-wrap clear"}, [
      m("canvas", {class: "emscripten", id: "canvas",
        oncontextmenu: "event.preventDefault()", height="600px", width="960px"}),
      m("script", {src: "js/UnityLoader.js"})
    ]));
  }
}

var characters = {
  view: function() {
    return [
      m.component(characterCreatorPlayer)
    ];
  }
}

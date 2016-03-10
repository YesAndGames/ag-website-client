var presskit = {
  view: function() {
    return m("section", {class: "presskit"}, m("div", [
      m(".press-header"),
      m("hr", {class: "hr-gradient"}),
      m("div", {class: "col span_4_of_12"}, m("div", [

      ])),
      m("div", {class: "col span_8_of_12"}, m("div", [

      ]))
    ]))
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

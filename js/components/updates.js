$.get("content/patch-notes/500.md", function(data) {
  patchNotes.test(data);
  console.log(data);
  m.redraw();
}, 'text');

var updates = {
  view: function() {
    return [
      m.component(nav, {page: "account"}),
      m.component(patchNotes),
      m.component(footer),
    ]
  }
}

var patchNotes = {
  test: m.prop(""),

  view: function() {
    return m(".patch-notes hero position-under-nav", m("div", [
      m("div", m.trust(marked(
        patchNotes.test()
        ), {
          gfm: true,
          smartypants: true,
          breaks: true,
          smartLists: true,
        })),
    ]));
  }
}

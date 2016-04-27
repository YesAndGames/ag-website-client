var patchNoteFiles = [
  "content/patch-notes/500.md",
];

patchNoteFiles.map(function(filepath) {
  $.get(filepath, function(data) {
    patchNotes.notes.push(data);
    m.redraw();
  }, 'text');
});

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
  notes: new Array(),

  view: function() {
    return m(".patch-notes hero position-under-nav", m("div", [
      patchNotes.notes.map (function(data) {
        return m("div", m.trust(marked(
          data
          ), {
            gfm: true,
            smartypants: true,
            breaks: true,
            smartLists: true,
          }
        ));
      }),
    ]));
  }
}

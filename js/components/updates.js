var patchNoteFiles = [
  "content/patch-notes/400.md",
  "content/patch-notes/401.md",
  "content/patch-notes/500.md",
];
patchNoteFiles.reverse();

patchNoteFiles.map(function(filepath, index) {
  $.get(filepath, function(data) {
    patchNotes.notes[index] = data;
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
      m("h2", "Adventure Guild Updates"),
      patchNotes.notes.map (function(data) {
        return [
          m("hr", {class: "hr-gradient"}),
          m(".patch",
          m.trust(marked(
          data
          ), {
            gfm: true,
            smartypants: true,
            breaks: true,
            smartLists: true,
          }
        ))];
      }),
    ]));
  }
}

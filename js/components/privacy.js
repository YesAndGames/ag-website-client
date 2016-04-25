$.get("content/tos.md", function(data) {
  tosPrivacyContent.tos(data);
  m.redraw();
}, 'text');

var privacy = {
  view: function() {
    return [
      m.component(nav, {page: "privacy"}),
      m.component(tosPrivacyContent),
      m.component(footer)
    ];
  }
}

var tosPrivacyContent = {
  tos: m.prop(""),
  view: function() {
    return m(".privacy-policy hero position-under-nav", m("div", [
      m("h2", "Terms of Service and Privacy Policy"),
      m("hr", {class: "hr-gradient"}),
      m("div", m.trust(marked(
        tosPrivacyContent.tos()
        ), {
          gfm: true,
          smartypants: true,
          breaks: true,
        })),
    ]));
  }
}

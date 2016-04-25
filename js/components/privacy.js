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
  view: function() {
    return m(".privacy-policy hero position-under-nav", m("div", [
      m("h2", "Terms of Service and Privacy Policy"),
      m("hr", {class: "hr-gradient"}),
      m("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit sapien sit amet elementum porta. Donec quis mauris consectetur, vulputate magna vel, condimentum est. Ut non vestibulum felis. Vestibulum dapibus enim eget augue sodales molestie. Aliquam interdum elementum sapien, quis venenatis sapien iaculis nec. Donec eget pharetra urna. Nunc maximus velit id leo suscipit, nec tincidunt ipsum imperdiet. Curabitur sed lectus nisi. Etiam tempus ligula orci, fringilla consectetur sapien sollicitudin non. Integer sagittis tempus nulla, at egestas erat molestie quis. In et metus purus. Nullam eu efficitur ante. Sed efficitur felis finibus mollis euismod. Quisque nec nisl non leo pellentesque efficitur vitae eu est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla porta, enim consectetur pellentesque posuere, purus urna aliquet lectus, bibendum sagittis neque erat id ipsum."),
    ]));
  }
}

// Create the admin panel component
var panel = {
  // Create the view.
  view: function() {

    // Kickstarter video
    return m("section", {class: "admin-panel"}, [

      // Overview
      m("div", [
        m("h2", "Adventure Guild Admin Panel")
      ])
    ]);
  }
}

// Create the admin component.
var admin = {
    // Create the view.
    view: function() {
        return [
          m.component(nav, {page: "admin"}),
          m.component(panel),
          m.component(footer)
        ]
    }
}

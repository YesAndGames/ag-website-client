// Create the nav component.
var nav = {};

// Create the nav view-model.
nav.vm = {
  init: function() {
    console.log ("nav vm init");
  }
}

// Create the nav controller.
nav.controller = function() {
  nav.vm.init ();
}

// Create the nav view.
nav.view = function() {
  return m("div", "Hello, world!");
}

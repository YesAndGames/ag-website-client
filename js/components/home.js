// Create the home component.
var home = {};

// Create the home view-model.
home.vm = {
  init: function() {
    console.log ("home vm init");
  }
}

// Create the home controller.
home.controller = function() {
  home.vm.init ();
}

// Create the home view.
home.view = function() {
    return m.component(nav);
}

// Initialize the home component chain.
m.mount(document.body, {controller: home.controller, view: home.view});

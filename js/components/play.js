// Create the beta signup component.
var betaSignup = {

    // Create the view-model.
    vm: {
      init: function() {
        console.log ("play beta signup vm init");
      }
    },

    // Create the controller.
    controller: function() {
      betaSignup.vm.init ();
    },

    // Create the view.
    view: function() {
      return m("section", {class: "beta-signup hero"});
    }
}

// Create the play component.
var play = {

    // Create the view-model.
    vm: {
      init: function() {
        console.log ("play vm init");
      }
    },

    // Create the controller.
    controller: function() {
      play.vm.init ();
    },

    // Create the view.
    view: function() {
        return [
          m.component(nav),
          m.component(betaSignup),
          m.component(footer)
        ]
    }
}

// Initialize the home component chain.
m.mount (document.body, play);

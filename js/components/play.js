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
          m.component(footer)
        ]
    }
}

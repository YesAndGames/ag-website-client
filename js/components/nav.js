function login() {
  var username = document.getElementById("loginForm").getElementsByTagName("input")[0].value;
  var password = document.getElementById("loginForm").getElementsByTagName("input")[1].value;
  if (username === 'undefined' || password === 'undefined' || username == '' || password == '') {
    document.getElementById("loginForm").getElementsByTagName("p")[0].style.display = "block";
  } else {
    authLogin(username, password, function (loginResponse) {
      switch (loginResponse) {
        case (RESPONSE_OK):
          closeModals ();
          var email = JSON.parse(dataCacheRetrieve(dataCacheAuthVar)).email;
          if (email == null || email == "") {
            openModal(null, missingEmailModal);
          }
          m.route("/home");
          break;
        case (RESPONSE_INVALID_LOGIN):
          document.getElementById("loginForm").getElementsByTagName("p")[0].style.display = "block";
          break;
        case (RESPONSE_LOGGED_IN):
          alert("Already logged in");
          break;
        default:
          alert("Unknown response code: " + loginResponse);
          break;
      }
    });
  }
}

function logout() {
  dataCacheRemove(dataCacheAuthVar);
  m.route("/home");
}

// Create the login modal component.
var loginModal = {
  view: function() {
    return m(".modal", {onclick: function (e) { closeModals (e); }},
      m(".modalContent", {onclick: function (e) { e.stopPropagation (); }}, [
        m("h2", "Log in to Adventure Guild"),
        m("p", "Log in using the username you registered online or your in-game username. Usernames are case-insensitive."),
        m("div", m("form", {id: "loginForm"}, [
          m("p", {class: "color-error", style: "display: none;"}, "Invalid username or password! Please try again."),
          m("input", {type: "text", name: "username", placeholder: "Username"}),
          m("input", {type: "password", name: "password", placeholder: "Password"}),
          m("button", {type: "button", onclick: function (e) { login(); }}, "Login"),
          m("a", {href: "#"}, "I forgot my password!")
        ]))
      ])
    );
  }
}

// Create the registration modal component.
var registrationModal = {
  view: function() {
    return m(".modal", {onclick: function (e) { closeModals (e); }},
      m(".modalContent", {onclick: function (e) { e.stopPropagation (); }}, [
        m("h2", "Join the Adventure Guild"),
        m("p", "Register a username for a new Adventure Guild account. Use this username to log into the game and the website. Usernames are case-insensitive."),
        m("div", m("form", {id: "registrationForm"}, [
          m("input", {type: "text", name: "username", placeholder: "Username"}),
          m("input", {type: "password", name: "password", placeholder: "Password"}),
          m("input", {type: "email", name: "email", placeholder: "Email"}),
          m("button", {type: "button"}, "Join the Guild"),
        ]))
      ])
    );
  }
}

// Create the missing email modal component.
var missingEmailModal = {
  view: function() {
    return m(".modal", {onclick: function(e) {closeModals(e);}},
      m(".modalContent", {onclick: function(e){e.stopPropagation();}}, [
        m("h2", "We're missing your email"),
        m("p", "You don't need to register your email to log in to Adventure Guild, but in order to use certain website functions like making purchases, recovering your password, or changing account details, we need to confirm your email address."),
        m("div", m("form", {id: "missingEmailForm"}, [
          m("input", {type: "email", name: "email", placeholder: "Email"}),
          m("button", {type: "button"}, "Confirm"),
          m("a", {onclick: function(e){closeModals(e);}}, "Skip, I'll do this later"),
        ]))
      ])
    );
  }
}

// Close currently opened modals.
var closeModals = function (e) {
  m.mount(document.getElementById ("modalContainer"), null);
}

// Open the specified dialogue component.
var openModal = function (e, component) {
  var modalContainer = document.getElementById ("modalContainer");
  if (!modalContainer) {
    modalContainer = document.createElement("div");
    modalContainer.id = "modalContainer";
    document.body.appendChild (modalContainer);
  }
  m.mount (modalContainer, m.component(component));
}

// No user login hang component.
var loginHang = {
  view: function () {
    return m("div", {class: "nav-login-module vertical-center"}, [
      m("div", [
        m("button", {type: "button", onclick: function(e){openModal(e, loginModal)}}, "Log In"),
        m("button", {type: "button", onclick: function(e){openModal(e, registrationModal)}}, "Register")
      ])
    ])
  }
}

// Logged in user hang component.
var accountInfoHang = {
  view: function () {
    return m("div", {class: "nav-account-module vertical-center"}, [
      m (".account-info-hang-username", [
        m("p", "Welcome,"),
        m("h3", JSON.parse(dataCacheRetrieve(dataCacheAuthVar)).username),
      ]),
      m (".account-info-hang-links", [
        m("a", {onclick: function(e){m.route("/account");}}, "View Account"),
        m("a", {onclick: function(e){logout();}}, "Log Out"),
      ])
    ])
  }
}

// Create the nav component.
var nav = {

  // Currently active page.
  activePage: m.prop(""),

  // Create the view-model.
  vm: {
    init: function() {
      console.log ("nav vm init");
    }
  },

  // Create the controller.
  controller: function(args) {
    nav.vm.init ();
    nav.activePage(args.page);
  },

  // Create the view.
  view: function() {
    return m("header", [
      m("div", {class: "nav-container"}, [
        m("div", {class: "title-header"}, [
          m("h1", [
            m("span", {class: "color-adventure-blue"}, "Adventure "),
            m("span", {class: "color-guild-gold"}, "Guild")
          ])
        ]),
        m("div", {class: "nav-header"}, [
          m("div", {class: "nav-collapse"}, [
            m("ul", [
              m("li", {class: nav.activePage() == "home" ? "active" : ""}, [
                m("a", {onclick: function (e) {m.route("/");}}, "Home")
              ]),
              m("li", {class: nav.activePage() == "about" ? "active" : ""}, [
                m("a", {onclick: function (e) {m.route("/about");}},  "About")
              ]),
              m("li", {class: nav.activePage() == "play" ? "active" : ""}, [
                m("a", {onclick: function (e) {m.route("/play");}}, "Play")
              ]),

              /*
              m("li", [
                m("a", {},  "Forums")
              ]),
              */

              m("li", {class: nav.activePage() == "shop" ? "active" : ""}, [
                m("a", {onclick: function (e) {m.route("/donations");}}, "Donations")
              ]),

              /*
              m("li", {class: nav.activePage() == "press" ? "active" : ""}, [
                  m("a", {onclick: function (e) {m.route("/press");}},  "Press")
              ]),
              m("li", {class: nav.activePage() == "adventurers" ? "active" : ""}, [
                  m("a", {onclick: function (e) {m.route("/adventurers");}},  "Adventurers")
              ])

              */
            ])
          ])
        ]),
        m("hr", {class: "hr-gradient"}),
      ]),
      m("div", {class: "nav-login-hang"}, [
        m.component (dataCacheRetrieve(dataCacheAuthVar) == null ? loginHang : accountInfoHang)
      ])
    ]);
  }
}

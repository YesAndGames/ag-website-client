function login() {
  var username = document.getElementById("loginForm").getElementsByTagName("input")[0].value;
  var password = document.getElementById("loginForm").getElementsByTagName("input")[1].value;
  document.getElementById("loginForm").getElementsByTagName("p")[0].style.display = "none";
  if (username === 'undefined' || password === 'undefined' || username == '' || password == '') {
    document.getElementById("loginForm").getElementsByTagName("p")[0].style.display = "block";
  } else {
    authLogin(username, password, function (loginResponse) {
      switch (loginResponse) {
        case (RESPONSE_OK):
          closeModals ();
          var email = dataCacheRetrieve(dataCacheAuthVar).email;
          if (email == null || email == "") {
            openModal(null, missingEmailModal);
          }
          else {
            openModal(null, genericMessageModal,
              {
                messageTitle:"Login Success!",
                message:"Welcome to the Adventure Guild web service, " + username + "!",
              }
            );
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

  // Suppress submission page refresh.
  return false;
}

function logout() {
  dataCacheRemove(dataCacheAuthVar);
  m.route("/home");
}

// Validates registration credentials and requests a new account from the server.
function register() {
  var username = document.getElementById("registrationForm").getElementsByTagName("input")[0].value;
  var password = document.getElementById("registrationForm").getElementsByTagName("input")[1].value;
  var confirmPassword = document.getElementById("registrationForm").getElementsByTagName("input")[2].value;
  var email = document.getElementById("registrationForm").getElementsByTagName("input")[3].value;
  document.getElementById("registrationForm").getElementsByTagName("p")[0].style.display = "none";

  // Client-side validation.
  if (username === 'undefined' || username == '') {
    alert ("Please enter a username.");
  }
  else if (password === 'undefined' || password == '') {
    alert ("Please enter a password.");
  }
  else if (confirmPassword != password) {
    alert ("Passwords do not match.");
  }
  else if (!validateEmail(email)) {
    alert ("Invalid email address.");
  }

  // Valid, send to server and await response.
  else {
    authCreateAccount(username, password, email, function (loginResponse) {
      switch (loginResponse) {
        case (RESPONSE_ACCOUNT_CREATED):
          closeModals ();
          openModal(null, genericMessageModal,
            {
              messageTitle:"Registration Success!",
              message:"Welcome to Adventure Guild, " + username + "! Check your email to confirm your account.",
            });
          m.route("/home");
          break;
        case (RESPONSE_USERNAME_TAKEN):
          document.getElementById("registrationForm").getElementsByTagName("p")[0].style.display = "block";
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

  // Suppress submission page refresh;
  return false;
}

function validateEmail(email) {
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
}

// Validates and requests that the server set a user's missing email address.
function setMissingEmail() {
  var email = document.getElementById("missingEmailForm").getElementsByTagName("input")[0].value;
  var password = document.getElementById("missingEmailForm").getElementsByTagName("input")[1].value;

  // Client-side validation.
  if (email === 'undefined' || email == '') {
    alert ("Please enter an email address.");
  }
  else if (password === 'underfined' || password == '') {
    alert ("Please enter your password.");
  }
  else if (!validateEmail(email)) {
    alert ("Invalid email address.");
  }
  else {
    var userID = dataCacheRetrieve(dataCacheAuthVar).id;
    userSetEmail(userID, email, password, function (response) {
      closeModals();
      openModal(null, genericMessageModal,
      {
        messageTitle:"Confirmation Sent!",
        message:"Check your email for a confirmation link."
      });
    });
  }

  // Suppress submission page refresh.
  return false;
}

// Create the login modal component.
var loginModal = {
  view: function() {
    return m(".modal", {onclick: function (e) { closeModals (e); }},
      m(".modalContent", {onclick: function (e) { e.stopPropagation (); }}, [
        m("h2", "Log in to Adventure Guild"),
        m("p", "Log in using the username you registered online or your in-game username. Usernames are case-insensitive."),
        m("div", m("form", {id: "loginForm"}, [
          m("input", {type: "text", name: "username", placeholder: "Username"}),
          m("input", {type: "password", name: "password", placeholder: "Password"}),
          m("button", {type: "submit", onclick: function (e) { return login(); }}, "Login"),
          m("p", {class: "color-error", style: "display: none;"}, "Invalid username or password! Please try again."),
          m("a", {onclick: function(e){closeModals(); openModal(e, forgotPasswordModal);}}, "I forgot my password!"),
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
          m("input", {type: "password", name: "confirmPassword", placeholder: "Confirm Password"}),
          m("input", {type: "email", name: "email", placeholder: "Email"}),
          m("p", {class: "color-error", style: "display: none;"}, "That username or email address is already in use. Please select a new one."),
          m("button", {type: "submit", onclick: function(e) { return register(); }}, "Join the Guild"),
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
          m("input", {type: "password", name: "password", placeholder: "Password"}),
          m("button", {type: "submit", onclick:function(e){return setMissingEmail();}}, "Confirm"),
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
var openModal = function (e, component, args) {
  var modalContainer = document.getElementById ("modalContainer");
  if (!modalContainer) {
    modalContainer = document.createElement("div");
    modalContainer.id = "modalContainer";
    document.body.appendChild (modalContainer);
  }
  m.mount (modalContainer, m.component(component, args));
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
        m("h4", dataCacheRetrieve(dataCacheAuthVar).username),
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

  // Whether or not the nav is currently open.
  open: m.prop(false),

  // Toggles whether or not the nav is open.
  toggleOpen: function() {
    nav.open(!nav.open());
  },

  // Create the controller.
  controller: function(args) {
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
          ]),
          m("a", {onclick: function(e) {nav.toggleOpen();}}, m("span", {class: nav.open() ? "fa fa-close fa-2x" : "fa fa-bars fa-2x"})),
        ]),
        m("div", {class: "nav-header"}, [
          m("div", {class: nav.open() ? "nav-collapse" : "nav-collapse nav-closed"}, [
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
      m("div", {class: nav.open() ? "nav-login-hang" : "nav-login-hang nav-closed"}, [
        m.component (dataCacheRetrieve(dataCacheAuthVar) == null ? loginHang : accountInfoHang)
      ])
    ]);
  }
}

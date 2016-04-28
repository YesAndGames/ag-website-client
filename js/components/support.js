var support = {
  view: function() {
    return [
      m.component(nav, {page: "support"}),
      m.component(supportContactInfo),
      m.component(footer),
    ]
  }
}

var supportContactInfo = {
  view: function() {
    return m(".support hero position-under-nav", m("div", [
      m("h2", "Contact Support"),
      m("hr", {class:"hr-gradient"}),
      m("div", [
        m("p", "Our site is still in development, so we don't have resources on our site for sharing bugs and feedback. " +
        "Reach out to us by posting on our subreddit, where our developers and users are regularly active and can respond and address your question or feedback as soon as possible!"),
      ]),
      m("button", "/r/adventureguild"),
      m("div", [
        m("p",
          m("strong", "If you have a query or issue related to your account, payments, microtransactions, critical technical difficulties, or otherwise need to contact us privately, please email us at ",
            m("a", {href:"mailto:yesandgames@gmail.com"}, "yesandgames@gmail.com")
          )
        ),
      ]),
    ]));
  }
}

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
      m("div", m.trust(marked(
        "1. __Terms of Use:__ Welcome to Yes And Games ('__Yes And Games__') 'Adventure Guild' videogame ('__AG__'). These terms of use and privacy policy ('__Terms of Use__') apply to your use of the AG website ('__Website__') at www.adventureguildgame.com (or such other URL as the Website may subsequently be hosted at), the software, documentation and any associated materials comprising or made available to you in relation to AG (the '__Materials__') as well as any services offered or provided by Yes And Games or its nominated third parties in relation to AG (the '__Services__'). By making use of any of the Website, Materials and Services, you are deemed to have read and agree to be bound by these Terms of Use." +
        "\n2. __Amendments:__ Yes And Games reserves the right to amend these Terms of Use from time to time upon placing any such amendments on the Website or by providing you direct notice of any such changes. Your continued use of any of the Website, Materials and Services thereafter will be deemed to be acceptance by you of any such changes to these Terms of Use."
        ), {
          gfm: true,
          smartypants: true,
          breaks: true,
        })),
    ]));
  }
}

var presskit = {
  view: function() {
    return m("section", {class: "presskit"}, m("div", [
      m(".press-header"),
      m("hr", {class: "hr-gradient"}),
      m(".presskit-container", [
        m("div", {class: "col span_4_of_12"}, m("div", [
          m.component(pressFactsheet)
        ])),
        m("div", {class: "col span_8_of_12"}, m("div", [
          m.component(pressDescription)
        ]))
      ])
    ]));
  }
}

var pressFactsheet = {
  view: function() {
    return m(".press-factsheet", [
      m("h1", "Facts"),

      m("h2", "Founder"),
      m("p", "Yes And Games"),
      m("p", "based in Rochester, NY"),

      m("h2", "Website"),
      m("a", {target: "_blank", href: "http://yesandgames.com"}, "yesandgames.com"),

      m("h2", "Press/Business Contact"),
      m("p", "yesandgames@gmail.com"),

      m("h2", "Social"),
      m("a", {target: "_blank", href: "http://twitter.com/AdvGuildGame"}, "Twitter"),
      m("a", {target: "_blank", href: "http://facebook.com/AdventureGuildGame"}, "Facebook"),
      m("a", {target: "_blank", href: "http://twitch.tv/YesAndGames"}, "Twitch.tv"),
      m("a", {target: "_blank", href: "https://www.kickstarter.com/projects/yesandgames/adventure-guild"}, "Kickstarter"),

      m("h2", "Genre"),
      m("p", "RPG, Mobile, MMORPG, Social, Tactics, Strategy"),

      m("h2", "Platform"),
      m("p", "iOS, Android, Windows 10 Mobile, Browsers"),

      m("h2", "Media"),
      m("a", {href: "#"}, "Download ag-media.zip"),
    ]);
  }
}

var pressDescription = {
  view: function() {
    return m(".press-description", [
      m("h1", "Adventure Guild"),

      m("p", "Adventure Guild is a full-fledged multiplayer RPG built for mobile devices and cross-platform play. "
      + "Create a party of Adventurers and send them off on Adventures with your friends on any platform and play at your own pace on the go. "
      + "Explore the deepest, darkest dungeons throughout the world, strategize in tactical multiplayer combat, and bring home the loot. "
      + "Featuring incredibly deep character customization, hand-crafted worlds to explore, procedurally generated items, living social features, "
      + "and seamless cross-platform, on-the-go co-op play, Adventure Guild is the most substantial multiplayer RPG in the mobile space."),

      m("h1", "Game Features"),

      m("h2", "Play Anytime, Anywhere, With Anyone on Any Platform"),
      m("p", "Our servers are built from the ground up to support mobile cross-platform play. "
      + "Whether you're on iOS, Android, or Windows Phone, or even like to switch up your operating systems, we've got you covered. "
      + "Plus, play all day or just when you feel like it. We never time-gate your progression, and we'll catch you up if you miss moves your friends make."),

      m("h2", "Tactical Turn-Based Combat Encounters"),

      m("h2", "Detailed Character Creation"),
      m("p", "Customize all your Adventurers from their Adventurer Class to their Skill loadouts to their visual aesthetics. "
      + "Play as a Warrior, Rogue, Mage, or Cleric and tweak your playstyle by equipping different gear and Skills before battle. "
      + "Totally personalize the facial features of your Adventurers and alter their appearance by purchasing or unlocking cosmetic skins for their equipment."),

      m("h2", "Procedural Weapons and Equipment"),

      m("h2", "Guilds and Other Social Features"),

      m("h2", "Pay for What You Want, Not to Win"),
    ]);
  }
}

var press = {
  view: function() {
    return [
      m.component(nav, {page: "press"}),
      m.component(presskit),
      m.component(footer)
    ]
  }
}

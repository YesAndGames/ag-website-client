var presskit = {
  view: function() {
    return m("section", {class: "presskit"}, m("div", [
      m(".press-header"),
      m("hr", {class: "hr-gradient"}),
      m(".presskit-container", m("div", [
        m("div", {class: "col span_4_of_12"}, m("div", [
          m.component(pressFactsheet)
        ])),
        m("div", {class: "col span_8_of_12"}, m("div", [
          m.component(pressDescription)
        ]))
      ]))
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
        + "Explore the deepest, darkest dungeons throughout the world, strategize in tactical multiplayer combat, and bring home the loot."),
      m("br"),
      m("p", "Featuring incredibly deep character customization, hand-crafted worlds to explore, procedurally generated items, living social features, "
        + "and seamless cross-platform, on-the-go co-op play, Adventure Guild is the most substantial multiplayer RPG in the mobile space."),

      m("h1", "Game Features"),

      m("h2", "Play Anytime, Anywhere, With Anyone on Any Platform"),
      m("p", "Our servers are built from the ground up to support mobile cross-platform play. "
        + "Whether you're on iOS, Android, or Windows Phone, or even like to switch up your operating systems, we've got you covered. "
        + "Plus, play all day or just when you feel like it. We never time-gate your progression, and we'll catch you up if you miss moves your friends make."),

      m("h2", "Tactical Turn-Based Combat Encounters"),
      m("p", "Explore the world and defeat the evil creatures in your path throughout turn-based tactical combat encounters. "
        + "Strategize with your party to combine powerful Skills and outsmart your foes. "
        + "Gain experience and bring home the loot to empower your Adventurers, then take on more challenges in the next corner of the world."),

      m("h2", "Detailed Character Creation"),
      m("p", "Customize all your Adventurers from their Adventurer Class to their Skill loadouts to their visual aesthetics. "
        + "Play as a Warrior, Rogue, Mage, or Cleric and tweak your playstyle by equipping different gear and Skills before battle. "
        + "Totally personalize the facial features of your Adventurers and alter their appearance by purchasing or unlocking cosmetic skins for their equipment."),

      m("h2", "Procedural Weapons and Equipment"),
      m("p", "Equip different weapons and armor to improve the Strength, Dexterity, Intelligence, and Armor of your Adventurers. "
        + "All the equipment items in the game have procedurally randomized rarity, attribute bonuses, and names, so every item you find will be new and unique."),

      m("h2", "Guilds and Other Social Features"),
      m("p", "Form a party and Adventure with up to three other players at a time. "
        + "Constant board synchronization means real-time (but turn-based) gameplay, and if you ever miss a move because your app is closed, we'll remember it and play them back for you when you return. "
        + "Join a Guild with your friends and customize your Sigil and Guild Hall, then level it up and compete on the leaderboards with other Guilds."),

      m("h2", "Pay for What You Want, Not to Win"),
      m("p", "Adventure Guild obliterates the money-pandering stigma attached to the mobile genre. "
        + "You will never be able to pay-to-win or pay-to-progress, nor will you ever see an add or be asked to spend your money. "
        + "Buy cosmetic or convenience-only microtransactions like funny hats or extra character slots if and only if you want them and/or to support the game."),

      m("h1", "History"),
      m("p", "Adventure Guild began as a student prototyping project in a Game Design and Development studio class at RIT between Wes Rockholz, Ian Hampson and Ryan Rule-Hoffman in December 2014. "
        + "The objective was to replace the time-consuming but socially rewarding PC MMORPG with a more casual but equally substantial game for mobile devices that played at the pace of Words With Friends or Trivia Crack."),
      m("br"),
      m("p", "The prototype demonstrated satisfying promise and was accepted as a part of the Co-Up Program at MAGIC Spell Studios to fund the game's production from prototype to demo throughout the summer of 2015. "
        + "Since then the development team has expanded to include Nick Rabb, Shin Yi Tan, Jackie Wiley, and Isaac Wang, and the project has grown with us."),
      m("br"),
      m("p", "In the winter of 2015 Adventure Guild was crowdfunded via a successful Kickstarter campaign that enabled us to push the project from a demo to an alpha phase, and we continue to work full-time on the project since then. "
        + "Adventure Guild has been featured on campus at RIT and in Rochester at the 2015 Rochester Mini Maker Faire. The game will be showcased on the floor at Game Developer's Conference 2016 in San Francisco, CA and at Imagine RIT in May 2016."),

      m("h2", "Yes And Games"),
      m("p", "Yes And Games was founded in the summer of 2014 by Nick Rabb and Wes Rockholz. "
        + "Our goal is to use improvisational theater techniques to create games at the intersection of minds that have never been imagined before."),

      m("h2", "Team"),
      m("ul", [
        m("li", "Wes Rockholz, High Warlord"),
        m("li", "Nick Rabb, Head Ninja"),
        m("li", "Shin Yi Tan, Art Director & Illustrator"),
        m("li", "Ryan Rule-Hoffman, Server Guy"),
        m("li", "Jackie Wiley, Game Designer"),
        m("li", "Isaac Wang, Audio Director and Sound Designer")
      ]),

      m("h1", "Media"),

      m("a", {href: "#"}, "Download the Adventure Guild media image kit ag-media.zip."),

      m("h2", "Videos"),

      m("h3", "Kickstarter Video"),
      m(".embed-container", m("iframe", {src:"https://www.kickstarter.com/projects/yesandgames/adventure-guild/widget/video.html", frameborder: "0", allowfullscreen: "yes"})),

      m("h3", "Kickstarter Trailer"),
      m(".embed-container", m("iframe", {src:"https://www.youtube.com/embed/ySlAPkteu5k", frameborder: "0", allowfullscreen: "yes"})),

      m("h3", "First 3 Minutes of Gameplay"),
      m(".embed-container", m("iframe", {src:"https://youtube.com/embed/E84j5TQkcoY", frameborder: "0", allowfullscreen: "yes"})),

      m("h3", "Multiplayer Gameplay"),
      m(".embed-container", m("iframe", {src:"https://youtube.com/embed/4f65MKjdW64", frameborder: "0", allowfullscreen: "yes"})),

      m("h2", "Screenshots"),
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

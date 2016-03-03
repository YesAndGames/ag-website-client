// Create the guildium shop component.
var guildiumShop = {
  view: function () {
    return m("section", {class: "guildium-shop hero"});
  }
}

// Create the shop component.
var shop = {
  view: function () {
    return [
      m.component(nav, {page: "shop"}),
      m.component(guildiumShop),
      m.component(footer)
    ]
  }
}

m.mount (document.body, shop);

import { IconSet } from "./models/IconSet";
import { RES } from "./constants/RES";

export const cardSet = {
  age1: [
    {
      name: "Lumber Yard",
      cost: new IconSet(),
      effect: new IconSet().addIcons(1, RES.WOOD)
    },
    {
      name: "Logging Camp",
      cost: new IconSet().addIcons(3, RES.GOLD),
      effect: new IconSet().addIcons(1, RES.WOOD)
    },

    {
      name: "Clay Pool",
      cost: new IconSet(),
      effect: new IconSet().addIcons(1, RES.CLAY)
    },
    {
      name: "Clay Pit",
      cost: new IconSet().addIcons(1, RES.GOLD),
      effect: new IconSet().addIcons(1, RES.CLAY)
    },
    {
      name: "Quarry",
      cost: new IconSet(),
      effect: new IconSet().addIcons(1, RES.STONE)
    },
    {
      name: "Stone Pit",
      cost: new IconSet().addIcons(1, RES.GOLD),
      effect: new IconSet().addIcons(1, RES.STONE)
    },
    {
      name: "Glassworks",
      cost: new IconSet().addIcons(1, RES.GOLD),
      effect: new IconSet().addIcons(1, RES.GLASS)
    },
    {
      name: "Guard Tower",
      cost: new IconSet(),
      effect: new IconSet().addIcons(1, RES.MILITARY)
    },
    {
      name: "Stone Reserve",
      cost: new IconSet().addIcons(3, RES.GOLD),
      effect: new IconSet().addDiscount(RES.STONE)
    },
    {
      name: "Clay Reserve",
      cost: new IconSet().addIcons(3, RES.GOLD),
      effect: new IconSet().addDiscount(RES.CLAY)
    },
    {
      name: "Wood Reserve",
      cost: new IconSet().addIcons(3, RES.GOLD),
      effect: new IconSet().addDiscount(RES.WOOD)
    },
    {
      name: "Stable",
      cost: new IconSet().addIcons(1, RES.WOOD),
      effect: new IconSet().addIcons(1, RES.MILITARY)
    },
    {
      name: "Garrison",
      cost: new IconSet().addIcons(1, RES.CLAY),
      effect: new IconSet().addIcons(1, RES.MILITARY)
    },
    {
      name: "Palisade",
      cost: new IconSet().addIcons(2, RES.GOLD),
      effect: new IconSet().addIcons(1, RES.MILITARY)
    }

    // {
    //   name: "Glass1",
    //   cost: new IconSet().addIcons(1, RES.WOOD),
    //   effect: new IconSet().addIcons(2, RES.GOLD).addIcons(2, RES.WOOD)
    // },
    // {
    //   name: "Glass2",
    //   cost: new IconSet().addIcons(2, RES.STONE),
    //   effect: new IconSet().addIcons(3, RES.GOLD)
    // },
    // {
    //   name: "Glass3",
    //   cost: new IconSet().addIcons(2, RES.WOOD),
    //   effect: new IconSet().addIcons(2, RES.STONE)
    // },
    // {
    //   name: "Lumber Yard3",
    //   cost: new IconSet(),
    //   effect: new IconSet().addIcons(2, RES.WOOD)
    // }
  ]
  // age2: [
  //   {
  //     name: "Lumber Yard",
  //     cost: new IconSet().addGold(),
  //     effect: new IconSet().addWood()
  //   },
  //   {
  //     name: "Clay Pit",
  //     cost: new IconSet().addGold(),
  //     effect: new IconSet().addWood()
  //   },
  //   {
  //     name: "Barracks",
  //     cost: new IconSet().addGold(),
  //     effect: new IconSet().addWood()
  //   }
  // ],

  // age3: [
  //   {
  //     name: "Lumber Yard",
  //     cost: new IconSet().addGold(),
  //     effect: new IconSet().addWood()
  //   },
  //   {
  //     name: "Clay Pit",
  //     cost: new IconSet().addGold(),
  //     effect: new IconSet().addWood()
  //   },
  //   {
  //     name: "Barracks",
  //     cost: new IconSet().addGold(),
  //     effect: new IconSet().addWood()
  //   }
};

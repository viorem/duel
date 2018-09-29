const RES = {
  //enum
  GOLD: 0,
  WOOD: 1,
  MILITARY:2
};
const COLOUR = {BROWN:0}
class IconSet {
  constructor() {
    this.icons = [];
  }
  addGold() {
    this.icons.concat(RES.GOLD);
    return this;
  }
  addWood() {
    this.icons.concat(RES.WOOD);
    return this;
  }
  get() {
    return this.icons;
  }
  getNumWood() {
    return this.icons.reduce((a, o) => (o == RES.WOOD ? a + 1 : a), 0);
  }

}

export default (cardSet = {
  age1: {
    brown: [
      {
        name: "Lumber Yard",
        cost: new IconSet().addGold(),
        gives: new IconSet().addWood()
      },
      {
        name: "Logging Camp",
        cost: ["gold"],
        gives: ["wood"]
      },
      {
        name: "Clay Pool",
        cost: [],
        gives: ["Clay"]
      },
      {
        name: "Clay Pit",
        cost: ["gold"],
        gives: ["Clay"]
      },
      {
        name: "Quarry",
        cost: [],
        gives: ["Stone"]
      },
      {
        name: "Stone Pit",
        cost: ["gold"],
        gives: ["Stone"]
      }
    ],
    red: [
      {
        name: "Stable",
        cost: ["wood"],
        prebuild: [],
        military: 1
      },
      {
        name: "Garrison",
        cost: ["Clay"],
        prebuild: [],
        military: 1
      },
      {
        name: "Palisade",
        cost: ["gold", "gold"],
        prebuild: [],
        military: 1
      }
    ]
  },
  age2: [
    { id: 21, name: "barracks", colour: "red" },
    { id: 22, name: "fair", colour: "yellow" },
    { id: 23, name: "mill", colour: "brown" }
  ],

  age3: [
    { id: 31, name: "castle", colour: "red" },
    { id: 32, name: "fair", colour: "yellow" },
    { id: 33, name: "factory", colour: "brown" }
  ]
});

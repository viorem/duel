export const RES = {
  //enum
  STARTING_GOLD: 7,
  GOLD: 0,
  WOOD: 1,
  CLAY: 2,
  STONE: 3,
  GLASS: 4,
  PAPYRUS: 5,
  MILITARY: 6,
  VICTORY_POINTS: 7,
  SCIENCE_GLOBE: 8,
  SCIENCE_WHEEL: 9,
  SCIENCE_SUNDIAL: 10,
  SCIENCE_MORTAR: 11,
  SCIENCE_TRIANGLE: 12,
  SCIENCE_QUILL: 13,

  strings: [
    "gold",
    "wood",
    "clay",
    "stone",
    "glass",
    "papyrus",
    "military",
    "victory_points",
    "science_globe",
    "science_wheel",
    "science_sundial",
    "science_mortar",
    "science_triangle",
    "science_quill"
  ],

  BASE_RESOURCES : ["wood", "clay", "stone","glass", "papyrus"],

  // emojis: [🥇,🐴,🍊],
  toString: number => {
    return RES.strings[number];
  },

  toID: string => {
    return RES.strings.indexOf(string);
  }
};

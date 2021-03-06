
const singleKeyExcludedLeft = "shift ctrl q a"
const singleKeyExcludedRight = "shift ctrl p ;"
const doubleKeyExcluded = "shift control"
// const doubleKeyExcluded = "shift control"
const shiftedSingleKeyExcludedLeft = "control q a"
const shiftedSingleKeyExcludedRight = "control p ;"



const general_combos = [
  {
    "keys": "control z",
    "on_keydown": function () { interpretKeypress('general', 'ctrl-z') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "control a",
    "on_keydown": function () { interpretKeypress('general', 'ctrl-a') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "control s",
    "on_keydown": function () { interpretKeypress('general', 'ctrl-s') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "control f",
    "on_keydown": function () { interpretKeypress('general', 'ctrl-f') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "control d",
    "on_keydown": function () { interpretKeypress('general', 'ctrl-d') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },


  {
    "keys": "control /",
    "on_keydown": function () { interpretKeypress('general', 'ctrl-/') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "control '",
    "on_keydown": function () { interpretKeypress('general', "ctrl-'") },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "control ;",
    "on_keydown": function () { interpretKeypress('general', 'ctrl-;') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "control l",
    "on_keydown": function () { interpretKeypress('general', 'ctrl-l') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "control j",
    "on_keydown": function () { interpretKeypress('general', 'ctrl-k') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
]


// LH  *************************************************************************************************
const LH_keys = [
  {
    "keys": "space",
    "on_keydown": function () { interpretKeypress('left', 'space') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "f",
    "on_keydown": function () { interpretKeypress('left', 'f') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "d",
    "on_keydown": function () { interpretKeypress('left', 'd') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "g",
    "on_keydown": function () { interpretKeypress('left', 'g') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "s",
    "on_keydown": function () { interpretKeypress('left', 's') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "r",
    "on_keydown": function () { interpretKeypress('left', 'r') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "e",
    "on_keydown": function () { interpretKeypress('left', 'e') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "t",
    "on_keydown": function () { interpretKeypress('left', 't') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "w",
    "on_keydown": function () { interpretKeypress('left', 'w') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "5",
    "on_keydown": function () { interpretKeypress('left', '5') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "4",
    "on_keydown": function () { interpretKeypress('left', '4') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "6",
    "on_keydown": function () { interpretKeypress('left', '6') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "3",
    "on_keydown": function () { interpretKeypress('left', '3') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "c",
    "on_keydown": function () { interpretKeypress('left', 'c') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "x",
    "on_keydown": function () { interpretKeypress('left', 'x') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "v",
    "on_keydown": function () { interpretKeypress('left', 'v') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "z",
    "on_keydown": function () { interpretKeypress('left', 'z') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },
  {
    "keys": "b",
    "on_keydown": function () { interpretKeypress('left', 'b') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedLeft,
  },

  // DOUBLES
  {
    "keys": "q w",
    "on_keydown": function () { interpretKeypress('left', 'qw') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "q e",
    "on_keydown": function () { interpretKeypress('left', 'qe') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "q r",
    "on_keydown": function () { interpretKeypress('left', 'qr') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "q t",
    "on_keydown": function () { interpretKeypress('left', 'qt') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "a s",
    "on_keydown": function () { interpretKeypress('left', 'as') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "a d",
    "on_keydown": function () { interpretKeypress('left', 'ad') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "a f",
    "on_keydown": function () { interpretKeypress('left', 'af') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "a g",
    "on_keydown": function () { interpretKeypress('left', 'ag') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },

  // SHIFTED
  {
    "keys": "shift f",
    "on_keydown": function () { interpretKeypress('left-shifted', 'f') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift d",
    "on_keydown": function () { interpretKeypress('left-shifted', 'd') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift g",
    "on_keydown": function () { interpretKeypress('left-shifted', 'g') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift s",
    "on_keydown": function () { interpretKeypress('left-shifted', 's') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift r",
    "on_keydown": function () { interpretKeypress('left-shifted', 'r') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift e",
    "on_keydown": function () { interpretKeypress('left-shifted', 'e') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift t",
    "on_keydown": function () { interpretKeypress('left-shifted', 't') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift w",
    "on_keydown": function () { interpretKeypress('left-shifted', 'w') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift 4",
    "on_keydown": function () { interpretKeypress('left-shifted', '4') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift 3",
    "on_keydown": function () { interpretKeypress('left-shifted', '3') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift 5",
    "on_keydown": function () { interpretKeypress('left-shifted', '5') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift 2",
    "on_keydown": function () { interpretKeypress('left-shifted', '2') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift c",
    "on_keydown": function () { interpretKeypress('left-shifted', 'c') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift x",
    "on_keydown": function () { interpretKeypress('left-shifted', 'x') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift v",
    "on_keydown": function () { interpretKeypress('left-shifted', 'v') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift z",
    "on_keydown": function () { interpretKeypress('left-shifted', 'z') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },
  {
    "keys": "shift b",
    "on_keydown": function () { interpretKeypress('left-shifted', 'b') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedLeft,
  },

  // SHIFTED DOUBLES
  {
    "keys": "shift q w",
    "on_keydown": function () { interpretKeypress('left-shifted', 'qw') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift q e",
    "on_keydown": function () { interpretKeypress('left-shifted', 'qe') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift q r",
    "on_keydown": function () { interpretKeypress('left-shifted', 'qr') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift q t",
    "on_keydown": function () { interpretKeypress('left-shifted', 'qt') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift a s",
    "on_keydown": function () { interpretKeypress('left-shifted', 'as') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift a d",
    "on_keydown": function () { interpretKeypress('left-shifted', 'ad') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift a f",
    "on_keydown": function () { interpretKeypress('left-shifted', 'af') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift a g",
    "on_keydown": function () { interpretKeypress('left-shifted', 'ag') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  }

]

// RH  *************************************************************************************************
const RH_keys = [

  {
    "keys": "space",
    "on_keydown": function () { interpretKeypress('right', 'space') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "j",
    "on_keydown": function () { interpretKeypress('right', 'j') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "k",
    "on_keydown": function () { interpretKeypress('right', 'k') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "h",
    "on_keydown": function () { interpretKeypress('right', 'h') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "l",
    "on_keydown": function () { interpretKeypress('right', 'l') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "i",
    "on_keydown": function () { interpretKeypress('right', 'i') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "o",
    "on_keydown": function () { interpretKeypress('right', 'o') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "y",
    "on_keydown": function () { interpretKeypress('right', 'y') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "u",
    "on_keydown": function () { interpretKeypress('right', 'u') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "8",
    "on_keydown": function () { interpretKeypress('right', '8') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "9",
    "on_keydown": function () { interpretKeypress('right', '9') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "7",
    "on_keydown": function () { interpretKeypress('right', '7') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "0",
    "on_keydown": function () { interpretKeypress('right', '0') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "m",
    "on_keydown": function () { interpretKeypress('right', 'm') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": ",",
    "on_keydown": function () { interpretKeypress('right', ',') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "n",
    "on_keydown": function () { interpretKeypress('right', 'n') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": ".",
    "on_keydown": function () { interpretKeypress('right', '.') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },
  {
    "keys": "/",
    "on_keydown": function () { interpretKeypress('right', '/') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": singleKeyExcludedRight,
  },

  // DOUBLES
  {
    "keys": "p o",
    "on_keydown": function () { interpretKeypress('right', 'po') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "p i",
    "on_keydown": function () { interpretKeypress('right', 'pi') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "p u",
    "on_keydown": function () { interpretKeypress('right', 'pu') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "p y",
    "on_keydown": function () { interpretKeypress('right', 'py') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "; l",
    "on_keydown": function () { interpretKeypress('right', ';l') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "; k",
    "on_keydown": function () { interpretKeypress('right', ';k') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "; j",
    "on_keydown": function () { interpretKeypress('right', ';j') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },
  {
    "keys": "; h",
    "on_keydown": function () { interpretKeypress('right', ';h') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": doubleKeyExcluded,
  },

  // SHIFTED
  {
    "keys": "shift j",
    "on_keydown": function () { interpretKeypress('right-shifted', 'j') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift k",
    "on_keydown": function () { interpretKeypress('right-shifted', 'k') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift h",
    "on_keydown": function () { interpretKeypress('right-shifted', 'h') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift l",
    "on_keydown": function () { interpretKeypress('right-shifted', 'l') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift i",
    "on_keydown": function () { interpretKeypress('right-shifted', 'i') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift o",
    "on_keydown": function () { interpretKeypress('right-shifted', 'o') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift y",
    "on_keydown": function () { interpretKeypress('right-shifted', 'y') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift u",
    "on_keydown": function () { interpretKeypress('right-shifted', 'u') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift 8",
    "on_keydown": function () { interpretKeypress('right-shifted', '8') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift 9",
    "on_keydown": function () { interpretKeypress('right-shifted', '9') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift 7",
    "on_keydown": function () { interpretKeypress('right-shifted', '7') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift 0",
    "on_keydown": function () { interpretKeypress('right-shifted', '0') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift m",
    "on_keydown": function () { interpretKeypress('right-shifted', 'm') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift <",
    "on_keydown": function () { interpretKeypress('right-shifted', ',') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift n",
    "on_keydown": function () { interpretKeypress('right-shifted', 'n') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift >",
    "on_keydown": function () { interpretKeypress('right-shifted', '.') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },
  {
    "keys": "shift /",
    "on_keydown": function () { interpretKeypress('right-shifted', '/') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false, "excludes": shiftedSingleKeyExcludedRight,
  },

  // SHIFTED DOUBLES
  {
    "keys": "shift p o",
    "on_keydown": function () { interpretKeypress('right-shifted', 'po') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift p i",
    "on_keydown": function () { interpretKeypress('right-shifted', 'pi') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift p u",
    "on_keydown": function () { interpretKeypress('right-shifted', 'pu') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift p y",
    "on_keydown": function () { interpretKeypress('right-shifted', 'py') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift ; l",
    "on_keydown": function () { interpretKeypress('right-shifted', ';l') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift ; k",
    "on_keydown": function () { interpretKeypress('right-shifted', ';k') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift ; j",
    "on_keydown": function () { interpretKeypress('right-shifted', ';j') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  },
  {
    "keys": "shift ; h",
    "on_keydown": function () { interpretKeypress('right-shifted', ';h') },
    "prevent_default": true, "prevent_repeat": true, "is_exclusive": false,
  }
]

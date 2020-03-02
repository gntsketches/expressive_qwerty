// Constants *********************************************************************

const constants = {

  // fullRange : [
  //   "C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1",
  //   "C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2",
  //   "C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3",
  //   "C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4"
  //   ,"C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5",
  //   "C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6",
  //   "C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7",
  //   "C8", "C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8","B8"
  // ],
  fullRange : [
    "C1","C#1/Db1","D1","D#1/Eb1","E1","F1","F#1/Gb1","G1","G#1/Ab1","A1","A#1/Bb1","B1",
    "C2","C#2/Db2","D2","D#2/Eb2","E2","F2","F#2/Gb2","G2","G#2/Ab2","A2","A#2/Bb2","B2",
    "C3","C#3/Db3","D3","D#3/Eb3","E3","F3","F#3/Gb3","G3","G#3/Ab3","A3","A#3/Bb3","B3",
    "C4","C#4/Db4","D4","D#4/Eb4","E4","F4","F#4/Gb4","G4","G#4/Ab4","A4","A#4/Bb4","B4",
    "C5","C#5/Db5","D5","D#5/Eb5","E5","F5","F#5/Gb5","G5","G#5/Ab5","A5","A#5/Bb5","B5",
    "C6","C#6/Db6","D6","D#6/Eb6","E6","F6","F#6/Gb6","G6","G#6/Ab6","A6","A#6/Bb6","B6",
    "C7","C#7/Db7","D7","D#7/Eb7","E7","F7","F#7/Gb7","G7","G#7/Ab7","A7","A#7/Bb7","B7",
    "C8","C#8/Db8","D8","D#8/Eb8","E8","F8","F#8/Gb8","G8","G#8/Ab8","A8","A#8/Bb8","B8"
  ],
  // fullRange : [
  //   "C1","Db1","D1","Eb1","E1","F1","Gb1","G1","Ab1","A1","Bb1","B1",
  //   "C2","Db2","D2","Eb2","E2","F2","Gb2","G2","Ab2","A2","Bb2","B2",
  //   "C3","Db3","D3","Eb3","E3","F3","Gb3","G3","Ab3","A3","Bb3","B3",
  //   "C4","Db4","D4","Eb4","E4","F4","Gb4","G4","Ab4","A4","Bb4","B4",
  //   "C5","Db5","D5","Eb5","E5","F5","Gb5","G5","Ab5","A5","Bb5","B5",
  //   "C6","Db6","D6","Eb6","E6","F6","Gb6","G6","Ab6","A6","Bb6","B6",
  //   "C7","Db7","D7","Eb7","E7","F7","Gb7","G7","Ab7","A7","Bb7","B7",
  //   "C8","Db8","D8","Eb8","E8","F8","Gb8","G8","Ab8","A8","Bb8","B8"
  // ],
  intervalConversions : {
    'cur': 0,
    '+m2': 1,
    '-m2': -1,
    '+M2': 2,
    '-M2': -2,
    '+m3': 3,
    '-m3': -3,
    '+M3': 4,
    '-M3': -4,
    '+P4': 5,
    '-P4': -5,
    '+tt': 6,
    '-tt': -6,
    '+P5': 7,
    '-P5': -7,
    '+m6': 8,
    '-m6': -8,
    '+M6': 9,
    '-M6': -9,
    '+m7': 10,
    '-m7': -10,
    '+M7': 11,
    '-M7': -11,
    '+8v': 12,
    '-8v': -12,
  },



  LH_pitch_keys : {
    'space': 'cur',
    '2': '-tt', '3': '-P4', '4': '+P4', '5': '+tt',
    // '1': '-tt', '2': '-P4', '3': '+P4', '4': '+tt',
    'q': '-M3', 'w': '-m3', 'e': '+m3', 'r': '+M3',
    // 'q': '-M2', 'w': '-m2', 'e': '+m2', 'r': '+M2',
    'a': '-M2', 's': '-m2', 'd': '+m2', 'f': '+M2',
    // 'a': '-M3', 's': '-m3', 'd': '+m3', 'f': '+M3',
    'z': '-8v', 'x': '-P5', 'c': '+P5', 'v': 'cur', 'b': '+8v',

    '12': '-8v', '13': '-P5', '14': '+P5', '15': '+8v',
    '62': '-8v', '63': '-P5', '64': '+P5', '65': '+8v',
    'tab2': '-8v', 'tab3': '-P5', 'tab4': '+P5', 'tab5': '+8v',
    'tabq': '-M6', 'tabw': '-m6', 'tabe': '+m6', 'tabr': '+M6',
    'taba': '-M7', 'tabs': '-m7', 'tabd': '+m7', 'tabf': '+M7',
    'tq': '-M6', 'tw': '-m6', 'te': '+m6', 'tr': '+M6',
    'ga': '-M7', 'gs': '-m7', 'gd': '+m7', 'gf': '+M7',
  },

  RH_pitch_keys : {
    'space': 'cur',
    '8': '-tt', '9': '-P4', '0': '+P4', '-': '+tt',
    'u': '-M3', 'i': '-m3', 'o': '+m3', 'p': '+M3',
    'j': '-M2', 'k': '-m2', 'l': '+m2', ';': '+M2',
    // 'n': 'cur', 'm': '-8v', ',': '-P5', '.': '+P5', '/': '+8v',
    'n': 'cur', 'm': '-P5', ',': '+P5', '.': '-8v', '/': '+8v',

    '78': '-8v', '79': '-P5', '70': '+P5', '7-': '+8v',
    '=8': '-8v', '=9': '-P5', '=0': '+P5', '=-': '+8v',
    '[8': '-8v', '[9': '-P5', '[0': '+P5', '[-': '+8v',
    'yu': '-M6', 'yi': '-m6', 'yo': '+m6', 'yp': '+M6',
    '[u': '-M6', '[i': '-m6', '[o': '+m6', '[p': '+M6',
    'hj': '-M7', 'hk': '-m7', 'hl': '+m7', 'h;': '+M7',
    "'j": '-M7', "'k": '-m7', "'l": '+m7', "';": '+M7',
  },


 /*
  LH_pitch_keys : {
    // 'space': 'cur', 'z': 'cur', 'tab': 'cur',
    'space': 'cur', 'b': 'cur', 'tab': 'cur',
    '3': '-tt', '4': '-P4', '5': '+P4', '6': '+tt',
    'qw': '-M6', 'qe': '-m6', 'qr': '+m6', 'qt': '+M6',
    'w': '-M3', 'e': '-m3', 'r': '+m3', 't': '+M3',
    'as': '-M7', 'ad': '-m7', 'af': '+m7', 'ag': '+M7',
    's': '-M2', 'd': '-m2', 'f': '+m2', 'g': '+M2',
    // 'x': '-8v', 'c': '-P5', 'v': '+P5', 'b': '+8v',
    'z': '-8v', 'x': '+8v', 'c': '-P5', 'v': '+P5',
  },

  RH_pitch_keys : {
    // 'space': 'cur', '/': 'cur', '[': 'cur', ']': 'cur',
    // 'space': 'cur', 'n': 'cur', '[': 'cur', ']': 'cur',
    'space': 'cur', '[': 'cur', ']': 'cur',
    '7': '-tt', '8': '-P4', '9': '+P4', '0': '+tt',
    'py': '-M6', 'pu': '-m6', 'pi': '+m6', 'po': '+M6',
    'y': '-M3', 'u': '-m3', 'i': '+m3', 'o': '+M3',
    ';h': '-M7', ';j': '-m7', ';k': '+m7', ';l': '+M7',
    'h': '-M2', 'j': '-m2', 'k': '+m2', 'l': '+M2',
    // 'n': '-8v', 'm': '-P5', ',': '+P5', '.': '+8v',
    // 'm': '-P5', ',': '+P5', '.': '-8v', '/': '+8v',
    'n': '-P5', 'm': '+P5', ',': '-8v', '.': 'cur', '/': '+8v',
  },
*/

  envelope : { "attack": 0.005, "decay": 0.01, "sustain": 0.5, "release": 3 },

  param_select_keys : {
    'c': 'Vibrato',
    'v': 'Portamento',

    'n': 'Portamento',
    'm': 'Vibrato',
  },

  volume_keys: {
    '2': 0.5,
    '3': 1.28,
    '4': 2.5,
    '5': 5,
    '6': 10,

    '7': 1.28,
    '8': 2.5,
    '9': 5,
    '0': 10,
    '-': 1999,
  },

  portamento_keys : {
    'q': 0.0,
    'w': 0.2,
    'e': 0.4,
    'r': 0.8,
    't': 1.6,

    'y': 0,
    'u': 0.2,
    'i': 0.4,
    'o': 0.8,
    'p': 1.6,
  },

  vibrato_keys : {
    'a': 0,
    's': 0.5,
    'd': 1,
    'f': 2,
    'g': 4,

    'h': 0,
    'j': 0.5,
    'k': 1,
    'l': 2,
    ';': 4,
  },

}


// portamento_keys : {
//   's': 0,
//     'h': 0,
//     'd': 0.01,
//     'f': 0.01,
//     'j': 0.02,
//     'k': 0.02,
//     'g': 0.04,
//     'l': 0.04,
//
//     'w': 0.08,
//     'y': 0.08,
//     'e': 0.16,
//     'u': 0.16,
//     'r': 0.32,
//     'i': 0.32,
//     't': 0.64,
//     'o': 0.64,
//
//     '3': 1.28,
//     '7': 1.28,
//     '4': 2.5,
//     '8': 2.5,
//     '5': 5,
//     '9': 5,
//     '6': 10,
//     '0': 10,
// },
//
// vibrato_keys : {
//   's': 0,
//     'h': 0,
//     'd': 1,
//     'j': 1,
//     'f': 2,
//     'k': 2,
//     'g': 3,
//     'l': 3,
//
//     'w': 5,
//     'y': 5,
//     'e': 7,
//     'u': 7,
//     'r': 9,
//     'i': 9,
//     't': 11,
//     'o': 11,
//
//     '3': 15,
//     '7': 15,
//     '4': 20,
//     '8': 20,
//     '5': 30,
//     '9': 30,
//     '6': 40,
//     '0': 40,
// },

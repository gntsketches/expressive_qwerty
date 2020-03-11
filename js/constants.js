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

  // RH thumb M
  RH_pitch_keys : {
    'space': 'cur',
    '9': '-tt', '0': '-P4', '-': '+P4', '=': '+tt',
    'i': '-M3', 'o': '-m3', 'p': '+m3', '[': '+M3',
    'k': '-M2', 'l': '-m2', ';': '+m2', "'": '+M2',
    'n': '-8v', 'm': 'cur', ',': '-P5', '.': '+P5', '/': '+8v',

    '89': '-8v', '80': '-P5', '8-': '+P5', '8=': '+8v',
    'back9': '-8v', 'back0': '-P5', 'back-': '+P5', 'back=': '+8v',
    ']9': '-8v', ']0': '-P5', ']-': '+P5', ']=': '+8v',
    'ui': '-M6', 'uo': '-m6', 'up': '+m6', 'u[': '+M6',
    ']i': '-M6', ']o': '-m6', ']p': '+m6', '][': '+M6',
    'jk': '-M7', 'jl': '-m7', 'j;': '+m7', "j'": '+M7',
    "enterk": '-M7', "enterl": '-m7', "enter;": '+m7', "enter'": '+M7',
  },

/*
  // RH thumb N
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
*/

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


  params_rows: {  // can manage LH and RH
    top: [
      '2', '3', '4', '5', '12', '13', '14', '15', '62', '63', '64', '65', 'tab2', 'tab3', 'tab4', 'tab5',
      '9', '0', '-', '=', '89', '80', '8-', '8=', 'back9', 'back0', 'back-', 'back=', ']9', ']0', ']-', ']='
    ],
    middle: [
      'q', 'w', 'e', 'r', 'tabq', 'tabw', 'tabe', 'tabr', 'tq', 'tw', 'te', 'tr',
      'i', 'o', 'p', '[', 'ui', 'uo', 'up', 'u[', ']i', ']o', ']p', ']['
    ],
    bottom: [
      'a', 's', 'd', 'f', 'taba', 'tabs', 'tabd', 'tabf', 'ga', 'gs', 'gd', 'gf',
      'k', 'l', ';', "'", 'jk', 'jl', 'j;', "j'", "enterk", "enterl", "enter;", "enter'",
    ],
  },

  param_grids: {  // also can manage LR and RH. since it's different keys.
    // LEFT HAND
    'q': 'volume',  'w': 'glide', 'e': 'vibrato', 'r': 'detune',
    'a': 'attack',  's': 'decay', 'd': 'sustain', 'f': 'release',

    // RIGHT HAND
    'i': 'volume',  'o': 'glide', 'p': 'vibrato', '[': 'detune',
    'k': 'attack',  'l': 'decay', ';': 'sustain', "'": 'release',
  },

  param_keys : {  // can ALSO manage LR and RH. hey wow.
    // LEFT HAND
    '2': '-hi', '3': '-lo', '4': '+lo', '5': '+hi',
    'q': '-hi', 'w': '-lo', 'e': '+lo', 'r': '+hi',
    'a': '-hi', 's': '-lo', 'd': '+lo', 'f': '+hi',

    '12': 'val1',     '13': 'val2',     '14': 'val3',       '15': 'val4',
    '62':  'val1',    '63':  'val2',    '64': 'val3',       '65': 'val4',
    'tab2': 'val1',   'tab3': 'val2',   'tab4': 'val3',     'tab5': 'val4',
    'tabq': 'val1',   'tabw': 'val2',   'tabe': 'val3',     'tabr': 'val4',
    'tq': 'val1',     'tw': 'val2',     'te': 'val3',       'tr': 'val4',
    'taba': 'val1',   'tabs': 'val2',   'tabd': 'val3',     'tabf': 'val4',
    'ga': 'val1',     'gs': 'val2',     'gd': 'val3',       "gf": 'val4',

    // RIGHT HAND
    '9': '-hi', '0': '-lo', '-': '+lo', '=': '+hi',
    'i': '-hi', 'o': '-lo', 'p': '+lo', '[': '+hi',
    'k': '-hi', 'l': '-lo', ';': '+lo', "'": '+hi',

    '89': 'val1',     '80': 'val2',     '8-': 'val3',       '8=': 'val4',
    'back9':  'val1', 'back0':  'val2', 'back-': 'val3',    'back=': 'val4',
    ']9': 'val1',     ']0': 'val2',     ']-': 'val3',       ']=': 'val4',
    'ui': 'val1',     'uo': 'val2',     'up': 'val3',       'u[': 'val4',
    ']i': 'val1',     ']o': 'val2',     ']p': 'val3',       '][': 'val4',
    'jk': 'val1',     'jl': 'val2',     'j;': 'val3',       "j'": 'val4',
    "enterk": 'val1', "enterl": 'val2', "enter;": 'val3',   "enter'": 'val4',

    // 'n': '-8v', 'm': 'cur', ',': '-P5', '.': '+P5', '/': '+8v',
    // 'space': 'cur',
  },

  param_values: {
    vibrato: {
      '-lo': -1,
      '+lo': 1,
      '-hi': -5,
      '+hi': 5,
      'val1': 0,
      'val2': 2,
      'val3': 5,
      'val4': 20,
    },
    glide: {
      '-lo': -0.01,
      '+lo': 0.01,
      '-hi': -0.05,
      '+hi': 0.05,
      'val1': 0,
      'val2': 0.2,
      'val3': 1,
      'val4': 5,
    },
    volume: {
      '-lo': -1,
      '+lo': 1,
      '-hi': -4,
      '+hi': 4,
      'val1': -15,
      'val2': -10,
      'val3': -5,
      'val4': 0,
    },
    detune: {
      '-lo': -1,
      '+lo': 1,
      '-hi': -10,
      '+hi': 10,
      'val1': -50,
      'val2': 0,
      'val3': 0,
      'val4': 50,
    },
    attack: {
      '-lo': -0.05,
      '+lo': 0.05,
      '-hi': -0.5,
      '+hi': 0.5,
      'val1': 0.005,
      'val2': 0.5,
      'val3': 1,
      'val4': 10,
    },
    decay: {
      '-lo': -0.01,
      '+lo': 0.01,
      '-hi': -0.1,
      '+hi': 0.1,
      'val1': 0,
      'val2': 0.01,
      'val3': 0.1,
      'val4': 1,
    },
    sustain: {
      '-lo': -0.1,
      '+lo': 0.1,
      '-hi': -0.2,
      '+hi': 4,
      'val1': 0.25,
      'val2': 0.50,
      'val3': 0.75,
      'val4': 1,
    },
    release: {
      '-lo': -0.1,
      '+lo': 0.1,
      '-hi': -1,
      '+hi': 1,
      'val1': 0,
      'val2': 1,
      'val3': 5,
      'val4': 20,
    },
  },

  param_minmax: {
    volume: { min: -100, max: 50 },
    vibrato: { min: 0, max: 100 },
    detune: { min: -2400, max: 2400 },
    glide: { min: 0, max: 20 },
    attack: { min: 0.005, max: 60 },
    decay: { min: 0.01, max: 60 },
    sustain: { min: 0, max: 1 },
    release: { min: 0.01, max: 60 },
  },

}


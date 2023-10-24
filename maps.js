/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
    '-': ' ',
    'O': '🚪',
    'X': '💣',
    'I': '💎',
    'PLAYER': '🧍',
    'BOMB_COLLISION': '💥',
    'GAME_OVER': '☠️',
    'WIN': '🏆',
    'HEART': '❤️',
  };
  
  const maps = [];
  maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
  `);
  maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
    `);
  maps.push(`
    I-----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-----XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
  `);
  
  maps.push(`
    I--------O
    X-XXXXX-XX
    X--XXX--XX
    X-XX-XX-XX
    X--XXX--XX
    X-XXXXX-XX
    X-XXXXX-XX
    X-XXXXX-XX
    X-XXXXX-XX
    X-XXXXX-XX
  `);
maps.push(`
    I--------I
    X-XXXXX-XX
    X-XX-XX-XX
    X--XXX--XX
    X-XXXXX-XX
    X-XXXXX-XX
    X-XX-XX-XX
    X--XXX--XX
    X-XXXXX-XX
    O--------O
  `);
maps.push(`
    O--O--O--O
    X-XX-XX-XX
    X--XXX--XX
    X-XXXXX-XX
    X--XXX--XX
    X-XXXXX-XX
    X-XXXXX-XX
    X-XX-XX-XX
    X--XXX--XX
    I--------I
  `);
maps.push(`
    I--I--I--I
    X-XXXXX-XX
    X-XX-XX-XX
    X--XXX--XX
    X-XXXXX-XX
    X-XX-XX-XX
    X--XXX--XX
    X-XXXXX-XX
    X-XXXXX-XX
    O--O--O--O
  `);
maps.push(`
    I--------
    X-XXXXXXO
    X-XX-XX-X
    X--XXX--X
    X-XX-XX-X
    X-XXXXXX-
    X-XX-XX--
    X--XXX---
    O--------
  `);
maps.push(`
    ----X----
    -OXXXO-OO
    -O--O--OO
    -OOO-OOOO
    -X-X-X-X-
    -X-X-X-X-
    -XO-XOOOO
    -XO-X-X-O
    -XOOOOOOO
    -XOOO-I-O
  `);
maps.push(`
    I-I-I-I-I
    OO-X-O-X-
    O-OOOOO-O
    OO-X-X-X-
    O-OOO-X-O
    O-X-OOOOO
    O-OOOOO-O
    OOOO-X-OO
    O-OOOOO-O
    -X-X-X-X-
  `);

maps.push(`
    -O-O-O-I-
    -X-X-X-X-
    -X-X-X-X-
    -X-X-X-X-
    -X-X-X-X-
    -X-X-X-X-
    -X-X-X-X-
    -X-X-X-X-
    -X-X-X-X-
    -O-O-I-O-
  `);
maps.push(`
    O-O-O-O-I
    X-X-X-X-X
    X-X-X-X-X
    X-X-X-X-X
    X-X-X-X-X
    X-X-X-X-X
    X-X-X-X-X
    X-X-X-X-X
    X-X-X-X-X
    I-O-O-O-I
  `);

  maps.push(`
  I-----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`);

maps.push(`
    I----X----O
    XXXX-XXXXXX
    X---X---X-X
    X-XX-XX-X-X
    X-XX-XX-X-X
    X---X---X-X
    X-XXXXXX-XX
    X-XX-XX-X-X
    X-X-----X-X
    XXXXXXXXX-X
  `);

maps.push(`
    I----X----O
    XXXX-XXXXXX
    X---X---X-X
    X-XX-XX-X-X
    X-XX-XX-X-X
    X---X---X-X
    X-XXXXXX-XX
    X-XX-XX-X-X
    X-X-----X-X
    XXXXXXXXX-X
  `);
  maps.push(`
  I--------O
  X-XXXXX-XX
  X-XX-XX-XX
  X-XX-XX-XX
  X--XXX--XX
  X-XXXXX-XX
  X--XXX--XX
  X-XX-XX-XX
  X-XXXXX-XX
  X-XXXXX-XX
`);

maps.push(`
  I--------O
  X--X-X--XX
  X-XX-XX-XX
  X-XX-XX-XX
  X--XXX--XX
  X-XXXXX-XX
  X--XXX--XX
  X-XX-XX-XX
  X--X-X--XX
  X--X-X--XX
`);

maps.push(`
  I--------O
  X-XXXXX-XX
  X-XX-XX-XX
  X-XX-XX-XX
  X-XXXXX-XX
  X-XX-XX-XX
  X--XXX--XX
  X-XX-XX-XX
  X-XXXXX-XX
  X-XXXXX-XX
`);





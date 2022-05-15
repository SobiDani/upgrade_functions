const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

  const presence = []
  
  function finderName(finder, name) {
      for(i = 0; i < nameFinder.length; i++){
          if(finder[i] == name)
          presence.push(true, i + 1)
      }
  }

  finderName(nameFinder, 'Peggy')
  console.log(presence);
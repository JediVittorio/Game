const fs = require('fs');
const actorsFile = 'AGES/data/Actors.json';
let actors = JSON.parse(fs.readFileSync(actorsFile, 'utf8'));

const visualMap = {
  1: { face: "Actor1", faceIdx: 0, char: "Actor1", charIdx: 0 }, // Less
  2: { face: "Actor1", faceIdx: 1, char: "Actor1", charIdx: 1 }, // Carla
  3: { face: "Actor1", faceIdx: 2, char: "Actor1", charIdx: 2 }, // Geoff
  11: { face: "Actor2", faceIdx: 0, char: "Actor2", charIdx: 0 }, // Krono
  12: { face: "Actor2", faceIdx: 1, char: "Actor2", charIdx: 1 }, // Ruca
  13: { face: "Actor2", faceIdx: 2, char: "Actor2", charIdx: 2 }, // Toad
  21: { face: "Actor3", faceIdx: 0, char: "Actor3", charIdx: 0 }, // Romza
  22: { face: "Actor3", faceIdx: 1, char: "Actor3", charIdx: 1 }, // Bureaucrat
  31: { face: "SF_Actor1", faceIdx: 0, char: "SF_Actor1", charIdx: 0 }, // Tadpole
  32: { face: "SF_Actor1", faceIdx: 1, char: "SF_Actor1", charIdx: 1 }, // Luna
  41: { face: "SF_Actor2", faceIdx: 0, char: "SF_Actor2", charIdx: 0 }, // Maurice
  42: { face: "SF_Actor2", faceIdx: 1, char: "SF_Actor2", charIdx: 1 }, // Shell-don
  51: { face: "SF_Actor3", faceIdx: 0, char: "SF_Actor3", charIdx: 0 }, // Rick
  52: { face: "SF_Actor3", faceIdx: 1, char: "SF_Actor3", charIdx: 1 }, // Vera
  61: { face: "Evil", faceIdx: 0, char: "Evil", charIdx: 0 }, // Judgmental Knight
  62: { face: "Evil", faceIdx: 1, char: "Evil", charIdx: 1 }, // Blaze
  71: { face: "People1", faceIdx: 0, char: "People1", charIdx: 0 }, // Trickster
  72: { face: "People1", faceIdx: 1, char: "People1", charIdx: 1 }, // Suji
  81: { face: "People2", faceIdx: 0, char: "People2", charIdx: 0 }, // Oathbreaker
  82: { face: "People2", faceIdx: 1, char: "People2", charIdx: 1 }, // Darkheart
  83: { face: "People2", faceIdx: 2, char: "People2", charIdx: 2 }, // Merchant
  91: { face: "People3", faceIdx: 0, char: "People3", charIdx: 0 }, // Captain
  92: { face: "People3", faceIdx: 1, char: "People3", charIdx: 1 }  // Maelle
};

Object.keys(visualMap).forEach(actorId => {
  if (actors[actorId]) {
    actors[actorId].faceName = visualMap[actorId].face;
    actors[actorId].faceIndex = visualMap[actorId].faceIdx;
    actors[actorId].characterName = visualMap[actorId].char;
    actors[actorId].characterIndex = visualMap[actorId].charIdx;
  }
});

fs.writeFileSync(actorsFile, JSON.stringify(actors, null, 2));
console.log('Successfully assigned unique visuals to all protagonists.');

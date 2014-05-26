var thingsThatAreKawaii = [
  /alison brie/,
  /^baby/,
  /kitten/,
  /brian ford/
];

var thingsThatAreNotKawaii = [
  /spider/
];

module.exports = function (thing) {
  thing = thing.trim().toLowerCase();

  return thingsThatAreKawaii.some(function (re) {
    return re.test(thing);
  }) && !thingsThatAreNotKawaii.some(function (re) {
    return re.test(thing);
  });
};

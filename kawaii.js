var thingsThatAreKawaii = [
  /^baby/,
  /kitten/,
  /brian ford/,
  /^me$/,
  /^node(\.js)?/i
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

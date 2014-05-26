var thingsThatAreKawaii = [
  /^baby/,
  /kitten/,
  /brian ford/,
  /^pony/,
  /^unicorn/,
  /sindre sorhus/,
  /kawaii/
];

var thingsThatAreNotKawaii = [
  /spider/,
  /doorknob$/
];

module.exports = function (thing) {
  thing = thing.trim().toLowerCase();

  return thingsThatAreKawaii.some(function (re) {
    return re.test(thing);
  }) && !thingsThatAreNotKawaii.some(function (re) {
    return re.test(thing);
  });
};

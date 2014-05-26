;(function (name, definition) {
  if (typeof module !== 'undefined') {
    module.exports = definition();
  } else if (typeof define === 'function' && typeof define.amd === 'object') {
    define(definition);
  } else {
    window[name] = definition();
  }
})('kawaii', function () {
  var thingsThatAreKawaii = [
    /^baby/,
    /kitten/,
    /brian ford/
  ];

  var thingsThatAreNotKawaii = [
    /spider/
  ];

  return function (thing) {
    thing = thing.trim().toLowerCase();

    return thingsThatAreKawaii.some(function (re) {
      return re.test(thing);
    }) && !thingsThatAreNotKawaii.some(function (re) {
      return re.test(thing);
    });
  };
});

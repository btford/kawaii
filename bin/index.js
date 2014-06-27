#!/usr/bin/env node

var kawaii = require("../kawaii.js")
var argv = process.argv;
var param = argv[2] || argv[1];

if (typeof param !== "string")
  return console.log("kawaii cannian !!! - String please.");

if (kawaii(param))
  return console.log("kawaii desi!!");
else
  return console.log("Cannian desi!!");



// Generated by BUCKLESCRIPT VERSION 4.0.1, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");

function map(f, _maybe) {
  if (_maybe) {
    return /* Just */[Curry._1(f, _maybe[0])];
  } else {
    return /* None */0;
  }
}

console.log("woof");

function run() {
  var optionals = Caml_array.caml_make_vect(5, /* None */0);
  var boxByIndex = function (pred) {
    return (function (param) {
        return $$Array.mapi((function (ind, _) {
                      var match = Curry._1(pred, ind);
                      if (match) {
                        return /* Just */[ind + 1 | 0];
                      } else {
                        return /* None */0;
                      }
                    }), param);
      });
  };
  var takeOdds = function (i) {
    return i % 2 === 0;
  };
  console.log(boxByIndex(takeOdds)(optionals));
  console.log(map((function (prim) {
              return prim.length;
            }), /* Just */["car"]));
  return /* () */0;
}

var testData = /* Dog */0;

exports.map = map;
exports.testData = testData;
exports.run = run;
/*  Not a pure module */
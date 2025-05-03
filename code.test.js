const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');


// asked chatgpt for test cases, then verified them by hand
var tests = [
  [ 
    {
      A: {B: 1},
      B: {C: 2},
      C: {}
    },
    {
      A: { A: 0, B: 1, C: 3 },
      B: { A: Infinity, B: 0, C: 2 },
      C: { A: Infinity, B: Infinity, C: 0 }
    }
  ],
  [
    {
      X: { Y: 0 },
      Y: { X: 0 },
    },
    {
      X: { X: 0, Y: 0 },
      Y: { X: 0, Y: 0 }
    }
  ],
  [
    {
      A: {},
      B: {},
      C: {}
    },
    {
      A: { A: 0, B: Infinity, C: Infinity },
      B: { A: Infinity, B: 0, C: Infinity },
      C: { A: Infinity, B: Infinity, C: 0 }
    }
  ]
]

for (var t of tests) {
  var result = allPairsShortestPaths(t[0]);
  assert(JSON.stringify(result) == JSON.stringify(t[1]));
}


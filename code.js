function allPairsShortestPaths(g) {
  var verts = Object.keys(g);
  var dist = {};

  // make the distance matrix and set to either zero or inf
  for (var i of verts) {
    dist[i] = {};
    for (var j of verts) {
      if (i == j) { dist[i][j] = 0; }
      else { dist[i][j] = Infinity; }
    }
  }

  // add weight to edges
  for (var u in g) {
    for (var v in g[u]) { dist[u][v] = g[u][v]; }
  }

  //loops described in pseudo code
  for (var k of verts) {
    for (var i of verts) {
      for (var j of verts) {
        if (dist[i][j] > (dist[i][k] + dist[k][j])) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}

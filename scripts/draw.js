map.on(L.Draw.Event.CREATED, function (e) {
  
  var type = e.layerType,
      layer = e.layer;

  if (type === 'marker') {
      // Do marker specific actions
      console.log("marker");
  }

  // Do whatever else you need to. (save to db; add to map etc)  
  
  // Find right layer to add shape to
  var key;
  Object.keys(map._layers).forEach(element => {
    if (map._layers[element].options.attribution == 'nick') {
      key = map._layers[element]._leaflet_id;
    }
  });
  console.log(key);

  layer.addTo(map._layers[key]);

});
map.on(L.Draw.Event.CREATED, function (e) {
  
  var type = e.layerType,
      layer = e.layer;

  if (type === 'marker') {
      // Do marker specific actions
      console.log("marker");
  }

  // Do whatever else you need to. (save to db; add to map etc)  
  layer.addTo(map._layers[530]);

});
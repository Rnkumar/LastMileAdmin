// Step 1: initialize communication with the platform
var platform = new H.service.Platform({
  app_id: 'EC9XVOgMvc6wB4ycQRFH',
  app_code: 'vJKm39sNoH382UhujmuJ_g',
  useCIT: true,
  useHTTPS: true
});
var defaultLayers = platform.createDefaultLayers();

// Step 2: initialize a map
var map = new H.Map(document.getElementById('map'), defaultLayers.normal.map, {
  // initial center and zoom level of the map
  zoom: 16,
  // Champs-Ãƒâ€°lysÃƒÂ©es
  center: {lat: 48.869145, lng: 2.314298}
});

var locationsContainer = document.getElementById('panel');

// Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

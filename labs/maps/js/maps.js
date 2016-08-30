var map;
function initMap() {
  
  
  var el = document.querySelector('.map');
  var options = {
    center: {
      lat: 37.790841,
      lng: -122.40128
    },
    zoom: 15
  }
  
  map = new google.maps.Map(el,options);
  
  
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: {
      lat: 37.790841,
      lng: -122.40128
    },
    radius: 500,
    type: ['store']
  }, displayResults);

  function displayResults(results, status) {
    // if (status === google.maps.places.PlacesServiceStatus.OK) {
    //   results.forEach(createMarker);
    // }
  }
  
  function createMarker(place) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    })
  }
  
  navigator.geolocation.getCurrentPosition(updateLocation);
}


function updateLocation(pos) {
  var crd = pos.coords;
  
  // console.log('Your current position is:');
  // console.log('Latitude : ' + crd.latitude);
  // console.log('Longitude: ' + crd.longitude);
  // console.log('More or less ' + crd.accuracy + ' meters.');
  
  var marker = new google.maps.Marker({
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    position: {
      lat: crd.latitude,
      lng: crd.longitude
    }
  })
}

const getLocation = function(callback) {

  let storedLocation = JSON.parse(sessionStorage.getItem('NG_myLocation'));

  if(storedLocation) {
    callback(storedLocation);
    return;
  }

  const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    sessionStorage.setItem('NG_myLocation', JSON.stringify({lat:latitude,lng: longitude}));
    console.log(` success: { lat: ${latitude}, lon: ${longitude}}`);
    callback({lat: latitude, lng: longitude});
  }

  const error = (err) => {
    callback(err);
  }

  const options = {
    enableHighAccuracy: false,
    timeout: 8000,
    maximumAge: 0
  };
  
  navigator.geolocation.getCurrentPosition(success, error, options);
    // should return location: { lat: lat, lng: lng}
}

module.exports = { getLocation : getLocation };
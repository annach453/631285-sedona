function initMap() {
  var uluru = { lat: 34.8697395, lng: -111.7609896 };
  var map = new google.maps.Map(document.getElementById("map"), {
    disableDefaultUI: true,
    zoom: 7,
    center: uluru
  });
  var image = "./img/icon-map-marker.svg";
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: image
  });
}

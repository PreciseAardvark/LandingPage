// Initialize and add the map
function initMap() {
    // The location of Ubicacion
    const Ubicacion = { lat: 19.406667174323736, lng: -99.14453836834757 };
    // The map, centered at Ubicacion
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: Ubicacion,
    });
    // The marker, positioned at Ubicacion
    const marker = new google.maps.Marker({
      position: Ubicacion,
      map: map,
    });
  }

// function myMap() {
//     var mapOptions = {
//         center: new google.maps.LatLng(55.7241059,21.1268382),
//         zoom: 18,
//         mapTypeId: google.maps.MapTypeId.HYBRID,
//         marker: new google.maps.LatLng(55.7241059,21.1268382)
//     }   
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// }

function initMap() {
    var myLatLng = {lat: 55.724540, lng: 21.127071};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: myLatLng
    });
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }
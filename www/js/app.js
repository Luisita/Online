var ban = 0; // Bandera para que el dispositivo abra google solo una ves
// Evento online
$(document).on('online', function(){ 
  if (ban === 0) {
    alert("Estamos conectados a internet ... ");
    window.open('http://www.google.com.mx', '_system');
    ban = 1;
  }
});
// Evento offline
$(document).on('offline', function(){ 
  if (ban === 0) {
    $.mobile.loading( "show", {
          text: "No estamos conectados a internet",
          textVisible: true,
          theme: "b",
          html: ""
      });
    ban = 1;
  }
});

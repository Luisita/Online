var ban = 0; // Bandera para que el dispositivo abra google solo una ves
// Evento online
$(document).on('online', function(){ 
  if (ban === 0) {
    $.mobile.changePage("#dialogo");
    window.open('http://www.google.com.mx', '_system');
    ban = 1;
  }
});
// Evento offline
$(document).on('offline', function(){ 
  if (ban === 0) {
    $.mobile.loading( "show", {
          text: "No está en línea, conectese a una red",
          textVisible: true,
          theme: "e",
          html: ""
      });
    ban = 1;
  }
});

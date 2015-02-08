var ban = 0; // Bandera para que el dispositivo abra google solo una ves
// Evento device ready
$(document).on('deviceready', function(){ 
    //Agregamos la fecha actual del sistema
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;//January is 0, so always add + 1

    var yyyy = today.getFullYear();
    if(dd<10){dd='0'+dd}
    if(mm<10){mm='0'+mm}
    today = mm+'/'+dd+'/'+yyyy;
    $("#fechaAct").html(today);
      $.mobile.loading( "show", {
          text: "Device Ready cargado",
          textVisible: true,
          theme: "b",
          html: ""
      });
});
// Evento pause
$(document).on('pause', function(){ 
  alert("El dispositivo pasará a pause");
      $.mobile.loading( "show", {
          text: "El dispositivo pasará a pausa",
          textVisible: true,
          theme: "b",
          html: ""
      });
});
// Evento resume
$(document).on('resume', function(){ 
    alert("El dispositivo pasará a resume");
      $.mobile.loading( "show", {
          text: "El dispositivo pasará a resume",
          textVisible: true,
          theme: "b",
          html: ""
      });
});
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
$(document).on( "click", ".cerrar", function() {
  $.mobile.loading( "hide" );
});
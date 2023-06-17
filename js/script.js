function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
  
    if (nombre === "" || apellido === ""|| email === "" || mensaje === "") {
      alert("Por favor, complete todos los campos.");
      return false;
    }
  
    // Aquí puedes agregar más validaciones según tus necesidades
  
    return true;
  }
  function generarAudio() {
    // Crear un elemento de audio
    var audio = new Audio();
  
    // Generar el archivo de audio
    var speech = new SpeechSynthesisUtterance('Gracias por reciclar!!!');
    window.speechSynthesis.speak(speech);
  
    // Esperar a que finalice la generación del audio
    speech.onend = function(event) {
      // Asignar el audio generado al elemento de audio
      audio.src = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(speech)]));
  
      // Reproducir el audio
      audio.play();
    };
  }
  
 
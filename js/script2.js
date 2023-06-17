  document.getElementById("facebookButton").addEventListener("click", function() {
    window.open("https://www.facebook.com/PabloE86");
    window.open("https://www.facebook.com/rosana.valdez.5");
    
  });
  document.getElementById("WhatsApp").addEventListener("click", function() {
    var phoneNumber = "+5491123979818"; // Reemplaza con el número de teléfono deseado
  
    // Reemplaza el signo "+" con "%2B" en el número de teléfono (necesario para el formato de URL)
    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber.replace("+", "%2B");
  
    window.open(whatsappURL);
  });
  document.getElementById("WhatsApp").addEventListener("click", function() {
    var phoneNumber = "+5493517154552"; // Reemplaza con el número de teléfono deseado
  
    // Reemplaza el signo "+" con "%2B" en el número de teléfono (necesario para el formato de URL)
    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber.replace("+", "%2B");
  
    window.open(whatsappURL);
  });
  document.getElementById("sendEmailButton").addEventListener("click", function() {
    var emailAddress = "pablochamgalay@gmail.com";
    var subject = "Salva el Planeta";
    var body = "Contáctame";
  
    var mailtoLink = "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
  });
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
  function decirGracias() {
    var mensaje = new SpeechSynthesisUtterance('Gracias por su compra');
    window.speechSynthesis.speak(mensaje);
  }
  function reproducirAudio() {
    var audio = new Audio('gracias.ogg');
    audio.play();
  }
  function reproducirAudio2() {
    var audio = new Audio('ayudar.ogg');
    audio.play();
  }
  function reproducirAudio3() {
    var audio = new Audio('gracias2.mpeg');
    audio.play();
  }  
  document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el envío del formulario por defecto
  
    var formData = new FormData(this);
  
    // Realizar la solicitud POST al servidor para enviar el correo electrónico
    fetch(this.action, {
      method: this.method,
      body: formData
    })
    .then(function(response) {
      if (response.ok) {
        alert("El mensaje ha sido enviado correctamente.");
        // Restablecer el formulario después de enviarlo
        document.getElementById("contactForm").reset();
      } else {
        alert("Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo nuevamente.");
      }
    })
    .catch(function(error) {
      console.log("Error: " + error);
    });
  });
  
  
  
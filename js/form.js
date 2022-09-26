console.log("Conectado....");


// Variables y constantes 
// Vectores
let Usuario = [];
// Objetos literales   
let datos = {};

let formulario = document.querySelector('#formulario');




formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    let divCap = document.querySelector("#captcha")
    let Usuario = document.querySelector('#username').value;
    let contraseña = document.querySelector('#contraseña').value;
    
    if ([Usuario, contraseña].includes("")) {
        console.log("Todos los campos son obligatorios");
        return;
    }

      
    let termino1 = Usuario.slice(0,1)
    let termino2 = contraseña.slice(0,1)

    let expresion = termino1 + "+" + termino2;
    let respuesta = eval(expresion)

    const mostrarCaptcha = () =>{
        divCap = document.querySelector("#captcha")
        divCap.innerHTML = `
        <div class="wrapper">
        <header>Icr corporation</header>
        <div class="captcha-area"> ${expresion}
          <div class="captcha-img">
            <!-- <img src="img/captcha-bg.png" alt="Captch Background"> -->
            <span class="captcha"></span>
          </div>
          <button class="reload-btn"><i class="fas fa-redo-alt"></i></button>
        </div>
        <form action="#" class="input-area">
          <input type="text" id="respuesta" placeholder="Ingresa captcha" maxlength="6" spellcheck="false" required>
          <button class="check-btn">Check</button>
        </form>
        <div class="status-text"></div>
      </div>
      
      
        `
    }




    console.log("Paso la validacion");

    datos = {
        "Usuario": "72009461",
        "contraseña": "9461",

    }

    if (Usuario === datos.Usuario && contraseña === datos.contraseña) {
        console.log("salio");
        mostrarCaptcha()


    } else {
        console.log("error")
        alert("los campos son incorrectos")
    }

    console.log(datos);
    console.log(Usuario);

    formulario.reset();

    let captcha = document.querySelector(".captcha"),
    reloadBtn = document.querySelector(".reload-btn"),
    inputField = document.querySelector(".input-area input"),
    checkBtn = document.querySelector(".check-btn"),
    statusTxt = document.querySelector(".status-text");






    checkBtn.addEventListener("click", e => {
        let input = document.querySelector('#respuesta').value;
        e.preventDefault();
        statusTxt.style.display = "block";
    if (input == respuesta) {
        statusTxt.style.color = "#4db2ec";
        statusTxt.innerText = "Inicio exitoso, Bienvenido al sistema";
        console.log(input);
        setTimeout(() => {
          removeContent(captcha);
        }, 2000);
      } else {
        statusTxt.style.color = "#ff0000";
        statusTxt.innerText = "Captcha no marcado. Por favor intenta de nuevo!";
        console.log(respuesta, input)
      }
    });

    

  
  function removeContent() {
    let vacio ="";
    let input = document.querySelector('#respuesta');
    let divCap = document.querySelector('#captcha');
    input.value = "";
    console.log(captcha)
    divCap.innerHTML = vacio;
    statusTxt.style.display = "none";
  }


})




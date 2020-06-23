var interfaz = document.createElement('div');
interfaz.classList.add('interfaz')
document.body.appendChild(interfaz);


//Crear botones gaatos
var opcion1Image = document.createElement('div');
var opcion1 = document.createElement('button');
var image1 = document.createElement('img');
image1.setAttribute("src", "./") //imagen-gato
image1.setAttribute("alt", "Gato de Piedra")
image1.setAttribute("style", "width:100%") //ajustar
opcion1Image.classList.add('gatoPiedra');
opcion1.classList.add('btn');
opcion1.innerHTML = 'Elegir';
opcion1.setAttribute('onclick', 'usuario(0);')
opcion1Image.appendChild(image1);
opcion1Image.appendChild(opcion1);
interfaz.appendChild(opcion1Image);

var opcion2Image = document.createElement('div');
var opcion2 = document.createElement('button');
var image2 = document.createElement('img');
image2.setAttribute("src", "./") //imagen-gato
image2.setAttribute("alt", "Gato de Papel")
image2.setAttribute("style", "width:100%") //ajustar
opcion2Image.classList.add('gatoPapel');
opcion2.classList.add('btn');
opcion2.innerHTML = 'Elegir';
opcion2.setAttribute('onclick', 'usuario(1);')
opcion2Image.appendChild(image2);
opcion2Image.appendChild(opcion2);
interfaz.appendChild(opcion2Image);

var opcion3Image = document.createElement('div');
var opcion3 = document.createElement('button');
var image3 = document.createElement('img');
image3.setAttribute("src", "./") //imagen-gato
image3.setAttribute("alt", "Gato de Tijera")
image3.setAttribute("style", "width:100%") //ajustar
opcion3Image.classList.add('gatoTijera');
opcion3.classList.add('btn');
opcion3.innerHTML = 'Elegir';
opcion3.setAttribute('onclick', 'usuario(2);')
opcion3Image.appendChild(image3);
opcion3Image.appendChild(opcion3);
interfaz.appendChild(opcion3Image);
/*+++++++++++++++++++++++++++++++++++++++++*/

/*Efecto */
var efecto = document.createElement('div');
var retry = document.createElement('button');
efecto.appendChild(retry);
retry.setAttribute('style', 'display: none');
retry.classList.add('btnRetry');
retry.setAttribute('onclick', 'quitarEfecto();')
retry.innerHTML = 'Juega Otra vez';
interfaz.appendChild(efecto);


/*Elecciones de usuario y maquina*/
var opciones = [0, 1, 2];
var eleccionUsuario;
var eleccionIA = 0;



function aleatorio(minimo, maximo) {
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}

function usuario(eleccionUsuario) {
    eleccionUsuario = parseInt(eleccionUsuario);
    eleccionIA = aleatorio(0, 2);
    // console.log(eleccionUsuario);
    // console.log("IA:" + eleccionIA);


    if (eleccionUsuario == 0) { //el usuario eligio piedra 
        if (opciones[eleccionIA] == 1) { //si la maquina eligio papel 
            efecto.innerHTML = '<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>';
            console.log('piedra');
        } else {
            if (opciones[eleccionIA] == 2) {
                efecto.innerHTML = '<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>';
            } else {
                if (opciones[eleccionIA] == 0) {
                    efecto.innerHTML = '<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>';
                }
            }
        }
    }
    if (eleccionUsuario == 1) { //el usuario eligio papel 
        if (opciones[eleccionIA] == 2) {
            efecto.innerHTML = '<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>';
        } else {
            if (opciones[eleccionIA] == 0) {
                efecto.innerHTML = '<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>';

            } else {
                if (opciones[eleccionIA] == 1) {
                    efecto.innerHTML = '<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>';
                }
            }
        }
    }

    if (eleccionUsuario == 2) { //el usuario eligio tijera 
        if (opciones[eleccionIA] == 1) {
            efecto.innerHTML = '<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>';

        } else {
            if (opciones[eleccionIA] == 0) {
                efecto.innerHTML = '<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>';
            } else {
                if (opciones[eleccionIA] == 2) {
                    efecto.innerHTML = '<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>';
                }
            }
        }

    }

}


function quitarEfecto() {
    retry.style.display = "";
}
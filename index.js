var interfaz = document.createElement('div');
interfaz.classList.add('cuadro')
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
opcion3Image.appendChild(image3);
opcion3Image.appendChild(opcion3);
interfaz.appendChild(opcion3Image);



/********************************No merezco su amor, pero realmente lo agradezco mucho*/

function aleatorio(minimo, maximo) {
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}

function usuario(eleccionUsuario) {
    eleccionUsuario = parseInt(eleccionUsuario);
    eleccionMaquina = aleatorio(0, 2);
}

var opciones = ["piedra", "papel", "tijera"];
var eleccionIA;

// class Gato {
//     constructor() {
//         this.ataque = "El gato ha atacado";
//         this.defensa = "El gato ha sido atacado;";
//     }

// }

// class GatoPiedra extends Gato {
//     constructor()
// }
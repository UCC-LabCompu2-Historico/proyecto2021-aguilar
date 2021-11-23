/** Variables globales
 * @type {number}
 * alto = altura edificio

var alto = 0;
x = 130 + (alto / 3);
dx = 3;
*/

/**
 * Calcula la altura del edificio segun los datos ingresados por el usuario
 * (Velocidad incial, Tiempo, Gravedad)
 * @method calcularAltura
 */
function calcularAltura() {

    var Vi, T, G;
    var uVi, uT;
    var altura;

    /** Nombro las variables segun los datos que pedi que ingrese el usuario */
    Vi = document.getElementById("velocidadInicial").value;
    T = document.getElementById("tiempo").value;
    G = document.getElementById("gravedad").value;

    /** El usuario decide las unidades de los datos que ingresa */
    uVi = document.getElementById("UnidadesVelocidadInicial").value;
    uT = document.getElementById("UnidadesTiempo").value;


    /** Alertas en caso que los datos ingresados no sean validos*/
    if (Vi === "") {
        alert("Debe ingresar la Velocidad Inicial");
        document.getElementById("velocidadInicial").value = "";
    } else if (G === "") {
        alert("Presionar nuevamente Calcular Altura")
        document.getElementById("gravedad").value = 9.8;
    } else if (T === "") {
        alert("Debe ingresar el Tiempo");
        document.getElementById("tiempo").value = "";
    } else if (Vi <= 0) {
        alert("La Velocidad Inicial debe tener un valor mayor a cero");
        document.getElementById("velocidadInicial").value = "";
    } else if (T <= 0) {
        alert("El tiempo debe tener un valor mayor a cero");
        document.getElementById("tiempo").value = "";
    } else if (G != 9.8) {
        alert("El valor correcto de la gravedad es de 9.8");
        document.getElementById("gravedad").value = "";
    }


    /** Calculo de la altura segun las unidades elegidas */
    else if (Vi > 0 && T > 0) {
        if (uVi == "cm/s") {
            Vi = Vi / 100;
        } else if (uVi == "km/h") {
            Vi = Vi / 3.6;
        }
        if (uT == "h") {
            T = T / 3600;
        } else if (uT == "min") {
            T = T * 60;
        }
        altura = ((Vi * T) + (0.5 * G * Math.pow(T, 2))).toFixed(2);
        document.getElementById("botonResultado").innerHTML = altura + " [m]";
    }
}
/**
 * Funcion que llama a las 2 funciones de edificio y pelota
 * @method funciones
 * @param gravedad - La gravedad ingresada por el usuario
 * @param tiempo - El tiempo que tarda en caer el objeto, ingresado por el usuario
 * @param velocidadI - La veocidad inicial ingresada por el usuario
 */
function funciones(gravedad,tiempo,velocidadI)
{

    dibujarEdificio(gravedad,tiempo,velocidadI);
    dibujarPelota();

}

/**
 * Dibuja el edificio desde el que se deja caer un objeto en caida libre
 * @method dibujarEdificio
 * @param gravedad - La gravedad ingresada por el usuario
 * @param tiempo - El tiempo que tarda en caer el objeto, ingresado por el usuario
 * @param velocidadI - La veocidad inicial ingresada por el usuario
 */
function dibujarEdificio(gravedad, tiempo, velocidadI) {
    var canvas = document.getElementById("imgEjercicio");
    var ctx = canvas.getContext("2d");

    var xMax = canvas.width;
    var yMax = canvas.height;

    canvas.width = canvas.width;

    //Calculo la altura del edificio
    Vi = document.getElementById("velocidadInicial").value;
    T = document.getElementById("tiempo").value;
    G = document.getElementById("gravedad").value;
    uVi = document.getElementById("UnidadesVelocidadInicial").value;
    uT = document.getElementById("UnidadesTiempo").value;

    ///Alertas
    if (Vi === "") {
        alert("Debe ingresar la Velocidad Inicial");
        document.getElementById("velocidadInicial").value = "";
    } else if (G === "") {
        alert("Presionar nuevamente Calcular Altura")
        document.getElementById("gravedad").value = 9.8;
    } else if (T === "") {
        alert("Debe ingresar el Tiempo");
        document.getElementById("tiempo").value = "";
    } else if (Vi <= 0) {
        alert("La Velocidad Inicial debe tener un valor mayor a cero");
        document.getElementById("velocidadInicial").value = "";
    } else if (T <= 0) {
        alert("El tiempo debe tener un valor mayor a cero");
        document.getElementById("tiempo").value = "";
    } else if (G != 9.8) {
        alert("El valor correcto de la gravedad es de 9.8");
        document.getElementById("gravedad").value = "";
    }

    //Calculo
    else if (Vi > 0 && T > 0) {
        if (uVi == "cm/s") {
            Vi = Vi / 100;
        } else if (uVi == "km/h") {
            Vi = Vi / 3.6;
        }
        if (uT == "h") {
            T = T / 3600;
        } else if (uT == "min") {
            T = T * 60;
        }
        alto = ((Vi * T) + (0.5 * G * Math.pow(T, 2))).toFixed(2);
    }

    if (alto > 145) {
        alert("La altura del edificio no cumple con los reglamentos de la ciudad. Ingrese los datos nuevamente");
        Vi = document.getElementById("velocidadInicial").value = "";
        T = document.getElementById("tiempo").value = "";
        G = document.getElementById("gravedad").value = "";
    } else if (alto <= 145) {

        //Pongo imagen de fondo
        ctx.drawImage(img, 0, 0, xMax, yMax);

        //Dibujo edificio
        // el ancho del edificio se calcula a partir de la altura dividido 4

        ctx.beginPath();
        ctx.fillStyle = "#92270a";
        ctx.fillRect(130, yMax - alto, alto / 3.5, alto * 1);
        ctx.stroke();
        ctx.closePath();

        //Dibujar ventanas
        ctx.beginPath();
        for(var i = yMax + 2; i > yMax - alto + 4;)
        {
            ctx.moveTo(135,i);
            ctx.lineTo(((alto / 3.5) - 10) + 135,i);
            ctx.lineWidth = 4;
            ctx.strokeStyle="#636161";
            ctx.stroke();
            i = i - 7;
        }
        ctx.closePath();


    }
}
function dibujarPelota()
{
    var canvas = document.getElementById("imgEjercicio");
    var ctx = canvas.getContext("2d");

    var yMax = canvas.height;

    canvas.width = canvas.width;

    ctx.beginPath();
    ctx.arc(130 + (alto / 3), yMax - alto, 2, 0, 2*Math.PI);
    ctx.strokeStyle="#000000";
    ctx.stroke();
    ctx.closePath();
}



/**
function animarPelota()
{
        setInterval(DibujarCirculo, 1000);
}
 */

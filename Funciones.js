/**
 * Calcula la altura del edificio segun los datos ingresados por el usuario
 * (Velocidad incial, Tiempo, Gravedad)
 * @method calcularAltura
 */

function calcularAltura()
{
    var Vi, T, G;

    Vi = document.getElementById("velocidadInicial").value;
    T = document.getElementById("tiempo").value;
    G = document.getElementById("gravedad").value;

    if(Vi == "" || T == "" || G == "") {
        alert("No ingreso todos los datos");
    }
    else if(Vi <= 0 || T <= 0 || G <= 0){
        alert("Los valores deben ser positivos");
        document.getElementById("velocidadInicial").value = "";
        document.getElementById("tiempo").value = "";
        document.getElementById("gravedad").value = "";
    }
    else if(Vi > 51.5 || T > 3 || G < 9.80 || G > 10){
        alert("Valores invalidos, ingresar nuevamente");
        document.getElementById("velocidadInicial").value = "";
        document.getElementById("tiempo").value = "";
        document.getElementById("gravedad").value = "";
    }
    else if(Vi > 51.5) {
        alert("Ingrese una velocidad inicial positiva menor o igual a 51.5");
        document.getElementById("velocidadInicial").value = "";
    }
    else if(T > 3) {
        alert("Ingrese un valor para el tiempo positivo  menor o igual a 3")
        document.getElementById("tiempo").value = "";
    }
    else if(G < 9.80 || G > 10)
    {
        alert("Ingrese una gravedad entre 9.8 y 10 ");
        document.getElementById("gravedad").value = "";
    }
    else{
        document.getElementById("Altura").innerHTML = ((Vi*T) + 0.5 * G * T^2) + " [m]";
    }
}

/**
* Dibuja el edificio desde el que se deja caer un objeto en caida libre
* @method dibujarEdificio
* @param gravedad - La gravedad ingresada por el usuario
 * @param tiempo - El tiempo que tarda en caer el objeto, ingresado por el usuario
 * @param velocidadI - La veocidad inicial ingresada por el usuario
 */

function dibujarEdificio(gravedad,tiempo,velocidadI)
{
    var canvas = document.getElementById("imgEjercicio");
    var ctx = canvas.getContext("2d");

    var xMax = canvas.width;
    var yMax = canvas.height;

    canvas.width = canvas.width;
    var alto = ((velocidadI*tiempo) + 0.5 * gravedad * tiempo^2);

    //Dibujo edificio
    ctx.beginPath();
    ctx.fillStyle = "#126629";
    ctx.fillRect(xMax/2,yMax/2,20,alto*1 );

    ctx.stroke();
    ctx.closePath();

}

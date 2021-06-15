/**
 * Calcula la altura del edificio segun los datos ingresados por el usuario
 * (Velocidad incial, Tiempo, Gravedad)
 * @method calcularVoltaje
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
        alert("Los ingresados superan el limite");
        document.getElementById("velocidadInicial").value = "";
        document.getElementById("tiempo").value = "";
        document.getElementById("gravedad").value = "";
    }
    else{
        document.getElementById("Altura").innerHTML = ((Vi*T) + 0.5 * G * T^2) + " [m]";
    }
}
function factorialN() {
    var N = prompt("Ingrese un valor:", 3);
    var i = 1;
    var resp = 1;

    if (N >= 0) {
        if (N == 0) {
            alert("El factorial de " + N + " es " + resp + ".");
        } else {
            while (i <= N) {
                resp *= i;
                i += 1;
            }
            alert("El factorial de " + N + " es " + resp + ".");
        }
    } else {
        alert("No existe el factorial de un negativo.");
    }
}

function calcularFactorial(N) {
    //var N = prompt("Ingrese un valor:", 3);
    var i = 1;
    var resp = 1;

    if (N >= 0) {
        if (N == 0) {
            //alert("El factorial de " + N + " es " + resp + ".");
            return resp
        } else {
            while (i <= N) {
                resp *= i;
                i += 1;
            }
            //alert("El factorial de " + N + " es " + resp + ".");
            return resp
        }
    } else {
        alert("No existe el factorial de un negativo.");
    }
}

function mayorAyB() {
    var A = prompt("Ingrese A", 10);
    A = parseInt(A);
    var B = prompt("Ingrese B", 7);
    B = parseInt(B);

    if (A == B) {
        alert("Los dos son iguales.");
    } else {
        if (A > B) {
            alert("El mayor es A: " + A);
        } else {
            alert("El mayor es B: " + B);
        }
    }
}

function menorAyB() {
    var A = prompt("Ingrese A", 10);
    A = parseInt(A);
    var B = prompt("Ingrese B", 7);
    B = parseInt(B);

    if (A == B) {
        alert("Los dos son iguales.");
    } else {
        if (A > B) {
            alert("El menor es B: " + B);
        } else {
            alert("El menor es A: " + A);
        }
    }
}

function obtenerDiv() {
    var A = parseInt(prompt("Ingrese A:", 10));
    var B = parseInt(prompt("Ingrese B:", 7));
    var resultado = ~~(A / B);

    alert(resultado);
}

function obtenerMod() {
    var A = parseInt(prompt("Ingrese A:", 10));
    var B = parseInt(prompt("Ingrese B:", 7));
    var resultado = A % B;

    alert(resultado);
}

function digitosN() {
    var N = parseInt(prompt("Ingresar N", 3));
    var resp = N;
    var cantidad = 1;

    if (N == 0) {
        cantidad = 1;
        alert(cantidad + " dígitos");
    } else {
        while (N != 0) {
            N = parseInt(N / 10);
            cantidad += 1;
        }
        alert(cantidad + " dígitos");
    }
}

function retornarDigitosN() {
    var N = parseInt(prompt("Ingresar N", 3));
    var dig = 0;

    if (N == 0) {
        dig = N;
        alert(dig);
    } else {
        while (N != 0) {
            dig = N % 10;
            alert(dig);
            N = parseInt(N / 10);
        }
    }
}

function mostrarTres() {
    var N = parseInt(prompt("Ingresar N", 3));
    var dig = 0;

    while (N != 0) {
        dig = N % 10;
        if (dig == 3) {
            alert("Existe el número 3");
            break
        }
        N = parseInt(N / 10);
    }
}

function areaPerimetroTrapecio() {
    var h = parseInt(prompt("Ingrese h:", 10));
    var b = parseInt(prompt("Ingrese b:", 5));
    var B = parseInt(prompt("Ingrese B:", 15));
    var a = parseInt(prompt("Ingrese a:", 10));
    var c = parseInt(prompt("Ingrese c:", 7));

    var Area = 0, Perimetro = 0;

    Area = ((b + B) / 2) * h;
    Perimetro = a + b + B + c;

    alert("El área es: " + Area);
    alert("El perímetro es: " + Perimetro);
}

function NParOImpar() {
    /* If normal

    var N = parseInt(prompt("Ingrese N:", 115));

    if ((N % 2) == 0) {
        alert(N + " es par.");
    } else {
        alert(N + " es impar.");
    }

    */
   
    // If abreviado

    var N = parseInt(prompt("Ingrese N:", 115));
    (N % 2) == 0 ? 10 : 1;
}

function ifNormal() {
    var N = parseInt(prompt("Ingrese N:", 115));

    if (N > 5) {
        N = 10;
    } else {
        N = 1;
    }
    alert(N)
}

function ifAbreviado() {
    var N = parseInt(prompt("Ingrese N:", 115));
    N = (N > 5) ? 10 : 1;
    alert(N);
}

function digitosNFOR() {
    var N = parseInt(prompt("Ingresar N", 3));

    if (N == 0) {
        alert(1 + " dígitos");
    } else {
        for (var cantidad = 0; N != 0; cantidad += 1) {
            N = parseInt(N / 10);
        }
        alert(cantidad + " dígitos");
    }
}





function mostrarSuma1_10() {
    sum = 0
    ini = 0
    lim = 0
    while (ini <= 10) {
        sum = sum + ini
        ini = ini + 1
    }
    alert("sumatoria de 1 a 10: " + sum)
}

function calcularAreaVolumenDeCilindro() {
    var R = parseInt(prompt("Ingrese el radio: ", 3))
    var H = parseInt(prompt("ingrese la altura: ", 5))
var area = 2 * Math.PI * R * (R + H)
var volumen = Math.PI * Math.pow(R, 2) * H
alert("area: " + area + " volumen: " + volumen)
}

function NumeroPositivoNegativoNuetro() {
    var N = parseInt(prompt("Ingrese un numero: ", 1))
    if (N > 0) {
        alert( N + " es positivo");
    }else {
        if (N < 0){
            alert( N + " es negativo");
        }else {
            alert( N + " es neutro");
        }
    }
}

function MostrarNumeroMenor() {
    var A = parseInt(prompt("Ingrese un numero: ", 0))
    var B = parseInt(prompt("Ingrese un numero: ", 1))
    if ( A < B) {
        alert( A + " es menor");
    }else {
        alert( B + " es menor");
    }
}

function NmultiploDeM() {
    var N = parseInt(prompt("Ingrese un N: ", 10))
    var M = parseInt(prompt("Ingrese un M: ", 1))
    if ((N % M) == 0) {
        alert( N + " es multiplo de " + M);
    }else {
        alert( N + " no es multiplo de " + M);
    }
}

function SumaDigMultiplo3deN() {
    var N = parseInt(prompt("Ingrese un numero: ", 23462314))
    var sum = 0
    var dig = 0
    while (N != 0) {
        dig = parseInt(N % 10)
        if ((dig % 3) == 0) {
            sum = sum + dig
        }
        N = parseInt(N / 10)
    }
    alert(sum)
}

function SumaNumerosEntreAyB() {
    var A = parseInt(prompt("Ingrese A: ", 2))
    var B = parseInt(prompt("Ingrese B: ", 10))
    var suma = 0
    while ( A <= B) {
        suma = suma + A
        A = A + 1
    }
    alert(suma)
}

function PromedioDeNotas() {
    var N = parseInt(prompt("Ingrese N: ", 0))
    var sumaNota = 0
    var i = 0
    while (N > i) {
        i = i + 1
        var nota = parseInt(prompt("Ingrese Nota: ", 80))
        sumaNota = sumaNota + nota
    }
    alert(sumaNota/N)
}


var myVariableGlobal = "Hola Mundo"

function obtenerNombreCompleto (nombre , apellido) {
    var nombreCompleto = nombre + " " + apellido + " " + myVariableGlobal
    return nombreCompleto
}

function obtenerEdad (edad) {
    edad = edad + 18
    return edad
}

function verificarMayorEdad (edad){
    if (edad >= 18){
        alert("Puedes pasar " + myVariableGlobal)
    }else{
        alert("Vuelve cuando tengas 18 " + myVariableGlobal)
    }
}

function funcionConReturn () {
    var myNombreCompleto = obtenerNombreCompleto("Ereli", "Ruiz")
    var myEdad = obtenerEdad(5)
    alert("Nombre: " + myNombreCompleto)
    alert("Edad: " + myEdad)
    verificarMayorEdad(myEdad)
}

/* SECCION DE CODIGO PARA LA CALCULADORA*/

//Dar un numero valor al INPUT "resultado" en la pag HTML

function darValor(valor) {
    document.getElementById("resultado").value = valor
}

// Obtener el valor actual del IN`PUT "resultado" en la pag HTML
function obtenerValor(){
    var nro = document.getElementById("resultado").value
    return nro
    //alert(nro)
}

//adjuntsar un numero valor a la derecha
//del INPUT "resultado" en la pag HTML
function adjuntarValor(numero){
    var actualNumero = obtenerValor()
    var juntarNumero = actualNumero + "" + numero
    darValor(juntarNumero)
}

function factorial(){
    var N = obtenerValor()
    var resultadoFact = calcularFactorial(N)
    darValor(resultadoFact)
    //alert("soy factorial")
}

function potencia() {
alert("sor potencia")
}

function borrar(){
darValor("")
}

function dividir() {
alert("soy dividir")
}

function numero(dig) {
adjuntarValor(dig)
//alert("soy numero" + dig)
}

function multiplicar() {
alert("soy multiplicar")
}

function restar() {
alert("soy restar")
}

function sumar() {
alert("soy sumar")
}

function igual() {
alert("sor igual")
}

function MOD() {
alert("soy MOD")
}

function inverso() {
var valorResultado = obtenerValor()
    //alert("soy inverso " + valorResultado)
    if(valorResultado == 0){
        //nada
    }else{
        if(valorResultado > 0){
            //positivo
            valorResultado = valorResultado * -1
        }else{
            //negativo
            valorResultado = valorResultado * -1
        }
    }
    darValor(valorResultado)
    //alert("soy inverso: " + valorResultado)
    }



    function GetFrecuencyOffChar() {
        var cadena = prompt("Ingrese una cadena", "Universidad Cumbre")
        var longitudCad = cadena.length
        var i = 0
        var contar = 0
    
    }

    function grtCharByPosition() {
        var cadena = prompt("Ingrese una cadena", "Hola Mundo")
        var pos = parseInt(prompt("Ingrese uina posicion", 3))
        var caracter = cadena[pos]
        alert(caracter)
    }

    function joinTwoStrings(){
        var cadenaA = prompt("Ingrese la cadena A","Hola")
        var cadenaB = prompt("Ingrese la cadena B", "Mundo")
        var cadenasUnidas = cadenaA + cadenaB
        alert(cadenasUnidas)
    }

    function aCharFrequency() {
        var cadena = prompt("Ingrese una cadeena", "Hola Mundo")
        
    }

    function MiNombreASCII(){
        var var_E = String.fromCharCode(69)
        var var_r = String.fromCharCode(82 + 32)
        var var_e = String.fromCharCode(69 + 32)
        var var_l = String.fromCharCode(76 + 32)
        var var_i = String.fromCharCode(73 + 32)
        var var_espacio = String.fromCharCode(32)
        var var_V = String.fromCharCode(86)
        var var_i = String.fromCharCode(73 + 32)
        var var_v = String.fromCharCode(86 + 32)
        var var_i = String.fromCharCode(73 + 32)
        var var_a = String.fromCharCode(65 + 32)
        var var_n = String.fromCharCode(78 + 32)
        var var_a = String.fromCharCode(65 + 32)
        var var_espacio = String.fromCharCode(32)
        var var_R = String.fromCharCode(82)
        var var_u = String.fromCharCode(85 + 32)
        var var_i = String.fromCharCode(73 + 32)
        var var_z = String.fromCharCode(90 + 32)
        var var_espacio = String.fromCharCode(32)
        var var_V = String.fromCharCode(86)
        var var_a = String.fromCharCode(65 + 32)
        var var_r = String.fromCharCode(82 + 32)
        var var_g = String.fromCharCode(71 + 32)
        var var_a = String.fromCharCode(65 + 32)
        var var_s = String.fromCharCode(83 + 32)
        alert(var_E + var_r + var_e + var_l + var_i + var_espacio +
              var_V + var_i + var_v + var_i + var_a + var_n + var_a + var_espacio
               + var_R + var_u + var_i + var_z + var_espacio
              + var_V + var_a + var_r + var_g + var_a + var_s)
    }

    function countVocals(){
        var cadena = prompt("Ingrese una cadena", "Hola Mundo")
        var longCad = cadena.length
        var i = 0
        var frecuencia = 0

        while(i < longCad) {
            var caracter = cadena[i]
            if (caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter == 'o' || caracter == 'u'
            || caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U') {
                frecuencia = frecuencia + 1
            }
            i++
        }
        alert("La cantidad de vocales es: " + frecuencia)
    }

    function contarPalabras() {
        var cadena = prompt("Ingrese una cadena", "Hola Mundo")
        var longCad = cadena.length
        var i = 0
        var frecuencia = 1

        while(i < longCad) {
            var caracter = cadena[i]
            if (caracter == " ") {
                frecuencia = frecuencia + 1
            }
            i++
        }
        alert("La cantidad de palabras es: " + frecuencia)
    }

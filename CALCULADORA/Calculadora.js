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

function calcularFactorial(N) {
    var i = 1
    var resp = 1

    if (N >= 0) {
        if (N == 0) {
            return resp
        } else {
            while (i <= N) {
                resp *= i
                i += 1
            }
            return resp
        }
    } else {
        alert("No existe el factorial de un negativo.")
        return(N)
    }
}

function factorial(){
    var N = obtenerValor()
    var resultadoFact = calcularFactorial(N)
    darValor(resultadoFact)
    //alert("soy factorial")
}

function potencia() {
    A = obtenerValor()
    darValor("")
    operacion = "potencia"
    //alert("soy una potencia")
}

function borrar() {
    darValor("")
    //alert("soy borrar")
}

function dividir() {
    A = obtenerValor()
    darValor("")
    operacion = "dividir"
    //alert("soy dividir")
}

function numero(dig) {
    adjuntarValor(dig)
    //alert("soy numero")
}

function multiplicar() {
    A = obtenerValor()
    darValor("")
    operacion = "multiplicar"
    //alert("soy multiplicar")
}

function restar() {
    A = obtenerValor()
    darValor("")
    operacion = "restar"
    //alert("soy restar")
}

function sumar() {
    A = parseInt(obtenerValor())
    darValor("")
    operacion = "sumar"
    //alert("soy sumar")
}

function igual() {
    var B = parseInt(obtenerValor())
    if (operacion == "potencia") {
        var res = NpotenciaDePconParams(A, B)
        darValor(res)
        operacion = ""
    }
    if (operacion == "dividir") {
        var res = dividirAyB(A, B)
        darValor(res)
        operacion = ""
    }
    if (operacion == "multiplicar") {
        var res = multiplicarAyB(A, B)
        darValor(res)
        operacion = ""
    }
    if (operacion == "restar") {
        var res = restarAyB(A, B)
        darValor(res)
        operacion = ""
    }
    if (operacion == "sumar") {
        var res = sumarAyB(A, B)
        darValor(res)
        operacion = ""
    }
    if (operacion == "MOD") {
        var res = ModAyB(A, B)
        darValor(res)
        operacion = ""
    }
    //alert("soy igual")
}

function MOD() {
    A = obtenerValor()
    darValor("")
    operacion = "MOD"
    //alert("soy MOD")
}

function inverso() {
var valorResultado = obtenerValor()
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

function NpotenciaDeP() {
    var N = parseInt(prompt("Ingrese N:", 3))
    var P = parseInt(prompt("Ingrese P:", 4))
    var i = 1, res = 1

    while (i <= P) {
        res = res * N
        i = i + 1
    }

    alert(res)
}

function NpotenciaDePconParams(N, P) {
    var i = 1, res = 1
    while (i <= P) {
        res = res * N
        i = i + 1
    }
    return res;
}

function dividirAyB(A, B){
    return A / B;
}

function multiplicarAyB(A, B){
    return A * B;
}

function restarAyB(A, B){
    return A - B;
}

function sumarAyB(A, B){
    return A + B;
}

function ModAyB(A, B){
    return A % B;
}

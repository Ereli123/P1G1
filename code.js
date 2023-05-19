
function obtenerCantidadDigN () {
var N parseInt(prompt("Ingrese N", 9478324))
var cantidad = 0
while (N != 0){
    N = parseInt(N / 10)
    cantida = cantidad + 1
}
alert("digitos: " + cantida)
}


function calcularTrapecio () {
    var h = parseInt(prompt("Ingrese h", 10))
    var b = parseInt(prompt("Ingrese b", 5))
    var B = parseInt(prompt("Ingrese B", 15))
    var a = parseInt(prompt("Ingrese a", 10))
    var c = parseInt(prompt("Ingrese c", 7))
    var area = 0
    var perimetro = 0
    area = ((b+B) / 2) * h
    perimetro = a + b + B + c
    alert("El area es: " + area)
    alert("El perimetro es: " + perimetro)

}

function determinarNesParImpar(){
    var N = parseInt(prompt("Ingrese N"))
    if ((N % 2) == 0) {
        alert(N + " es par.")
    } else {
        alert(N + " es impar.")
    }
}

function ifNormal() {
    var N = parseInt(prompt("Ingrese N"))
    if (N > 5) {
        N = 10
    }else {
        N = 1
    }
    alert(N)
}

function ifAbreviado() {
    var N = parseInt(prompt("Igrese N"))
    N = (N > 5) ? 10 : 1
    alert(N)
}

/*
var N parseInt(prompt("Ingrese N", 9478324))
var cantidad = 0
while (N != 0){
    N = parseInt(N / 10)
    cantida = cantidad + 1
}
alert("digitos: " + cantida)
*/

function obtenerCantidadDigN_FOR(){
    var N parseInt(prompt("Ingrese N", 9478324))
var cantidad = 0
for (cantidad = 0; N != 0; cantidad++) {
    N = parseInt(N / 10)
}
alert("digitos: " + cantida )
}
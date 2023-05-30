

function VerPersonas() {
    var persona = new Persona() //creando mi clase
    persona.SetNombre("Viviana")
    persona.SetCarnet(15)
    var name = persona.GetNombre()

    alert(name)

    if(persona.GetEdad() > 18) {
        alert("Mayor de edad")
    }else{
        alert("Vuelva pronto")
    }

}
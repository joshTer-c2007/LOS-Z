saludar=function(){
    let nombre;
    let apellido;
    let saludo;

    nombre=document.getElementById("txtNombre").value;
    apellido=document.getElementById("txtApellido").value;
    saludo=generarSaludo(nombre,apellido);
    console.log("HOLA "+nombre+" "+apellido);
}
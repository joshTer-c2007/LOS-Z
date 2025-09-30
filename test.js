saludar=function(){
    let nombre;
    let apellido;
    let saludo;

    nombre=document.getElementById("txtNombre");
    apellido=document.getElementById("txtApellido");
    saludo=generarSaludo(nombre,apellido);
    console.log(saludo);
}
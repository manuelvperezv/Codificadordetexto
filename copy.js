function copyText(){

    //declaracion de variables
    var copiar = document.getElementById("mostrarTextarea");   
   //Selecciona el campo de texto
    copiar.select();
    copiar.setSelectionRange(0,99999); // para moviles
    //copia el contenido del textarea
    navigator.clipboard.writeText(copiar.value);

}
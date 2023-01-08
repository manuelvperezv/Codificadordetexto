function desencripta() {

//Variables
var botonEncriptar = document.getElementById("desencriptar");
const arrayCod= ["e","i","a","o","u"]; 
const arrayCodigo = ["enter", "imes", "ai", "ober", "ufat"] 
var mostrar=document.getElementById(id="mostrarTextarea"); 

//Limpia el Textarea en caso de multiples usos
document.getElementById("mostrarTextarea").value = " "; 

//Realiza el encriptado

for (var i=0; i <= arrayCod.length; i++)     {    

    //declaracion de variables internas
    
    var inputData=document.getElementById("ingresarTexto").value;
    var reemplazo=inputData.replaceAll(arrayCodigo[i],arrayCod[i]);  //reemplazo                
          
    //asignar donde mostrar los resultados
    document.getElementById(id="ingresarTexto").value=reemplazo;   
    document.getElementById(id="mostrarTextarea").value=reemplazo;           
}

//limpia donde se ingresó el texto a encriptar
document.getElementById("ingresarTexto").value = ""; 
}
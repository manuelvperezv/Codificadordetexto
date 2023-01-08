function mostrarTxtareaBoton() {

    //declaracion de variables
    var botonEncriptar = document.getElementById("encriptar");
    let area = document.getElementById("ocultar-mostrar");
    var inputData=document.getElementById("ingresarTexto").value;

    if (inputData == ''){
        document.getElementById("p-1").classList.add('p-1Advertencia');
    }
        
    else{

        //codigo html que se debe escribir dentro de <div id "ocultar-mostrar"> sustituyendo a la original
    let textareaBoton = ` <textarea class="mostrarTextarea" id="mostrarTextarea"></textarea>  <div id="mostrarBtn" class="mostrarBtn"> 
    <button type="button" class="copy" onclick="copyText()"><span class="copy-icon"><i class="fa fa-copy"></i></span><span class="copiar-text"><span>Copiar</span></span></button>
</div> ` 

    //limpia el contenido de <div id "ocultar-mostrar"> para que texto pueda escribirse

    document.getElementById("ocultar-mostrar").innerHTML = '';

    //asigna el valor de texto a <div id "ocultar-mostrar">
        
    area.innerHTML = textareaBoton; 
    
}

}



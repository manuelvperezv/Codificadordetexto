function desencriptador(){

    const letrasNovalidas = /[A-Z]/g;
    const caracteres= /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/;
    let inputsData=document.getElementById("ingresarTexto").value;
    
    document.getElementById("advertencia").classList.remove('advertenciaRemarcada'); //clase por defecto

    if ((inputsData.match(letrasNovalidas)) || (inputsData.match(caracteres))){
        document.getElementById("advertencia").classList.add('advertenciaRemarcada'); 
    }
    else
    {          
        mostrarTxtareaBoton();
        desencripta();           
    }
       
}
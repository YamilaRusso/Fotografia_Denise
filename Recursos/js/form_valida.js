//Validación de un formulario con Javascript
// Esta función valida todos los campos del form.
// Si alguno no cumple con los requisitos, se aborta
// con return. Caso contrario, al final se realiza 
// efectivamente el envio de los datos.



function valida_envia() {
    //valido el nombre

    if (document.fvalida.nombre.value.length == 0) {
        alert("Ingrese su nombre");
        document.fvalida.nombre.focus();
        return 0;
    }
    
    if (document.fvalida.nombre.value.length<2){
        alert("El nombre debe tener 2 o mas caracteres");
        document.fvalida.nombre.focus();
        return 0;
    }

    // valido email

   

    if (document.fvalida.email.value.length == 0) {
        alert("Ingrese su e-mail (dato obligatorio)");
        document.fvalida.email.focus();
        return 0;
    }
 

    //valido el telefono
  
    tel = document.fvalida.tel.value;
    tel = validarEntero(tel); // esta funcion valida que hayan ingresado un entero//
    document.fvalida.tel.value = tel;

    if (tel =="") {
        alert("Introduzca su numero de telefono, solo números sin guiones");
        document.fvalida.tel.focus();
        return 0;
    }
    if (document.fvalida.tel.value.length<6){
        alert("El numero de telefono, debe tener al menos 6 digitos");
        document.fvalida.tel.focus();
        return 0;
    }
    //valido Servicio
   	if (document.fvalida.servicio.selectedIndex==0){
        alert("Debe seleccionar el tipo de servicio que desea consultar.");
        document.fvalida.servicio.focus();
        return 0;
     } 
     // valido comentario
     
     if (document.fvalida.comentario.value==" " || document.fvalida.comentario.value=="" ){
        alert("Por favor ingrese su consulta");
        document.fvalida.comentario.focus();
        return 0;
     }

     //Finalmente, si llegó hasta aqui, se envia el form.
        alert("Muchas gracias por enviar el formulario");
        
        document.fvalida.submit();
        
}   
 

function validarEntero(valor) {
    //intento convertir a entero.
    //si era un entero no le afecta, si no lo era lo intenta convertir
    valor = parseInt(valor)

    //Compruebo si es un valor numérico
    if (isNaN(valor)) {
        //entonces (no es numero) devuelvo el valor cadena vacia
        return ""
        } else {
                //En caso contrario (Si era un número) devuelvo el valor
                return valor
        }
}


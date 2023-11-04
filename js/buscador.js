$(function(){
    let fechaSalida = $("#fechaSalida");
    let fechaRegreso = $("#fechaRegreso");

    let fecha = new Date();
    let fechaFormateada = convertirFecha(fecha)
    
    //Inicia para salir y regresar en la fecha actual 
    fechaSalida.val(fechaFormateada);
    fechaRegreso.val(fechaFormateada);

    // Bloqueo fechas anteriores a hoy
    fechaSalida.attr("min", fechaFormateada);
    fechaRegreso.attr("min", fechaFormateada);

    // Puede buscar hasta 6 meses desde la fecha actual
    let dias = 180; 
    fecha.setDate(fecha.getDate() + dias);

    max = convertirFecha(fecha)
    fechaSalida.attr("max", max);
    fechaRegreso.attr("max", max);

    fechaSalida.on("change", function(){
        var salida = fechaSalida.val();

        // Actualizo la fecha de regreso si cambio la fecha actual
        fechaRegreso.val(salida);
        // Bloqueo fechas anteriores a la nueva salida
        fechaRegreso.attr("min", salida);
    });
    
    function convertirFecha(fecha){
        const yyyy = fecha.getFullYear();
        let mm = fecha.getMonth() + 1; 
        let dd = fecha.getDate();

        if(mm < 10) mm = "0" + mm;
        if(dd < 10) dd = "0" + dd;
        return yyyy + "-" + mm + "-" + dd;
    }

});
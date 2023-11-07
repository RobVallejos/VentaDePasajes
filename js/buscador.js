

    let ida = $("#inputIda");
    let divRegreso = $("#divRegreso");
    let fechaSalida = $("#fechaSalida");
    let fechaRegreso = $("#fechaRegreso");
    let swapTrip = $("#swapTrip");

    // Seleccion tipo de viaje
    ida.attr("checked", "checked");
    deshabilitarRegreso();

    function deshabilitarRegreso(){
        fechaRegreso.attr("disabled", true);
        fechaRegreso.css("color", "#ccc");
        fechaRegreso.css("cursor", "inherit");
    }
    function habilitarRegreso(){
        fechaRegreso.attr("disabled", false);
        fechaRegreso.css("color", "#000");
        fechaRegreso.css("cursor", "pointer");
    }
    
    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='recorrido']:checked").val();
        (radioValue == 1) ? deshabilitarRegreso() : habilitarRegreso();
    });

    let destinos = ["Retiro", "Rosario", "Mendoza", "Salta", "Villa General Belgrano", "Iguazú"];

    $( "input[name='ciudad']" ).autocomplete({
        source: destinos,
        minLength: 3
    });
    

    swapTrip.click(function(){
        var salida = document.getElementById("inputOrigen");
        var llegada = document.getElementById("inputDestino");

        var aux = salida.value;
        salida.value = llegada.value;
        llegada.value = aux;
    });

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

    // Agregar-restar pasajeros
    let sumar = $("#sumarPax");
    let restar = $("#restarPax");
    let divCantidad = $("#cantPax");

    cantidad = 0
    divCantidad.val(cantidad);
    divCantidad.html(cantidad + "");
    sumar.click(function(){
        if(cantidad < 5)
            cantidad++;

        divCantidad.val(cantidad);
        divCantidad.html(cantidad + "");
    });
    restar.click(function(){
        if(cantidad > 0)
            cantidad--;

        divCantidad.val(cantidad);
        divCantidad.html(cantidad + "");
    });


    
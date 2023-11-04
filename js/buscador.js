$(function(){
    let ida = $("#inputIda");
    let idaVuelta = $("#inputIdaVuelta");
    let divRegreso = $("#divRegreso");
    let fechaSalida = $("#fechaSalida");
    let fechaRegreso = $("#fechaRegreso");

    // Seleccion tipo de viaje
    ida.attr("checked", "checked");
    fechaRegreso.attr("disabled", true);
    divRegreso.css("display", "none");

    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='recorrido']:checked").val();
        if(radioValue == 1){
            fechaRegreso.attr("disabled", true);
            divRegreso.css("display", "none");
        }
        else{
            fechaRegreso.attr("disabled", false);
            divRegreso.css("display", "block");
        }
    });

    let destinos = ["Retiro", "Rosario", "Mendoza", "Salta", "Villa General Belgrano", "Iguazú"];

    $( "input[name='ciudad']" ).autocomplete({
        source: destinos
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


    let viajes = {
        asientos : {
            ejecutivo: {
                asientos: 6,
                ubicaciones: ["1V", "2P", "3V", "4V", "5P", "6V"],
                precio: 3500,
                premium: true
            },
            cama: {
                asientos: 6,
                ubicaciones: [1, 2, 3, 4, 5, 6],
                precio: 3500,
                premium: true
            },
            semicama: {
                asientos: 6,
                ubicaciones: [1, 2, 3, 4, 5, 6],
                precio: 3500,
                premium: true
            }
        }
    }
});
$(function(){
    // REESULTADOS DE BUSQUEDA 
    let idaVuelta = $("#inputIdaVuelta");
    let resultadosIda = $("#resultadosIda");
    let resultadosVuelta = $("#resultadosVuelta");
    let tituloIda = $("#tituloIda");
    let tituloVuelta = $("#tituloVuelta");
    let btnBuscarViajes = $("#btnBuscarViajes");
    let mensajeError = $("#mensajeError");
    let viaje = "";
    let errorResultVacio = "<span class='fa fa-exclamation'></span><span> No se encontraron servicios. Pronto ampliaremos nuestra oferta de pasajes.</span>";
    let errorDestino = "<span class='fa fa-exclamation'></span><span> El destino debe ser distinto a la localidad de origen.</span>";
    let errorOrigen = "<span class='fa fa-exclamation'></span><span> Indique ciudad de origen y/o destino.</span>";
    let errorPasajero = "<span class='fa fa-exclamation'></span><span> ¿Seguro que nadie viajará?</span>";

    function buscarId(item) { 
        return item.id === viaje;
    }

    btnBuscarViajes.click(function(){
        let origen = $("#inputOrigen").val();
        let destino = $("#inputDestino").val();
        mostrarResultados(origen, destino, 0);

        if(idaVuelta.is(':checked')){
            mostrarResultados(destino, origen, 1);
        }
        
    });

    function mostrarResultados(origen, destino, flag){
        let contenido = "";
        const hoy = convertirFecha( new Date() );
        if (flag == 0) {
            resultadosIda.html("");
            tituloIda.css("display", "none");
            
        }
        if (flag == 1) {
            resultadosVuelta.html("");
            tituloVuelta.css("display", "none");
        }
        viaje = origen.toLowerCase() + destino.toLowerCase();
        let index = viajes.findIndex(buscarId);
        
        if(index != -1 && divCantidad.val() != 0){
            let oferta = viajes[index].it 
            for(var i=0; i<oferta.length ; i++){
                servicios = oferta[i].servicio
                for(var j=0; j<servicios.length ; j++){
                    if(oferta[i].salida >= hoy){
                        contenido ='<li appstoppropagation="" style="position: relative;" class="col-md-8 offset-md-2 trip-card desktop trip-card-selectable ng-star-inserted">';
                        if(servicios[j].premium) contenido +='<div style="display: inline-block; vertical-align: middle; position: absolute; top: 25px; right: 250px;"><img src="img/premium.png" style="width:50px; height:50px; vertical-align: middle;" alt="" ></div>';
                        contenido +='<div appstoppropagation="" class="trip-card__body"><div class="rowR align-middle"><div class="column"><div class="hora-salida">';
                        contenido +='<span class="sale"><b>Sale:</b> '+ oferta[i].fechaSalida +'</span>';
                        contenido +='<div class="box-hora"><span class="hora">'+ oferta[i].horaSalida +'</span></div>';
                        contenido +='<div class="rowR flex-c-trip ng-star-inserted"><span aria-hidden="true" class="text-ungs mr-geoLink fa fa-map-marker"></span><a class="ng-star-inserted">';
                        contenido +='<small class="ng-star-inserted">'+ oferta[i].origen +'</small>';
                        contenido +='</a></div></div></div><div class="column"><div class="trip-card__arrow text-center">';
                        contenido +='<div class="faster-travel ng-star-inserted">Duración</div>'+ oferta[i].duracion +'</div>';
                        contenido +='</div><div class="column"><div class="hora-llegada">';
                        contenido +='<span class="sale"><b>Llega:</b> '+ oferta[i].fechaLlegada +'</span>';
                        contenido +='<div class="box-hora"><span class="hora">'+ oferta[i].horaLlegada +'</span></div>';
                        contenido +='<div class="rowR flex-c-trip ng-star-inserted"><span aria-hidden="true" class="text-ungs mr-geoLink fa fa-map-marker"></span><a class="ng-star-inserted">';
                        contenido +='<small class="ng-star-inserted">'+ oferta[i].destino +'</small></a></div></div></div>';
                        contenido +='<div class="column small-4"><div class="wrap-price text-right"><span class="currency">ARS</span><span class="price-sig"> $ </span><span class="price">';
                        contenido +='<span>'+ servicios[j].precio +'</span>'
                        contenido +='</span></div></div></div></div><div class="trip-card__footer"><div appstoppropagation="" class="rowR align-middle"><div class="column"><div class="rowR" style="margin-left: 0px;"><div class="pt-3px large-5 text-center"><span class="hand"><i aria-hidden="true" class="fa fa-map-o"></i><span class="cat">Recorrido</span></span></div><div class="pt-3px large-5"><div class="categoryTrip"><span class="seat seatStyle"></span>';
                        contenido +='<span class="cat">'+ servicios[j].tipoAsiento +'</span>'
                        contenido +='</div></div><div class="pt-3px large-5"><div class="column shrink ng-star-inserted">Disponibles';
                        contenido +='<span class="badge cant">'+ servicios[j].asientos +'</span>'
                        contenido +='</div></div></div></div><div class="column shrink"><a href="compraPaso1.html" target="_blank" class="button btn-buy-full"><i aria-hidden="true" class="fa fa-shopping-cart"></i>';
                        contenido +='<span> Comprar</span></a></div></div></div></li>';

                        flag == 0 ? resultadosIda.append(contenido): resultadosVuelta.append(contenido);

                        if (flag == 0) tituloIda.css("display", "block");
                        if (flag == 1) tituloVuelta.css("display", "block");

                        mensajeError.attr("hidden", true);
                    }
                    
                }
            }
        }
        else{
            mensajeError.removeAttr("hidden");
            mensajeError.html(manejarErrores(origen, destino));
        }      
        
        $(".bus-search-container")[0].scrollIntoView();
        darMargen();
    }

    function manejarErrores(origen, destino){
        if(origen == "" || destino == "") return errorOrigen;
        if(origen == destino) return errorDestino;
        if(divCantidad.val() == 0) return errorPasajero;
        if(origen != destino) return errorResultVacio;
    }

    function darMargen(){
        var ancho = 940;
        var screen = window.screen.width;
        $("li.trip-card").css("margin-left", (screen - ancho)/2 + "px");
    }
});

const viajes = [
    {
        "id" : "retirorosario",
        "it": [
            {
                "horaSalida": "1:00",
                "horaLlegada": "5:15",
                "salida": "2023-11-10",
                "fechaSalida": "vie. 10 nov.",
                "fechaLlegada": "vie. 10 nov.",
                "origen": "Retiro",
                "destino": "Rosario",
                "duracion": "4 hs 35 min",
                "servicio": [
                    {
                        "tipo": "Ejecutivo", 
                        "asientos": 7,
                        "tipoAsiento": "cama",
                        "precio": 12500,
                        "premium": true
                    },
                    {
                        "tipo": "Comun",
                        "asientos": 33,
                        "tipoAsiento": "Semicama",
                        "precio": 8500,
                        "premium": false
                    }
                ]
            }
        ]
    },
    {
        "id" : "rosarioretiro",
        "it": [
            {
                "horaSalida": "9:00",
                "horaLlegada": "14:05",
                "salida": "2023-11-17",
                "fechaSalida": "vie. 17 nov.",
                "fechaLlegada": "vie. 17 nov.",
                "origen": "Rosario",
                "destino": "Retiro",
                "duracion": "4 hs 30 min",
                "servicio": [
                    {
                        "tipo": "Ejecutivo", 
                        "asientos": 9,
                        "tipoAsiento": "cama",
                        "precio": 10500,
                        "premium": true
                    },
                    {
                        "tipo": "Comun",
                        "asientos": 53,
                        "tipoAsiento": "Semicama",
                        "precio": 8000,
                        "premium": false
                    }
                ]
            },
            {
                "horaSalida": "19:55",
                "horaLlegada": "00:30",
                "salida": "2023-11-18",
                "fechaSalida": "sab. 18 nov.",
                "fechaLlegada": "dom. 19 nov.",
                "origen": "Rosario",
                "destino": "Retiro",
                "duracion": "4:30",
                "servicio": [
                    {
                        "tipo": "Ejecutivo", 
                        "asientos": 9,
                        "tipoAsiento": "cama",
                        "precio": 12000,
                        "premium": true
                    },
                    {
                        "tipo": "Comun",
                        "asientos": 53,
                        "tipoAsiento": "Semicama",
                        "precio": 8700,
                        "premium": false
                    }
                ]
            }
        ]
    },
    {
        "id" : "retirosalta",
        "it": [
            {
                "horaSalida": "10:45",
                "horaLlegada": "8:05",
                "salida": "2023-11-11",
                "fechaSalida": "sab. 11 nov.",
                "fechaLlegada": "dom. 13 nov.",
                "origen": "Retiro",
                "destino": "Salta",
                "duracion": "21 hs 30 min",
                "servicio": [
                    {
                        "tipo": "Ejecutivo", 
                        "asientos": 3,
                        "tipoAsiento": "Cama",
                        "precio": 42000,
                        "premium": true
                    },
                    {
                        "tipo": "Comun",
                        "asientos": 14,
                        "tipoAsiento": "Semicama",
                        "precio": 35000,
                        "premium": false
                    }
                ]
            }
        ]
    },
    {
        "id" : "saltaretiro",
        "it": [
            {
                "horaSalida": "18:05",
                "horaLlegada": "16:15",
                "salida": "2023-11-24",
                "fechaSalida": "vie. 24 nov.",
                "fechaLlegada": "sab. 25 nov.",
                "origen": "Retiro",
                "destino": "Salta",
                "duracion": "22 hs",
                "servicio": [
                    {
                        "tipo": "Comun",
                        "asientos": 32,
                        "tipoAsiento": "Semicama",
                        "precio": 32500,
                        "premium": false
                    }
                ]
            }
        ]
    }
]
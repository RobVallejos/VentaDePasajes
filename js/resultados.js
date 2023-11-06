$(function(){
    // REESULTADOS DE BUSQUEDA 
    let idaVuelta = $("#inputIdaVuelta");
    let resultadosIda = $("#resultadosIda");
    let resultadosVuelta = $("#resultadosVuelta");
    let tituloIda = $("#tituloIda");
    let tituloVuelta = $("#tituloVuelta");
    let btnBuscarViajes = $("#btnBuscarViajes");
    let viaje = ""

    tituloIda.css("display", "none");
    tituloVuelta.css("display", "none");

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
        let contenido = ""
        viaje = origen.toLowerCase() + destino.toLowerCase();
        let index = viajes.findIndex(buscarId);
        let oferta = viajes[index].it 
        for(var i=0; i<oferta.length ; i++){
            servicios = oferta[i].servicio
            for(var j=0; j<servicios.length ; j++){
                contenido ='<li appstoppropagation="" class="col-md-8 offset-md-2 trip-card desktop trip-card-selectable ng-star-inserted"><div appstoppropagation="" class="trip-card__body"><div class="rowR align-middle"><div class="column"><div class="hora-salida">';
                contenido +='<span class="sale"><b>Sale:</b> '+ oferta[i].fechaSalida +'</span>';
                contenido +='<div class="box-hora"><span class="hora">'+ oferta[i].horaSalida +'</span></div>';
                contenido +='<div class="rowR flex-c-trip ng-star-inserted"><span aria-hidden="true" class="text-ungs mr-geoLink fa fa-map-marker"></span><a class="ng-star-inserted">';
                contenido +='<small class="ng-star-inserted">'+ oferta[i].origen +'</small>';
                contenido +='</a></div></div></div><div class="column"><div class="trip-card__arrow text-center">';
                contenido +='<div class="faster-travel ng-star-inserted">Duración</div>'+ oferta[i].duracion +' hs</div>';
                contenido +='</div><div class="column"><div class="hora-llegada">';
                contenido +='<span class="sale"><b>Llega:</b> '+ oferta[i].fechaLlegada +'</span>';
                contenido +='<div class="box-hora"><span class="hora">'+ oferta[i].horaLlegada +'</span></div>';
                contenido +='<div class="rowR flex-c-trip ng-star-inserted"><span aria-hidden="true" class="text-ungs mr-geoLink fa fa-map-marker"></span><a class="ng-star-inserted">';
                contenido +='<small class="ng-star-inserted">'+ oferta[i].destino +'</small></a></div></div></div>';
                contenido +='<div class="column small-4"><div class="wrap-price text-right"><span class="currency">ARS</span><span class="price-sig">$</span><span class="price">';
                contenido +='<span>'+ servicios[j].precio +'</span>'
                contenido +='</span></div></div></div></div><div class="trip-card__footer"><div appstoppropagation="" class="rowR align-middle"><div class="column"><div class="rowR" style="margin-left: 0px;"><div class="pt-3px large-5 text-center"><span class="hand"><i aria-hidden="true" class="fa fa-map-o"></i><span class="cat">Recorrido</span></span></div><div class="pt-3px large-5"><div class="categoryTrip"><span class="seat seatStyle"></span>';
                contenido +='<span class="cat">'+ servicios[j].tipoAsiento +'</span>'
                contenido +='</div></div><div class="pt-3px large-5"><div class="column shrink ng-star-inserted">Disponibles';
                contenido +='<span class="badge cant">'+ servicios[j].asientos +'</span>'
                contenido +='</div></div></div></div><div class="column shrink"><a href="compraPaso1.html" target="_blank" onclick="comprar(RESULTADO)" class="button btn-buy-full"><i aria-hidden="true" class="fa fa-shopping-cart"></i>';
                contenido +='<span>Comprar</span></a></div></div></div></li>';

                flag == 0 ? resultadosIda.append(contenido): resultadosVuelta.append(contenido);

                tituloIda.css("display", "block");
                tituloVuelta.css("display", "block");
                }
                
        }
        
        $("ul#resultadosIda")[0].scrollIntoView();
        darMargen();
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
            "fechaSalida": "vie. 10 nov.",
            "fechaLlegada": "vie. 10 nov.",
            "origen": "Retiro",
            "destino": "Rosario",
            "duracion": "4:30",
            "servicio": [
                {
                    "tipo": "Ejecutivo", 
                    "asientos": 9,
                    "tipoAsiento": "cama",
                    "precio": 12500,
                    "premium": true
                },
                {
                    "tipo": "Comun",
                    "asientos": 40,
                    "tipoAsiento": "Semicama",
                    "precio": 8500,
                    "premium": true
                }
            ]
        },
        {
            "horaSalida": "16:30",
            "horaLlegada": "20:50",
            "fechaSalida": "dom. 12 nov.",
            "fechaLlegada": "dom. 12 nov.",
            "origen": "Retiro",
            "destino": "Rosario",
            "duracion": "4:35",
            "servicio": [
                {
                    "tipo": "Ejecutivo", 
                    "asientos": 4,
                    "tipoAsiento": "Cama",
                    "precio": 13200,
                    "premium": true
                },
                {
                    "tipo": "Comun",
                    "asientos": 23,
                    "tipoAsiento": "Semicama",
                    "precio": 9000,
                    "premium": true
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
            "fechaSalida": "vie. 17 nov.",
            "fechaLlegada": "vie. 17 nov.",
            "origen": "Rosario",
            "destino": "Retiro",
            "duracion": "4:30",
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
                    "premium": true
                }
            ]
        },
        {
            "horaSalida": "19:55",
            "horaLlegada": "00:30",
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
                    "premium": true
                }
            ]
        }
    ]
}
]
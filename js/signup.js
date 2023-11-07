$(function(){
    let cuit = $("#cuitForm");
    let companieName = $("#comNameForm");

    $("input[type='checkbox']").click(function(){
        var chkValue = $("input[name='compRep']:checked").val();
        //alert(chkValue);
        if(chkValue == "on"){
            //cuit.attr("disabled", true);
            cuit.css("display", "block");
            companieName.css("display", "block");
        }
        else{
            //cuit.attr("disabled", false);
            cuit.css("display", "none");
            companieName.css("display", "none");
        }
    });

    document.getElementById("btnIngresar").onclick = function irAlIndex(){
        location.href = "index.html";
        return;
    } 

});
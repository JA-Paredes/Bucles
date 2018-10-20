$(function () {
  //$("button").click(creatabla);
    creatabla();
});
//La primera función debe usar bucle for, la segunda utilizará bucle while y la tercera empleará un bucle do-while.

function creatabla(){
    
    tabla='<table id="tnum" class="table table-bordered table-hover"><thead class="thead-dark"><tr><th colspan="11">Práctica IAW - Tablas con bucles</th></tr></thead><tbody><tr><th scope="row">For (i)</th>';
    
    filafor();
    
    tabla +='</tr><th scope="row">While (i<sup>2</sup>)</th>';
        
    filawhile();

    tabla +='</tr><th scope="row">Do-while (i<sup>3</sup>)</th>';
        
    filadowhile();
    
    tabla +='</tr></tbody>';
      
$("#tabla").html(tabla);
    
}

function filafor(){
    
    for (var i = 1 ; i <= 10 ; i++ ){
        tabla += '<td>'+i+'</td>';     
    }
}

function filawhile(){
    
    var i = 1;
    while (i <= 10){
        tabla += '<td>'+(i*i)+'</td>';
        i++;
    }
    
}

function filadowhile(){
    
    var i = 1;    
    do{
        tabla += '<td>'+(i*i*i)+'</td>';
        i++;
    }
    while (i <= 10);
    
}
             
$( document ).ready(function() {
    console.log( "ready!" );
    $("#resultado").hide();
    $("#detalle").hide();

 });

	function binario(){
    $("#btncalcular").prop('disabled', true);
    $("#text").prop('disabled', true);
    var arreglo = [];
	var num = parseInt(document.getElementById("text").value);
	var i=1;
	console.log(num);
	  $("#resultado").show(500);
	  $("#detalle").show(100);
	  $("#resultado").html("<h2 style='color: red' align='center'>"+num+" = "+num.toString(2)+"</h2>");
	
	  do
	  {
	  	
	  	 if ((num/2) % 1 == 0) {
		   	$('#analisis tbody').append("<tr><td class='bg-danger'><strong>"+i+"</strong></td><td class='color:blue'>"+num+"</td><td>"+num+"/2="+num/2+"</td><td>"+Math.trunc(num/2)+"</td><td><span class='label label-warning'>0</span></td></tr>");
		   	  $('#analisis tbody').show(100);   
		   	  arreglo.push(0); 					
		   	}
		else{
			$('#analisis tbody').append("<tr><td class='bg-danger' ><strong>"+i+"</strong></td><td>"+num+"</td><td>"+num+"/2="+num/2+"</td><td>"+Math.trunc(num/2)+"</td><td><span class='label label-info'>1</span></td></tr>"); 
			 $('#analisis tbody').show(100);    
			 arreglo.push(1); 

		} 		
			num=num/2;
			i=i+1;
			
      num=Math.trunc(num);
		} while (num>=1);
           genera_tabla(2,i-1,arreglo,i-1);
		
	}

	function recargar(){
	location.reload();
	}

	function genera_tabla(ren,col,binario,max) {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("article")[0];
  // Crea un elemento <table> y un elemento <tbody>


  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");
  // Crea las celdas
  for (var i = 0; i < ren; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");
    for (var j = 0; j < col; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      celda.setAttribute("width","auto");
      if (i==0){
        var textoCelda = document.createTextNode(binario.pop());	 
		}
      else{
  	  var textoCelda = document.createTextNode(Math.pow(2,max-1));
  	  max--;
		}
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }
 
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
   tabla.setAttribute("class","table ");
	}
	function exportar(){
	window.print();
	}
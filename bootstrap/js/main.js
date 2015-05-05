// codigo javascript
//$(document).ready(function() {
    
    $('#fecha').datetimepicker();
    $('.dropdown-toggle').dropdown();
     $('.carousel').carousel(); 
     $('#contenedor').load('inicio.html');

     $('#carta').click(function(){
          //  $(this).parent('li').prop('class','active');
        //    $('#li_inicio, #li_localizacion, #li_menu, #li_mesa, #li_platos').prop('class','');
         //   $('#cabecera').hide();
        //    $('#cabecera2').show();
           $('#contenedor').load('carta.html');
     });
     $('#inicio').click(function(){
          //  $(this).parent('li').prop('class','active');
        //    $('#li_inicio, #li_localizacion, #li_menu, #li_mesa, #li_platos').prop('class','');
         //   $('#cabecera').hide();
        //    $('#cabecera2').show();
           $('#contenedor').load('inicio.html');
    });
//});
        
 
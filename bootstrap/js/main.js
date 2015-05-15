// codigo javascript
//$(document).ready(function() {
    
  //  $('#fecha').datetimepicker();
    $('.dropdown-toggle').dropdown();
     $('.carousel').carousel(); 
     $('#contenedor').load('inicio.html');

// codigo para la galeria de imagenes
    $('#thumbs').delegate('img','click', function(){                                                                $('#largeImage').attr('src',$(this).attr('src'));
            $('#description').html($(this).attr('alt'));
        });

// opciones del menú
 /*    $('#carta').click(function(){
          //  $(this).parent('li').prop('class','active');
        //    $('#li_inicio, #li_localizacion, #li_menu, #li_mesa, #li_platos').prop('class','');
           $('#contenedor').load('carta.html');
     });*/
     $('#inicio').click(function(){
          //  $(this).parent('li').prop('class','active');
        //    $('#li_inicio, #li_localizacion, #li_menu, #li_mesa, #li_platos').prop('class','');
           $('#contenedor').load('inicio.html');
    });
    $('#menus').click(function(){
            $(this).parent('li').prop('class','active');
        //    $('#li_inicio, #li_localizacion, #li_menu, #li_mesa, #li_platos').prop('class','');
           $('#contenedor').load('menus.html');
    });
    $('#galeria').click(function(){
          //  $(this).parent('li').prop('class','active');
        //    $('#li_inicio, #li_localizacion, #li_menu, #li_mesa, #li_platos').prop('class','');
           $('#contenedor').load('galeria.html');
    });
    $('#reservas').click(function(){
          //  $(this).parent('li').prop('class','active');
        //    $('#li_inicio, #li_localizacion, #li_menu, #li_mesa, #li_platos').prop('class','');
           $('#contenedor').load('reservas.html');
    });
    $('#localizacion').click(function(){
          //  $(this).parent('li').prop('class','active');
        //    $('#li_inicio, #li_localizacion, #li_menu, #li_mesa, #li_platos').prop('class','');
           $('#contenedor').load('localizacion.html');
    });
    $('#chef').click(function(){
          //  $(this).parent('li').prop('class','active');
        //    $('#li_inicio, #li_localizacion, #li_menu, #li_mesa, #li_platos').prop('class','');
           $('#contenedor').load('chef.html');
    });
    $('#entrantes').click(function(){
          //  $(this).parent('li').prop('class','active');
        //    $('#li_inicio, #li_localizacion, #li_menu, #li_mesa, #li_platos').prop('class','');
         //   $('#cabecera').hide();
        //    $('#cabecera2').show();
           $('#contenedor').load('entremeses.html');
    });

    $('#primeros').click(function(){
          //  $(this).parent('li').prop('class','active');
        //    $('#li_inicio, #li_localizacion, #li_menu, #li_mesa, #li_platos').prop('class','');
           $('#contenedor').load('primeros.html');
    });

$('#segundos').click(function(){
          //  $(this).parent('li').prop('class','active');
        //    $('#li_inicio, #li_localizacion, #li_menu, #li_mesa, #li_platos').prop('class','');
           $('#contenedor').load('segundos.html');
    });
$('#postres').click(function(){
          //  $(this).parent('li').prop('class','active');
        //    $('#li_inicio, #li_localizacion, #li_menu, #li_mesa, #li_platos').prop('class','');
         //   $('#cabecera').hide();
        //    $('#cabecera2').show();
           $('#contenedor').load('postres.html');
    });
$('#bebidas').click(function(){
          //  $(this).parent('li').prop('class','active');
        //    $('#li_inicio, #li_localizacion, #li_menu, #li_mesa, #li_platos').prop('class','');
           $('#contenedor').load('bebidas.html');
   //$('#contenedor').load('chef.html');
    });

$('#botonchef').click(function(){
          //  $(this).parent('li').prop('class','active');
        //    $('#li_inicio, #li_localizacion, #li_menu, #li_mesa, #li_platos').prop('class','');
    alert("pulsado boton ver");
           $('#contenedor').load('chef.html');
    }); 
 
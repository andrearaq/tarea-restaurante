// codigo javascript
    
  //  $('#fecha').datetimepicker();
    $('.dropdown-toggle').dropdown();
     $('.carousel').carousel(); 
     $('#contenedor').load('inicio.html');

// opciones del menú

     $('#inicio').click(function(){
        //   $(this).parent('li').prop('class','active');
        //   $('#localizacion, #menus, #reservas, #galeria, #chef').prop('class','');
           $('#contenedor').load('inicio.html');
    });
    $('#menus').click(function(){
      //      $(this).parent('li').prop('class','active');
    //    $('#inicio, #localizacion, #reservas, #galeria, #chef').prop('class','');
           $('#contenedor').load('menus.html');
    });
    $('#galeria').click(function(){
        //   $(this).parent('li').prop('class','active');
        //$('#inicio, #localizacion, #menus, #reservas #chef').prop('class','');
           $('#contenedor').load('galeria.html');
    });
    $('#reservas').click(function(){
       //     $(this).parent('li').prop('class','active');
     //   $('#inicio, #localizacion, #menus, #galeria, #chef').prop('class','');
           $('#contenedor').load('reservas.html');
    });
    $('#localizacion').click(function(){
          //  $(this).parent('li').prop('class','active');
        //$('#inicio, #menus, #reservas, #galeria, #chef').prop('class','');
           $('#contenedor').load('localizacion.html');
    });
    $('#chef').click(function(){
      //      $(this).parent('li').prop('class','active');
    //    $('#inicio, #localizacion, #menus, #reservas, #galeria, #chef').prop('class','');
           $('#contenedor').load('chef.html');
    });
    $('#entrantes').click(function(){
      //      $(this).parent('li').prop('class','active');
    //    $('#inicio, #localizacion, #menus, #reservas, #galeria, #chef').prop('class','');
           $('#contenedor').load('entremeses.html');
    });

    $('#primeros').click(function(){
          //  $(this).parent('li').prop('class','active');
        //$('#inicio, #localizacion, #menus, #reserva, #galeria', 'chef').prop('class','');
           $('#contenedor').load('primeros.html');
    });

    $('#segundos').click(function(){
        // $(this).parent('li').prop('class','active');
        //  $('#inicio, #localizacion, #menus, #reservas, #galeria, #chef').prop('class','');
               $('#contenedor').load('segundos.html');
        });
    $('#postres').click(function(){
        //        $(this).parent('li').prop('class','active');
        //   $('#inicio, #localizacion, #menus, #reservas, #galeria, #chef').prop('class','');
               $('#contenedor').load('postres.html');
        });
    $('#bebidas').click(function(){
        //      $(this).parent('li').prop('class','active');
        //   $('#inicio, #localizacion, #menus, #reservas, #galeria, #chef').prop('class','');
               $('#contenedor').load('bebidas.html');
        });


 
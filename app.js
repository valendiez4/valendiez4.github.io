$(function () {

    //alert('hola mundo');

    //console.log('hola soy consola');

    //alert($('#Buscar').Val());

    //alert($('.Buscar').Val());

    /*let Buscar='Hola';
    alert (Buscar);*/

    /*$('#btnBuscar').click(function(){
    console.log('todo ok');
    });*/

    /*$('.btnBuscar').click(function(){
    console.log('todo ok');
    });*/

    /*alert ('1');
    $('#btnBuscar').click(function(){
    alert ('2'); 
    
    });
    
    alert ('3');*/


    /*$('#btnBuscar').click(function(){
    let valor=$('#Buscar').val();
    alert (valor);
    
    });*/


    /*$('#btnBuscar').click(function(){
        $('#Buscar').val('holaa');
    
        });*/


    /*$('#Buscar').keyup(function(){
        alert('tecla');
        
         });*/


    /*$('#Buscar').keyup(function(){
        alert($(this).val());
            
             }); */


    /*let buscar='Hola';
    console.log(buscar);*/


    /*$('#btnBuscar').click(function(){
    alert('entre boton');
    
    });*/


    /* $('#btnBuscar').click(function(){
         let Buscar=$('#Buscar').val();
         console.log(Buscar);
 
 
         $('#tabla').load('mod.php',{
             dato:Buscar
             },function(){
             }
         );
 
     });    finalizo el evento de buscar*/



    /* $('#Buscar').keyup(function(){
         let Buscar=$('#Buscar').val();
         $('#tabla').load('mod.php',{
         dato:Buscar
         },function(){
 
         }
         );
     });   finalizo el evento de buscar mediante escribis */



    $('#Buscar').keyup(function () {
        let Buscar = $('#Buscar').val();
        $('#tabla').load('mod.php', {
            dato: Buscar
        }, function () {

        }
        );
    });


    function cargar() {
        $.ajax({
            url: 'mod2.php',
            type: 'GET',
            success: function (res) {

                let datos = JSON.parse(res);
                let html_tab = '';
                datos.forEach(dato => {
                    html_tab += `
                    <tr>
                    <td>${dato.pk}</td>
                    <td>${dato.dni}</td>
                    <td>${dato.nombre}</td>
                    <td>${dato.apellido}</td>
                    <td>${dato.fec}</</td>
                    <td><button type="button" data_id="${dato.pk}" 
                    class="borrar">Borrar</button></td>
                    </tr>`;                         /* += = no borres lo que ya Tenes, concatenalo */

                });
                $('#tabla').html(html_tab);
            }
        });
    };



    $('#btnNuevo').click(function () {
        if ($('#contenedor').is(':visible')) {
            $('#contenedor').hide(750);
        } else {
            $('#contenedor').show(750);
        }

        $('#btnGuardar').click(function () {
            let DNI = $('#Buscar2').val();
            let NOMBRE = $('#Buscar3').val();
            let APELLIDO = $('#Buscar4').val();
            let FEC_NAC = $('#Buscar5').val();
            /* console.log(DNI);
            console.log(NOMBRE);
            console.log(APELLIDO);
            console.log(FEC_NAC); */
            /* alert ($('#Buscar2').val());
             alert ($('#Buscar3').val());
             alert ($('#Buscar4').val());
             alert ($('#Buscar5').val()); */
            $.ajax({
                url: 'modguardar.php',
                type: 'POST',
                data: {
                    postDNI: DNI,
                    postNOMBRE: NOMBRE,
                    postAPELLIDO: APELLIDO,
                    postFEC_NAC: FEC_NAC,
                }, success: function (res) {
                    cargar();
                }

            })

        });

    });
    /* $('#btnGuardar').click(function(){
         alert('hola');
             
              }); */

    $(document).on('click', '.borrar', function () {
        let id = ($(this).attr('data_id'));
        $.ajax({
            url: 'modborrar.php',
            type: 'post',
            data: {
                id_borrar: id
            },
            success: function(res){
                alert('se borro');
                console.log(res);
                cargar();
            }
        
        });
    }); 

    cargar();

});

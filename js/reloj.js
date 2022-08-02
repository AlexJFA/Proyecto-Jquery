$(document).ready(function(){


    /* cambiar de temas  ------------------------------------------------------------*/

    let hojaDeEstilos =   $("#hojaEstilo");


    $(".temaVerde").click(()=> {
    
        hojaDeEstilos.attr("href", "/Proyectos-completos/1-HTML-CSS-JS-JQUERY-JQUERY-UI/css/verde.css")

    })

    $(".temaMorado").click(()=> {
    
        hojaDeEstilos.attr("href", "/Proyectos-completos/1-HTML-CSS-JS-JQUERY-JQUERY-UI/css/morado.css")

    })

    $(".temaByN").click(()=> {
    
        hojaDeEstilos.attr("href", "/Proyectos-completos/1-HTML-CSS-JS-JQUERY-JQUERY-UI/css/blancoYnegro.css")

    });


    /*   aplicar scroll hacie al principio  de la pagina*/

    $(".sube").click(function(e) {
        
        e.preventDefault();     // este metodos evita que el link nos recarge la pagina
                                // para que solo se aplique la animacion

        $("html, body").animate({       // aplicamso esta animacion al htam y body para que haga 
            scrollTop: 0                // un scroll hasta el pixel 0.
        }, 500);                         // y que esa animacion dure solo 500 milisegundos


    });


    /* almacenar datos en el local-storage  con el formulario ------------------- */

    $("#login").submit(function(){

       let name = $("#nameForm").val();  // capturamos el valor de "#nameForm" en una variable
       let clave = $("#passForm").val();  // capturamos el valor de "#passForm" en una variable
       let email = $("#emailForm").val();  // capturamos el valor de "#emailForm" en una variable
    

        localStorage.setItem("userName", JSON.stringify(name));
        localStorage.setItem("pass", JSON.stringify(clave));        // almacenamos todos los datos capturados en el
        localStorage.setItem("email", JSON.stringify(email));       // localStorage
    });


    let nombre = localStorage.getItem("userName");
    let password = localStorage.getItem("pass");    //  capturmos los valores almacenador en el localstorage
    let email = localStorage.getItem("email");      // y lo asignamos a variables para porder insertarlos en el DOM



  
    setInterval(function(){                         // indicamos que ejecute caja 1 segundo

        let reloj = moment().format("h:mm:ss a");
        $("#reloj").html(reloj);

    }, 1000)
  

 



  












});
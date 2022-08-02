$(document).ready(function(){

    // Slider -------------------
    $('.slider').bxSlider({
    
        mode: "fade",
        captions: true,
        responsive: true,
        pager: true,
        autoControls: true,
        stopAutoOnClick: true



    });
        
// post ---------------------------------

    let posts = [
        {
            title: "Titulo 1",
            date: "Publicado el " + moment().format("MMMM DD YYYY"),
            contend: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit odio, rutrum imperdiet tempor quis, dictum eget libero. Nullam pretium pharetra libero ac convallis. Phasellus eget luctus leo. Pellentesque ac ligula ac tortor placerat iaculis et non orci. Suspendisse porttitor in lorem quis blandit. Aliquam erat volutpat."

        },
        {
            title: "Titulo 2",
            date: "Publicado el " + moment().format("MMMM DD YYYY"),
            contend: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit odio, rutrum imperdiet tempor quis, dictum eget libero. Nullam pretium pharetra libero ac convallis. Phasellus eget luctus leo. Pellentesque ac ligula ac tortor placerat iaculis et non orci. Suspendisse porttitor in lorem quis blandit. Aliquam erat volutpat."

        },                        
        {
            title: "Titulo 3",
            date: "Publicado el " + moment().format("MMMM DD YYYY"),
            contend: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit odio, rutrum imperdiet tempor quis, dictum eget libero. Nullam pretium pharetra libero ac convallis. Phasellus eget luctus leo. Pellentesque ac ligula ac tortor placerat iaculis et non orci. Suspendisse porttitor in lorem quis blandit. Aliquam erat volutpat."
        },
        {
            title: "Titulo 4",
            date: "Publicado el " + moment().format("MMMM DD YYYY"),
            contend: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit odio, rutrum imperdiet tempor quis, dictum eget libero. Nullam pretium pharetra libero ac convallis. Phasellus eget luctus leo. Pellentesque ac ligula ac tortor placerat iaculis et non orci. Suspendisse porttitor in lorem quis blandit. Aliquam erat volutpat."

        },
    ]

    

    /* Plantilla para los articulos --------------------------------------------------- */

    posts.forEach((element, index) => {
       
        let post = `  
            <article class="post">
                <h2> ${index + " " + element.title} </h2>
                <span>${element.date} </span>
                <p> ${index + " " +  element.contend} </p>
                <a href="" class="botonLeer">Leer mas</a>
            </article>
    `;

        $("#gruPosts").append(post);
    });



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



    if(nombre != null | nombre != undefined ){

        let Bienvenido = $("#welcome");

        Bienvenido.append(
            "Bienvenido " + nombre + " " + "<br>" + "tu correo es: " +  email + " " + "<br>" + "y tu calve: " + password + "<br>" 
            );
        
        Bienvenido.append("<a href='' id='cerrar'>cerrar secion</a>");

        $("#cerrar").click(function(){
            localStorage.clear();           // elimina los datos almacenados en el localStorage
            location.reload();  // recarga la pantalla
        })

    }
  












});
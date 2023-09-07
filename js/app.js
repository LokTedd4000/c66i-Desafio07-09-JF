const cambiarTitulo = () => {
  console.log("dentro de la funcion cambiar titulo");
  //buscar un elemento del html
  // let tituloH1 = document.getElementById("titulo");
  let tituloH1 = document.querySelector("#titulo");
  console.log(tituloH1.innerHTML);

  // tituloH1.innerHTML = "Titulo modificado";
  // tituloH1.className = "text-warning";

  // tituloH1.innerHTML = "Practica DOM";
  // tituloH1.className = "text-light";

  if (tituloH1.innerHTML === "Titulo modificado") {
      tituloH1.innerHTML = "Practica DOM";
      tituloH1.className = "text-light";
  } else {
      tituloH1.innerHTML = "Titulo modificado";
      tituloH1.className = "text-warning";
  }
    
};

const verMas = () => {
  console.log("dentro de verMas");
  //obtener ell elemento padre
  let contenedorPadre = document.querySelector("#contenedorPadre");
  let btnVerMas = document.getElementById("btnVerMas");

  if (btnVerMas.innerHTML.trim() === "Ver más") {
    //opcion 1 - camino largo
    //1- crear el elemento del html

    // let parrafo = document.createElement("p"); //crea la etiqueta <p></p>

    // //2- agregar contenido al elemento html creado

    // parrafo.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, at velit
    //     totam ex accusantium similique nam aut! Voluptas dolorum possimus
    //     itaque. Laborum sit voluptatum aliquam, ad sunt iusto neque ratione
    //     earum accusamus, architecto nostrum. Odit ipsum nemo consequuntur amet
    //     sed voluptate accusamus quo neque, ex repellendus, numquam totam
    //     officiis temporibus.`;

    // parrafo.className = "lead";

    // //3- Insertar el nuevo elemento html en el DOM

    // contenedorPadre.appendChild(parrafo);

    //opcion 2 - camino corto

    contenedorPadre.innerHTML += `<p class="lead">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, at velit
    totam ex accusantium similique nam aut! Voluptas dolorum possimus
    itaque. Laborum sit voluptatum aliquam, ad sunt iusto neque ratione
    earum accusamus, architecto nostrum. Odit ipsum nemo consequuntur amet
    sed voluptate accusamus quo neque, ex repellendus, numquam totam
    officiis temporibus.
  </p>`;
  
  //moficiar el texto del boton
  btnVerMas.innerHTML = "Ocultar"
  btnVerMas.className = "btn btn-danger"

  } else {
    console.log("Aqui vamos a borrar el elemento");
    console.log(contenedorPadre.hasChildNodes()); //devuelve true or false
    console.log(contenedorPadre.children.length); //retorna un array de nodos hijos

    if (contenedorPadre.hasChildNodes() && contenedorPadre.children.length >= 2) {
        //borrar el parrafo
        //contenedorPadre.removeChild(contenedorPadre.children[length-1]);
        contenedorPadre.removeChild(contenedorPadre.children[1]);

        //modificar texto y la estética del boton

        btnVerMas.innerHTML = "Ver más";
        btnVerMas.className = "btn btn-primary";
    }

  }
};


//la propiedad para acceder al texto o al contenido de un input es value, no se usa innerHTML
//nombreInput.
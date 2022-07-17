const contenedorDeOpciones = document.querySelector (".desglosado");
const milanesaImagen = document.querySelector (".milanesa");
const tituloImagen = document.querySelector (".titulo-imagen");
const opciones = document.querySelectorAll ("option");

let listaDeMeses = [];

for (let i = 0; i < opciones.length; i++){
    listaDeMeses.push (opciones[i].textContent);
};

contenedorDeOpciones.onclick = function (){
    for (let i = 0; i < listaDeMeses.length; i++){
        if (contenedorDeOpciones.value === "0"){
            milanesaImagen.src = "img/transparent.png";
            tituloImagen.innerText = "";
        }
        else if (contenedorDeOpciones.value === "1"){
            milanesaImagen.src = "img/milanesa-a-la-suiza.png";
            tituloImagen.innerText = "Sos una milanesa suiza!";
        }
        else if (contenedorDeOpciones.value === "2"){
            milanesaImagen.src = "img/milanesa-de-berenjena.png";
            tituloImagen.innerText = "Sos una milanesa de berenjena!";
        }
        else if (contenedorDeOpciones.value === "3"){
            milanesaImagen.src = "img/milanesa-a-caballo.png";
            tituloImagen.innerText = "Sos una milanesa a caballo!";
        }
        else if (contenedorDeOpciones.value === "4"){
            milanesaImagen.src = "img/pizzanesa.png";
            tituloImagen.innerText = "Sos una pizzanesa!";
        }
        else if (contenedorDeOpciones.value === "5"){
            milanesaImagen.src = "img/milanesa-de-carne.png";
            tituloImagen.innerText = "Sos una milanesa de carne!";
        }
        else if (contenedorDeOpciones.value === "6"){
            milanesaImagen.src = "img/milanesa-de-cerdo.png";
            tituloImagen.innerText = "Sos una milanesa de cerdo!";
        }
        else if (contenedorDeOpciones.value === "7"){
            milanesaImagen.src = "img/milanesa-de-soja.png";
            tituloImagen.innerText = "Sos una milanesa de soja!";
        }
        else if (contenedorDeOpciones.value === "8"){
            milanesaImagen.src = "img/sanguche-de-milanesa.png";
            tituloImagen.innerText = "Sos un sanguche de milanesa!";
        }
        else if (contenedorDeOpciones.value === "9"){
            milanesaImagen.src = "img/milanesa-napolitana.png";
            tituloImagen.innerText = "Sos una milanesa napolitana!";
        }
        else if (contenedorDeOpciones.value === "10"){
            milanesaImagen.src = "img/milanesa-cuatroquesos.png";
            tituloImagen.innerText = "Sos una mila cuatro quesos!";
        }
        else if (contenedorDeOpciones.value === "11"){
            milanesaImagen.src = "img/milanesa-de-filet.png";
            tituloImagen.innerText = "Sos una milanesa de filet!";
        }
        else if (contenedorDeOpciones.value === "12"){
            milanesaImagen.src = "img/milanesa-de-pollo.png";
            tituloImagen.innerText = "Sos una milanesa de pollo!";
        };
    };
};

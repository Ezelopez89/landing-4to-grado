console.log("SCRIPT CARGADO");


// ========================================
// DATOS
// ========================================

const contenidos = {

    actividades: [

        {
            nombre: "Lengua",
            icono: "📖",
            descripcion:
                "Actividades de lectura, escritura y comprensión."
        },

        {
            nombre: "Matemática",
            icono: "🔢",
            descripcion:
                "Actividades de números, operaciones y fracciones."
        },

        {
            nombre: "Ciencias Sociales",
            icono: "🌎",
            descripcion:
                "Actividades sobre nuestra provincia, el país y la sociedad.",
            trabajo:
                "Proyecto Aula sobre ruedas",
            archivo:
                "Proyecto-Aula-sobre-ruedas.pdf"
        },

        {
            nombre: "Ciencias Naturales",
            icono: "🔬",
            descripcion:
                "Actividades sobre los seres vivos, el ambiente y la naturaleza.",
            trabajo:
                "Flora y Fauna del Chaco",
            fecha:
                "15 de septiembre de 2026",
            archivo:
                "trabajo-flora-fauna-chaco.pdf"
        }

    ],


    proyectos: [

        {
            nombre: "Feria de Ciencias",
            icono: "🧪",
            descripcion:
                "Proyecto de bioplástico realizado para la Feria de Ciencias.",
            archivo:
                "Feria-de-Ciencias-bioplastico.pdf"
        }

    ],


    lecturas: [

        {
            nombre: "Casiperro del Hambre",
            icono: "📚",
            descripcion:
                "Aventuras y desventuras de Casiperro del Hambre.",
            archivo:
                "Aventuras-Desventuras-casiperro-Del-Hambre.pdf"
        }

    ],


    novedades: [

        {
            nombre: "Próximamente",
            icono: "📢",
            descripcion:
                "En este espacio se publicarán las novedades importantes para las familias."
        }

    ]

};

// ========================================
// FUNCIÓN PARA MOSTRAR CONTENIDO
// ========================================

function mostrarContenido(seccion) {

    const tarjeta =
        document.getElementById(seccion);

    const contenedor =
        tarjeta.querySelector(".contenido");

    const boton =
        tarjeta.querySelector("button");


    // Mostrar / ocultar

    contenedor.classList.toggle("mostrar");


    // Si se oculta

    if (!contenedor.classList.contains("mostrar")) {

        boton.textContent =
            "Ver " + seccion;

        return;
    }


    // Obtener los datos

    const datos =
        contenidos[seccion];


    // Limpiar el contenido anterior

    contenedor.innerHTML = "";


    // Crear cada elemento

    datos.forEach(function(item) {

        const area =
            document.createElement("div");

        area.className =
            "area";


        // Título

        const titulo =
            document.createElement("h3");

        titulo.textContent =
            item.icono + " " + item.nombre;


        // Descripción

        const descripcion =
            document.createElement("p");

        descripcion.textContent =
            item.descripcion;


        area.appendChild(titulo);

        area.appendChild(descripcion);


        // Trabajo

        if (item.trabajo) {

            const trabajo =
                document.createElement("p");

            trabajo.innerHTML =
                "<strong>" +
                item.trabajo +
                "</strong>";

            area.appendChild(trabajo);
        }


        // Fecha

        if (item.fecha) {

            const fecha =
                document.createElement("p");

            fecha.textContent =
                "📅 Fecha de entrega: " +
                item.fecha;

            area.appendChild(fecha);
        }


        // PDF

        if (item.archivo) {

            const enlace =
                document.createElement("a");

            enlace.href =
                item.archivo;

            enlace.target =
                "_blank";

            enlace.className =
                "enlace-tarjeta";

            enlace.textContent =
                "📄 Ver archivo";

            area.appendChild(enlace);
        }


        // Agregar el área al contenedor

        contenedor.appendChild(area);

    });


    // Cambiar texto del botón

    boton.textContent =
        "Ocultar " + seccion;

}
// ========================================
// CONECTAR BOTONES
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log("DOM CARGADO");

        const botones =
            document.querySelectorAll(
                ".tarjeta button"
            );

        console.log(
            "BOTONES:",
            botones.length
        );


        botones.forEach(function(boton) {

            boton.addEventListener(
                "click",
                function() {

                    const tarjeta =
                        boton.closest(".tarjeta");

                    const seccion =
                        tarjeta.id;

                    console.log(
                        "CLICK EN:",
                        seccion
                    );

                    mostrarContenido(seccion);

                }
            );

        });

    }
);

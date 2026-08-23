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
// MOSTRAR CONTENIDO
// ========================================

function mostrarContenido(seccion) {

    const contenedor = document.getElementById(
        "contenido-" + seccion
    );

    const boton = document.querySelector(
        "#" + seccion + " button"
    );

    // Si no encuentra el contenedor,
    // detenemos la función.

    if (!contenedor || !boton) {
        console.error(
            "No se encontró la sección:",
            seccion
        );

        return;
    }


    // Mostrar / ocultar

    contenedor.classList.toggle("mostrar");


    // Si se ocultó

    if (!contenedor.classList.contains("mostrar")) {

        boton.textContent =
            "Ver " + seccion;

        return;
    }


    // Si ya tiene contenido,
    // no lo generamos nuevamente.

    if (contenedor.innerHTML !== "") {

        boton.textContent =
            "Ocultar " + seccion;

        return;
    }


    // Obtener los datos

    const datos = contenidos[seccion];


    // Crear los elementos

    datos.forEach(function(item) {

        let extra = "";


        // Fecha

        if (item.fecha) {

            extra += `
                <p>
                    📅 Fecha de entrega:
                    ${item.fecha}
                </p>
            `;
        }


        // Archivo

        if (item.archivo) {

            extra += `
                <a
                    href="${item.archivo}"
                    target="_blank"
                    class="enlace-tarjeta"
                >
                    📄 Ver archivo
                </a>
            `;
        }


        // Crear tarjeta

        contenedor.innerHTML += `

            <div class="area">

                <h3>
                    ${item.icono}
                    ${item.nombre}
                </h3>

                <p>
                    ${item.descripcion}
                </p>

                ${
                    item.trabajo
                    ? `
                        <p>
                            <strong>
                                ${item.trabajo}
                            </strong>
                        </p>
                    `
                    : ""
                }

                ${extra}

            </div>

        `;

    });


    boton.textContent =
        "Ocultar " + seccion;

}


// ========================================
// CONECTAR LOS BOTONES
// ========================================

document.addEventListener("DOMContentLoaded", function() {

    const botones =
        document.querySelectorAll(".tarjeta button");


    botones.forEach(function(boton) {

        boton.addEventListener("click", function() {

            const tarjeta =
                boton.closest(".tarjeta");

            const seccion =
                tarjeta.id;

            mostrarContenido(seccion);

        });

    });

});

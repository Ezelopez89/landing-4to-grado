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


    // Si ya tiene contenido,
    // no volver a crearlo

    if (contenedor.innerHTML !== "") {

        boton.textContent =
            "Ocultar " + seccion;

        return;
    }


    // Obtener datos

    const datos =
        contenidos[seccion];


    // Crear contenido

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


        // Crear elemento

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

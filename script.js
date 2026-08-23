const areas = [
    {
        nombre: "Lengua",
        icono: "📖",
        descripcion: "Actividades de lectura, escritura y comprensión."
    },
    {
        nombre: "Matemática",
        icono: "🔢",
        descripcion: "Actividades de números, operaciones y fracciones."
    },
    {
        nombre: "Ciencias Sociales",
        icono: "🌎",
        descripcion: "Actividades sobre nuestra provincia, el país y la sociedad."
    },
    {
    nombre: "Ciencias Naturales",
    icono: "🔬",
    descripcion: "Actividades sobre los seres vivos, el ambiente y la naturaleza.",
    trabajo: "Flora y Fauna del Chaco",
    fecha: "15 de septiembre de 2026",
    archivo: "trabajo-flora-fauna-chaco.pdf"
}
];


function mostrarAreas() {

    const contenedor = document.getElementById("actividades-contenido");

    contenedor.innerHTML = "";

    areas.forEach(function(area) {

        let contenidoExtra = "";

        if (area.trabajo) {

            contenidoExtra = `
                <p>
                    <strong>Trabajo práctico:</strong>
                    ${area.trabajo}
                </p>

                <p>
                    📅 Fecha de entrega: ${area.fecha}
                </p>

                <a
                    href="${area.archivo}"
                    target="_blank"
                    class="enlace-tarjeta"
                >
                    📄 Ver trabajo práctico
                </a>
            `;
        }

        contenedor.innerHTML += `
            <div class="area">

                <h3>${area.icono} ${area.nombre}</h3>

                <p>${area.descripcion}</p>

                ${contenidoExtra}

            </div>
        `;

    });

}

function mostrarActividades() {

    const contenido = document.getElementById("actividades-contenido");

    contenido.classList.toggle("mostrar");

}

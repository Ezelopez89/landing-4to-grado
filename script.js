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
        descripcion: "Actividades sobre los seres vivos, el ambiente y la naturaleza."
    }
];
areas.forEach(function(area) {
    console.log(area.nombre);
});
function mostrarAreas() {

    const contenedor = document.getElementById("actividades-contenido");

    contenedor.innerHTML = "";

    areas.forEach(function(area) {

        contenedor.innerHTML += `
            <div class="area">
                <h3>${area.icono} ${area.nombre}</h3>
                <p>${area.descripcion}</p>
            </div>
        `;

    });

}

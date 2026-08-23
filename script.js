console.log("SCRIPT CARGADO");

document.addEventListener("DOMContentLoaded", function () {

    console.log("DOM CARGADO");

    const botones = document.querySelectorAll(".tarjeta button");

    console.log("BOTONES:", botones.length);

    botones.forEach(function (boton) {

        boton.addEventListener("click", function () {

            const tarjeta = boton.closest(".tarjeta");

            console.log("TARJETA:", tarjeta);

            console.log("ID:", tarjeta.id);

            const contenido = tarjeta.querySelector(".contenido");

            console.log("CONTENIDO:", contenido);

            contenido.classList.toggle("mostrar");

            console.log("CLASES:", contenido.className);

        });

    });

});

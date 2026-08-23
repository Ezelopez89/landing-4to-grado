console.log("SCRIPT CARGADO");

document.addEventListener("DOMContentLoaded", function () {

    console.log("DOM CARGADO");

    const botones = document.querySelectorAll(".tarjeta button");

    console.log("BOTONES ENCONTRADOS:", botones.length);

    botones.forEach(function (boton) {

        boton.addEventListener("click", function () {

            console.log("SE HIZO CLICK");

            const tarjeta = boton.closest(".tarjeta");

            const contenido = tarjeta.querySelector(".contenido");

            contenido.classList.toggle("mostrar");

        });

    });

});

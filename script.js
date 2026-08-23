function mostrarActividades() {

    const contenido = document.getElementById("actividades-contenido");

    contenido.classList.toggle("mostrar");

}
.actividades-contenido {
    display: none;
    margin-top: 25px;
}

.actividades-contenido.mostrar {
    display: grid;
    gap: 15px;
}

.area {
    padding: 15px;
    border-radius: 10px;
    background-color: #f4f7fb;
    text-align: left;
}

.area h3 {
    color: #1976d2;
    margin-bottom: 8px;
}

.area p {
    margin: 0;
}
.tarjeta button {
    margin-top: 20px;
    padding: 12px 22px;
    border: none;
    border-radius: 25px;
    background-color: #1976d2;
    color: white;
    font-weight: bold;
    cursor: pointer;
}

.tarjeta button:hover {
    background-color: #1565c0;
}

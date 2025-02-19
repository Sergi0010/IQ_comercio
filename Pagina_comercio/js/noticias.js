document.addEventListener("DOMContentLoaded", function () {
    fetch("data/noticias.json")
        .then(response => response.json())
        .then(data => {
            const contenedor = document.getElementById("noticias-container");
            contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar las noticias
            data.forEach(noticia => {
                const noticiaHTML = `
                    <div class="noticia">
                        <h2>${noticia.titulo}</h2>
                        <img src="${noticia.imagen}" alt="${noticia.titulo}">
                        <p>${noticia.descripcion}</p>
                    </div>
                `;
                contenedor.innerHTML += noticiaHTML; // Agregar cada noticia
            });
        })
        .catch(error => console.error("Error cargando las noticias:", error));
});

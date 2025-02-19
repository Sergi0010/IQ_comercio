// Inicialización de la página
document.addEventListener('DOMContentLoaded', () => {
    inicializarIndicadores();
    actualizarNoticias('es');
});

// Función para inicializar los indicadores económicos
function inicializarIndicadores() {
    const container = document.getElementById('indicadores-container');
    container.innerHTML = '';

    for (const [key, data] of Object.entries(indicadoresData)) {
        const div = document.createElement('div');
        div.className = 'indicador';
        div.onclick = () => mostrarInfoIndicador(key);
        
        const cambioClase = data.cambio > 0 ? 'positivo' : 'negativo';
        const cambioSigno = data.cambio > 0 ? '+' : '';
        
        div.innerHTML = `${data.titulo}: ${data.valor} <span class="${cambioClase}">${cambioSigno}${data.cambio}</span>`;
        container.appendChild(div);
    }
}

// Función para cambiar el idioma de la interfaz
function cambiarIdioma(idioma) {
    const labels = traducciones[idioma];
    
    // Actualizar textos de la interfaz
    document.querySelector('#region option:first-child').textContent = labels.region;
    document.querySelector('#pais option:first-child').textContent = labels.pais;
    document.querySelector('#news-title').textContent = labels.noticias;
    
    // Actualizar botones
    document.querySelector('button').textContent = labels.buscar;
    document.querySelectorAll('button')[1].textContent = labels.resetear;
    
    // Actualizar categorías
    const categoriasFiltro = document.getElementById('categoria-filtro');
    categoriasFiltro.options[0].textContent = labels.categorias;
    categoriasFiltro.options[1].textContent = labels.comercio;
    categoriasFiltro.options[2].textContent = labels.economia;
    categoriasFiltro.options[3].textContent = labels.politica;
    
    actualizarNoticias(idioma);
}

// Función para mostrar el selector de países según la región
function mostrarPaisSelector(region) {
    const paisSelector = document.getElementById('pais');
    paisSelector.innerHTML = `<option value="">${traducciones[document.getElementById('idioma').value].pais}</option>`;
    paisSelector.disabled = !region;
    
    if (region) {
        const regionPaises = paises[region];
        for (const key in regionPaises) {
            const pais = regionPaises[key];
            const option = document.createElement('option');
            option.value = pais.nombre;
            option.textContent = pais.nombre;
            paisSelector.appendChild(option);
        }
    }
    
    // Limpiar información previa
    document.getElementById('info-pais').innerHTML = '';
}

// Función para buscar un país
function buscarPais() {
    const input = document.getElementById('busqueda').value.toLowerCase();
    let encontrado = false;

    for (const region in paises) {
        for (const key in paises[region]) {
            const pais = paises[region][key];
            if (pais.nombre.toLowerCase() === input) {
                mostrarInfoPais(pais.nombre);
                encontrado = true;
                break;
            }
        }
        if (encontrado) break;
    }

    if (!encontrado) {
        alert("País no encontrado. Por favor, intente de nuevo.");
    }
}

// Función para resetear la búsqueda
function resetSearch() {
    document.getElementById('busqueda').value = '';
    document.getElementById('pais').innerHTML = `<option value="">${traducciones[document.getElementById('idioma').value].pais}</option>`;
    document.getElementById('pais').disabled = true;
    document.getElementById('info-pais').innerHTML = '';
    document.getElementById('region').value = '';
}

// Función para mostrar información de un país
function mostrarInfoPais(nombrePais) {
    let paisInfo = null;
    
    // Buscar la información del país
    for (const region in paises) {
        const paisEncontrado = Object.values(paises[region]).find(p => p.nombre === nombrePais);
        if (paisEncontrado) {
            paisInfo = paisEncontrado;
            break;
        }
    }
    
    if (paisInfo) {
        const infoDiv = document.getElementById('info-pais');
        const idioma = document.getElementById('idioma').value;
        
        infoDiv.innerHTML = `
            <h2>${traducciones[idioma].info}: ${paisInfo.nombre}</h2>
            <button onclick="mostrarParticipacion('${paisInfo.participacion}')">${traducciones[idioma].comercio}</button>
            <button onclick="mostrarRequisitos(${JSON.stringify(paisInfo.requisitos)})">${traducciones[idioma].requisitos}</button>
            <canvas id="comercioChart"></canvas>
        `;
        
        mostrarGraficoComercio(paisInfo.nombre);
    }
}

// Función para mostrar la participación comercial
function mostrarParticipacion(participacion) {
    alert(participacion);
}

// Función para mostrar los requisitos comerciales
function mostrarRequisitos(requisitos) {
    alert("Requisitos para Comercio:\n" + requisitos.join('\n'));
}

// Función para mostrar el gráfico de comercio
function mostrarGraficoComercio(pais) {
    const ctx = document.getElementById('comercioChart').getContext('2d');
    
    // Datos simulados de comercio
    const data = {
        labels: ['Importaciones', 'Exportaciones'],
        datasets: [{
            label: `Datos de Comercio de ${pais}`,
            data: [Math.random() * 1000, Math.random() * 1000],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    };
    
    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Función para mostrar información de indicadores
function mostrarInfoIndicador(indicador) {
    const data = indicadoresData[indicador];
    if (data) {
        const infoDiv = document.getElementById('info-pais');
        infoDiv.innerHTML = `
            <h2>${data.titulo}</h2>
            <p>${data.descripcion}</p>
            <canvas id="indicadorChart"></canvas>
        `;
        
        // Crear gráfico de tendencia simulada
        const ctx = document.getElementById('indicadorChart').getContext('2d');
        const fechas = Array.from({length: 7}, (_, i) => {
            const fecha = new Date();
            fecha.setDate(fecha.getDate() - (6 - i));
            return fecha.toLocaleDateString();
        });
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: fechas,
                datasets: [{
                    label: data.titulo,
                    data: Array.from({length: 7}, () => data.valor + (Math.random() - 0.5) * 2),
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }
}

// Función para actualizar noticias según el idioma
function actualizarNoticias(idioma) {
    const container = document.getElementById('noticias');
    container.innerHTML = '';
    
    // Crear noticias simuladas basadas en los indicadores
    for (const [key, data] of Object.entries(indicadoresData)) {
        const div = document.createElement('div');
        div.className = 'noticia';
        div.innerHTML = `
            <h3>${data.titulo}</h3>
            <p>${data.descripcion}</p>
        `;
        container.appendChild(div);
    }
}

// Función para filtrar noticias por categoría
function filtrarNoticiasPorCategoria(categoria) {
    const container = document.getElementById('noticias');
    container.innerHTML = '';
    
    for (const [key, data] of Object.entries(indicadoresData)) {
        if (categoria === 'todas' || data.categoria === categoria) {
            const div = document.createElement('div');
            div.className = 'noticia';
            div.innerHTML = `
                <h3>${data.titulo}</h3>
                <p>${data.descripcion}</p>
            `;
            container.appendChild(div);
        }
    }
}

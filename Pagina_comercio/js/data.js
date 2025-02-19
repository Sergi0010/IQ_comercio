// Datos de países por región
const paises = {
    america: {
        pais1: { nombre: "Argentina", participacion: "Detalles sobre la participación de comercio con Argentina", requisitos: ["Licencia de importación", "Certificado de origen", "Documentación aduanera"] },
        pais2: { nombre: "Brasil", participacion: "Detalles sobre la participación de comercio con Brasil", requisitos: ["Registro de empresa", "Cumplimiento de normativas locales", "Permiso de exportación"] },
        pais3: { nombre: "Chile", participacion: "Detalles sobre la participación de comercio con Chile", requisitos: ["Acuerdo de comercio", "Inscripción en el registro de exportadores", "Certificación de calidad"] }
    },
    europa: {
        pais4: { nombre: "Alemania", participacion: "Detalles sobre la participación de comercio con Alemania", requisitos: ["Licencia de importación", "Certificado de origen", "Normativa de calidad"] },
        pais5: { nombre: "Francia", participacion: "Detalles sobre la participación de comercio con Francia", requisitos: ["Registro de empresa", "Cumplimiento de normativas locales", "Permiso de exportación"] },
        pais6: { nombre: "España", participacion: "Detalles sobre la participación de comercio con España", requisitos: ["Acuerdo de comercio", "Inscripción en el registro de exportadores", "Certificación de calidad"] }
    },
    asia: {
        pais7: { nombre: "China", participacion: "Detalles sobre la participación de comercio con China", requisitos: ["Licencia de importación", "Certificado de origen", "Documentación aduanera"] },
        pais8: { nombre: "India", participacion: "Detalles sobre la participación de comercio con India", requisitos: ["Registro de empresa", "Cumplimiento de normativas locales", "Permiso de exportación"] },
        pais9: { nombre: "Japón", participacion: "Detalles sobre la participación de comercio con Japón", requisitos: ["Acuerdo de comercio", "Inscripción en el registro de exportadores", "Certificación de calidad"] }
    }
};

// Datos de indicadores económicos
const indicadoresData = {
    petroleo: { valor: 71.93, cambio: 0.77, titulo: "Petróleo WTI", descripcion: "El precio del petróleo WTI ha aumentado un 5% en la última semana debido a la reducción de la producción." },
    cafe: { valor: 4.20, cambio: -0.01, titulo: "Café", descripcion: "Los precios del café han alcanzado niveles históricos debido a la baja producción en Brasil." },
    oro: { valor: 3678049, cambio: 500.53, titulo: "Oro", descripcion: "El oro mantiene su tendencia alcista en los mercados internacionales." },
    tasa_usura: { valor: 26.30, cambio: 1.4, titulo: "Tasa de Usura", descripcion: "La tasa de usura presenta un incremento significativo." },
    dtf: { valor: 9.27, cambio: 0.02, titulo: "DTF", descripcion: "La DTF mantiene una tendencia estable en el mercado." },
    cobre: { valor: 4.50, cambio: 0.10, titulo: "Cobre", descripcion: "El cobre muestra signos de recuperación en el mercado internacional." },
    plata: { valor: 25.00, cambio: 0.05, titulo: "Plata", descripcion: "La plata mantiene su valor en el mercado de metales preciosos." },
    maiz: { valor: 6.00, cambio: 0.02, titulo: "Maíz", descripcion: "El maíz presenta una ligera alza en los mercados internacionales." },
    trigo: { valor: 5.50, cambio: 0.01, titulo: "Trigo", descripcion: "El trigo mantiene precios estables en el mercado global." },
    soja: { valor: 14.00, cambio: 0.03, titulo: "Soja", descripcion: "La soja muestra un comportamiento positivo en los mercados." }
};

// Traducciones para internacionalización
const traducciones = {
    es: {
        region: "Seleccionar Región",
        pais: "Seleccionar País",
        buscar: "Buscar",
        resetear: "Resetear",
        info: "Información de Comercio",
        noticias: "Noticias Globales",
        categorias: "Todas las categorías",
        comercio: "Comercio",
        economia: "Economía",
        politica: "Política"
    },
    en: {
        region: "Select Region",
        pais: "Select Country",
        buscar: "Search",
        resetear: "Reset",
        info: "Trade Information",
        noticias: "Global News",
        categorias: "All categories",
        comercio: "Trade",
        economia: "Economy",
        politica: "Politics"
    },
    pt: {
        region: "Selecionar Região",
        pais: "Selecionar País",
        buscar: "Buscar",
        resetear: "Resetar",
        info: "Informação Comercial",
        noticias: "Notícias Globais",
        categorias: "Todas as categorias",
        comercio: "Comércio",
        economia: "Economia",
        politica: "Política"
    }
};

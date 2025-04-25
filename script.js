// Base de datos de fragmentos de historias por tema
const storyDatabase = {
    magia: {
        inicios: [
            "En un reino encantado, vivía un pequeño mago llamado",
            "Había una vez una aprendiz de hechicera que se llamaba",
            "En una escuela de magia, un joven estudiante llamado"
        ],
        nombres: [
            "Luna", "Max", "Stella", "Oliver", "Sofia", "Leo"
        ],
        eventos: [
            "descubrió un libro mágico que brillaba con luz propia",
            "encontró una varita mágica que concedía deseos inesperados",
            "se hizo amigo de un dragón bebé que no podía volar"
        ],
        finales: [
            "y juntos vivieron muchas aventuras mágicas.",
            "y desde entonces, la magia siempre les acompañó.",
            "y aprendieron que la verdadera magia está en el corazón."
        ]
    },
    animales: {
        inicios: [
            "En el corazón del bosque, un pequeño",
            "En una granja muy especial, vivía",
            "Cerca de un estanque cristalino, había"
        ],
        nombres: [
            "un conejo llamado Saltos", "una ardilla llamada Nuez", "un gatito llamado Bigotes"
        ],
        eventos: [
            "que decidió organizar una fiesta para todos sus amigos",
            "que ayudaba a todos los animales que lo necesitaban",
            "que descubrió un tesoro secreto en el bosque"
        ],
        finales: [
            "y todos los animales del bosque fueron muy felices.",
            "y desde entonces, el bosque fue un lugar más alegre.",
            "y aprendieron la importancia de la amistad."
        ]
    },
    aventuras: {
        inicios: [
            "En una isla misteriosa, un valiente explorador llamado",
            "Durante unas vacaciones increíbles,",
            "En busca de un tesoro perdido,"
        ],
        nombres: [
            "Alex", "Marina", "Lucas", "Emma", "Pablo", "Sara"
        ],
        eventos: [
            "encontró un mapa que llevaba a un tesoro secreto",
            "conoció a un grupo de piratas amistosos",
            "descubrió una ciudad perdida bajo el mar"
        ],
        finales: [
            "y su aventura se convirtió en una leyenda.",
            "y prometieron volver para vivir más aventuras juntos.",
            "y aprendieron que el mayor tesoro es la amistad."
        ]
    },
    amistad: {
        inicios: [
            "En un pequeño pueblo, dos amigos inseparables,",
            "Durante el primer día de clase,",
            "En el parque del barrio,"
        ],
        nombres: [
            "Ana y Luis", "Marta y Juan", "Carlos y Elena"
        ],
        eventos: [
            "decidieron crear un club secreto",
            "se ayudaron mutuamente en un momento difícil",
            "organizaron una fiesta sorpresa para todo el vecindario"
        ],
        finales: [
            "y su amistad se hizo más fuerte que nunca.",
            "y descubrieron que juntos todo es posible.",
            "y desde entonces son mejores amigos."
        ]
    },
    naturaleza: {
        inicios: [
            "En un jardín lleno de flores,",
            "Durante una lluvia de primavera,",
            "En lo alto de una montaña verde,"
        ],
        nombres: [
            "una pequeña semilla", "una mariposa curiosa", "un árbol centenario"
        ],
        eventos: [
            "comenzó a crecer de una manera especial",
            "ayudó a proteger a todas las criaturas del jardín",
            "enseñó a todos la importancia de cuidar la naturaleza"
        ],
        finales: [
            "y el jardín se convirtió en un lugar mágico.",
            "y la naturaleza les recompensó con su belleza.",
            "y aprendieron a cuidar y respetar el medio ambiente."
        ]
    }
};

// Función para seleccionar un elemento aleatorio de un array
function seleccionarAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Función para generar una historia basada en el tema seleccionado
function generarHistoria(tema) {
    const temaSeleccionado = storyDatabase[tema];
    
    // Seleccionar elementos aleatorios para construir la historia
    const inicio = seleccionarAleatorio(temaSeleccionado.inicios);
    const nombre = seleccionarAleatorio(temaSeleccionado.nombres);
    const evento = seleccionarAleatorio(temaSeleccionado.eventos);
    const final = seleccionarAleatorio(temaSeleccionado.finales);

    // Construir y retornar la historia completa
    return `${inicio} ${nombre} ${evento} ${final}`;
}

// Elementos del DOM
const themeSelect = document.getElementById('theme');
const generateBtn = document.getElementById('generate-btn');
const storyText = document.getElementById('story-text');
const copyBtn = document.getElementById('copy-btn');

// Evento para generar una nueva historia
generateBtn.addEventListener('click', () => {
    const temaSeleccionado = themeSelect.value;
    const nuevaHistoria = generarHistoria(temaSeleccionado);
    storyText.textContent = nuevaHistoria;
    
    // Mostrar el botón de copiar
    copyBtn.style.display = 'block';
});

// Evento para copiar la historia
copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(storyText.textContent);
        const textoOriginal = copyBtn.textContent;
        copyBtn.textContent = '¡Copiado! 👍';
        
        // Restaurar el texto original del botón después de 2 segundos
        setTimeout(() => {
            copyBtn.textContent = textoOriginal;
        }, 2000);
    } catch (err) {
        console.error('Error al copiar:', err);
        copyBtn.textContent = 'Error al copiar 😕';
    }
});

// Ocultar el botón de copiar inicialmente
copyBtn.style.display = 'none'; 
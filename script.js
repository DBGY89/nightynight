// Base de datos de fragmentos de historias por tema
const storyDatabase = {
    magia: {
        inicios: [
            "En un reino encantado, rodeado de montañas cubiertas de cristales brillantes y bosques donde las flores cantaban al atardecer, vivía un pequeño mago llamado",
            "En la prestigiosa Academia de Artes Místicas, donde las escaleras cambiaban de lugar y los libros volaban por los pasillos como pájaros curiosos, una joven aprendiz de hechicera llamada",
            "En una torre de cristal que se alzaba hasta las nubes, donde el tiempo fluía de manera diferente y las estrellas se podían tocar con las manos, habitaba un estudiante de magia llamado"
        ],
        nombres: [
            "Luna Estrellada", "Maximus el Curioso", "Stella Luminosa", "Oliver Hechizante", "Sofia Destello", "Leo Chispitas"
        ],
        desarrollo: [
            "Un día, mientras exploraba la biblioteca prohibida en el sótano más profundo del castillo, donde las velas flotaban en el aire y las sombras susurraban secretos antiguos,",
            "Durante una noche de luna azul, cuando los gatos mágicos bailaban en los tejados y las estrellas fugaces tejían patrones misteriosos en el cielo,",
            "En medio de una clase de pociones avanzadas, donde los calderos burbujeaban con líquidos de colores imposibles y el aire olía a caramelo y truenos,"
        ],
        eventos: [
            "descubrió un antiguo grimorio cuyas páginas brillaban con luz propia y contenían hechizos olvidados hace siglos. Al abrirlo, las letras comenzaron a danzar y a contar historias de otros mundos,",
            "se encontró con una varita mágica que parecía estar hecha de luz de luna cristalizada. Cada vez que la agitaba, sucedían cosas maravillosas e inesperadas, como que las flores comenzaran a reír o las piedras se convirtieran en mariposas,",
            "se hizo amigo de un pequeño dragón que no podía volar pero que podía tejer nubes con su aliento mágico. El dragón, que tenía escamas que cambiaban de color según su estado de ánimo,"
        ],
        complicacion: [
            "Sin embargo, pronto descubrió que cada hechizo del libro tenía un precio, y que la magia más poderosa requería de grandes sacrificios. Tendría que decidir si estaba dispuesto a renunciar a algo importante para ayudar a otros.",
            "Pero el poder de la varita atraía a criaturas sombrías que querían poseerla, y pronto se vio envuelto en una aventura para proteger no solo la varita, sino todo el reino mágico.",
            "Aunque juntos enfrentaron el rechazo de quienes no entendían su amistad, y tuvieron que superar pruebas que pondrían a prueba su valentía y lealtad."
        ],
        resolucion: [
            "Después de mucha reflexión y con la ayuda de verdaderos amigos, encontró la manera de usar la magia antigua para el bien común, sin tener que sacrificar lo que más quería. Descubrió que el verdadero poder no estaba en los hechizos más grandiosos, sino en las pequeñas magias que nacen del corazón.",
            "Trabajando en equipo con criaturas mágicas de todo el reino y usando su ingenio más que su poder, logró crear un nuevo tipo de magia que protegería el reino para siempre, una magia basada en la amistad y la cooperación.",
            "A través de numerosas aventuras y desafíos, demostraron que la verdadera magia no está en volar alto o en tener los poderes más impresionantes, sino en ser fiel a uno mismo y ayudar a otros a brillar."
        ],
        finales: [
            "Desde entonces, el reino mágico floreció como nunca antes, y todos aprendieron que la magia más poderosa es aquella que une los corazones y construye puentes entre diferentes mundos.",
            "Y así, cada noche, cuando las estrellas brillan en el cielo, se puede ver un destello especial que recuerda a todos que la magia más extraordinaria nace de los actos más sencillos de bondad.",
            "Hasta el día de hoy, se cuenta esta historia en la Academia de Magia para recordar a los estudiantes que la verdadera magia no está en los libros ni en las varitas, sino en el coraje para ser diferente y en la sabiduría para ser amable."
        ]
    },
    animales: {
        inicios: [
            "En el corazón del Bosque Susurrante, donde los árboles centenarios guardaban secretos antiguos y los arroyos cantaban melodías olvidadas, vivía un pequeño",
            "En una granja muy especial, escondida entre colinas ondulantes y prados florecientes, donde cada amanecer traía una nueva aventura y cada atardecer una historia diferente, habitaba",
            "A orillas de un estanque cristalino, rodeado de sauces danzantes y flores que brillaban bajo la luz de la luna, se encontraba"
        ],
        nombres: [
            "un conejo llamado Saltos Valientes, conocido por su curiosidad infinita y su mochila llena de zanahorias mágicas",
            "una ardilla llamada Nuez Sabia, famosa por su colección de historias y su capacidad para encontrar tesoros perdidos",
            "un gatito llamado Bigotes Aventureros, reconocido por su valentía y su habilidad para hacer amigos en cualquier lugar"
        ],
        desarrollo: [
            "Durante una mañana especialmente brillante, mientras recolectaba flores para su colección de recuerdos felices y saludaba a las mariposas que pasaban volando,",
            "En medio de una tarde lluviosa, cuando las gotas de agua creaban música sobre las hojas y los hongos brillantes iluminaban el camino,",
            "Al despertar de una siesta bajo su árbol favorito, donde los rayos del sol jugaban entre las hojas creando patrones danzantes,"
        ],
        eventos: [
            "descubrió que los animales más pequeños del bosque estaban preocupados porque el Gran Roble, hogar de muchas familias, había enfermado misteriosamente. Decidido a ayudar, comenzó a organizar una gran reunión de todos los habitantes del bosque,",
            "se encontró con un grupo de animales nuevos que habían perdido su hogar debido a una tormenta en el bosque vecino. Sin dudarlo, comenzó a planear cómo ayudarlos a construir un nuevo hogar,",
            "notó que algo extraño estaba sucediendo en el estanque: el agua estaba perdiendo su brillo mágico y los peces estaban tristes. Determinado a resolver el misterio, reunió a sus amigos más cercanos"
        ],
        complicacion: [
            "Sin embargo, la tarea resultó ser más difícil de lo esperado. Algunos animales no querían cooperar, otros tenían miedo de los cambios, y parecía imposible poner de acuerdo a todos.",
            "Pero no todos en el bosque estaban felices con la llegada de los nuevos habitantes. Surgieron conflictos por el espacio y los recursos, y nuestro héroe tuvo que encontrar una manera de promover la convivencia pacífica.",
            "A medida que investigaban, descubrieron que el problema era más grande de lo que pensaban: la magia del bosque se estaba debilitando en todas partes, y necesitarían la ayuda de cada habitante para restaurarla."
        ],
        resolucion: [
            "Con paciencia, creatividad y mucho cariño, logró demostrar que cuando todos colaboran, incluso los problemas más grandes pueden resolverse. Organizó grupos de trabajo donde cada animal podía aportar sus habilidades únicas.",
            "A través de juegos, fiestas y proyectos compartidos, consiguió que todos los animales se conocieran mejor y descubrieran que sus diferencias los hacían más fuertes como comunidad.",
            "Trabajando juntos, y utilizando los talentos especiales de cada animal, encontraron la forma de restaurar la magia del bosque. Los pájaros cantaron sus melodías más dulces, las abejas danzaron sus bailes más alegres, y las luciérnagas iluminaron el cielo con sus luces más brillantes."
        ],
        finales: [
            "Desde ese día, el bosque se convirtió en un lugar aún más mágico, donde todos los animales, grandes y pequeños, trabajaban juntos para mantener viva la magia de la amistad y la cooperación.",
            "Y así, el bosque no solo se recuperó, sino que se transformó en un lugar más hermoso y acogedor que nunca, donde cada día traía nuevas aventuras y amistades.",
            "Hasta hoy, cuando visitas el bosque en una noche tranquila, puedes escuchar a los animales contar esta historia a sus pequeños, recordándoles que la verdadera magia está en ayudarse unos a otros."
        ]
    },
    aventuras: {
        inicios: [
            "En una isla misteriosa que no aparecía en ningún mapa, donde las brújulas giraban sin control y las estrellas contaban historias diferentes cada noche, un valiente explorador llamado",
            "Durante unas vacaciones que comenzaron de manera ordinaria pero que pronto se convertirían en la aventura más extraordinaria jamás contada,",
            "En los confines del mundo conocido, donde los mapas terminaban y comenzaban las leyendas, un intrépido aventurero llamado"
        ],
        nombres: [
            "Alex Brújula Inquieta", "Marina Vientos Salvajes", "Lucas Horizontes Lejanos", "Emma Pasos Valientes", "Pablo Mares Profundos", "Sara Estrellas Viajeras"
        ],
        desarrollo: [
            "Una mañana, mientras exploraba una cueva cuyas paredes brillaban con cristales de colores nunca antes vistos y donde el eco susurraba secretos antiguos,",
            "Durante una expedición por la selva más densa, donde las lianas parecían moverse por voluntad propia y las flores emitían suaves melodías,",
            "Al seguir el rastro de una misteriosa criatura que dejaba huellas luminiscentes y plumas de colores imposibles,"
        ],
        eventos: [
            "encontró un mapa tallado en una piedra cristalina que cambiaba sus rutas según la luz de la luna. El mapa revelaba la ubicación de un tesoro legendario que podría cambiar el destino de la isla para siempre,",
            "se topó con una antigua civilización que vivía en armonía con la naturaleza y guardaba secretos que podrían revolucionar la forma en que el mundo entero veía la vida,",
            "descubrió una puerta dimensional que conectaba diferentes mundos, cada uno más asombroso que el anterior, pero también más peligroso"
        ],
        complicacion: [
            "Sin embargo, no era el único tras el tesoro. Un grupo de cazadores de reliquias sin escrúpulos también había llegado a la isla, y estaban dispuestos a todo por conseguirlo primero.",
            "Pero mantener el secreto de la civilización perdida se volvió un desafío cuando notó que el mundo exterior comenzaba a amenazar su existencia pacífica.",
            "Aunque cada mundo nuevo traía maravillas increíbles, también enfrentaba el dilema de elegir entre regresar a casa o continuar explorando, sabiendo que cada paso adelante podría hacer imposible el retorno."
        ],
        resolucion: [
            "Utilizando su ingenio, conocimientos de navegación y la ayuda de amigos inesperados que fue encontrando en el camino, logró no solo proteger el tesoro, sino también descubrir su verdadero propósito.",
            "Trabajando junto con la civilización antigua y aplicando su sabiduría de manera responsable, encontró una forma de proteger sus secretos mientras compartía sus enseñanzas más valiosas con el mundo.",
            "A través de pruebas de valor, sabiduría y compasión en cada mundo que visitaba, finalmente comprendió que el verdadero tesoro era el conocimiento y las amistades que había ganado en su viaje."
        ],
        finales: [
            "La aventura transformó no solo la isla, sino también el corazón de todos los que participaron en ella, demostrando que los verdaderos tesoros son aquellos que se comparten.",
            "Hasta hoy, los viajeros que llegan a estas tierras lejanas pueden sentir la magia de aquella aventura, y si escuchan con atención, las estrellas les contarán esta historia.",
            "Y así, lo que comenzó como una búsqueda de tesoros se convirtió en una lección sobre el valor de la amistad, el respeto por otras culturas y la importancia de proteger los misterios del mundo."
        ]
    },
    amistad: {
        inicios: [
            "En un pequeño pueblo rodeado de montañas azules y campos de flores silvestres, donde cada calle tenía su propia historia y cada plaza guardaba mil secretos, vivían dos amigos inseparables,",
            "En el primer día de un nuevo año escolar, cuando el aire estaba lleno de nervios y esperanzas, y las mochilas nuevas brillaban bajo el sol de la mañana,",
            "En un vecindario donde las casas tenían personalidad propia y los jardines contaban historias de generaciones,"
        ],
        nombres: [
            "Ana y Luis, tan diferentes como el sol y la luna pero igual de inseparables", 
            "Marta y Juan, unidos por su amor por las aventuras y los libros", 
            "Carlos y Elena, que se conocieron un día lluvioso compartiendo un paraguas"
        ],
        desarrollo: [
            "Durante un verano que prometía ser como cualquier otro, pero que el destino tenía preparado para ser extraordinario,",
            "En medio de los preparativos para el festival anual del pueblo, cuando todos estaban ocupados con decoraciones y planes,",
            "Durante una tarde que comenzó con un simple juego pero se convirtió en el inicio de algo maravilloso,"
        ],
        eventos: [
            "decidieron crear un club secreto en una casa del árbol abandonada. Poco a poco, fueron transformando el lugar en un refugio mágico donde todos eran bienvenidos,",
            "se encontraron enfrentando un desafío que pondría a prueba no solo su amistad, sino también su capacidad para unir a toda la comunidad,",
            "comenzaron un proyecto ambicioso: convertir el viejo parque abandonado en un espacio donde todos los niños del barrio pudieran jugar y soñar"
        ],
        complicacion: [
            "Sin embargo, mantener unido al grupo no fue fácil. Surgieron malentendidos, algunos tenían miedo de compartir sus secretos, y otros dudaban de si realmente pertenecían allí.",
            "Pero no todos en el pueblo entendían su visión. Enfrentaron dudas, críticas y obstáculos que parecían imposibles de superar.",
            "A medida que el proyecto crecía, también crecían los desafíos. Las diferencias de opinión amenazaban con separar no solo a los amigos, sino a todo el vecindario."
        ],
        resolucion: [
            "Con paciencia, comprensión y mucho cariño, encontraron la forma de superar sus diferencias. Aprendieron que la verdadera amistad no significa ser iguales, sino aceptar y celebrar lo que hace único a cada uno.",
            "Trabajando juntos, demostraron que la unión hace la fuerza. Cada persona aportó algo especial: ideas, trabajo, ánimo o simplemente una sonrisa en el momento adecuado.",
            "A través de reuniones comunitarias, actividades compartidas y mucho diálogo, lograron que el proyecto se convirtiera en un símbolo de lo que se puede lograr cuando todos colaboran."
        ],
        finales: [
            "Hoy, años después, el club sigue siendo un lugar especial donde nuevas generaciones aprenden el valor de la verdadera amistad y el poder de aceptar a todos tal como son.",
            "La experiencia no solo fortaleció su amistad, sino que también transformó al pueblo entero, demostrando que los lazos más fuertes son aquellos que se tejen con el corazón.",
            "Y así, lo que comenzó como un simple proyecto entre amigos se convirtió en una lección de vida sobre el poder de la amistad para cambiar el mundo, un pequeño rincón a la vez."
        ]
    },
    naturaleza: {
        inicios: [
            "En un jardín mágico donde las estaciones bailaban juntas y cada flor tenía su propia canción, entre senderos de musgo brillante y arroyos que susurraban secretos antiguos,",
            "Durante una primavera extraordinaria, cuando las lluvias pintaban arcoíris en el cielo y el viento transportaba semillas de esperanza a lugares lejanos,",
            "En lo alto de una montaña verde, donde las nubes descansaban entre picos nevados y los pájaros tejían historias con sus cantos,"
        ],
        nombres: [
            "una pequeña semilla de diente de león que soñaba con volar más alto que ninguna otra", 
            "una mariposa de alas tornasoladas llamada Aurora, que pintaba colores en el aire", 
            "un antiguo roble que había visto pasar cien primaveras y guardaba mil historias en sus anillos"
        ],
        desarrollo: [
            "Un día, cuando el sol jugaba al escondite entre las nubes y la brisa susurraba melodías olvidadas,",
            "Durante una noche de luna llena, cuando las flores nocturnas abrían sus pétalos para bailar con las estrellas,",
            "En medio de un cambio de estación, cuando la naturaleza se preparaba para su gran transformación,"
        ],
        eventos: [
            "comenzó a notar cambios preocupantes en su hogar: las flores perdían su brillo, los pájaros cantaban con menos alegría, y el aire parecía más pesado cada día,",
            "descubrió que tenía el don especial de poder comunicarse con todas las criaturas del jardín, y pronto se convirtió en el guardián de sus secretos y esperanzas,",
            "se encontró con la misión de proteger a todas las criaturas del bosque de una sequía que amenazaba con transformar su hogar en un lugar irreconocible"
        ],
        complicacion: [
            "Sin embargo, enfrentar los cambios requería más que buenas intenciones. Necesitaban que todos los seres del jardín trabajaran juntos, algo que nunca antes habían logrado.",
            "Pero con el don vino una gran responsabilidad, y pronto descubrió que algunas verdades de la naturaleza eran difíciles de aceptar y más aún de cambiar.",
            "Aunque el desafío parecía imposible, sabía que rendirse no era una opción. Cada gota de agua era preciosa, y cada ser vivo dependía de los demás para sobrevivir."
        ],
        resolucion: [
            "Poco a poco, con la sabiduría de los árboles antiguos y el entusiasmo de las criaturas más pequeñas, encontraron formas de trabajar juntos para restaurar el equilibrio natural.",
            "A través de pequeños actos de bondad y grandes muestras de coraje, demostraron que la naturaleza tiene una forma extraordinaria de curarse cuando todos colaboran.",
            "Uniendo los conocimientos ancestrales con la energía de las nuevas generaciones, crearon soluciones innovadoras para proteger y preservar su hogar compartido."
        ],
        finales: [
            "Desde entonces, el jardín florece con más fuerza que nunca, y cada primavera trae consigo el recuerdo de cómo el amor por la naturaleza puede transformar el mundo.",
            "Y así, cada vez que el viento sopla entre las hojas o una flor abre sus pétalos al sol, cuenta la historia de cómo la naturaleza nos enseña sus lecciones más valiosas.",
            "Hasta hoy, cuando la luna ilumina el jardín y las estrellas parpadean en el cielo, la naturaleza recuerda cómo el cuidado y el respeto pueden hacer milagros."
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
    const desarrollo = seleccionarAleatorio(temaSeleccionado.desarrollo);
    const evento = seleccionarAleatorio(temaSeleccionado.eventos);
    const complicacion = seleccionarAleatorio(temaSeleccionado.complicacion);
    const resolucion = seleccionarAleatorio(temaSeleccionado.resolucion);
    const final = seleccionarAleatorio(temaSeleccionado.finales);

    // Construir y retornar la historia completa con párrafos
    return `${inicio} ${nombre}.\n\n${desarrollo} ${evento}.\n\n${complicacion}\n\n${resolucion}\n\n${final}`;
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
    storyText.innerHTML = nuevaHistoria;
    
    // Mostrar el botón de copiar
    copyBtn.style.display = 'block';
});

// Evento para copiar la historia
copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(storyText.textContent);
        const textoOriginal = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span class="material-icons-round">check</span> ¡Copiado!';
        
        // Restaurar el texto original del botón después de 2 segundos
        setTimeout(() => {
            copyBtn.innerHTML = textoOriginal;
        }, 2000);
    } catch (err) {
        console.error('Error al copiar:', err);
        copyBtn.innerHTML = '<span class="material-icons-round">error</span> Error al copiar';
    }
});

// Ocultar el botón de copiar inicialmente
copyBtn.style.display = 'none'; 
import { GenericItem } from "../app/Model/genericItem";

const mockGenericDataBooks: GenericItem[] = [
    {
      titulo: "Todo lo que no ves",
      autor: "Nora Roberts",
      fecha: new Date(2024, 2, 21),
      descripcion: "Los Bigelow aparentan ser la familia perfecta: el padre es un respetado cirujano; la madre, una devota ama de casa; y sus hijos, Zane y Britt, los adolescentes más afortunados de Lakeview Terrace, una pequeña comunidad en la cordillera azul de Carolina del Norte. Pero las apariencias engañan y la casa de ensueño de los Bigelow es, en realidad, un infierno del que parece imposible huir.",
      genero: "Romance, Drama",
      urlImagen: "https://m.media-amazon.com/images/I/71Wc5bz5nbL._UF1000,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Claro de Luna",
      autor: "Nora Roberts",
      fecha: new Date(2024, 2, 23),
      descripcion: "Tory Bodeen, criada en una familia abusiva, regresa a su pueblo natal años después del asesinato no resuelto de su amiga Hope, buscando paz, abrir una tienda de modas y sanar, pero se enfrenta a los recuerdos traumáticos y al peligro del asesino aún libre.",
      genero: "Romance, Misterio",
      urlImagen: "https://m.media-amazon.com/images/I/91sTW6Mnd+S._AC_UF1000,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Jugando con fuego",
      autor: "Nora Roberts",
      fecha: new Date(2024, 2, 25),
      descripcion: "Reena Hale, quien decidió dominar el fuego tras sobrevivir a un incendio que destruyó su familia, se convierte en investigadora en la unidad contra incendios de Baltimore, pero su pasado y un antiguo amor amenazan con destruir todo lo que ha logrado.",
      genero: "Romance, Suspense",
      urlImagen: "https://m.media-amazon.com/images/I/71V9zITocKL._UF1000,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Tres destinos",
      autor: "Nora Roberts",
      fecha: new Date(2024, 2, 26),
      descripcion: "Los hermanos Sullivan descubren que una estatuilla de plata robada es parte de un valioso trío de esculturas, y se embarcan en una peligrosa búsqueda por recuperar el tesoro, enfrentándose a misteriosas fuerzas que intentan detenerlos.",
      genero: "Romance, Fantasía",
      urlImagen: "https://m.media-amazon.com/images/I/81gh07v+0vL._AC_UF1000,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Bruja Oscura",
      autor: "Nora Roberts",
      fecha: new Date(2024, 3, 17),
      descripcion: "Iona Sheehan viaja a Irlanda, tierra de sus antepasados, para conectar con su legado familiar de hechiceras "+
      "y su pasión por los caballos, mientras se enfrenta a nuevos retos y descubre secretos sobre su historia en el condado de Mayo.",
      genero: "Romance, Fantasía",
      urlImagen: "https://m.media-amazon.com/images/I/51Q6sYAL0oL._AC_UF1000,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Hechizo en la niebla",
      autor: "Nora Roberts",
      fecha: new Date(2024, 3, 17),
      descripcion: "Connor O'Dwyer, halconero del condado de Mayo, se da cuenta de su amor por Meara Quinn, su amiga de toda la vida, mientras intenta conquistarla, pero a medida que lo hace, descubre la fuerza y la furia de su herencia familiar, un legado que amenaza con destruir todo lo que ha logrado y todo lo que ama.",
      genero: "Romance, Fantasía",
      urlImagen: "https://m.media-amazon.com/images/I/81tl1Aay+TL._UF1000,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Legado Mágico",
      autor: "Nora Roberts",
      fecha: new Date(2024, 3, 18),
      descripcion: "Branna O'Dwyer, descendiente de la Bruja Oscura, vive entre las tradiciones y mitos del condado de Mayo, donde su vida sencilla se ve marcada por la magia y los recuerdos de un amor perdido con Finbar Burke, al que, a pesar de la antigua enemistad familiar, deberá enfrentarse para poder dejarse llevar por la pasión que aún los une.",
      genero: "Romance, Fantasía",
      urlImagen: "https://m.media-amazon.com/images/I/71IDeiFxgqL._UF1000,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Nacida del Hielo",
      autor: "Nora Roberts",
      fecha: new Date(2024, 3, 18),
      descripcion: "Brie Concannon, gracias a su esfuerzo, ha convertido la casa familiar en un acogedor hotel rural, pero cuando descubre un oscuro secreto sobre su padre, su vida se ve alterada por la llegada de Grayson Thane, un escritor norteamericano que busca inspiración, desatando una atracción mutua que les enfrentará a sus pasados dolorosos antes de que puedan reconocer que necesitan estar juntos.",
      genero: "Romance",
      urlImagen: "https://m.media-amazon.com/images/I/81wAY4+T2WL._SL1500_.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Nacida de la vergüenza",
      autor: "Nora Roberts",
      fecha: new Date(2024, 3, 19),
      descripcion: "Shannon Bodine, tras perder a sus padres y enfrentar una revelación que la hace cuestionar su identidad, viaja al condado de Clare en busca de respuestas, donde descubre un nuevo modo de vida lleno de naturaleza, sueños y mitos, y, a pesar de su escepticismo hacia el destino, se ve atrapada por la magia del amor y un caballero irlandés que podría ser su verdadera razón de ser.",
      genero: "Drama",
      urlImagen: "https://m.media-amazon.com/images/I/71N18o42wUL._AC_UF1000,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Seductora inocencia",
      autor: "Gaelen Foley",
      fecha: new Date(2024, 3, 19),
      descripcion: "Robert Knight, duque de Hawkscliffe, un hombre rico y noble, busca vengar la muerte de la mujer que amaba, mientras que Belinda Hamilton, una cortesana deseada y distante, lucha por superar su ruina y el acoso de un hombre. Juntos, unidos por el deseo de venganza, viven un amor prohibido que desafía las estrictas normas de la alta sociedad londinense.",
      genero: "Romance, Histórico",
      urlImagen: "https://m.media-amazon.com/images/I/71vo03R00-L._AC_UF1000,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Corazón de fuego",
      autor: "Gaelen Foley",
      fecha: new Date(2024, 3, 20),
      descripcion: "Lucien segundo hermano de este cautivadora familia. Entregado a una vida aparentemente ociosa atractivo y disoluto no goza del favor de la hermosa Alice valiente e íntegra por quien se siente muy atraído. Alice ni siquiera sospecha que en realidad Lucien es un espía al servicio de la corona...",
      genero: "Romance, Histórico",
      urlImagen: "https://m.media-amazon.com/images/I/71IAG-QIqTL._AC_UF1000,1000_QL80_.jpg",
      ranking: '⭐⭐⭐'
    },
    {
      titulo: "El coleccionista",
      autor: "Nora Roberts",
      fecha: new Date(2024, 3, 21),
      descripcion: "Lila Emerson, cuidadora de casas y escritora freelance, ve su vida alterada cuando es testigo de lo que parece ser un asesinato y un suicidio, lo que la involucra en una investigación junto al atractivo hermano del suicida. Juntos, se adentrarán en el peligroso mundo del tráfico de antigüedades, enfrentándose a asesinos dispuestos a matar para conseguir lo que desean.",
      genero: "Romance, Suspense",
      urlImagen: "https://m.media-amazon.com/images/I/918oefc7kiL._AC_UF1000,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Rosa Cuchillo",
      autor: "Óscar Colchado",
      fecha: new Date(2024, 3, 24),
      descripcion: "Rosa Wanka, llamada también Rosa Cuchillo, camina por distintos parajes de la sierra peruana en busca del alma de su hijo Liborio, reclutado por Sendero Luminoso para llevar a cabo su sanguinaria 'guerra popular'. Ella, en el trasmundo, es guiada por su perro Wayra, quien además la protege y advierte de las almas condenadas que surgen a lo largo del viaje al Janaq Pacha, mundo andino donde habitan los dioses.",
      genero: "Acción",
      urlImagen: "https://m.media-amazon.com/images/I/71toMx5RLLL._UF1000,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "El Duque y yo",
      autor: "Julia Quinn",
      fecha: new Date(2024, 6, 1),
      descripcion: "Daphne, agobiada por la presión de su madre para encontrar marido, y Simon, el huraño nuevo duque de Hastings, se embarcan en un plan para fingir un compromiso y librarse de los pretendientes indeseados, pero lo que comienza como una farsa se complica cuando entre ellos surge un amor inesperado que desafía todas sus intenciones.",
      genero: "Romance, Histórico",
      urlImagen: "https://m.media-amazon.com/images/I/71xUCZbuogL._SL1500_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "El vizconde que me amó",
      autor: "Julia Quinn",
      fecha: new Date(2024, 6, 2),
      descripcion: "Anthony Bridgerton, el vizconde más codiciado de la temporada, decide dejar de ser un vividor y busca esposa, eligiendo a la hermosa Edwina Sheffield. Sin embargo, para ganarla, debe primero obtener la aprobación de su hermana mayor, Kate, una mujer decidida a proteger el corazón de su hermana. A medida que Anthony lucha por convencerla de sus intenciones, descubre en Kate una mujer formidable que desafiará sus creencias sobre el amor y lo llevará a replantearse todo, incluyéndo su propio corazón.",
      genero: "Romance, Histórico",
      urlImagen: "https://juliaquinn.com/WP/wp-content/uploads/2024/08/SpainViscountLux.png",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Te doy mi corazón",
      autor: "Julia Quinn",
      fecha: new Date(2024, 6, 2),
      descripcion: "Sophie, hija ilegítima y pobre, vive una noche mágica al conquistar a Benedict Bridgerton en un baile, pero cuando se convierte en su criada, él no la reconoce. A pesar de las barreras de clase, la atracción entre ellos crece, y Benedict está dispuesto a luchar por el amor perdido.",
      genero: "Romance, Histórico",
      urlImagen: "https://juliaquinn.com/WP/wp-content/uploads/2024/08/SpainOfferLux.png",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Seduciendo a Mr Bridgerton",
      autor: "Julia Quinn",
      fecha: new Date(2024, 6, 3),
      descripcion: "Penélope, resignada a ser una solterona invisible para todos, ve cómo su amor platónico, Colin Bridgerton, la comienza a ver de una manera diferente, descubriendo en ella una mujer audaz, inteligente y atractiva, lo que cambia su relación y los lleva a descubrirse mutuamente.",
      genero: "Romance, Histórico",
      urlImagen: "https://juliaquinn.com/WP/wp-content/uploads/2024/08/SpainRMBLux.png",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "A sir Phillip con amor",
      autor: "Julia Quinn",
      fecha: new Date(2024, 6, 3),
      descripcion: "Eloise Bridgerton, cansada de la soltería, decide conocer a Sir Phillip, un hombre con quien ha intercambiado cartas. Al encontrarse con él, descubre que es rudo y tiene dos hijos traviesos, pero siente una pasión latente que no está dispuesta a dejar escapar.",
      genero: "Romance, Histórico",
      urlImagen: "https://juliaquinn.com/WP/wp-content/uploads/2024/08/SpainSirLux.png",
      ranking: '⭐⭐⭐'
    },
    {
      titulo: "Legado",
      autor: "Nora Roberts",
      fecha: new Date(2024, 7, 7),
      descripcion: "Adrian Rizzo, exitosa dueña de una marca de fitness, se traslada a Traveller's Creek para cuidar a su abuelo, solo para encontrarse con Raylan, un viejo amigo. Pronto, las amenazas anónimas que ha estado recibiendo aumentan, revelando que alguien busca venganza, y Adrian deberá enfrentarse a su oscuro pasado para encontrar la paz.",
      genero: "Drama",
      urlImagen: "https://m.media-amazon.com/images/I/71u9p6i5XQL._AC_UF1000,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Tragedia en tres actos",
      autor: "Agatha Christie",
      fecha: new Date(2024, 7, 11),
      descripcion: "Sir Charles Cartwright organiza una cena con trece invitados, pero la velada termina con uno muerto por un cóctel aparentemente inocente. Lo que desconcierta al detective Poirot no es el asesinato en sí, sino la total falta de motivos que lo expliquen.",
      genero: "Suspense",
      urlImagen: "https://m.media-amazon.com/images/I/71+lH0O4tsL.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Muerte en las nubes",
      autor: "Agatha Christie",
      fecha: new Date(2024, 7, 14),
      descripcion: "Desde su asiento en el avión, Poirot observa a los pasajeros a su alrededor: una mujer enamorada, una condesa con una peligrosa adicción y un escritor molestado por una abeja. Pero lo que no nota es que, detrás de él, en la segunda butaca, yace el cadáver de una mujer.",
      genero: "Misterio",
      urlImagen: "https://m.media-amazon.com/images/I/919mTCZcg1L._AC_UF894,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Un capuchino mortal",
      autor: "Cleo Coyle",
      fecha: new Date(2024, 9, 10),
      descripcion: "Clare Cosi, encargada de la cafetería Village Blend en Nueva York, descubre el cuerpo de su subencargada rodeado de posos de café. Aunque la policía lo clasifica como un accidente, Clare sospecha que algo no encaja y decide investigar por su cuenta antes de que alguien más sea víctima.",
      genero: "Misterio",
      urlImagen: "https://m.media-amazon.com/images/I/71eVQammwSL._SL1000_.jpg",
      ranking: '⭐⭐'
    },
    {
      titulo: "Desde Soulcial ¿con amor?",
      autor: "Iria G. Parente & Selene Pascual",
      fecha: new Date(2024, 9, 11),
      descripcion: "Inma, encargada de hacer un reportaje sobre la app de citas Soulcial, se encuentra con Kat, a quien la aplicación no recomienda pero con quien se siente atraída de inmediato. Mientras tanto, Oliver, buscando el amor verdadero, es emparejado con Inma al obtener un 99% de compatibilidad. Sin embargo, el amor rara vez es tan predecible.",
      genero: "Romántico",
      urlImagen: "https://m.media-amazon.com/images/I/81vzOkqeZ6L._UF1000,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "No te despiertes",
      autor: "Liz Lawler",
      fecha: new Date(2024, 9, 17),
      descripcion: "Alex Taylor se despierta en una mesa de operaciones sin recordar cómo llegó allí, solo para descubrir que la persona frente a ella no es un médico y la obliga a tomar una decisión aterradora. Tras despertar nuevamente a salvo pero confundida, nadie cree su versión de los hechos, alegando que es solo una pesadilla post-accidente. Marginada por todos, Alex casi acepta que ha perdido la razón... hasta que conoce a otra víctima.",
      genero: "Suspense",
      urlImagen: "https://m.media-amazon.com/images/I/61xQcBjeeuL._AC_UF894,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Café hasta la muerte",
      autor: "Cleo Coyle",
      fecha: new Date(2024, 9, 19),
      descripcion: "Clare Cosi, encargada de la cafetería Village Blend, descubre que varias muertes de sus clientas no fueron accidentes. El teniente Quinn sospecha de un hombre que Clare conoció en una cita rápida. Ahora, Clare debe investigar el caso, arriesgando su relación y su propia vida.",
      genero: "Misterio",
      urlImagen: "https://m.media-amazon.com/images/I/61r2fLVE0JL.jpg",
      ranking: '⭐⭐⭐'
    },
    {
      titulo: "La flor y la muerte",
      autor: "Iria G. Parente & Selene Pascual",
      fecha: new Date(2024, 10, 21),
      descripcion: "En Marte, 2628, Olympus divide a la sociedad en trece Servicios inspirados en los dioses olímpicos. Asha, una hades, y Ianthe, una deméter, ingresan a la Akademeia, donde deberán enfrentarse a una competencia brutal para liderar los Servicios. La Odisea será su prueba final, donde el poder solo lo alcanzará quien esté dispuesto a todo.",
      genero: "Romance, Fantasía",
      urlImagen: "https://m.media-amazon.com/images/I/71K0KZqYhcL.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "El sol y la mentira",
      autor: "Iria G. Parente & Selene Pascual",
      fecha: new Date(2024, 10, 21),
      descripcion: "En Marte, 2634, Armand Cordroy es un diseñador en el Servicio de Afrodita, pero en realidad es un espía que busca manipular a Enid Dusan, la principal candidata para liderar el Servicio de Zeus. Ambos tienen planes secretos y se engañan mutuamente en una competencia por el poder.",
      genero: "Romance, Fantasía",
      urlImagen: "https://m.media-amazon.com/images/I/61h3TmSyoJS._SL1108_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Admiracion",
      autor: "Nora Roberts",
      fecha: new Date(2024, 11, 4),
      descripcion: "Cilla McGowan se aleja de Hollywood para rehabilitar una granja que perteneció a su abuela, una estrella de cine que se suicidó joven. En el proceso, se enfrenta a misteriosas cartas de un amante y violentos sucesos, mientras se siente atraída por su vecino Ford Sawyer. Juntos deberán resolver el misterio para darle un nuevo rumbo a su vida.",
      genero: "Romántico",
      urlImagen: "https://m.media-amazon.com/images/I/71ElEkC4Q7L._SL1500_.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "El corazon de una bridgerton",
      autor: "Julia Quinn",
      fecha: new Date(2024, 11, 10),
      descripcion: "Michael siempre amó a Francesca, pero ella era la esposa de su primo John, a quien consideraba como un hermano. Tras la muerte de John, Michael hereda su posición, pero el remordimiento lo separa de Francesca, quien intuye que hay algo más entre ellos. Un pequeño gesto podría revelar el secreto y cambiar sus vidas para siempre.",
      genero: "Romántico",
      urlImagen: "https://juliaquinn.com/WP/wp-content/uploads/2024/08/SpainWickedLux.png",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "La asistenta",
      autor: "Freida McFadden",
      fecha: new Date(2024, 12, 12),
      descripcion: "Una mujer de servicio en la casa de los Winchester observa en silencio la lujosa vida de la familia, sintiendo una creciente fascinación por ellos. Un día, la tentación la lleva a probarse un vestido de Nina, pero esa acción desata una espiral de consecuencias aterradoras. Pronto descubre que los secretos oscuros que guarda no solo podrían destruir la fachada perfecta, sino también su propia vida.",
      genero: "Suspense",
      urlImagen: "https://m.media-amazon.com/images/I/71UilMg9WPL._SL1500_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "El secreto de la asistenta",
      autor: "Freida McFadden",
      fecha: new Date(2024, 12, 12),
      descripcion: "Una mujer consigue trabajo en el ático de los Garrick, pero pronto descubre secretos perturbadores sobre la familia. La señora Garrick está en un estado de sufrimiento oculto, y la empleada promete vengar lo que ha descubierto. La búsqueda de justicia la llevará a enfrentarse a los oscuros secretos de la familia.",
      genero: "Misterio",
      urlImagen: "https://m.media-amazon.com/images/I/71tFruc1CpL._SL1500_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "La asistenta te vigila",
      autor: "Freida McFadden",
      fecha: new Date(2024, 12, 14),
      descripcion: "Una mujer feliz con su nueva vida familiar comienza a sospechar de sus extraños vecinos y la misteriosa doncella de los Lowell. A medida que los secretos oscuros salen a la luz, duda si mudarse a este barrio fue un error. Un thriller de tensión y peligro que pondrá a prueba su seguridad.",
      genero: "Misterio",
      urlImagen: "https://m.media-amazon.com/images/I/71mzap9AWlL._SL1500_.jpg",
      ranking: '⭐⭐⭐⭐'
    }  
];
export default mockGenericDataBooks;

import { GenericItem } from "../app/Model/genericItem";

const mockGenericDataMovies: GenericItem[] = [
    {
      titulo: "Scary Movie 3",
      autor: "Keenen Ivory Wayans",
      fecha: new Date(2024, 1, 2),
      descripcion: "Una parodia de películas de terror y ciencia ficción, cargada de comedia y situaciones absurdas.",
      genero: "Comedia",
      urlImagen: "https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_FMjpg_UX1000_.jpg",
      ranking: '⭐⭐⭐'
    },
    {
      titulo: "Un espía y medio",
      autor: "Rawson Marshall Thurber",
      fecha: new Date(2024, 1, 18),
      descripcion: "Un hombre común se asocia con un espía exótico para desbaratar un complot de espionaje.",
      genero: "Acción, Comedia",
      urlImagen: "https://www.lahiguera.net/cinemania/pelicula/7421/un_espia_y_medio-cartel-6926.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "The Menu",
      autor: "Mark Mylod",
      fecha: new Date(2024, 1, 26),
      descripcion: "Un chef famoso prepara una cena exclusiva para un grupo selecto de personas, pero algo siniestro está por ocurrir.",
      genero: "Comedia, Terror",
      urlImagen: "https://m.media-amazon.com/images/M/MV5BN2Q0YWE1MjktODJlMi00NTRiLWI2ZTctZTAxNjkyODVjM2EyXkEyXkFqcGc@._V1_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Heathers Musical",
      autor: "Andy Fickman",
      fecha: new Date(2024, 4, 11),
      descripcion: "Una adaptación musical de la película de culto, centrada en la vida de una chica de secundaria y su lucha con los problemas sociales.",
      genero: "Musical, Comedia",
      urlImagen: "https://m.media-amazon.com/images/I/61BJXOOXVdL._AC_UF894,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "El gran hotel Budapest",
      autor: "Wes Anderson",
      fecha: new Date(2024, 4, 13),
      descripcion: "Las aventuras de un conserje de hotel y su joven amigo, en un hotel de lujo de la Europa central entre las guerras.",
      genero: "Comedia, Drama",
      urlImagen: "https://m.media-amazon.com/images/I/713kiC-8JhL.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Una vida a lo grande",
      autor: "Alexander Payne",
      fecha: new Date(2024, 7, 3),
      descripcion: "Una historia sobre personas que deciden reducir su tamaño para vivir una vida más cómoda y asequible.",
      genero: "Ciencia ficción, Comedia",
      urlImagen: "https://newcinema.es/imagenes/2017/12/Poster_Una_Vida_a_lo_Grande-710x1024.jpg",
      ranking: '⭐⭐'
    },
    {
      titulo: "Barbarian",
      autor: "Zach Cregger",
      fecha: new Date(2024, 7, 14),
      descripcion: "Una mujer se hospeda en una casa de alquiler vacacional, solo para descubrir que algo oscuro la acecha.",
      genero: "Terror, Suspense",
      urlImagen: "https://i.ebayimg.com/00/s/MTYwMFgxMDgw/z/GXwAAOSwXbJjHisa/$_57.JPG?set_id=880000500F",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Bullet Train",
      autor: "David Leitch",
      fecha: new Date(2024, 7, 16),
      descripcion: "Un grupo de asesinos se encuentra en un tren bala con destinos que se cruzan, mientras luchan por sobrevivir.",
      genero: "Acción, Comedia",
      urlImagen: "https://m.media-amazon.com/images/I/71OXfuwWXsL._AC_UF894,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Pretty Woman",
      autor: "Garry Marshall",
      fecha: new Date(2024, 7, 20),
      descripcion: "Una comedia romántica que cuenta la historia de una prostituta y un hombre de negocios que se enamoran.",
      genero: "Romántico, Comedia",
      urlImagen: "https://m.media-amazon.com/images/I/61Xu4VmrWbL.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Wakanda Forever",
      autor: "Ryan Coogler",
      fecha: new Date(2024, 7, 21),
      descripcion: "La secuela de Black Panther, que explora el duelo de Shuri y su camino honrando el legado de T'Challa y la lucha por la protección de Wakanda.",
      genero: "Acción, Aventura",
      urlImagen: "https://i.ebayimg.com/00/s/MTYwMFgxMDYx/z/0gkAAOSwQntjYcHT/$_57.JPG?set_id=880000500F",
      ranking: '⭐⭐'
    },
    {
      titulo: "The Marvels",
      autor: "Nia DaCosta",
      fecha: new Date(2024, 7, 21),
      descripcion: "Tres heroínas del universo Marvel se unen en una misión para salvar el universo.",
      genero: "Acción, Ciencia ficción",
      urlImagen: "https://m.media-amazon.com/images/I/812jc7w+emL._AC_UF894,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Culpa mía",
      autor: "Domingo González",
      fecha: new Date(2024, 7, 21),
      descripcion: "Un drama romántico que explora los límites de la culpa y el perdón en una historia de amor adolescente.",
      genero: "Romántico, Drama",
      urlImagen: "https://m.media-amazon.com/images/I/61pHvHbYdyL._AC_SX679_.jpg",
      ranking: '⭐⭐⭐'
    },
    {
      titulo: "Family Affair",
      autor: "Richard LaGravenese",
      fecha: new Date(2024, 7, 22),
      descripcion: "Una historia sobre como soportar a tu jefe cuando es un imbécil pero a la vez es el novio de tu mamá.",
      genero: "Comedia",
      urlImagen: "https://m.media-amazon.com/images/M/MV5BMDQyMWFkMGMtNjhiMS00MzgyLWFmOGYtNzA3MGNjNGVhMGI4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Vengadores: Infinity War",
      autor: "Anthony Russo, Joe Russo",
      fecha: new Date(2024, 7, 24),
      descripcion: "Los Vengadores se enfrentan a Thanos en una batalla épica para evitar que destruya el universo.",
      genero: "Acción, Ciencia ficción",
      urlImagen: "https://m.media-amazon.com/images/I/71xu1PT1dwL.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Vengadores: Endgame",
      autor: "Anthony Russo, Joe Russo",
      fecha: new Date(2024, 7, 24),
      descripcion: "Los Vengadores intentan revertir los efectos de los eventos de Infinity War y salvar el universo.",
      genero: "Acción, Ciencia ficción",
      urlImagen: "https://m.media-amazon.com/images/I/81orCFVm9iL._AC_UF894,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Deadpool",
      autor: "Tim Miller",
      fecha: new Date(2024, 7, 30),
      descripcion: "Un antihéroe irreverente que se embarca en una misión para vengarse de los responsables de su deformación.",
      genero: "Acción, Comedia",
      urlImagen: "https://m.media-amazon.com/images/I/71pInEHoevL.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Deadpool 2",
      autor: "David Leitch",
      fecha: new Date(2024, 7, 30),
      descripcion: "Deadpool se une a un grupo de mutantes para salvar a un niño de un futuro apocalíptico.",
      genero: "Acción, Comedia",
      urlImagen: "https://i.ebayimg.com/00/s/MTYwMFgxMTE5/z/9ygAAOSwcbBjObUA/$_57.JPG?set_id=880000500F",
      ranking: '⭐⭐⭐'
    },
    {
      titulo: "Spiderman: No Way Home",
      autor: "Jon Watts",
      fecha: new Date(2024, 7, 30),
      descripcion: "Peter Parker se enfrenta a las consecuencias de su identidad secreta revelada mientras lucha contra villanos interdimensionales.",
      genero: "Acción, Ciencia ficción",
      urlImagen: "https://i.ebayimg.com/00/s/MTYwMFgxMDc5/z/J68AAOSwqsRjBVNr/$_57.JPG?set_id=880000500F",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Spiderman: Into the Spiderverse",
      autor: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
      fecha: new Date(2024, 7, 30),
      descripcion: "Miles Morales se convierte en Spiderman y conoce a otras versiones del héroe de universos paralelos.",
      genero: "Animación, Acción",
      urlImagen: "https://m.media-amazon.com/images/I/61XI9WHhteL.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Deadpool & Wolverine",
      autor: "Autor Desconocido",
      fecha: new Date(2024, 8, 2),
      descripcion: "Deadpool y Wolverine unen fuerzas para luchar contra una nueva amenaza mutante.",
      genero: "Acción, Comedia",
      urlImagen: "https://i.ebayimg.com/images/g/-mUAAOSwne9mZrEy/s-l1200.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Los Voyeurs",
      autor: "Autor Desconocido",
      fecha: new Date(2024, 8, 12),
      descripcion: "Un thriller que explora los peligros del voyeurismo y las obsesiones con la vida privada de los demás.",
      genero: "Suspense, Drama",
      urlImagen: "https://m.media-amazon.com/images/M/MV5BOTQ5NDVjZjAtZDM4NC00NmQzLTkwZmYtYjQ1YjQ5NDJjZjFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Malditos vecinos",
      autor: "Seth Rogen, Evan Goldberg",
      fecha: new Date(2024, 8, 14),
      descripcion: "Una comedia sobre los problemas de un joven matrimonio que vive junto a una fraternidad universitaria.",
      genero: "Comedia",
      urlImagen: "https://es.web.img2.acsta.net/pictures/14/03/20/13/33/069578.jpg",
      ranking: '⭐⭐⭐'
    },
    {
      titulo: "Vuelo Nocturno",
      autor: "Autor Desconocido",
      fecha: new Date(2024, 8, 31),
      descripcion: "Un thriller aéreo donde la supervivencia se pone a prueba en un vuelo de emergencia.",
      genero: "Suspense, Acción",
      urlImagen: "https://image.tmdb.org/t/p/original/igmTlZQMEsydxjNNQCS0S2HnQLs.jpg",
      ranking: '⭐⭐'
    },
    {
      titulo: "Paul el extraterrestre",
      autor: "Greg Mottola",
      fecha: new Date(2024, 8, 31),
      descripcion: "Dos amigos encuentran a un extraterrestre fugitivo en un viaje por carretera a través de los Estados Unidos.",
      genero: "Ciencia ficción, Comedia",
      urlImagen: "https://letras-uruguay.espaciolatino.com/aaa/venegas_william/paul_2308082011.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Inmaculada",
      autor: "Autor Desconocido",
      fecha: new Date(2024, 9, 6),
      descripcion: "Un drama psicológico que explora el sufrimiento emocional a través de los ojos de una mujer atrapada en su religión.",
      genero: "Drama, Terror",
      urlImagen: "https://image.tmdb.org/t/p/original/qBNx7t73x1KyfNkNNiyou8qy88.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "The Green Book",
      autor: "Peter Farrelly",
      fecha: new Date(2024, 9, 23),
      descripcion: "Un hombre negro y su conductor blanco realizan un viaje por el sur de los Estados Unidos en los años 60, enfrentándose al racismo.",
      genero: "Drama, Biografía",
      urlImagen: "https://m.media-amazon.com/images/I/61Pp8QWuz0L.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Destino final",
      autor: "James Wong",
      fecha: new Date(2024, 9, 26),
      descripcion: "Un grupo de jóvenes sobrevive a un accidente, solo para darse cuenta de que la muerte no los ha olvidado.",
      genero: "Terror, Suspense",
      urlImagen: "https://i.ebayimg.com/images/g/7EMAAOSwBchf-Sru/s-l1200.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Mr. Crocket",
      autor: "Autor Desconocido",
      fecha: new Date(2024, 10, 11),
      descripcion: "Una historia de misterio y acción que sigue a un mujer cuya vida cambia cuando su hijo desaparece viendo su vhs infantil favorito.",
      genero: "Terror, Suspense",
      urlImagen: "https://m.media-amazon.com/images/M/MV5BMzMzZjg4MzAtMDRlYy00Y2U5LTlhYzMtZTQ2ODNjNDRhNjNjXkEyXkFqcGc@._V1_.jpg",
      ranking: '⭐⭐⭐'
    },
    {
      titulo: "En la tormenta",
      autor: "Autor Desconocido",
      fecha: new Date(2024, 10, 11),
      descripcion: "Una película de suspenso sobre un grupo de personas atrapadas en una tormenta devastadora.",
      genero: "Suspense, Acción",
      urlImagen: "https://i.pinimg.com/736x/c6/8a/c1/c68ac1190735e7bcf4d32ec33b220b68.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Crepúsculo",
      autor: "Catherine Hardwicke",
      fecha: new Date(2024, 10, 17),
      descripcion: "Una historia de amor entre una humana y un vampiro en un mundo lleno de peligros sobrenaturales.",
      genero: "Romántico, Fantasía",
      urlImagen: "https://i.ebayimg.com/images/g/hO4AAOSwEXZeagxw/s-l1200.jpg",
      ranking: '⭐⭐⭐'
    },
    {
      titulo: "Un buen matrimonio",
      autor: "Autor Desconocido",
      fecha: new Date(2024, 10, 23),
      descripcion: "Una mujer descubre un secreto oscuro sobre su esposo que pone en peligro su matrimonio y su vida.",
      genero: "Suspense, Drama",
      urlImagen: "https://m.media-amazon.com/images/M/MV5BMTk3MjY2ODgwNl5BMl5BanBnXkFtZTgwMTQ0Mjg0MjE@._V1_.jpg",
      ranking: '⭐⭐⭐'
    },
    {
      titulo: "Alien: Romulus",
      autor: "Autor Desconocido",
      fecha: new Date(2024, 10, 30),
      descripcion: "En el espacio, un grupo de sobrevivientes se enfrenta a una peligrosa criatura alienígena.",
      genero: "Terror, Ciencia ficción",
      urlImagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKoDcLIe-rv01dtxwUu0wejOL7fU5Hr3IYUA&s",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Solo en casa",
      autor: "Chris Columbus",
      fecha: new Date(2024, 12, 22),
      descripcion: "Un niño se queda solo en casa durante las vacaciones navideñas y debe defender su hogar de dos ladrones torpes.",
      genero: "Comedia",
      urlImagen: "https://m.media-amazon.com/images/I/912fr7ZK1CL.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "No te preocupes querida",
      autor: "Olivia Wilde",
      fecha: new Date(2024, 12, 24),
      descripcion: "Una mujer comienza a descubrir secretos inquietantes sobre su esposo y su vida perfecta en un vecindario idílico.",
      genero: "Suspense, Drama",
      urlImagen: "https://pics.filmaffinity.com/No_te_preocupes_querida-754018101-large.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Si no despierto",
      autor: "Russo-Young",
      fecha: new Date(2024, 12, 24),
      descripcion: "Una adolescente se encuentra atrapada en un ciclo repetitivo donde la vida y la muerte se mezclan.",
      genero: "Drama, Suspense",
      urlImagen: "https://m.media-amazon.com/images/S/pv-target-images/b3a6878ed047ee9261bccf867ebeb33e7b5d272c3ac033d5f7518e1f5974e7ed.jpg",
      ranking: '⭐⭐⭐'
    },
    {
      titulo: "Solo en casa 2",
      autor: "Chris Columbus",
      fecha: new Date(2024, 12, 24),
      descripcion: "Kevin McCallister se queda solo nuevamente durante las vacaciones navideñas, esta vez en Nueva York, donde debe enfrentarse a dos ladrones.",
      genero: "Comedia",
      urlImagen: "https://m.media-amazon.com/images/M/MV5BYjc4MDI2OWUtMWJjMS00MWVmLWEyZTQtMWJlNWZlYjViZTA3XkEyXkFqcGc@._V1_.jpg",
      ranking: '⭐⭐⭐'
    }
];
export default mockGenericDataMovies;

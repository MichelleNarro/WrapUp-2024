import { GenericItem } from "../app/Model/genericItem";


let mockGenericDataMusic: GenericItem[] = [
    {
      titulo: "The Act",
      autor: "Autor Desconocido",
      fecha: new Date(2024, 1, 4),      
      descripcion: "Basada en hechos reales, cuenta la historia de Gypsy Blanchard, quien fue víctima de abuso por parte de su madre.",
      genero: "TV-Show",
      urlImagen: "https://m.media-amazon.com/images/I/714VlNWostL.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Marry my Husband",
      autor: "Park Won-kook",
      fecha: new Date(2024, 1, 8),      
      descripcion: "Despues de haber sido asesinada, Kang Jiwoon se despierta diez años antes asi que intenta evitar su destino a toda costa, incluso si eso implica casar a su esposo con alguien mas..",
      genero: "K-Drama",
      urlImagen: "https://m.media-amazon.com/images/M/MV5BZTY0MTI2OWQtNmMwOS00YmRkLWJhMWMtZjkxZjgwZjA2ZDU0XkEyXkFqcGc@._V1_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Avatar: The Last Airbender (Live Action)",
      autor: "Albert Kim",
      fecha: new Date(2024, 2, 29),
      descripcion: "Adaptación en acción real de la famosa serie de animación que sigue las aventuras de Aang, el último Maestro Aire.",
      genero: "TV-Show",
      urlImagen: "https://www.lavanguardia.com/peliculas-series/images/all/serie/posters/2024/2/serie-82452/w1280/j23Ve7PVEY5Z6GXBlTyOabiE24C.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Avatar: The Legend of Korra",
      autor: "Michael Dante DiMartino",
      fecha: new Date(2024, 3, 7),
      descripcion: "Secuela de 'Avatar: The Last Airbender', sigue a Korra, una joven maestra de agua que lucha por equilibrar el mundo.",
      genero: "TV-Show",
      urlImagen: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZA69e-4juFuzDTMk3t11K5ogi7yYbeUFaXsRtx1_2VjtVpmUM",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Tragones y Mazmorras",
      autor: "Ryōko Kui",
      fecha: new Date(2024, 3, 9),
      descripcion: "Un grupo de aventureros en un mundo lleno de magia y criaturas fantásticas, luchando contra el hambre.",
      genero: "Anime",
      urlImagen: "https://www.lavanguardia.com/peliculas-series/images/serie/poster/2024/1/w1280/eHlatCGzEQaxzq6LnSxSENKHlnJ.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Single Inferno",
      autor: "Netflix",
      fecha: new Date(2024, 4, 2),
      descripcion: "Un reality show de citas en el que solteros compiten por encontrar el amor mientras sobreviven en una isla desierta.",
      genero: "TV-Show",
      urlImagen: "https://i.mydramalist.com/E5lRe0_4f.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Baby Reindeer",
      autor: "Richard Gadd",
      fecha: new Date(2024, 4, 28),
      descripcion: "Un thriller psicológico que sigue a un joven atrapado en una espiral de paranoia y obsesión.",
      genero: "TV-Show",
      urlImagen: "https://m.media-amazon.com/images/M/MV5BNzlmY2E1OTUtMjEzZi00Y2YxLWI5NmMtZmZhOWZkMjIzMDJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      ranking: '⭐⭐⭐'
    },
    {
      titulo: "Chicago Med",
      autor: "Michael Brandt",
      fecha: new Date(2024, 5, 5),
      descripcion: "Un drama médico que sigue a un grupo de médicos y enfermeras en el hospital más grande de Chicago.",
      genero: "TV-Show",
      urlImagen: "https://m.media-amazon.com/images/M/MV5BNWRlNGMxZjQtZTViMi00MzgwLWE4YjMtNTA3NzExMWI0ZDIzXkEyXkFqcGc@._V1_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Los Bridgerton Season 01",
      autor: "Chris Van Dusen",
      fecha: new Date(2024, 5, 27),
      descripcion: "La historia de Daphne y Simon. Un drama histórico sobre las familias más poderosas de Londres en la época de la Regencia.",
      genero: "TV-Show",
      urlImagen: "https://m.media-amazon.com/images/I/81Q8ZcJelhL.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Los Bridgerton Season 02",
      autor: "Chris Van Dusen",
      fecha: new Date(2024, 5, 28),
      descripcion: "La historia de Anthony y Kate. Segunda temporada sigue a los Bridgerton en su búsqueda del amor, enfocándose en el hermano de Daphne, Anthony.",
      genero: "TV-Show",
      urlImagen: "https://m.media-amazon.com/images/I/71k0FGWF5oL.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Los Bridgerton Season 03",
      autor: "Chris Van Dusen",
      fecha: new Date(2024, 5, 29),
      descripcion: "La historia de Collin y Penelope. Tercera temporada continúa explorando la vida de los Bridgerton, con nuevos amores y desafíos.",
      genero: "TV-Show",
      urlImagen: "https://m.media-amazon.com/images/I/814C3lt4bkL.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Como defender a un asesino",
      autor: "Pete Nowalk",
      fecha: new Date(2024, 6, 5),
      descripcion: "Un thriller legal que sigue a una profesora de derecho y a sus estudiantes mientras defienden a criminales peligrosos.",
      genero: "TV-Show",
      urlImagen: "https://i.ebayimg.com/images/g/5osAAOSwu4BV2rxP/s-l1200.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Derry Girls",
      autor: "Lisa McGee",
      fecha: new Date(2024, 6, 23),
      descripcion: "Una comedia que sigue a un grupo de adolescentes en Irlanda del Norte durante los años 90.",
      genero: "TV-Show",
      urlImagen: "https://m.media-amazon.com/images/I/A1fBsaKhUCL.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Sense8",
      autor: "Lana y Lilly Wachowski",
      fecha: new Date(2024, 6, 26),
      descripcion: "Ocho personas de todo el mundo descubren que están conectadas mental y emocionalmente.",
      genero: "TV-Show",
      urlImagen: "https://m.media-amazon.com/images/I/61by9V5+BGL._AC_UF894,1000_QL80_.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Blue Eye Samurai",
      autor: "Amber Noizumi, Michael Green",
      fecha: new Date(2024, 7, 20),
      descripcion: "Una serie de acción ambientada en el Japón feudal, donde una guerrera lucha por vengar a su familia.",
      genero: "TV-Show",
      urlImagen: "https://www.cuartomundo.cl/wp-content/uploads/2024/09/Blue-Eye-Samurai-poster.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "The 8 Show",
      autor: "Han Jae-rim",
      fecha: new Date(2024, 7, 20),
      descripcion: "Un programa de entretenimiento que presenta a ocho anonimos compitiendo en desafíos épicos para ganar una cantidad obscena de dinero, a costa de su vida.",
      genero: "K-Drama",
      urlImagen: "https://m.media-amazon.com/images/I/61jSbX1JKLL._AC_SL1481_.jpg",
      ranking: '⭐⭐⭐'
    },
    {
      titulo: "Hawkeye",
      autor: "Jonathan Igla",
      fecha: new Date(2024, 7, 20),
      descripcion: "Un superhéroe tiene que entrenar a una joven arquera mientras enfrenta amenazas del pasado.",
      genero: "Acción, Aventura",
      urlImagen: "https://m.media-amazon.com/images/I/81UUt1lcBcL.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Moon Knight",
      autor: "Jeremy Slater",
      fecha: new Date(2024, 7, 21),
      descripcion: "Un hombre con trastornos de identidad disociativa se convierte en un vigilante con poderes místicos.",
      genero: "TV-Show",
      urlImagen: "https://m.media-amazon.com/images/I/61HZLuCJkSL.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Miss Marvel",
      autor: "Bisha K. Ali",
      fecha: new Date(2024, 7, 21),
      descripcion: "Una joven fanática de los superhéroes se convierte en la nueva heroína de Nueva Jersey.",
      genero: "TV-Show",
      urlImagen: "https://m.media-amazon.com/images/M/MV5BNzlkNjBmOWUtOTgzZS00OWIzLThkNWEtZTg5MGY2ODAyYzZjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "She-Hulk",
      autor: "Jessica Gao",
      fecha: new Date(2024, 7, 21),
      descripcion: "Jennifer Walters, abogada y prima de Bruce Banner, se convierte en la increíble She-Hulk.",
      genero: "TV-Show",
      urlImagen: "https://i.ebayimg.com/images/g/9FUAAOSwU8xi-Qab/s-l1600.webp",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Una de día, otra de noche",
      autor: "Jung Ye-kyung",
      fecha: new Date(2024, 8, 31),
      descripcion: "Una comedia romántica que sigue a una mujer que sufra una maldicion donde se ve joven de día y es una señora mayor de noche.",
      genero: "K-Drama",
      urlImagen: "https://www.lavanguardia.com/peliculas-series/images/serie/poster/2024/6/w1280/4B1DzZyH7m0GiyoBaQpeNItg0YP.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "Cenizas del pasado",
      autor: "Yûichirô Hirakawa",
      fecha: new Date(2024, 9, 1),
      descripcion: "Un drama sobre secretos del pasado que resurgen para cambiar el futuro de una familia.",
      genero: "J-Drama",
      urlImagen: "https://www.lavanguardia.com/peliculas-series/images/serie/poster/2023/7/w1280/AurLEp91XVWnkgRsn5dR5vkPFYM.jpg",
      ranking: '⭐⭐⭐⭐'
    },
    {
      titulo: "The handmaid's tale",
      autor: "Bruce Miller",
      fecha: new Date(2024,9, 8),
      descripcion: "En una sociedad totalitaria, las mujeres son utilizadas para la procreación en un futuro distópico.",
      genero: "TV-Show",
      urlImagen: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/9852c263802613.5abcb31eac01a.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Dandadan",
      autor: "Yukinobu Tatsu.",
      fecha: new Date(2024, 9, 10), 
      descripcion: "Una serie de acción que mezcla mitología y tecnología con una joven luchando contra criaturas sobrenaturales.",
      genero: "Anime",
      urlImagen: "https://m.media-amazon.com/images/M/MV5BMmE4NGI0NWUtOGFmNS00Yzk4LWFjYWYtYjU2MTAxYTMxMGQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Agatha All Along",
      autor: "Jac Schaeffer",
      fecha: new Date(2024, 10, 9),
      descripcion: "Una serie centrada en el personaje de Agatha Harkness en el universo Marvel.",
      genero: "TV-Show",
      urlImagen: "https://m.media-amazon.com/images/M/MV5BMDcyZTNjOTEtNzc5Yy00Y2UzLThkMWYtNTY4YmM4OWI5OTMzXkEyXkFqcGc@._V1_.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Judge from Hell",
      autor: "Jo Yi-soo",
      fecha: new Date(2024, 10, 9),
      descripcion: "Un thriller que sigue a un juez que se enfrenta a decisiones extremas en un sistema judicial corrupto.",
      genero: "K-Drama",
      urlImagen: "https://image.tmdb.org/t/p/original/9vhLHbUiiP9HiXfJw5OUC7KoaJG.jpg",
      ranking:'⭐⭐⭐⭐⭐'
    },
    {
      titulo: "Arcane",
      autor: "Christian Linke Alex Yee",
      fecha: new Date(2024, 11, 23),
      descripcion: "Basada en el videojuego League of Legends, Arcane sigue las vidas de varios campeones en el mundo de Runeterra.",
      genero: "TV-Show",
      urlImagen: "https://i.ebayimg.com/images/g/Gv4AAOSw6hJipnxG/s-l1200.jpg",
      ranking: '⭐⭐⭐⭐⭐'
    }  
];
export default mockGenericDataMusic;


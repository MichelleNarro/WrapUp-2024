import { DataMusic } from "../app/Model/dataMusic";

const mockDatosMusicales: DataMusic[]=[
  {
    nombreBanda: 'Led Zeppelin',
    mejorAlbum: 'IV',
    anno: 1971,
    cancionMasFamosa: 'Stairway to Heaven',
    esArtista: true,
    urlImagenArtista: 'https://hips.hearstapps.com/hmg-prod/images/robert-plant-and-jimmy-page-of-led-zeppelin-news-photo-1630851255.jpg?crop=1xw:0.8553xh;center,top&resize=1200:*',
    urlImagenAlbum: 'https://m.media-amazon.com/images/I/81evsr3Oq0L._UF894,1000_QL80_.jpg',
    ranking: 1,
  },
  {
    nombreBanda: 'The Beatles',
    mejorAlbum: 'Abbey Road',
    anno: 1969,
    cancionMasFamosa: 'Come Together',
    esArtista: false,
    urlImagenArtista: 'https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg',
    urlImagenAlbum: 'https://images.musicstore.de/images/0960/hal-leonard-the-beatles-abbey-road_1_NOT0012999-000.jpg',
    ranking: 2,
  },
  {
    nombreBanda: 'Pink Floyd',
    mejorAlbum: 'The Dark Side of the Moon',
    anno: 1973,
    cancionMasFamosa: 'Money',
    esArtista: true,
    urlImagenArtista: 'https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg',
    urlImagenAlbum: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202003/11/00105111151543____3__640x640.jpg',
    ranking: 3,
  },
  {
    nombreBanda: 'The Rolling Stones',
    mejorAlbum: 'Sticky Fingers',
    anno: 1971,
    cancionMasFamosa: 'Brown Sugar',
    esArtista: false,
    urlImagenArtista: 'https://i.pinimg.com/originals/ba/4a/7b/ba4a7b90a5bc71ae6ce07d9485c8ab3b.jpg',
    urlImagenAlbum: 'https://m.media-amazon.com/images/I/71biD0lQgyL._UF350,350_QL50_.jpg',
    ranking: 4,
  },
  {
    nombreBanda: 'Queen',
    mejorAlbum: 'A Night at the Opera',
    anno: 1975,
    cancionMasFamosa: 'Bohemian Rhapsody',
    esArtista: true,
    urlImagenArtista: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Bohemian_Rhapsody_music_video_still.png/220px-Bohemian_Rhapsody_music_video_still.png',
    urlImagenAlbum: 'https://m.media-amazon.com/images/I/71nxRqKGA8L._UF894,1000_QL80_.jpg',
    ranking: 5,
  },
  {
    nombreBanda: 'The Who',
    mejorAlbum: 'Who\'s Next',
    anno: 1971,
    cancionMasFamosa: 'Baba O\'Riley',
    esArtista: false,
    urlImagenArtista: 'https://www.teleadhesivo.com/es/img/asmu015-jpg/folder/products-listado-merchanthover/pegatinas-coches-motos-the-who-logo.jpg',
    urlImagenAlbum: 'https://i0.wp.com/www.noise11.com/wp/wp-content/uploads/2021/08/The-Who-Whos-Next.jpg?fit=1000%2C1000&ssl=1',
    ranking: 6,
  },
  {
    nombreBanda: 'U2',
    mejorAlbum: 'The Joshua Tree',
    anno: 1987,
    cancionMasFamosa: 'With or Without You',
    esArtista: true,
    urlImagenArtista: 'https://www.kissfm.es/wp-content/uploads/2011/10/U21.jpg',
    urlImagenAlbum: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhK_u4HcLT1hz10tOF53rFb-VLnYcAV4G46-cp29L0Fw&s',
    ranking: 7,
  },
  {
    nombreBanda: 'Nirvana',
    mejorAlbum: 'Nevermind',
    anno: 1991,
    cancionMasFamosa: 'Smells Like Teen Spirit',
    esArtista: true,
    urlImagenArtista: 'https://www.binaural.es/wp-content/uploads/2016/09/Nirvana.jpg',
    urlImagenAlbum: 'https://1.bp.blogspot.com/-T85s2bjjYnU/XDjR5SFGUlI/AAAAAAAABR4/t_FhcFXBGuAleLmfU-aYBK2UEwoBfo6pgCEwYBhgL/s1600/nirvana_nevermind.jpg',
    ranking: 8,
  },
  {
    nombreBanda: 'The Doors',
    mejorAlbum: 'L.A. Woman',
    anno: 1971,
    cancionMasFamosa: 'Riders on the Storm',
    esArtista: true,
    urlImagenArtista: 'https://img2.rtve.es/v/951993?w=1600&preview=1291728315548.jpg',
    urlImagenAlbum: 'https://www.lahabitacion235.com/wp-content/uploads/2017/12/The-Doors-L.A.-Woman.jpg',
    ranking: 9,
  },
  {
    nombreBanda: 'AC/DC',
    mejorAlbum: 'Back in Black',
    anno: 1980,
    cancionMasFamosa: 'Back in Black',
    esArtista: true,
    urlImagenArtista: 'https://www.rollingstone.com/wp-content/uploads/2020/10/10025-01E-JC-white_group_4559_sRGB.jpg?w=1581&h=1054&crop=1',
    urlImagenAlbum: 'https://pics.filmaffinity.com/AC_DC_Back_in_Black_Vaideo_musical-504884058-large.jpg',
    ranking: 10,
  },
  {
    nombreBanda: 'Radiohead',
    mejorAlbum: 'OK Computer',
    anno: 1997,
    cancionMasFamosa: 'Paranoid Android',
    esArtista: false,
    urlImagenArtista: 'https://indiehoy.com/wp-content/uploads/2023/01/radiohead-1-2.jpg',
    urlImagenAlbum: 'https://i.discogs.com/sziZvUpwBI9ZkY2WM2MOpBohjsc8ohC4L65noC7J3o4/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzOTkz/MDEtMTQwNDQxNDI3/MC0xODA3LmpwZWc.jpeg',
    ranking: 11,
  },
  {
    nombreBanda: 'Jimi Hendrix Experience',
    mejorAlbum: 'Are You Experienced',
    anno: 1967,
    cancionMasFamosa: 'Purple Haze',
    esArtista: true,
    urlImagenArtista: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDY9UNqlbrdca5_UXCDl8AeLwApyyMzdZACqlg7bd6Qg&s',
    urlImagenAlbum: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Are_You_Experienced_-_US_cover-edit.jpg',
    ranking: 12,
  },
  {
    nombreBanda: 'David Bowie',
    mejorAlbum: 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars',
    anno: 1972,
    cancionMasFamosa: 'Starman',
    esArtista: true,
    urlImagenArtista: 'https://i1.sndcdn.com/artworks-000085309918-lmxzvq-t500x500.jpg',
    urlImagenAlbum: 'https://m.media-amazon.com/images/I/A1rxQMeiz9L._UF894,1000_QL80_.jpg',
    ranking: 13,
  },
  {
    nombreBanda: 'The Beach Boys',
    mejorAlbum: 'Pet Sounds',
    anno: 1966,
    cancionMasFamosa: 'God Only Knows',
    esArtista: true,
    urlImagenArtista: 'https://imgs.goldradiouk.com/images/331329?width=5098&crop=4_3&signature=7iS2LrqIK_6IWhzLm2d1eMQcVqs=',
    urlImagenAlbum: 'https://m.media-amazon.com/images/I/61011WFBOHL._UF894,1000_QL80_.jpg',
    ranking: 14,
  },
  {
    nombreBanda: 'Fleetwood Mac',
    mejorAlbum: 'Rumours',
    anno: 1977,
    cancionMasFamosa: 'Go Your Own Way',
    esArtista: false,
    urlImagenArtista: 'https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/KUKI7VKG4ZFOHIKLIVMOFPBGGY.jpg',
    urlImagenAlbum: 'https://m.media-amazon.com/images/I/71BekDJBb3L._UF894,1000_QL80_.jpg',
    ranking: 15,
  },
  {
    nombreBanda: 'Bob Dylan',
    mejorAlbum: 'Highway 61 Revisited',
    anno: 1965,
    cancionMasFamosa: 'Like a Rolling Stone',
    esArtista: true,
    urlImagenArtista: 'https://m.media-amazon.com/images/I/611ybkIvKnL._UF894,1000_QL80_.jpg',
    urlImagenAlbum: 'https://rialta.org/wp-content/uploads/2021/02/Bob-Dylan.jpg',
    ranking: 16,
  },
  {
    nombreBanda: 'Metallica',
    mejorAlbum: 'Metallica (The Black Album)',
    anno: 1991,
    cancionMasFamosa: 'Enter Sandman',
    esArtista: false,
    urlImagenArtista: 'https://imagenes.heraldo.es/files/og_thumbnail/uploads/imagenes/2023/04/11/metallica.jpeg',
    urlImagenAlbum: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pYWfswJ-zjvxjCSQYZABQ5A5mU0N-Cl5T5KjE6QxxA&s',
    ranking: 17,
  },
  {
    nombreBanda: 'R.E.M.',
    mejorAlbum: 'Automatic for the People',
    anno: 1992,
    cancionMasFamosa: 'Losing My Religion',
    esArtista: true,
    urlImagenArtista: 'https://www.mondosonoro.com/wp-content/uploads/2015/03/REM.jpg',
    urlImagenAlbum: 'https://assets.rockdelux.com/rdl/images/rem_automatic-for-the-people_0.jpg',
    ranking: 18,
  },
  {
    nombreBanda: 'The Clash',
    mejorAlbum: 'London Calling',
    anno: 1979,
    cancionMasFamosa: 'London Calling',
    esArtista: false,
    urlImagenArtista: 'https://img2.rtve.es/i/?w=1600&i=1576326419238.jpg',
    urlImagenAlbum: 'https://upload.wikimedia.org/wikipedia/en/0/00/TheClashLondonCallingalbumcover.jpg',
    ranking: 19,
  },
  {
    nombreBanda: 'Pearl Jam',
    mejorAlbum: 'Ten',
    anno: 1991,
    cancionMasFamosa: 'Alive',
    esArtista: true,
    urlImagenArtista: 'https://media.gettyimages.com/id/86111976/es/foto/netherlands-photo-of-pearl-jam-amsterdam-pearl-jam.jpg?s=612x612&w=gi&k=20&c=4QafWrVLtSEQ0wA0XWwarDWFgifqzz8mP3gp2B2QqQw=',
    urlImagenAlbum: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeo5T8HC0RtcduBkufSBHbLRzU0pc8OA2bsn4QHpdUw&s',
    ranking: 20,
  }
];

export default mockDatosMusicales;

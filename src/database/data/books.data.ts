const books = [
  {
    title: 'Wigeta',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91onbOzEJYL.jpg',
    description:
      'Ya los conocemos... Son Willy, Vegetta, Trotuman y Vakypandy. Los hemos visto combatir contra zombis, brujas y gigantes para proteger Pueblo y a sus habitantes.',
    availableQuantity: 5,
  },
  {
    title: 'Harry Potter y la Piedra Filosofal ',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91R1AixEiLL.jpg',
    description:
      'Harry Potter y la piedra filosofales el primer volumen de laya clásicaserie de novelas fantásticas de la autora británica J.K. Rowling',
    availableQuantity: 3,
  },
  {
    title: 'Harry Potter y la cámara secreta',
    imageUrl:
      'https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/9788498387650.jpg',
    description:
      'En el espacio entre dos ventanas, brillando a la luz que arrojaban las antorchas, había en el muro unas palabras pintadas de más de un palmo de altura La Cámara de los secretos ha sido abierta',
    availableQuantity: 5,
  },
  {
    title: 'Harry Potter y la Orden del Fénix',
    imageUrl:
      'https://images.cdn2.buscalibre.com/fit-in/360x360/3e/02/3e02fe3dfc57f3aaa73154fc7f0d058a.jpg',
    description:
      'El Ministerio de Magia niega que Voldemort haya regresado y ha iniciado una campaña de desprestigio contra Harry y Dumbledore,',
    availableQuantity: 2,
  },
  {
    title: 'Harry Potter y el Cáliz de Fuego',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/911uWDrvR9L.jpg',
    description:
      'Se desarrolla un torneo interescolar de magia en la escuela Howarts llamado el Torneo de los Tres Magos. Alumnos de distintas escuelas de magia y hechicería a lo largo del mundo se reunirán en Howarts.',
    availableQuantity: 6,
  },
  {
    title: 'Harry Potter Y El Prisionero De Azkaban',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81272xAJsDL.jpg',
    description:
      'Sirius Black, asesino y seguidor de lord Voldemort, se ha fugado, y dicen que va en busca de Harry.',
    availableQuantity: 2,
  },
  {
    title: 'La Divina Comedia',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/510SxGcsw-L._SX331_BO1,204,203,200_.jpg',
    description:
      'La Divina Comedia es un poema donde se mezcla la vida real con la sobrenatural, muestra la lucha entre la nada y la inmortalidad.',
    availableQuantity: 7,
  },
  {
    title: 'Halo la caída de Reach',
    imageUrl:
      'https://static3planetadelibroscommx.cdnstatics.com/usuaris/libros/fotos/213/m_libros/portada_halo-la-caida-de-reach_eric-nylund_201602232348.jpg',
    description:
      'Mientras la sangrienta guerra entre los seres humanos y el Covenant lo arrasa todo en Halo, el destino de la humanidad podría descansar en el último Spartan superviviente de una batalla legendaria.',
    availableQuantity: 4,
  },
  {
    title: 'Los Ojos del Perro Siberiano',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41cpAAILHlL._SX298_BO1,204,203,200_.jpg',
    description:
      'Uno de los motivos porque quiero tanto a este perro es por sus ojos. Desde que estoy enfermo la gente me mira de distintas maneras.',
    availableQuantity: 1,
  },
  {
    title: 'Hush, Hush',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/71+6yF167NL.jpg',
    description:
      'Hush Hush sigue la historia de amor sobrenatural entre Nora Gray (Liana Liberato), una adolescente normal que aún no ha superado la muerte reciente de su padre.',
    availableQuantity: 2,
  },
  {
    title: 'Don Quijote De La Mancha',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41O2ya+gAQL._SX314_BO1,204,203,200_.jpg',
    description:
      'El presente libro ofrece al público una versión ilustrada y nueva, en lo posible, de la gran novela de Cervantes.',
    availableQuantity: 5,
  },
  {
    title: 'Viaje al centro de la Tierra',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/818bFS-0DHL.jpg',
    description:
      'El joven Axel y su tío, el profesor Otto, emprenden un viaje fantástico al interior de la Tierra. Y todo ello a partir del descubrimiento de unos signos misteriosos hallados entre las páginas de un libro antiguo.',
    availableQuantity: 3,
  },
  {
    title: 'Cien Años de Soledad',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41NyrHGJCgL._SX303_BO1,204,203,200_.jpg',
    description:
      'Cien años de soledad puede ubicarse en la historia de Colombia entre mediados del siglo XIX y mediados del siglo XX, época claramente reconocible por las guerras civiles',
    availableQuantity: 6,
  },
  {
    title: 'Saint Seiya: Gigantomachia',
    imageUrl:
      'https://pm1.narvii.com/6637/14c694adb2cb1c746d20cff6fbad1283474136bd_hq.jpg',
    description:
      'La diosa Athena con el apoyo de sus Saints, libraron incontables guerras para proteger el amor y la justicia del mundo, y en una de estas batallas se enfrentaron contra adversarios temibles conocidos como Gigas.',
    availableQuantity: 1,
  },
  {
    title: 'Naruto Itachi Shinden',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51KmqnEq3oL._SX341_BO1,204,203,200_.jpg',
    description:
      'La historia de la novela está protagonizada por Itachi Uchiha y sus intentos por alcanzar la paz en Konoha, siguiéndole desde su entrada a la academia ninja, hasta su ascenso al Anbu',
    availableQuantity: 12,
  },
  {
    title: 'Los Juegos del Hambre 3, Sinsajo',
    imageUrl: 'https://ss365.liverpool.com.mx/lg/1112166820.jpg',
    description:
      'El esperado desenlace de la espectacular historia de Katniss Everdeen en la increíble trilogía de Los Juegos del Hambre',
    availableQuantity: 2,
  },
  {
    title: 'Balada de pájaros cantores y serpientes',
    imageUrl:
      'https://phantom-telva.unidadeditorial.es/3955b95d3c2a414572152d4c8c8ee913/resize/828/f/webp/assets/multimedia/imagenes/2020/06/02/15910901656926.jpg',
    description:
      'La historia tiene lugar diez años después de la guerra, en un terreno fértil para que los personajes se enfrenten a estas preguntas y definan así sus opiniones sobre la humanidad.',
    availableQuantity: 5,
  },
  {
    title: 'En Llamas / Los Juegos Del Hambre',
    imageUrl: 'https://www.elsotano.com/imagenes/9786073/978607380785.JPG',
    description:
      'Katniss Everdeen ha sobrevivido a Los juegos del hambre. Pero el Capitolio quiere venganza. Contra todo pronóstico, Katniss Everdeen y Peeta Mellark siguen vivos',
    availableQuantity: 1,
  },
  {
    title: 'La razón de estar contigo',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/516v4s0I1UL._SX323_BO1,204,203,200_.jpg',
    description:
      'Más que otra encantadora historia de perros, este libro es sobre la respuesta a la pregunta más básica de la vida: ¿Por qué estamos aquí? ',
    availableQuantity: 4,
  },
  {
    title: 'El Principito',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41NfAUwZbeL._SX308_BO1,204,203,200_.jpg',
    description:
      'El principito es una fábula infantil que disfrutan por igual los niños y los adultos.',
    availableQuantity: 7,
  },
  {
    title: 'El jardín de las mariposas',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/61O+NO3V2vL._SX324_BO1,204,203,200_.jpg',
    description:
      'Cerca de una aislada mansión existe un jardín donde se cultivan delicadas flores y en él, abrigada por frondosos árboles, habita una exquisita y peculiar colección de mariposas.',
    availableQuantity: 6,
  },
  {
    title: 'Amigo imaginario',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51mha-0j5QL._SX326_BO1,204,203,200_.jpg',
    description:
      'Kate Reese es madre soltera y vive una relación abusiva. Sabe que no quiere esa vida para su hijo Christopher, así que a la mitad de la noche toma las llaves de su auto y escapa con él a Mill Grove.',
    availableQuantity: 2,
  },
  {
    title: 'El hombre en busca de sentido',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/413BSRDOlsL._SX324_BO1,204,203,200_.jpg',
    description:
      'El doctor Frankl, psiquiatra y escritor, suele preguntar a sus pacientes aquejados de múltiples padecimientos: «¿Por qué no se suicida usted?',
    availableQuantity: 4,
  },
  {
    title: 'La corte del zar rojo',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41TpJBjtiWL._SX322_BO1,204,203,200_.jpg',
    description:
      'En cierto sentido, ésta es la primera biografía real de Stalin.',
    availableQuantity: 1,
  },
  {
    title: 'Constitución Política de los Estados Unidos Mexicanos',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41O-foNGQxL._SX398_BO1,204,203,200_.jpg',
    description:
      'VERSIÓN 2022 Contiene: Constitución Política de los Estados Unidos Mexicanos',
    availableQuantity: 20,
  },
  {
    title: 'El poder del anillo',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51NGWbI6AuL._SX324_BO1,204,203,200_.jpg',
    description:
      'Este aclamado libro de Stratford Caldecott revela los cimientos espirituales de la obra de Tolkien.',
    availableQuantity: 8,
  },
  {
    title: 'ENCHIRIDION',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41FUXGFOvJL._SX331_BO1,204,203,200_.jpg',
    description:
      'El libro fue encontrado por Simon Petrikov en una expedición en la isla de Fatu Hiva, una isla del Océano Pacífico.',
    availableQuantity: 9,
  },
  {
    title: 'El diario del chavo del ocho',
    imageUrl: 'https://m.media-amazon.com/images/I/51o5Slw+ghL.jpg',
    description:
      'No hay este libro un solo párrafo que no contenga algo interesante.',
    availableQuantity: 8,
  },
  {
    title: 'El diario de Ana Frank',
    imageUrl: 'https://m.media-amazon.com/images/I/51LrpnkHzrL.jpg',
    description:
      'Su lectura representa, no sólo el respeto por aquello que fue sino, sobre todo, por aquello que no queremos que se vuelva a repetir.',
    availableQuantity: 9,
  },
  {
    title: 'Hamlet',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/517hHZObxzL._SX307_BO1,204,203,200_.jpg',
    description:
      'Hamlet traza el admirable retrato de un legendario príncipe de Dinamarca soñador, contemplativo, sumido en dudas e irresoluciones.',
    availableQuantity: 4,
  },
  {
    title: 'Los Miserables',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/411LaWePQ4L._SX327_BO1,204,203,200_.jpg',
    description:
      'La novela, de estilo romántico, plantea a través de su argumento un razonamiento sobre el bien y el mal, sobre la ley, la política, la ética, la justicia y la religión.',
    availableQuantity: 6,
  },
  {
    title: 'Dracula',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/61rb3gAfYZL._SX325_BO1,204,203,200_.jpg',
    description:
      'A fines del siglo XIX un tiempo de cambios en el que la ciencia reina sobre el pensamiento- la ciudad de Londres es el centro mismo de la civilización occidental.',
    availableQuantity: 7,
  },
  {
    title: 'Romeo y Julieta',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/517HwUDSf4L._SX347_BO1,204,203,200_.jpg',
    description:
      'En Verona, dos jóvenes enamorados, de dos familias enemigas, son víctimas de una situación de odio y violencia que ni desean ni pueden remediar.',
    availableQuantity: 3,
  },
  {
    title: 'hojas de hierba',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/410oa98QauL._SX331_BO1,204,203,200_.jpg',
    description:
      'Los poemas de Hojas de hierba están conectados entre sí, cada uno representando la celebración de Whitman de su filosofía de la vida y de la humanidad.',
    availableQuantity: 5,
  },
  {
    title: 'La Naranja Mecanica',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/4162wzph6tL._SX325_BO1,204,203,200_.jpg',
    description:
      'La historia del nadsat-adolescente Alex y sus tres drugos-amigos en un mundo de crueldad y destrucción. Alex tiene, según Burgess, los principales atributos humanos; amor a la agresión, amor al lenguaje, amor a la belleza.',
    availableQuantity: 2,
  },
  {
    title: 'Deltora Quest 1',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51JgkOw99dL._SX321_BO1,204,203,200_.jpg',
    description:
      'El reino de Deltora se pone patas arriba cuando el Rey y la Reina mueren misteriosamente y su hijo recibe el Cinturón de Deltora.',
    availableQuantity: 1,
  },
  {
    title: 'Deltora Quest 4',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51m61d9UNwL._SX331_BO1,204,203,200_.jpg',
    description:
      '¿Podrán Lief, Barda y Jasmine derrotar a la malvada hechicera Thaegan y sus 13 hijos monstruosos?',
    availableQuantity: 4,
  },
  {
    title: 'Deltora Quest 5',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51NIO2aj-2L._SX331_BO1,204,203,200_.jpg',
    description:
      'Soldeen finalmente accedió a darle a Lief y sus compañeros el rubí, pero antes de que puedan reclamarlo, la hechicera Thaegan llega para vengar a sus hijos.',
    availableQuantity: 5,
  },
  {
    title: 'Haikyu!!',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51BiihdCgTL._SX359_BO1,204,203,200_.jpg',
    description:
      "Desde que el legendario jugador conocido como  'el pequeño gigante' compitió en la final nacional de voleibol, Shoyo Hinata ha anhelado convertirse en el mejor jugador que haya existido!",
    availableQuantity: 5,
  },
  {
    title: 'El niño que tocó las estrellas',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81272xAJsDL.jpg',
    description:
      'Biografía del astronauta mexicano-estadounidense José Hernández Moreno, ingeniero de vuelo especialista de la misión STS-128 del transbordador Discovery.',
    availableQuantity: 2,
  },
  {
    title: 'Lascivia 2',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41lsQy8OmRL._SX319_BO1,204,203,200_.jpg',
    description:
      'El capitan Bratt Lewis esta de nuevo en el comando, con una nueva vida planeada y queriendo retomar el tiempo perdido.',
    availableQuantity: 3,
  },
  {
    title: 'Halo: The Flood: Volume 2',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41MSBTz81zL._SX320_BO1,204,203,200_.jpg',
    description:
      'La adaptación más vendida del icónico videojuego Halo: Combat Evolved con el Jefe Maestro',
    availableQuantity: 7,
  },
  {
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81272xAJsDL.jpg',
    description:
      'Incluso el código incorrecto puede funcionar. Pero si el código no está limpio, puede poner de rodillas a una organización de desarrollo.',
    availableQuantity: 4,
  },
  {
    title: 'El Universo En Una Cascara de Nuez',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51KOTvnB0TL._SX371_BO1,204,203,200_.jpg',
    description:
      'En este libro, Hawking nos conduce hasta la frontera misma de la física teórica donde la verdad supera muchas veces a la ficción.',
    availableQuantity: 6,
  },
  {
    title:
      "Star Wars: Galaxy's Edge: The Official Black Spire Outpost Cookbook",
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81272xAJsDL.jpg',
    description:
      'Desde los pantanos de Dagobah hasta los bosques de Endor y los desiertos de Jakku, el extraordinario chef Strono Cookie Tuggs ha viajado incontables años luz para compilar las recetas más deliciosas de la galaxia en este volumen único.',
    availableQuantity: 3,
  },
  {
    title: 'Halo: New Blood: Volume 15',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41tbtulVRYL._SX320_BO1,204,203,200_.jpg',
    description:
      'El sargento de artillería Edward Buck y su equipo de Orbital Drop Shock Troopers (ODST) jugaron un papel importante en salvar a la Tierra de una invasión total al final de la Guerra del Pacto, actos de valentía e ingenio que no pasaron desapercibidos para el Spa de las Naciones Unidas.',
    availableQuantity: 7,
  },
  {
    title: 'Psicologia Positiva',
    imageUrl: 'https://m.media-amazon.com/images/I/41c4H5bhKNL.jpg',
    description:
      'Aprendiendo psicología en la vida cotidiana y resolviendo bloqueos. Comprender y superar los miedos. Comprender a las personas y reconocer la manipulación',
    availableQuantity: 9,
  },
  {
    title: 'El niño con el pijama de rayas',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51ehWeUL3QL._SX327_BO1,204,203,200_.jpg',
    description:
      'Debes saber que acompañarás a Bruno, un niño de nueve años, cuando se muda con su familia a una casa junto a una cerca',
    availableQuantity: 10,
  },
  {
    title: 'La noche en que Frankenstein leyó el Quijote',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81272xAJsDL.jpg',
    description:
      'Un viaje en el tiempo por la historia de la literatura universal de la mano de Santiago Posteguillo, uno de los novelistas históricos más reconocidos por la crítica y el público de los últimos años.',
    availableQuantity: 6,
  },
  {
    title: 'El regreso de Quetzalcóatl: Una historia sagrada de México',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51czq70LonS._SX324_BO1,204,203,200_.jpg',
    description:
      'Ésta es la profecía de Quetzalcóatl, su revelación, nuestro destino. El 13 de agosto de 1521 cayó Tenochtitlán en manos de decenas de miles de guerreros de diversos pueblos y ciudades del Anáhuac.',
    availableQuantity: 8,
  },
];

export default books;


class articulo {
    constructor(id,titulo,idPadre,grupo, Contenido = "",modifAuthor) {
        this.id = id;
        this.titulo = titulo;
        this.idPadre = idPadre;
        this.grupo = grupo;
        this.Contenido = Contenido;
        this.modifAuthor = modifAuthor;

    }
}

class categoria {
    constructor(id,titulo,mundo,contenido) {
        this.id = id;
        this.titulo = titulo;
        this.mundo = mundo;
        this.Contenido = contenido;
    }
    get childArticles(){
        return this.calcChildArticles()
    }
    calcChildArticles(){
        const  articleList=[uno,dos,tres,cuatro,cinco,seis];
        return articleList.filter((x)=> x.grupo==this.id)
    }

}


/*ejemplos*/

const uno = new articulo(23234,"titulazo_articulo 1",23235,99)
const dos = new articulo(23236,"titulazo_articulo 2",23237,98)
const tres = new articulo(23238,"Artículoo 2 que es super largo y tal y cual pascual 3",23239,98,'¿De dónde viene? Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32 El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham. ¿Dónde puedo conseguirlo? e texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham. ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajesm ¿De dónde viene? Al contr Hay muchas variaciones de los pasajes ¿De dónde viene? Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32 El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham. ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet. Usa un diccionario de mas de 200 palabras provenientes del latín, combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum generado siempre estará libre de repeticiones, humor agregado o pa labras no características del lenguaje, etc. de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet. Usa un diccionario de mas de 200 palabras provenientes del latín, combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum generado siempre estará libre de repeticiones, humor agregado o palabras no características del lenguaje, etc.')
tres.modifAuthor="@john";
const cuatro = new articulo(23240,"titulazo_articulo 4",23241,99,"<p>Hola que tal manoloaaoe</p>\n\n<h2 class=\"alert alert-primary mb-2 pt-2\" style=\"color:Blue;\">Holi</h2>\n\n<p>wewewe</p>\n\n<p class=\"alert alert-primary mb-2 pt-2\" style=\"color: blue;\"><span style=\"color:#4e5f70;\">Esto no se deber&iacute;a llamar blue title ya, hay que a&ntilde;adir el resto de estilos y cambiar el color de este</span><br />\nshshs<br />\n&nbsp;</p>\n\n<p>&nbsp;</p>\n")
const cinco = new articulo(23242,"titulazo_articulo 5",23243,99)
const seis = new articulo(23244,"titulazo_articulo 6",23245,99)

const catuno = new categoria(99,"categoria 1",0)
const catdos = new categoria(98,"categoria 2",0)



export var articleList=[uno,dos,tres,cuatro,cinco,seis];
export var catList=[catuno,catdos]


// 1) Cuenta - universo - mundo - categoria - articulos
//al cargar un universo, primer se cargan todos sus mundos (los del toggle a la izquierda )
//ya escogido un mundo lo que vamos a hacer es cargar y enseñar sus grupos y los articulos

//Supongamos que es un bucle [i]:
articleList.filter(x=> x.grupo==catList[1].id).map(x=> "<div>"+x.titulo+"</div>")
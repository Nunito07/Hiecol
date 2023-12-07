// Objeto que mapea identificadores de productos con descripciones
const descripciones = [
    {
        id: 0,
        img: '../../img/productos/soga-golden.jpg',
        nameProduct: 'SOGA GOLDEN',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Sogas o manilas elaboradas en polipropileno, útiles para diferentes tipos de amarres.' +
            'Tienen múltiples usos en los sectores ganaderos, marítimo, terrestre, industrial y de construcción. </p>' +
            '<p style="font-weight: bold; color: #40B554;"> Calibres y presentaciones: </p>' +
            '<ul style="list-style: inside; text-align: start;"><li>3 mm - Rollo x 1000 m</li><li>6 mm - Rollo x 500 m</li><li>8 mm - Rollo x 400 m</li><li>10 mm - Rollo x 250 m</li><li>13 mm - Rollo x 200 m</li></ul></div>'

    },
    {
        id: 1,
        img: '../../img/productos/soga-recuperada.jpg',
        nameProduct: 'SOGA RECUPERADA',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Producto altamente resistente y económico es ideal para sujetar, suspender y remolcar de gran versatilidad en usos y aplicaciones.</p>' +
            '<p style="font-weight: bold; color: #40B554;"> Calibres y presentaciones: </p>' +
            '<ul style="list-style: inside; text-align: start;"><li>3 mm - Rollo x 1000 m</li><li>6 mm - Rollo x 500 m</li><li>8 mm - Rollo x 400 m</li><li>10 mm - Rollo x 250 m</li><li>13 mm - Rollo x 200 m</li></ul></div>'

    },

    {
        id: 2,
        img: '../../img/productos/soga-multifilamento.jpg',
        nameProduct: 'SOGA MULTIFILAMENTO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Soga trenzada en hilos de multifilamento de polipropileno es suave y resistente a la intemperie</p>' +
            '<p style="font-weight: bold; color: #40B554;"> Calibres y presentaciones: </p>' +
            '<ul style="list-style: inside; text-align: start;"><li>6 mm - Rollo x 500 m</li><li>8 mm - Rollo x 400 m</li><li>10 mm - Rollo x 250 m</li><li>12 mm - Rollo x 200 m</li></ul></div>'

    },
    {
        id: 3,
        img: '../../img/productos/soga-pisadora-azul.jpg',
        nameProduct: 'SOGA PISADORA AZUL',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Soga en polipropileno con aditivo UV para sujetar y suspender. Es de alta resistencia, se instala sobre el plástico de invernaderopara evitar que se levante y se dañe. Se emplea en amarres de toldos, carpas, agrosombras y amarres en general.</p>' +
            '<p style="font-weight: bold; color: #40B554;"> Calibres y presentaciones: </p>' +
            '<ul style="list-style: inside; text-align: start;"><li>5 mm - Rollo x 800 m</li></ul></div>'

    },
    {
        id: 4,
        img: '../../img/productos/hilos-poliporpileno.jpg',
        nameProduct: 'HILOS DE POLIPROPILENO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Ideales para ser utilizados en el sector agroindustrial y de construcción, ofrecemos variedad de presentaciones.</p>' +
            '<p style="font-weight: bold; color: #40B554;"> Colores: <span style="font-weight: 400; color: #000000;"> amarillo, azul, verde, rojo</span></p>' +
            '<p style="font-weight: bold; color: #40B554;"> Calibres y presentaciones: </p>' +
            '<ul style="list-style: inside; text-align: start;"><li>Ovillo multicolor 130 mts x 72 unidades</li><li>Ovillo multicolor 750 mts x 24 unidades</li><li>Bobina 3750 mts 5kg x 6 Unidades</li></ul></div>'

    },
    {
        id: 5,
        img: '../../img/productos/bolsa-precorte.jpg',
        nameProduct: 'BOLSA PRECORTE',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Fabricadas en polietileno, cuenta con sistema precorte lo que permite desprender de forma fácil cada unidad.</p>' +
            '<p style="font-weight: bold; color: #40B554;"> Presentaciones (medida en pulgadas): </p>' +
            '<ul style="list-style: inside; text-align: start;"><li>Rollo 7” x 10”</li>' +
            '<li>Rollo 8” x 12”</li><li>Rollo 9” x 14”</li>' +
            '<li>Rollo 10” x 16”</li><li>Rollo 12” x 18”</li>' +
            '<li>Rollo 14” x 20”</li><li>Rollo 16” x 24”</li>' +
            '<li>Rollo 18” x 26”</li><li>Rollo 20” x 30”</li>' +
            '<li>Rollo 25” x 34”</li></ul></div>'

    },
    {
        id: 6,
        img: '../../img/productos/bolsa-multiusos.jpg',
        nameProduct: 'BOLSA MULTIUSOS',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Fabricadas en polietileno para llenar y transportar una gran variedad de productos, es resistente y de bajo' +
            'costo. Pueden ser elaboradas en diferentes tamaños y calibres según la necesidad del cliente.</p>'
    },
    {
        id: 7,
        img: '../../img/productos/shopping-bag-ferretero.jpg',
        nameProduct: 'SHOPPING BAG FERRETERO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Ideal para que los clientes lleven sus compras, excelente medio de publicidad para que su marca esté en todos lados. Reutilizable y resitente.</p>' +
            '<p style="font-weight: bold; color: #40B554;"> Presentación: <span style="font-weight: 400; color: #000000;"><br>50 cm x 50 cm con fuelles <br>Capacidad 25 kg.</span></p>' 
    },
    {
        id: 8,
        img: '../../img/productos/plastico-invernadero.jpg',
        nameProduct: 'PLÁSTICO INVERNADERO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Los plásticos para invernadero son utilizados como cubrimiento de cultivos agrícolas y protección temporal de obras civiles.</p>' +
            '<p style="font-weight: bold; color: #40B554;"> Colores: <span style="font-weight: 400; color: #000000;"> Transparente y amarillo</span></p>' +
            '<p style="font-weight: bold; color: #40B554;"> Presentación cultivo (ancho x largo): <span style="font-weight: 400; color: #000000;"><br> 4 m x 100 calibre 6 </span></p>' +
            '<p style="font-weight: bold; color: #40B554;"> Presentación obra civil (ancho x largo): <span style="font-weight: 400; color: #000000;"><br> 4 m x 70 calibre 6 </span></p>' 
    },
    {
        id: 9,
        img: '../../img/productos/cinta-empaque.jpg',
        nameProduct: 'CINTA DE EMPAQUE',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Es una cinta de embalaje de uso industrial, su alto poder adhesivo permite sellar los paquetes de forma segura. Es resistente a la tracción y al rasgado.</p>' +
            '<p style="font-weight: bold; color: #40B554;"> Presentación: <span style="font-weight: 400; color: #000000;"><br>48 mm x 100 mm, caja por 36 unidades</span></p>' 
    },
    {
        id: 10,
        img: '../../img/productos/bascula-electronica.jpg',
        nameProduct: 'BÁSCULA ELECTRÓNICA',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Equipo de pesaje industrial multifunción de sencillo manejo y lectura rápida en décimas de segundo.</p>' +
            '<p style="font-weight: bold; color: #40B554;"> Presentaciones: <span style="font-weight: 400; color: #000000;"><br>- Peso máximo 150 kg la medida de su plataforma es de 30 cm de ancho por 40 cm de largo.'+
            '<br><br>- Peso máximo 300 Kg, el tamaño de su plataforma es de 40 cm de ancho por 50 cm de largo.</span></p>'
    },
    {
        id: 11,
        img: '../../img/productos/sacos-convencionales.jpg',
        nameProduct: 'PLÁSTICO INVERNADERO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Fabricados en polipropileno ideales para  hacer muros de contención y para el llenado y transporte de gran variedad de productos entre ellos arena y escombros.</p>'
    },
    {
        id: 12,
        img: '../../img/productos/malla-cuadrada-mp.jpg',
        nameProduct: 'MALLA CUADRADA MULTIPROPOSITO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Malla resistente, flexible, fácil de instalar, no se oxida, resistente a agentes químicos y a la intemperie</p>'+
            '<p style="font-weight: bold; color: #40B554;">Dimensiones de orificios:<span style="font-weight: 400; color: #000000;"><br>15 mm x 15 mm</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (ancho x largo):<span style="font-weight: 400; color: #000000;"><br>30m x 100m y 30m x 150m.</span></p>'  +
            '<p style="font-weight: bold; color: #40B554;">Resistencia a rayos UV:<span style="font-weight: 400; color: #000000;"><br>Aditivada para durar 2 años.</span></p>'
    },
    {
        id: 13,
        img: '../../img/productos/malla-senalizacion.jpg',
        nameProduct: 'MALLA DE SEÑALIZACIÓN',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Elaborada en polipropileno, su color naranja hace un llamado al transeúnte a estar alerta.Sirve para delimitar espacios y zonas de peligro previniendo riesgos de accidentes. </p>'+
            '<p style="font-weight: bold; color: #40B554;">Dimensiones de orificios:<span style="font-weight: 400; color: #000000;"><br>40 mm x 50 mm</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (ancho x largo):<span style="font-weight: 400; color: #000000;"><br>1,00 m x 50 m, 1,20m x 50m, 1,40m x 50m</span></p>'  +
            '<p style="font-weight: bold; color: #40B554;">Resistencia a rayos UV:<span style="font-weight: 400; color: #000000;"><br>Aditivada para durar 6 meses</span></p>'
    },
    {
        id: 14,
        img: '../../img/productos/malla-gallinero.jpg',
        nameProduct: 'MALLA GALLINERO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Malla versátil, liviana de fácil manipulación e instalación, no se oxida gracias a que cuenta con protección UV.</p>'+
            '<p style="font-weight: bold; color: #40B554;">Color:<span style="font-weight: 400; color: #000000;"><br>Negro</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Dimensiones de orificios:<span style="font-weight: 400; color: #000000;"><br>25 mm x 30 mm</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (ancho x largo):<span style="font-weight: 400; color: #000000;"><br>1,80 m x 50 m</span></p>'  +
            '<p style="font-weight: bold; color: #40B554;">Resistencia a rayos UV:<span style="font-weight: 400; color: #000000;"><br>Aditivada para durar de 2 a 5 años</span></p>'
    },
    {
        id: 15,
        img: '../../img/productos/malla-diamante-cafetera.jpg',
        nameProduct: 'MALLA DIAMANTE O CAFETERA',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Mallas elaboradas con resinas sintéticas, utilizadas para cerramiento en general, camas para secado de café, separación de'+
            'materiales, entre otros; aditivadas contra los rayos UV.</p>'+
            '<p style="font-weight: bold; color: #40B554;">Colores:<span style="font-weight: 400; color: #000000;"><br>Azul, gris, negro y verde</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Dimensiones de orificios:<span style="font-weight: 400; color: #000000;"><br>2×2 mm, 3×3 mm, 4×4 mm, 5×5 mm,<br> 6×6 mm, 7×7 mm, 9×9 mm,<br> 11×11 mm y 15×15 mm</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (ancho x largo):<span style="font-weight: 400; color: #000000;"><br>30m x 100, 30m x 150m, 30m x 200m.</span></p>'
    },
    {
        id: 16,
        img: '../../img/productos/tela-cerratex-vision.jpg',
        nameProduct: 'TELA CERRATEX VISIÓN',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Utilizada para cerramiento de obras. Es liviana y de alta resistencia, tiene un buen desempeño frente a corrientes de viento y genera privacidad.</p>'+
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (ancho x largo):<span style="font-weight: 400; color: #000000;"><br>2 m x 100 m</span></p>'
    },
    {
        id: 17,
        img: '../../img/productos/tela-laminada.jpg',
        nameProduct: 'TELA LAMINADA',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Usada en el cerramiento de áreas en galpones y barrera cortavientos en agricultura, ayuda al control de temperatura ambiente.</p>'+
            '<p style="font-weight: bold; color: #40B554;">Colores:<span style="font-weight: 400; color: #000000;"><br>Amarillo, blanco y azul</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (ancho x largo):<span style="font-weight: 400; color: #000000;"><br>2,10m x 1,50m</span></p>'
    },
    {
        id: 18,
        img: '../../img/productos/tela-polisombra.jpg',
        nameProduct: 'TELA POLISOMBRA',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Especialmente diseñada para atenuar la radiación solar y reducir la temperatura ambiente en espacios de trabajo. '+
            'Aisla zonas de forma segura, permitiendo un control sobre el material particulado que se genera en la obra.</p>'+
            '<p style="font-weight: bold; color: #40B554;">Colores:<span style="font-weight: 400; color: #000000;"><br>Verde, blanca y negra.</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Porcentaje de sombra:<span style="font-weight: 400; color: #000000;"><br>35%, 50%, 65%, 80%</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (ancho x largo):<span style="font-weight: 400; color: #000000;"><br>4 m x 100 m.</span></p>'  +
            '<p style="font-weight: bold; color: #40B554;">Resistencia a rayos UV:<span style="font-weight: 400; color: #000000;"><br>24 meses.</span></p>'
    },
    {
        id: 19,
        img: '../../img/productos/tela-cerramiento.jpg',
        nameProduct: 'TELA DE CERRAMIENTO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Ofrece una solución práctica actuando como barrera visual y restringiendo el paso de personas y animales al área de trabajo</p>'+
            '<p style="font-weight: bold; color: #40B554;">Colores:<span style="font-weight: 400; color: #000000;"><br>Blanco, negro y verde</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (ancho x largo):<span style="font-weight: 400; color: #000000;"><br>1,90 m x 100 m, 2,00 m x 100 m, 2,10m x 100m</span></p>'  +
            '<p style="font-weight: bold; color: #40B554;">Resistencia a rayos UV:<span style="font-weight: 400; color: #000000;"><br>Aditivada para mayor duración a la intemperie.</span></p>'
    },
    {
        id: 20,
        img: '../../img/productos/plastico-negro.jpg',
        nameProduct: 'PLÁSTICO NEGRO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Película de polietileno utilizado en construcciones, remodelaciones, protección de materiales bajo la lluvia y cerramientos en general.</p>'+
            '<p style="font-weight: bold; color: #40B554;">Color:<span style="font-weight: 400; color: #000000;"><br>Negro</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (medida y calibre):</p>' +
            '<ul style="list-style: inside; text-align: start;">'+
            '<li>Rollo 3m x 100 mL - Calibre 4</li><li>Rollo 4m x 100 mL - Calibre 4</li>'+
            '<li>Rollo 4m x 100 mL - Calibre 6</li><li>Rollo 6m x 100 mL - Calibre 6</li></ul></div>'
    }
];

function cargar(button) {
    // Limpiar el contenido del modal
    document.getElementById("itemDetail").innerHTML = "";

    // Crear un contenedor div para el detalle del ítem
    const itemDetailContainer = document.createElement('div');

    // Crear una etiqueta img y aplicar la ruta de la imagen
    const newElementImg = document.createElement('img');
    newElementImg.src = descripciones[button].img;
    itemDetailContainer.appendChild(newElementImg);

    // Crear una etiqueta p para el nombre del producto y aplicar estilos si es necesario
    const newElementName = document.createElement('p');
    newElementName.innerText = descripciones[button].nameProduct;
    // Aquí puedes agregar estilos específicos si es necesario
    newElementName.style.fontWeight = 'bold'; // Ejemplo de estilo
    itemDetailContainer.appendChild(newElementName);

    // Crear una etiqueta p para la descripción y aplicar estilos si es necesario
    const newElement = document.createElement('p');
    newElement.innerHTML = descripciones[button].descripcion;
    itemDetailContainer.appendChild(newElement);

    // Agregar el contenedor al modal
    document.getElementById('itemDetail').appendChild(itemDetailContainer);
}





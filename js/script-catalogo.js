// Objeto que mapea identificadores de productos con descripciones
const descripciones = [
    //PRODUCTOS DE EMPAQUES
    {
        id: 0,
        img: '../../img/productos/sacos-agricolas.png',
        nameProduct: 'SACO AGRÍCOLA',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">' +
            'Elaborado en rafia de polipropileno, es un saco altamente resistente con tejido tipo red, que' +
            'permite la visibilidad del producto empacado, además de mantenerlo aireado y conservando sus propiedades.<br>' +
            'Su estructura puede ser tejido plano con jareta para amarre o tejido tubular para amarre con hilos de polipropileno.<br>' +
            'Es ideal para el almacenamiento y transporte de frutas, verduras y hortalizas. Este tipo de saco' +
            'puede llevar cosida en un extremo una etiqueta impresa con la información del producto.' +
            'Ofrecemos diferentes tamaños y colores de sacos agrícolas, según las necesidades de nuestros clientes.</p></div>'

    },
    {
        id: 1,
        img: '../../img/productos/sacos-agricolas-2.png',
        nameProduct: 'SACO INDUSTRIAL',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">Elaborado en rafia de polipropileno, es un saco altamente resistente, su estructura puede ser tubular laminada, tejido corriente o con liner interno, proporcionando una mayor barrera a la humedad y agentes externos.<br>' +
            'Es ideal para el almacenamiento y transporte de una gran variedad de productos como:<br>' +
            'Sales, fertilizantes, cereales, granos, entre otros. Este tipo de saco puede ser impreso con la marca y la información que nuestros clientes requieran, cumpliendo así un papel fundamental en la generación de valor del producto y posicionamiento de marca.<br>' +
            'Ofrecemos diferentes tamaños, gramajes y colores de sacos industriales, según las necesidades de  nuestros clientes.</p></div>'

    },

    {
        id: 2,
        img: '../../img/productos/shopping-bag-ferretero.jpg',
        nameProduct: 'SACO DE FIBRA NATURAL',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">Elaborado en fibra natural de fique, es un saco altamente resistente y durable, su estructura permite mantener las propiedades organolépticas del producto empacado.<br><br>' +
            'Es ideal para el almacenamiento y transporte de productos como café y cacao, entre otros. Este tipo de saco puede ser impreso con la marca y la información que nuestros clientes requieran, cumpliendo así un papel fundamental en la generación de valor del producto y posicionamiento de marca.<br><br>' +
            'También se utiliza en la construcción de cunetas y estructuras de contención, gracias a que es 100% biodegradable termina integrándose de forma natural a la vegetación.<br><br>' +
            'Ofrecemos diferentes tamaños y estructuras de sacos de fibra natural, según las necesidades de nuestros clientes.</p></div>'
    },
    {
        id: 3,
        img: '../../img/productos/laminas-impresas.png',
        nameProduct: 'LAMINAS COEXTRUIDAS',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">Elaboradas en polietileno de baja densidad, son laminas con propiedades mecánicas que cumplen altos estándares de calidad, utilizadas principalmente para el empaque en máquinas automáticas de productos como; Cereales, granos, harinas, entre otros.<br><br>' +
            'Su principal función es la preservación del producto en óptimas condiciones, además permite la impresión del diseño que nuestros clientes requieran, cumpliendo así un papel fundamental en la generación de valor del producto y posicionamiento de marca.<br><br>' +
            'Ofrecemos diferentes tamaños, densidades y tipos de impresión en laminas, según las necesidades de nuestros clientes.</p></div>'

    },
    {
        id: 4,
        img: '../../img/productos/bolsa-multiusos.jpg',
        nameProduct: 'BOLSAS PLÁSTICAS',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">Elaboradas en polietileno de alta y baja densidad, son versátiles, resistentes y durables, además de presentarse en formato de bolsas, también pueden encontrarse en rollos con sistema pre-corte o para uso en hornos de retracción.<br><br>' +
            'Son una oportunidad promocional debido a que se puede imprimir el logo y la información que nuestros clientes requieran, son reutilizables y reciclables.<br><br>' +
            'Ideales para ser utilizadas en supermercados, almacenes de cadena, productos de panadería, restaurantes, manejo de residuos, entre otros.<BR><BR>' +
            'Ofrecemos diferentes tamaños, colores y densidades de bolsas plásticas, según las necesidades de nuestros clientes.</p></div>'
    },
    {
        id: 5,
        img: '../../img/productos/shopping-bag.png',
        nameProduct: 'SHOPINGBAG POLIPROPILENO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">' +
            'Fabricadas en polietileno para llenar y transportar una gran variedad de productos, es resistente y de bajo' +
            'costo. Pueden ser elaboradas en diferentes tamaños y calibres según la necesidad del cliente.</p>'

    },
    {
        id: 6,
        img: '#',
        nameProduct: 'CAMBRE',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">DESCRIPCIÓN PENDIENTE...</p></div>'
    },
    //PRODUCTOS DE AMARRES
    {
        id: 7,
        img: '../../img/productos/soga-golden.jpg',
        nameProduct: 'SOGA GOLDEN',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">' +
            'Sogas o manilas elaboradas en polipropileno, útiles para diferentes tipos de amarres.' +
            'Tienen múltiples usos en los sectores ganaderos, marítimo, terrestre, industrial y de construcción. </p>' +
            '<p style="font-weight: bold; color: #40B554;"> Calibres y presentaciones: </p>' +
            '<ul style="list-style: inside; text-align: start;"><li>3 mm - Rollo x 1000 m</li><li>6 mm - Rollo x 500 m</li><li>8 mm - Rollo x 400 m</li><li>10 mm - Rollo x 250 m</li><li>13 mm - Rollo x 200 m</li></ul></div>'
    },
    {
        id: 8,
        img: '../../img/productos/soga-recuperada.jpg',
        nameProduct: 'SOGA RECUPERADA',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">' +
            'Producto altamente resistente y económico es ideal para sujetar, suspender y remolcar de gran versatilidad en usos y aplicaciones.</p>' +
            '<p style="font-weight: bold; color: #40B554;"> Calibres y presentaciones: </p>' +
            '<ul style="list-style: inside; text-align: start;"><li>3 mm - Rollo x 1000 m</li><li>6 mm - Rollo x 500 m</li><li>8 mm - Rollo x 400 m</li><li>10 mm - Rollo x 250 m</li><li>13 mm - Rollo x 200 m</li></ul></div>'
    },
    {
        id: 9,
        img: '../../img/productos/soga-multifilamento.jpg',
        nameProduct: 'SOGA MULTIFILAMENTO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">' +
            'Soga trenzada en hilos de multifilamento de polipropileno es suave y resistente a la intemperie</p>' +
            '<p style="font-weight: bold; color: #40B554;"> Calibres y presentaciones: </p>' +
            '<ul style="list-style: inside; text-align: start;"><li>6 mm - Rollo x 500 m</li><li>8 mm - Rollo x 400 m</li><li>10 mm - Rollo x 250 m</li><li>12 mm - Rollo x 200 m</li></ul></div>'

    },
    {
        id: 10,
        img: '../../img/productos/soga-pisadora-azul.jpg',
        nameProduct: 'SOGA PISADORA AZUL',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">' +
            'Soga en polipropileno con aditivo UV para sujetar y suspender. Es de alta resistencia, se instala sobre el plástico de invernaderopara evitar que se levante y se dañe. Se emplea en amarres de toldos, carpas, agrosombras y amarres en general.</p>' +
            '<p style="font-weight: bold; color: #40B554;"> Calibres y presentaciones: </p>' +
            '<ul style="list-style: inside; text-align: start;"><li>5 mm - Rollo x 800 m</li></ul></div>'

    },
    {
        id: 11,
        img: '../../img/productos/hilos-tutoreo.png',
        nameProduct: 'TUTOREO DE CULTIVOS',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">DESCRIPCIÓN PENDIENTE...</p></div>'
    },
    {
        id: 12,
        img: '../../img/productos/hilos.png',
        nameProduct: 'AMARRES EN GENERAL',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">DESCRIPCIÓN PENDIENTE</p></div>'
    },
    {
        id: 13,
        img: '#',
        nameProduct: 'POLIESTER',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">DESCRIPCIÓN PENDIENTE</p></div>'
    },
    {
        id: 14,
        img: '#',
        nameProduct: 'ZUNCHO PLÁSTICO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">DESCRIPCIÓN PENDIENTE</p></div>'
    },
    //PRODUCTOS DE PROTECCIÓN
    {
        id: 15,
        img: '../../img/productos/tela-cerramiento.jpg',
        nameProduct: 'TELA DE CERRAMIENTO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">' +
            'Ofrece una solución práctica actuando como barrera visual y restringiendo el paso de personas y animales al área de trabajo</p>' +
            '<p style="font-weight: bold; color: #40B554;">Colores:<span style="font-weight: 400; color: #000000;"><br>Blanco, negro y verde</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (ancho x largo):<span style="font-weight: 400; color: #000000;"><br>1,90 m x 100 m, 2,00 m x 100 m, 2,10m x 100m</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Resistencia a rayos UV:<span style="font-weight: 400; color: #000000;"><br>Aditivada para mayor duración a la intemperie.</span></p>'
    },
    {
        id: 16,
        img: '../../img/productos/tela-cerratex-vision.jpg',
        nameProduct: 'TELA CERRATEX VISIÓN',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">' +
            'Utilizada para cerramiento de obras. Es liviana y de alta resistencia, tiene un buen desempeño frente a corrientes de viento y genera privacidad.</p>' +
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (ancho x largo):<span style="font-weight: 400; color: #000000;"><br>2 m x 100 m</span></p>'
    },
    {
        id: 17,
        img: '../../img/productos/tela-laminada.jpg',
        nameProduct: 'TELA LAMINADA',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">' +
            'Usada en el cerramiento de áreas en galpones y barrera cortavientos en agricultura, ayuda al control de temperatura ambiente.</p>' +
            '<p style="font-weight: bold; color: #40B554;">Colores:<span style="font-weight: 400; color: #000000;"><br>Amarillo, blanco y azul</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (ancho x largo):<span style="font-weight: 400; color: #000000;"><br>2,10m x 1,50m</span></p>'
    },
    {
        id: 18,
        img: '../../img/productos/tela-polisombra.jpg',
        nameProduct: 'TELA POLISOMBRA',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">' +
            'Especialmente diseñada para atenuar la radiación solar y reducir la temperatura ambiente en espacios de trabajo. ' +
            'Aisla zonas de forma segura, permitiendo un control sobre el material particulado que se genera en la obra.</p>' +
            '<p style="font-weight: bold; color: #40B554;">Colores:<span style="font-weight: 400; color: #000000;"><br>Verde, blanca y negra.</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Porcentaje de sombra:<span style="font-weight: 400; color: #000000;"><br>35%, 50%, 65%, 80%</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (ancho x largo):<span style="font-weight: 400; color: #000000;"><br>4 m x 100 m.</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Resistencia a rayos UV:<span style="font-weight: 400; color: #000000;"><br>24 meses.</span></p>'
    },
    {
        id: 19,
        img: '#',
        nameProduct: 'TELA CUBRE SUELO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">DESCRIPCIÓN PENDIENTE...</p></div>'

    },
    {
        id: 20,
        img: '../../img/productos/plastico-invernadero.jpg',
        nameProduct: 'PLÁSTICO INVERNADERO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px;">' +
            '<p style="font-weight: 400;">' +
            'Los plásticos para invernadero son utilizados como cubrimiento de cultivos agrícolas y protección temporal de obras civiles.</p>' +
            '<p style="font-weight: bold; color: #40B554;"> Colores: <span style="font-weight: 400; color: #000000;"> Transparente y amarillo</span></p>' +
            '<p style="font-weight: bold; color: #40B554;"> Presentación cultivo (ancho x largo): <span style="font-weight: 400; color: #000000;"><br> 4 m x 100 calibre 6 </span></p>' +
            '<p style="font-weight: bold; color: #40B554;"> Presentación obra civil (ancho x largo): <span style="font-weight: 400; color: #000000;"><br> 4 m x 70 calibre 6 </span></p></div>'
    },
    {
        id: 21,
        img: '../../img/productos/plastico-negro.jpg',
        nameProduct: 'PLÁSTICO NEGRO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">' +
            'Película de polietileno utilizado en construcciones, remodelaciones, protección de materiales bajo la lluvia y cerramientos en general.</p>' +
            '<p style="font-weight: bold; color: #40B554;">Color:<span style="font-weight: 400; color: #000000;"><br>Negro</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (medida y calibre):</p>' +
            '<ul style="list-style: inside; text-align: start;">' +
            '<li>Rollo 3m x 100 mL - Calibre 4</li><li>Rollo 4m x 100 mL - Calibre 4</li>' +
            '<li>Rollo 4m x 100 mL - Calibre 6</li><li>Rollo 6m x 100 mL - Calibre 6</li></ul></div>'
    },
    {
        id: 22,
        img: '../../img/productos/malla-diamante-cafetera.jpg',
        nameProduct: 'MALLA DIAMANTE O CAFETERA',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">' +
            'Mallas elaboradas con resinas sintéticas, utilizadas para cerramiento en general, camas para secado de café, separación de' +
            'materiales, entre otros; aditivadas contra los rayos UV.</p>' +
            '<p style="font-weight: bold; color: #40B554;">Colores:<span style="font-weight: 400; color: #000000;"><br>Azul, gris, negro y verde</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Dimensiones de orificios:<span style="font-weight: 400; color: #000000;"><br>2×2 mm, 3×3 mm, 4×4 mm, 5×5 mm,<br> 6×6 mm, 7×7 mm, 9×9 mm,<br> 11×11 mm y 15×15 mm</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (ancho x largo):<span style="font-weight: 400; color: #000000;"><br>30m x 100, 30m x 150m, 30m x 200m.</span></p></div>'
    },
    {
        id: 23,
        img: '../../img/productos/malla-gallinero.jpg',
        nameProduct: 'MALLA GALLINERO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">' +
            'Malla versátil, liviana de fácil manipulación e instalación, no se oxida gracias a que cuenta con protección UV.</p>' +
            '<p style="font-weight: bold; color: #40B554;">Color:<span style="font-weight: 400; color: #000000;"><br>Negro</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Dimensiones de orificios:<span style="font-weight: 400; color: #000000;"><br>25 mm x 30 mm</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (ancho x largo):<span style="font-weight: 400; color: #000000;"><br>1,80 m x 50 m</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Resistencia a rayos UV:<span style="font-weight: 400; color: #000000;"><br>Aditivada para durar de 2 a 5 años</span></p></div>'
    },
    {
        id: 24,
        img: '../../img/productos/malla-senalizacion.jpg',
        nameProduct: 'MALLA DE SEÑALIZACIÓN',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">' +
            'Elaborada en polipropileno, su color naranja hace un llamado al transeúnte a estar alerta.Sirve para delimitar espacios y zonas de peligro previniendo riesgos de accidentes. </p>' +
            '<p style="font-weight: bold; color: #40B554;">Dimensiones de orificios:<span style="font-weight: 400; color: #000000;"><br>40 mm x 50 mm</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (ancho x largo):<span style="font-weight: 400; color: #000000;"><br>1,00 m x 50 m, 1,20m x 50m, 1,40m x 50m</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Resistencia a rayos UV:<span style="font-weight: 400; color: #000000;"><br>Aditivada para durar 6 meses</span></p></div>'
    },
    {
        id: 25,
        img: '../../img/productos/malla-cuadrada-mp.jpg',
        nameProduct: 'MALLA MULTIPROPOSITO',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">' +
            'Malla resistente, flexible, fácil de instalar, no se oxida, resistente a agentes químicos y a la intemperie</p>' +
            '<p style="font-weight: bold; color: #40B554;">Dimensiones de orificios:<span style="font-weight: 400; color: #000000;"><br>15 mm x 15 mm</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Presentaciones (ancho x largo):<span style="font-weight: 400; color: #000000;"><br>30m x 100m y 30m x 150m.</span></p>' +
            '<p style="font-weight: bold; color: #40B554;">Resistencia a rayos UV:<span style="font-weight: 400; color: #000000;"><br>Aditivada para durar 2 años.</span></p></div>'
    },
    {
        id: 26,
        img: '#',
        nameProduct: 'MALLA ANTITRIPS',
        descripcion: '<div class="containerDetail" style="border: 2px solid #40B554; padding: 10px; background: rgba(64,181,84, 0.05);">' +
            '<p style="font-weight: 400;">DESCRIPCIÓN PENDIENTE...</p></div>'
    },
];

function cargar(button) {
    // Limpiar el contenido del modal
    document.getElementById("itemDetail").innerHTML = "";

    // Crear un contenedor div para el detalle del ítem
    const itemDetailContainer = document.createElement('div');

    // Crear una etiqueta p para el nombre del producto y aplicar estilos si es necesario
    const newElementName = document.createElement('p');
    newElementName.innerText = descripciones[button].nameProduct;
    // Aquí puedes agregar estilos específicos si es necesario
    newElementName.style.fontWeight = 'bold'; // Ejemplo de estilo
    newElementName.style.fontSize = '25px';
    newElementName.style.color = '#E3A241';
    itemDetailContainer.appendChild(newElementName);

    // Crear una etiqueta img y aplicar la ruta de la imagen
    const newElementImg = document.createElement('img');
    newElementImg.src = descripciones[button].img;
    newElementImg.style.paddingBottom = '10px';
    newElementImg.style.borderRadius = '20px';
    newElementImg.style.maxWidth = '273.2px';
    itemDetailContainer.appendChild(newElementImg);

    // Crear una etiqueta p para la descripción y aplicar estilos si es necesario
    const newElement = document.createElement('p');
    newElement.innerHTML = descripciones[button].descripcion;
    newElement.className += "text-start";
    newElement.style.fontWeight = '400';
    newElement.style.fontFamily = 'DMSans-Regular'
    itemDetailContainer.appendChild(newElement);

    // Agregar el contenedor al modal
    document.getElementById('itemDetail').appendChild(itemDetailContainer);
}





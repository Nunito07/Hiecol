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
        id: 5, descripcion: 'Descripción detallada del Producto 1.'
    },
    {
        id: 6, descripcion: 'Descripción detallada del Producto 1.'
    },
    {
        id: 7, descripcion: 'Descripción detallada del Producto 1.'
    },
    {
        id: 8, descripcion: 'Descripción detallada del Producto 1.'
    },
    {
        id: 9, descripcion: 'Descripción detallada del Producto 1.'
    },
    {
        id: 10, descripcion: 'Descripción detallada del Producto 1.'
    },
    {
        id: 11, descripcion: 'Descripción detallada del Producto 1.'
    },
    {
        id: 12, descripcion: 'Descripción detallada del Producto 1.'
    },
    {
        id: 13, descripcion: 'Descripción detallada del Producto 1.'
    },
    {
        id: 14, descripcion: 'Descripción detallada del Producto 1.'
    },
    {
        id: 15, descripcion: 'Descripción detallada del Producto 1.'
    },
    {
        id: 16, descripcion: 'Descripción detallada del Producto 1.'
    },
    {
        id: 17, descripcion: 'Descripción detallada del Producto 1.'
    },
    {
        id: 18, descripcion: 'Descripción detallada del Producto 1.'
    },
    {
        id: 19, descripcion: 'Descripción detallada del Producto 1.'
    },
    {
        id: 20, descripcion: 'Descripción detallada del Producto 1.'
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





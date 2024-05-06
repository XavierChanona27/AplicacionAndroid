export const categories = [
{
    id:1, 
    name:"Ajo",
    image : require('../assets/Productos/ajo.png'),
},
{
    id:2, 
    name:"Alcachofa",
    image  : require('../assets/Productos/alcachofa.png'),
},
{
    id:3, 
    name:"Tomate",
    image : require('../assets/Productos/tomate.png'),
},
{
    id:4, 
    name:"Aloe Vera",
    image  : require('../assets/Productos/aloevera.png'),
},
]
export const featured = {
    id: 1,
    title: "Negocios",
    description: "Encuentra los mejores negocios",
    restaurants: [
        {
            id: 1,
            name: "Negocio 1",
            image: require('../assets/negocios/negocio1.jpg'),
            description: "Descripcion del negocio 1",
            lng: 38.8951,
            lat: -77.0364,
            address: "Direccion 1",
            stars: 4,
            category: 'Frutas y Verduras',
            productos: [
                {
                    id: 1,
                    name: "Producto 1",
                    image: require('../assets/negocios/negocio2.jpg'), // Corregido el nombre de la propiedad
                    price: 10,
                    description: "Descripcion del producto 1",
                },
                {
                    id: 2,
                    name: "Producto 2",
                    image: require('../assets/Productos/alcachofa.png'),
                    price: 20,
                    description: "Descripcion del producto 2",
                }
            ]
        },
        // Aquí van los otros negocios y productos...
    ]
};
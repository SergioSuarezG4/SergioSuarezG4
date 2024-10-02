fetch('data/taller.json')
    .then((response) => response.json())
    .then((data) => {

    const datos = data.datos_tienda
    const computadores = data.computadores


    const titulo = document.getElementById('titulo')
    titulo.innerHTML = datos.nombre

    const tableContainer = document.getElementById('tabla')
    let tabla = '';
    computadores.forEach(function(products) {
        tabla += 
        `
            <tr>
                <td>${products.nombre}</td>
                <td>${products.descripcion}</td>
                <td>${products.precio}</td>
            </tr>              
        `
        })
    tableContainer.innerHTML = tabla


    const nombre = document.getElementById('nombre')
    nombre.innerHTML = datos.nombre
    const telefono = document.getElementById('telefono')
    telefono.innerHTML = datos.telefono
    const correo = document.getElementById('correo')
    correo.innerHTML = datos.correo 
    const direccion = document.getElementById('direccion')
    direccion.innerHTML = datos.direccion 
});



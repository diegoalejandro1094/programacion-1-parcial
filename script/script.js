document.addEventListener("DOMContentLoaded", function() {
    fetch('script/data.json')
        .then(response => response.json())
        .then(data => {
            const productListHombre = document.getElementById('product-list-hombre');
            const productListMujer = document.getElementById('product-list-mujer');
            const productListZapatillas = document.getElementById('product-list-zapatillas');
            const productListAccesorios = document.getElementById('product-list-accesorios');

            data.productos.forEach(producto => {
                let infoProducto = `
                    <div class="card p-3 ms-4 mt-3" style="width: 18rem;">
                    <img src="images/${producto.imagen}" class="card-img-top img-fluid" style="height: 250px;" alt="${producto.nombre}">
                    <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Marca: ${producto.marca}</li>
                            <li class="list-group-item"><strong>Precio S/.${producto.precio}</strong></li>
                        </ul>
                        <div class="card-body">
                            <p class="card-text">Disponibilidad: ${producto.disponibilidad}</p>
                            <p class="card-text">Stock: ${producto.stock}</p>
                        </div>
                    </div>
                `;
                if (producto.categoria.toLowerCase() === 'hombre') {
                    productListHombre.innerHTML += infoProducto;
                } else if (producto.categoria.toLowerCase() === 'mujer') {
                    productListMujer.innerHTML += infoProducto;
                } else if (producto.categoria.toLowerCase() === 'zapatillas') {
                    productListZapatillas.innerHTML += infoProducto;
                } else if (producto.categoria.toLowerCase() === 'accesorios') {
                  productListAccesorios.innerHTML += infoProducto;
                }
            });
        })
        .catch(error => console.error('Error al cargar los productos:', error));
});

class Producto {
    constructor(codigo, nombre, precio, cantidad) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

class Inventario {
    constructor() {
        this.listaProductos = [];
    }
    addProducto(producto){
        this.listaProductos.push(producto);
    }
    
    mostrarProductos(){
        document.getElementById("product-list").innerHTML="";
        
        for(let i = 0; i < this.listaProductos.length; i++){
            const listaProducto = document.getElementById('product-list');
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>${i}</strong>.
                    <strong>Codigo</strong>: ${this.listaProductos[i].codigo}
                    <strong>Nombre</strong>: ${this.listaProductos[i].nombre}
                    <strong>Precio</strong>: ${this.listaProductos[i].precio}
                    <strong>Cantidad</strong>: ${this.listaProductos[i].cantidad}
                </div>
            </div>
            `;
            listaProducto.appendChild(element);
        }
        
    }

    eliminarProducto(codigo){
        for(let i = 0; i < this.listaProductos.length; i++){
            let aux = this.listaProductos[i].codigo;
            if(Number(aux) === Number(codigo)){
                let aux = this.listaProductos[i];
                for (let j=i; j<this.listaProductos.length-1; j++){
                    this.listaProductos[j]=this.listaProductos[j+1];
                }
                this.listaProductos[this.listaProductos.length-1]=aux;
                this.listaProductos.pop();
            }
        }
    }

    buscarProducto(codigo){
        document.getElementById("product-list").innerHTML="";
        for(let i = 0; i < this.listaProductos.length; i++){
            let aux = this.listaProductos[i].codigo;
            if(Number(aux) === Number(codigo)){
                const listaProducto = document.getElementById('product-list');
                const element = document.createElement('div');
                element.innerHTML = `
                <div class="card text-center mb-4">
                   <div class="card-body">
                       <strong>${i}</strong>.
                       <strong>Codigo</strong>: ${this.listaProductos[i].codigo}
                       <strong>Nombre</strong>: ${this.listaProductos[i].nombre}
                       <strong>Precio</strong>: ${this.listaProductos[i].precio}
                       <strong>Cantidad</strong>: ${this.listaProductos[i].cantidad}
                    </div>
                </div>
                `;
                listaProducto.appendChild(element);
            }
        }
        if(document.getElementById("product-list").innerHTML === ""){
            const listaProducto = document.getElementById('product-list');
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Producto no encontrado</strong>
                </div>
            </div>
            `;
            listaProducto.appendChild(element);
        }

    }

    insertarProducto(producto, posicion){
        let aux = this.listaProductos[posicion];
        this.listaProductos[posicion] = producto;
        for (let i=posicion+1; i<this.listaProductos.length; i++){
            let aux2 = this.listaProductos[i];
            this.listaProductos[i]=aux;
            aux=aux2;
        }
        this.listaProductos.push(aux);   
    }

    invertirLista(){
        let aux = [];
        for(let i = this.listaProductos.length-1; i >= 0; i--){
            aux.push(this.listaProductos[i]);
        }
        this.listaProductos = aux;
    }
    

}


// eventos
const inventario = new Inventario();


document.getElementById('producto-form')
    .addEventListener('submit', function(e){
        const codigo = document.getElementById('codigo').value;
        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const cantidad = document.getElementById('cantidad').value;
        
        const producto = new Producto(codigo, nombre, precio, cantidad);

        inventario.addProducto(producto);
        inventario.mostrarProductos();
       
        e.preventDefault();
});

document.getElementById('producto-Eliminar')
    .addEventListener('submit', function(e){
        const codigoEliminar = document.getElementById('codigoEliminar').value;
        
        inventario.eliminarProducto(codigoEliminar);
        inventario.mostrarProductos();

        e.preventDefault();
});

document.getElementById('producto-Buscar')
    .addEventListener('submit', function(e){
        const codigoBuscar = document.getElementById('codigoBuscar').value;
        
        inventario.buscarProducto(codigoBuscar);

        e.preventDefault();
});

document.getElementById('producto-insertar')
    .addEventListener('submit', function(e){
        const codigo = document.getElementById('codigoInsertar').value;
        const nombre = document.getElementById('nombreInsertar').value;
        const precio = document.getElementById('precioInsertar').value;
        const cantidad = document.getElementById('cantidadInsertar').value;
        const posicion = document.getElementById('posicionInsertar').value;
        
        const producto = new Producto(codigo, nombre, precio, cantidad);

        inventario.insertarProducto(producto,posicion);
        inventario.mostrarProductos();
       
        e.preventDefault();
});

document.getElementById('producto-Mostrar')
    .addEventListener('submit', function(e){    
        inventario.mostrarProductos();
        
        e.preventDefault();
});

document.getElementById('producto-invertir')
    .addEventListener('submit', function(e){    
        inventario.invertirLista();
        inventario.mostrarProductos();
        inventario.invertirLista();
        
        e.preventDefault();
});

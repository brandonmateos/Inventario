export class Inventario {
    constructor() {
        this.listaProductos = [];
    }
    addProducto(producto) {
        this.listaProductos.push(producto);
    }

    ordenarLista() {
        for (let i = 0; i < this.listaProductos.length; i++) {
            for (let j = 0; j < this.listaProductos.length; j++) {
                if (Number(this.listaProductos[i].codigo) < Number(this.listaProductos[j].codigo)) {
                    let aux = this.listaProductos[i];
                    this.listaProductos[i] = this.listaProductos[j];
                    this.listaProductos[j] = aux;
                }
            }
        }
    }

    devolverLista() {
        return this.listaProductos;
    }

    eliminarProducto(codigo) {
        let producto = false;
        for (let i = 0; i < this.listaProductos.length; i++) {
            let aux = this.listaProductos[i].codigo;
            if (Number(aux) === Number(codigo)) {
                producto = true;
                let aux = this.listaProductos[i];
                for (let j = i; j < this.listaProductos.length - 1; j++) {
                    this.listaProductos[j] = this.listaProductos[j + 1];
                }
                this.listaProductos[this.listaProductos.length - 1] = aux;
                this.listaProductos.pop();
            }
        }
        if (producto === false) {
            return "Producto no encontrado";
        }

    }

    buscarProducto(codigo) {
        let producto;
        for (let i = 0; i < this.listaProductos.length; i++) {
            let aux = this.listaProductos[i].codigo;
            if (Number(aux) === Number(codigo)) {
                producto = this.listaProductos[i];
            }
        }
        if (producto === undefined) {
            return "Producto no encontrado";
        } else {
            return producto;
        }
    }

    insertarProducto(producto, posicion) {
        posicion -= 1;
        let aux = this.listaProductos[posicion];
        this.listaProductos[posicion] = producto;
        for (let i = posicion + 1; i < this.listaProductos.length; i++) {
            let aux2 = this.listaProductos[i];
            this.listaProductos[i] = aux;
            aux = aux2;
        }
        this.listaProductos.push(aux);
    }

}
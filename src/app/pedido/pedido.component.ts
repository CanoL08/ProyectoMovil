import { Component } from '@angular/core';

@Component({
  selector: 'app-pedido',
  imports: [],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent {
  mesas = [1, 2, 3, 4];
  meseros = [
    { id: 25, nombre: 'Ivan' },
    { id: 26, nombre: 'Lupita' },
    { id: 27, nombre: 'Carlos' }
  ];
  menu = [
    { id: 1, nombre: 'Tacos al pastor', precio: 50 },
    { id: 2, nombre: 'Hamburguesa', precio: 80 },
    { id: 3, nombre: 'Pizza', precio: 120 },
    { id: 4, nombre: 'Ensalada', precio: 45 }
  ];

  pedido: any = {
    mesa: null,
    mesero: null,
    cliente: {
      nombre_c: '',
      f_visita: '',
      h_visita: ''
    },
    items: [],
    total: 0
  };

  itemSeleccionado: any = null;

  agregarItem() {
    if (this.itemSeleccionado) {
      this.pedido.items.push(this.itemSeleccionado);
      this.pedido.total += this.itemSeleccionado.precio;
      this.itemSeleccionado = null;
    }
  }

  eliminarItem(index: number) {
    this.pedido.total -= this.pedido.items[index].precio;
    this.pedido.items.splice(index, 1);
  }

  guardarPedido() {
    console.log("Pedido guardado:", this.pedido);
    alert("Pedido registrado con éxito");
    // Aquí iría el POST al backend o almacenamiento
  }
}


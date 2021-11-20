Vue.component('table-products', {
    props:['products'],
    template: `
        <table class="table">
            <tr class="table__tr">
                <th class="table__th">N°</th>
                <th class="table__th">Producto</th>
                <th class="table__th">Tipo</th>
            </tr>
            <tr v-for="product in products">
                <td>{{product.id}}</td>
                <td>{{product.product}}</td>
                <td>{{product.type}}</td>
            </tr>
        </table>
    `,
})

var app = new Vue({
    el: '#app',
    data: {
      counter: 0,
      mode: false,
      products: [
        {
          id: 1,
          product: "Guitarra",
          type: "Les Paul",
        },
        {
          id: 2,
          product: "Bajo",
          type: "Jazzbass",
        },
        {
          id: 3,
          product: "Guitarra acústica",
          type: "Classic",
        },
        {
          id: 4,
          product: "Bajo acústico",
          type: "Classic",
        },
        {
          id: 5,
          product: "Guitarra",
          type: "Stratocaster",
        },
      ],
    },
    methods: {
        add(){
            this.counter++;
        },
        subtract(){
            this.counter === 0 ? this.counter = 0 : this.counter--;
        },
        darkMode(){
            this.mode = !this.mode;
        }
    },
    computed: {
        counterValue(){
            return this.counter;
        },
        changeMode(){
            return this.mode ? 'Modo claro' : 'Modo oscuro';
        }
    },
});
var app = new Vue({
    el: '#app',
    data: {
      counter: 0,
    },
    methods: {
        add(){
            this.counter++;
        },
        subtract(){
            this.counter === 0 ? this.counter = 0 : this.counter--;
        }
    },
    computed: { // ---> Funciones reactivas (se vuelven a ejecutar cuando cambia una variable)
        counterValue(){
            return this.counter
        }
    }
});
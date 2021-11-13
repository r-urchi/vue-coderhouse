var app = new Vue({
    el: '#app',
    data: { // ---> Variables
      counter: 0,
    },
    methods: { // ---> Funciones (se ejecutan una sola vez)
        add(){
            this.counter++
        },
    },
    computed: { // ---> Funciones reactivas (se vuelven a ejecutar cuando cambia una variable)
        counterValue(){
            return this.counter
        }
    }
});
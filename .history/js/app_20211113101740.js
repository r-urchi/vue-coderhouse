var app = new Vue({
    el: '#app',
    data: { // ---> Variables
      counter: 0,
    },
    methods: { // ---> Funciones (se ejecutan una sola vez)
        imprimimostarrrConsola(){
            console.log('holi')
        },
        // alert(){
        //     alert(this.message)
        // }
    },
    computed: { // ---> Funciones reactivas (se vuelven a ejecutar cuando cambia una variable)
        add(){
            return this.counter + 1
        }
    }
});
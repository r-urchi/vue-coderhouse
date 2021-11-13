var app = new Vue({
    el: '#app',
    data: { // ---> Variables
      counter: 0,
    },
    methods: { // ---> Funciones (se ejecutan una sola vez)
        add(){
            this.counter++;
        },
        subtract(e){
            
            if(this.counter === 0){
                e.target.disabled = true;
                console.log('sin stock');
            } else{
                this.counter--;

            }
        }
    },
    computed: { // ---> Funciones reactivas (se vuelven a ejecutar cuando cambia una variable)
        counterValue(){
            return this.counter
        }
    }
});
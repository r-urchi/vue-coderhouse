var app = new Vue({
    el: '#app',
    data: { // ---> Variables
      counter: 0,
      numero2: 30,
      texto: 'Holaa v-text',
      textoHTML: '<h1>este es el v-html</h1>',
      sourceIMG: 'html://#'
    },
    methods: { // ---> Funciones (se ejecutan una sola vez)
        imprimirConsola(){
            console.log('holi')
        },
        alert(){
            alert(this.message)
        }
    },
    computed: { // ---> Funciones reactivas (se vuelven a ejecutar cuando cambia una variable)
        mensajeReactivo(){
            return `${this.message} 'holiii'`
        }
    }
});
import Vue from 'vue'

// import VueRouter from 'vue-router'
import RouterFirst from './components/RouterFirst.vue'
import Validator from './components/Validator.vue'

// Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    'router-first': RouterFirst,
    'validator': Validator
  }
})

// new Vue({
//   el: '#example',
//   data: {
//     // message: 'Vue is great!'
//     // message: 'You loaded this page on ' + new Date()
//     seen: true,
//     todos: [
//       { text: 'Learn JavaScript' },
//       { text: 'Learn Vue' },
//       { text: 'Build something awesome' }
//     ],
//     message: 'hello Vue.js!',
//     groceryList: [
//       { text: 'Vegetables' },
//       { text: 'Cheese' },
//       { text: 'Whatever else humans are supposed to eat' }
//     ],
//     numbers: [ 1, 2, 3, 4, 5 ]
//   },
//   methods: {
//     reverseMessage: function () {
//       this.message = this.message.split('').reverse().join('')
//     }
//   },
//   created: function () {
//     // `this` 指向 vm 实例
//     console.log('a is: ' + this.message)
//   },
//   filters: {
//     capitalize: function (value) {
//       if (!value) return ''
//       value = value.toString()
//       return value.charAt(0).toUpperCase() + value.slice(1)
//     }
//   },
//   computed: {
//     // a computed getter
//     reversedMessage: function () {
//       // `this` points to the vm instance
//       return this.message.split('').reverse().join('')
//     },
//     evenNumbers: function () {
//       return this.numbers.filter(function (number) {
//         return number % 2 === 0
//       })
//     }
//   }
//   // template: '<App/>',
//   // components: { App }
// })

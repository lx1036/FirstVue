import Vue from 'vue'
// import App from './App'

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

/* eslint-disable no-new */
new Vue({
  el: '#app6',
  data: {
    // message: 'Vue is great!'
    // message: 'You loaded this page on ' + new Date()
    seen: true,
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ],
    message: 'hello Vue.js!',
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.message)
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
  // template: '<App/>',
  // components: { App }
})

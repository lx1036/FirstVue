<template>
  <div>
    <validation name="validation1">
      <div class="username">
        <label for="username">username:</label>
        <!-- validity component wrapped with it -->
        <validity field="username" :validators="['required']">
          <input id="username" type="text" @input="handleValidate">
        </validity>
      </div>
      <input type="submit" value="send"  v-if="valid">
      <div class="errors">
        <p class="username-invalid" v-if="usernameInvalid">Invalid yourname inputting !!</p>
      </div>
      <div class="debug">
        <p>validation result info</p>
        <pre>{{$validation}}</pre>
      </div>
    </validation>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    background-color:#ffff00;
  }
</style>

<script>
  import Vue from 'vue'
  import Validator from 'vue-validator'

  Vue.use(Validator)

  export default {
    name: 'validation1',
    data () {
      return {
        msg: 'hello vue'
      }
    },
    computed: Validator.mapValidation({
      valid: '$validation.validation1.valid',
      usernameInvalid: '$validation.validation1.username.invalid'
    }),
    methods: {
      handleValidate: function (e) {
        e.target.$validity.validate()
      }
    }
  }
</script>

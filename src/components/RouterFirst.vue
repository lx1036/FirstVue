<template>
  <div>
    <div>this is template body</div>
    <div>{{ msg }}</div>
  </div>
</template>

<style>
  body{
     background-color:#ffffff;
  }
</style>

<script>
  export default {
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>

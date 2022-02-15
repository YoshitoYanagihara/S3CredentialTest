<template>
  <div id="app">
    <button @click="onClick">実行</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    onClick () {
      alert("onClick");
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <button @click="onClick">実行</button>
  </div>
</template>

<script>
import conn from '@/modules/connection';

export default {
  name: 'App',
  methods: {
    async onClick () {
      try {
        const credential = await conn.post("https://vxet3hs2k7.execute-api.ap-northeast-3.amazonaws.com/credential");
        console.log(credential);
      } catch (err) {
        alert("Error");
        console.log(err);
      }
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

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
        const credential = await conn.post("https://credential.yanap-app.com/credential");
        console.log(credential);

        const content = await conn.get("https://contents.yanap-app.com/hoge/fuga/piyo.json");
        console.log(content);
        alert(content.data.message);
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

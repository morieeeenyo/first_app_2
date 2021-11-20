<template>
  <div id="app">
    <MemoList></MemoList>
  </div>
</template>

<script>
import MemoList from './components/MemoList'

export default {
  name: 'App',
  components: {
    MemoList,
  }
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

.test {
  color: red;
}
</style>

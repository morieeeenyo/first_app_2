<template>
  <!-- htmlやで -->
  <div id="app">
    <!-- 登録したコンポーネントはhtmlタグのように扱える -->
    <MemoList></MemoList>
  </div>
</template>

<script>
// javascriptです
import MemoList from './components/MemoList' // コンポーネントを呼び出す場合はscriptタグ内でimportする

export default {
  name: 'App',
  components: {
    MemoList, // コンポーネントを登録する
  }
}
</script>

<style>
/* cssはここ */
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

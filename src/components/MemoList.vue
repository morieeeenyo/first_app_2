<template>
  <div class="memo-list">
    <button id="modal_button">モーダルを開く</button>


  </div>
</template>

<script>
export default {
  name: 'MemoList',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#modal_button {
  padding: 5px 20px ;
  background-color: aqua;
  border: none;
  border-radius: 2px;
}

#modal_button:hover {
  cursor: pointer;
  border: 1px solid black;
}

</style>

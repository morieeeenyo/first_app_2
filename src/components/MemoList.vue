<template>
  <div class="memo-list">
    <button id="modal_button" v-on:click="show">モーダルを開く</button>
    <modal name="hello-world" :draggable="true" :resizable="true">
      <MemoForm @hide="this.hide"></MemoForm>
    </modal>
  </div>
</template>

<script>
import MemoForm from './MemoForm'

export default {
  name: 'MemoList',
  components: {
    MemoForm
  },
  methods: {
    show : function() {
      this.$modal.show('hello-world');
    },
    hide : function () {
      this.$modal.hide('hello-world');
    },
  }
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

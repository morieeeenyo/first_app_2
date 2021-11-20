<template>
  <div class="memo-list">
    <button id="modal_button" @click="show">モーダルを開く</button>
    <modal name="kurita" :draggable="true" :resizable="true">
      <MemoForm @hide="this.hide" :hoge='"test"'></MemoForm>
    </modal>
    <ul v-for="post in posts" :key="post.id" class="error-messages">
      <li>
        {{ post.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import MemoForm from './MemoForm'
import {postRequest} from '../requests/postRequest'

export default {
  name: 'MemoList',
  components: {
    MemoForm
  },
  data: function() {
    return {
      test: 'test',
      posts: []
    }
  },
  methods: {
    show : function() {
      this.$modal.show('kurita');
    },
    hide : function () {
      this.$modal.hide('kurita');
    },
  },
  mounted: async function () {
    try {
      const response = await postRequest('index')
      if (response.status === 200) {
        this.posts = response.data.data
      }
    } catch (e) {
      console.log(e.response)
      // this.errors = ['hoge', 'fuga']
    }
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

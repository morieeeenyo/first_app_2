<template>
  <div>
    <div class="modal-header">
      <h2>メモを投稿する</h2>
    </div>
    <div class="modal-body">
      <p>ほれ、フォームやぞ</p>
      <ul v-for="error in errors" :key="error" class="error-messages">
        <li>
          {{ error }}
        </li>
      </ul>
      <form @submit.prevent="handleSubmit" class="modal-form">
        <input type="text" name="content" id="content" v-model="post.content"  />
        <input type="button" value="送信" @click="handleSubmit" />
      </form>
      <button v-on:click="hide">閉じる</button>
    </div>
  </div>
</template>

<script>
import {postRequest} from '../requests/postRequest'

export default {
  data: function () {
    return {
      post: {
        content: '',
      },
      errors: []
    }
  },
  methods: {
    hide: function () {
      this.$emit("hide");
    },
    handleSubmit: async function () {
      try {
        const response = await postRequest('create', {
          content: this.post.content
        })
        if (response.status === 200) {
          this.$emit("hide");
        }
      } catch (e) {
        console.log(e.response)
        this.errors = e.response.data.errors
      }
    }
  },
  props: ['hoge']
};
</script>

<style>
.modal-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-messages {
  list-style: none;
  color: red;
  padding: 0;
}
</style>
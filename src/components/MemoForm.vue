<template>
  <div>
    <div class="modal-header">
      <h2>メモを投稿する</h2>
    </div>
    <div class="modal-body">
      <p>ほれ、フォームやぞ</p>
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
        content: ''
      }
    }
  },
  methods: {
    hide: function () {
      this.$emit("hide");
    },
    handleSubmit: async function (e) {
      e.preventDefault()
      const response = await postRequest('create', {
        content: this.post.content
      })
      if (response.status === 200) {
        this.$emit("hide");
      }
    }
  },
};
</script>

<style>
.modal-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
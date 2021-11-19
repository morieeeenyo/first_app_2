<template>
  <div>
    <div class="modal-header">
      <h2>メモを投稿する</h2>
    </div>
    <div class="modal-body">
      <p>ほれ、フォームやぞ</p>
      <form @submit="handleSubmit" class="modal-form">
        <input type="text" name="content" id="content" v-model="post.content"  />
        <input type="button" value="送信" @click="handleSubmit" />
      </form>
      <button v-on:click="hide">閉じる</button>
    </div>
  </div>
</template>

<script>
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
    handleSubmit: function (e) {
      e.preventDefault()
      console.log(this.post.content)
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
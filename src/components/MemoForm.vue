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
      <!-- submit.prevent→preventDefaultを自動で実行してくれる -->
      <form @submit.prevent="handleSubmit" class="modal-form">
        <!-- v-modelを使うとdataとinputタグの入力値をリンクさせられる -->
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
      this.$emit("hide"); // emitを使うと親コンポーネントで定義したイベントを呼び出せる
      // MemoList.vueの6行目
      // <MemoForm @hide="this.hide" @fetchPosts="this.fetchPosts"></MemoForm>
      // 上記の@hideで定義した関数が呼ばれる
    },
    handleSubmit: async function () {
      try {
        const response = await postRequest('create', { // posts_controllerのcreateにリクエスト
          content: this.post.content
        })
        if (response.status === 200) {
          this.$emit("fetchPosts"); // 親コンポーネントで定義したfetchPostsを呼ぶ。これで最新の一覧データを非同期で反映させられる
          this.$emit("hide");
        }
      } catch (e) {
        console.log(e.response)
        this.errors = e.response.data.errors // バリデーションエラーが出た場合はstateに格納してエラーメッセージを表示(8-12行目)
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

.error-messages {
  list-style: none;
  color: red;
  padding: 0;
}
</style>
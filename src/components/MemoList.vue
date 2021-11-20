<template>
  <div class="memo-list">
    <!-- @click→クリックしたときにイベント発火。show、はscriptタグに定義されたshow関数 -->
    <button id="modal_button" @click="show">モーダルを開く</button>
    <modal name="kurita">
      <MemoForm @hide="this.hide" @fetchPosts="this.fetchPosts"></MemoForm>
    </modal>
    <!-- v-forでループ処理を実現。hoge in hogesの形で、hogeが一つ一つの要素。erbにeach文書くのと同じ -->
    <!-- keyは何でもいいので設定する -->
    <ul v-for="post in posts" :key="post.id" class="error-messages">
      <li>
        <!-- 波括弧2つ使うと変数の値を画面上に表示できる -->
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
  // dataってところにstateが格納される。ReactでいうuseState的なやつ
  data: function() {
    return {
      posts: []
    }
  },
  methods: {
    show : function() {
      this.$modal.show('kurita'); // name属性がkurita、になっているモーダルを開く(5行目のやつ)
    },
    hide : function () {
      this.$modal.hide('kurita'); // name属性がkurita、になっているモーダルを閉じる(5行目のやつ)
    },
    fetchPosts: async function () {
        try {
        const response = await postRequest('index') // posts_controllerのindexアクションと通信
        if (response.status === 200) {
          this.posts = response.data.data // statusが200だったらstateにレスポンスを格納する
        }
      } catch (e) {
        console.log(e.response)
      }
    }
  },
  // コンポーネント読み込み時に関数を実行
  mounted: async function () {
    this.fetchPosts()
  }
}

</script>

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

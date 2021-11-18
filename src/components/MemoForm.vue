<template>
  <div>
    <div class="modal-header">
      <h2>Modal title</h2>
    </div>
    <div class="modal-body">
      <p>you're reading this text in a modal!</p>
      <button v-on:click="hide">閉じる</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hide: function () {
      this.$emit('hide')
    }
  }
}
</script>
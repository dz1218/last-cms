<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import loginPanel from './cpns/login-panel.vue'
export default {
  components: {
    loginPanel
  }
}
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-image: url('../../assets/img/login-bg.svg');
}
</style>

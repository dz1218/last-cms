<template>
  <div class="login-phone">
    <el-form label-width="60px" ref="formRef">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode">
        <div class="get-code">
          <el-input v-model="phone.code"></el-input>
          <el-button class="get-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    let phone = reactive({
      num: '',
      verifyCode: ''
    })
    const store = useStore()

    const loginAction = () => {
      store.dispatch('login/phoneLoginAction')
    }

    return {
      phone,
      loginAction
    }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;

  .get-btn {
    margin-left: 8px;
  }
}
</style>

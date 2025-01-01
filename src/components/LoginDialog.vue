<template>
  <div>
    <el-dialog v-model="dialogVisible" title="登录" width="500" :close-on-click-modal="false" :show-close="false">
      <el-form :model="loginForm" ref="loginForm" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" autocomplete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="handleLogin">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['loginSuccess'])
const dialogVisible = ref(true) // 初始值应为 false
const loginForm = ref({
  username: '',
  password: ''
})
const rules = ref({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
})

const handleLogin = () => {
  loginForm.value.validate((valid) => {
    if (valid) {

      if (loginForm.value.username === '58vip' && loginForm.value.password === '123456_58') {
        ElMessage('登录成功')
        dialogVisible.value = false
        emit('loginSuccess')
      } else {
        alert('用户名或密码错误')
      }
    } else {
      console.log('error submit!!')
      return false
    }
  })
}

const handleClose = (done) => {
  dialogVisible.value = false
}

</script>

<style scoped>
.dialog-footer {
  text-align: right;
}
</style>
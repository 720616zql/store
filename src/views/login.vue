<template>
<div class="login-wrap">
  <el-form
    class="login-form"
    label-position="top"
    label-width="80px"
    :model="forData">
    <h2>登录管理</h2>
    <el-form-item label="用户名">
    <el-input v-model="forData.username"></el-input>
     </el-form-item>
    <el-form-item label="密码">
    <el-input v-model="forData.password"></el-input>
    </el-form-item>
    <el-button @click="handleLogin" class="login-button" type="primary">登录</el-button>
</el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      forData: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    handleLogin() {
      this.$http
        .post('login', this.forData)
        .then((res) => {
          // 处理返回数据 res.data { data{ token }   meta {status, msg}}

          const data = res.data;
          const {meta: { status, msg }} = data;
          if (status === 200) {
            const token = data.data.taken;
            // 跳转
            this.$router.push({name: 'home'});
            // 记录token  setItem 记录

            sessionStorage.setItem('token', token);
            this.$message.success(msg);
          } else {
            this.$message.error(msg);
          }
        });
    }
  }
};
</script>

<style>
 .login-wrap {
   background-color: #324152;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .login-wrap .login-form {
   background-color: #fff;
   width: 400px;
   padding: 30px;
   border-radius: 5px;
 }
 .login-button {
   width: 100%;
 }
</style>

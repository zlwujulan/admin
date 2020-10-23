<template>
  <div class="login-container">
    <el-form
      class="login-form"
      autoComplete="on"
      :model="loginForm"
      :rules="loginRules"
      ref="loginForm"
      label-position="left"
    >
      <p>用户名</p>
      <el-form-item prop="username">
        <el-input
          class="textarea"
          name="username"
          type="text"
          v-model="loginForm.username"
          autoComplete="off"
          placeholder="123"
        />
      </el-form-item>
      <p>密码</p>
      <el-form-item prop="password">
        <el-input
          class="textarea"
          name="password"
          @keyup.enter.native="handleLogin"
          v-model="loginForm.password"
          autoComplete="off"
          placeholder="123"
        ></el-input>
        <span class="show-pwd"> </span>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          style="width: 100%"
          :loading="loading"
          @click.native.prevent="handleLogin"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("不能为空哦"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error("密码不能小于5位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePass },
        ],
      },
      loading: false,
    };
  },
  methods: {
    handleLogin() {
      sessionStorage.setItem("role", "111");
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style  scoped>
.textarea >>> .el-input__inner {
  font-size: 18px !important;
  color: #000000 !important;
  font-family: cursive !important;
  border: none !important;
}
.login-container .el-input {
  display: inline-block;
  height: 47px;
  width: 85%;
}
.login-container .el-input input {
  background: transparent;
  border: 0px;
  -webkit-appearance: none;
  border-radius: 0px;
  padding: 12px 5px 12px 15px;
  color: #555;
  height: 47px;
}
.login-container .el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 2555, 255, 1);
  border-radius: 5px;
  color: #454545;
}
.save-password {
  margin-bottom: 10px;
}
.login-logo {
  position: absolute;
  left: 0;
  right: 0;
  width: 460px;
  padding: 35px 35px 15px 35px;
  margin: 100px auto;
}
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background: url(/static/images/login_bg.png) no-repeat center center fixed;
  background-size: cover;
}
.login-form {
  position: absolute;
  left: 0;
  right: 0;
  width: 460px;
  padding: 35px 35px 15px 35px;
  margin: 200px auto;
  background-color: rgba(255, 2555, 255, 0.9);
  box-shadow: -7px 4px 20px 0px rgba(0, 1, 1, 0.26);
  opacity: 0.9;
  border-radius: 6px;
}
.tips {
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
}
</style>


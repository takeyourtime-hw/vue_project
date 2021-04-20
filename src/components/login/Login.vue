<!-- 登录组件 -->
<template>
  <div class="login_container">
    <!--头像区域-->
    <div class="login_box">
      <div class="avater_box">
        <img :src="url" alt="" />
      </div>
      <!--登录表单区-->
      <el-form
        ref="loginFormRef"
        :rules="loginFormRules"
        :model="loginForm"
        class="login_form"
        label-width="0px"
      >
        <!--用户名-->
        <el-form-item prop="phone">
          <el-input
            maxlength="11"
            v-model="loginForm.phone"
            prefix-icon="iconfont icon-yonghu"
          ></el-input>
        </el-form-item>
        <!--用户密码-->
        <el-form-item >
          <el-input
            maxlength="8"
            type="password"
            v-model="loginForm.password"
            prefix-icon="iconfont icon-password"
          ></el-input>
        </el-form-item>
        <!--按钮区域-->
        <el-form-item class="btns">
          <el-button @click="login" type="primary">登录</el-button>
          <el-button @click="resetLoginForm" type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: require("/static/login_logo.png"),
      loginForm: {
        //登录表单数据对象
        phone: "",
        dtype:'',
        key:'29fdb93954454ee01fc115f2a2677261',
        password: ""
      },
      //表单验证规则
      loginFormRules: {
        //验证用户名是否合法
        phone: [
          { required: true, message: "请输入登录账号", trigger: "blur" },
          { min: 3, max: 7, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        //验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          { min: 0, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //点击重置按钮，重置表单
    resetLoginForm() {
      //   console.log(this)
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      console.log(1);
      this.$refs.loginFormRef.validate(async valid => {
        //   console.log(valid)
        if (!valid) return;
        //从result对象中把请求的数据解构出来命名为res
        const { data: res } = await this.$http.post("get", this.loginForm);
        console.log(res);
        if (res.meta.status != 200) return this.$message.error("登录失败");
        this.$message.success("登录成功");
        window.sessionStorage.setItem("token".res.data.token);
        this.$router.push("/index");
      });
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
  z-index: -1;
}
.login_box {
  width: 450px;
  height: 300px;
  background: white;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #eee;
  .avater_box {
    width: 130px;
    height: 130px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    position: absolute;
    left: 50%;
    top: -50%;
    transform: translate(-50%, 50%);
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
}
</style>
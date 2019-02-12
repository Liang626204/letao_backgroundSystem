<template>
  <div class="login">
    <div class="box">
      <h1>后台管理系统</h1>
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm2.username" autocomplete="off"
          prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass"
          autocomplete="off"
          prefix-icon="iconfont icon-password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { login } from '@/api/index.js'
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        console.log(111111)
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '123456',
        username: 'root'
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        username: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      },
      obj: {}
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.obj.username = this.ruleForm2.username
          this.obj.password = this.ruleForm2.pass
          console.log(this.obj)
          login(this.obj)
            .then(res => {
              if (res.request.status === 200) {
                console.log(this.$route.query.url)
                location.href = this.$route.query.url
              }
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  background-image: url("../assets/bg.png");
  width: 100vw;
  height: 100vh;
  .box {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    width: 380px;
    height: 200px;
    background-color: #fff;
    border-radius: 10px;
    h1 {
      width: 600;
      font-size: 20px;
      text-align: center;
      margin-bottom: 20px;
    }
  }
}
</style>

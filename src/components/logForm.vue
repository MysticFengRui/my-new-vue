<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名:</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码:</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </span>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return{
      usernameModel : '',
      passwordModel : '',
      errorText : ''
    }
  },
  computed:{
    userErrors () {
      let errorText, status
      if(!/@/g.test(this.usernameModel)){
        status = false;
        errorText = '必须包含@'
      }else{
        status = true;
        errorText = '';
      }
      if(!this.errorflag){
        errorText = '';
        this.errorflag = true;
      }
      return{
        errorText,
        status
      }
    },
    passwordErrors () {
      let errorText, status
      if(!/^\w{1,6}$/g.test(this.passwordModel)){
        status = false;
        errorText = '密码必须小于6位'
      }else{
        status = true;
        errorText = '';
      }
      if(!this.passwordflag){
        errorText = '';
        this.passwordflag = true;
      }
      return{
        errorText,
        status
      }
    }
  },
  methods:{
    onLogin(){
      if(!this.userErrors.status || !this.passwordErrors.status){
        this.errorText = '验证未通过'
      }else{
        this.errorText = '';
        this.$http.post('/api/login')
          .then(function (res) {
            this.$emit('has-log',res.data)
          },function (err) {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style scoped>

</style>

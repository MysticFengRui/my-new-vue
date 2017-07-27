<template>
  <div>
    <div class="app-header">
      <div class="app-head-inner">
        <router-link :to="{path: '/' }">
          <img class="head-logo" src="../assets/logo2.png" alt="">
        </router-link>
        <div class="head-nav">
          <ul class="clearfix">
            <li>{{ username }}</li>
            <li v-if="username !== ''" class="nav-pile">|</li>
            <li v-if="username !== ''" @click="">退出</li>
            <li v-if="username === ''" @click="logClick">登录</li>
            <li v-if="username === ''" class="nav-pile">|</li>
            <li v-if="username === ''" @click="regClick">注册</li>
            <li class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      <p>2017 FengRui</p>
    </div>
    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>
    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <p>reg</p>
    </my-dialog>
    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>《英雄联盟》(简称LOL)是由美国拳头游戏(Riot Games)开发、中国大陆地区腾讯游戏代理运营的英雄对战MOBA竞技网游。
        游戏里拥有数百个个性英雄，并拥有排位系统、天赋系统、符文系统等特色养成系统。
        《英雄联盟》还致力于推动全球电子竞技的发展，除了联动各赛区发展职业联赛、打造电竞体系之外，每年还会举办“季中冠军赛”“全球总决赛”“All Star全明星赛”三大世界级赛事，获得了亿万玩家的喜爱，形成了自己独有的电子竞技文化。</p>
    </my-dialog>
  </div>
</template>

<script>

import Dialog from './dialog.vue'
import logForm from './logForm.vue'
export default {
  components:{
    myDialog:Dialog,
    logForm
  },
  data () {
    return{
      isShowLogDialog:false,
      isShowRegDialog:false,
      isShowAboutDialog:false,
      username : ''
    }
  },
  methods:{
    logClick(){
      this.isShowLogDialog=true
    },
    regClick(){
      this.isShowRegDialog=true
    },
    aboutClick(){
      this.isShowAboutDialog=true
    },
    closeDialog(attr){
      this[attr]=false
    },
    onSuccessLog (data){
      this.username = data.username;
      this.closeDialog('isShowLogDialog')
    }
  }
}
</script>

<style >
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
    box-sizing:border-box
}
img{max-width: 100%;}
a,a:hover,a:active,a:visited,a:link,a:focus,
input,input:hover,input:active,input:visited,input:link,input:focus,
select,select:hover,select:active,select:visited,select:link,select:focus{
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    outline:none;
    /*background: none;*/
    text-decoration: none;
    border: none;
}
a,button,input,optgroup,select,textarea {
    -webkit-tap-highlight-color:rgba(0,0,0,0);

}
*:focus{
    background: none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
}
body {
    background: #f8f8f8;
    color: #333;
    font-family: "Helvetica","Microsoft YaHei", "Arial", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
}
td, th, caption {
    font-size: 14px;
}
h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    font-size: 100%;
}
address, caption, cite, code, dfn, em, strong, th, var {
    font-style: normal;
    font-weight: normal;
}
a {
    color: #333;
    text-decoration: none;

}
a:hover {
    text-decoration: none!important;
    transition: all .3s linear;
    -moz-transition: all .3s linear; /* Firefox 4 */
    -webkit-transition: all .3s linear; /* Safari 和 Chrome */
    -o-transition: all .3s linear; /* Opera */
}

img {
    display: block;
    border: none;
    max-width: 100%;
}
ol, ul, li {
    list-style: none;
}
input, textarea, select, button {
    font-size: 14px;
    font-family: "Helvetica","Microsoft YaHei", "Arial", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
}
table {
    border-collapse: collapse;
}
html {
    overflow-y: scroll;
    font-size: 14px;
    background: #f7f7f7;
}
  body{
    background: #EEE8AB;
    /*background-size: cover;*/
  }
/* css common */
.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.clearfix {
    *zoom: 1;
}

.app-header {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 200px;
  height: 90px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.app-footer {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #363636;
  color: #fff;
  clear: both;
  margin-top: 30px;
}
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }
  .button {
    background: #33CC99;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    border-radius:3px;
  }
  .button:hover {
    background: #33CC66;
  }
  .g-form {

  }
  .g-form-line {
    padding: 15px 0;
  }
  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }
  .g-form-input {
    display: inline-block;
  }
  .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }
  .g-form-btn {
    padding-left: 100px;
  }
  .g-form-error {
    color: red;
    padding-left: 15px;
  }
</style>

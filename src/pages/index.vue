<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="product in productList">
          <h3>{{ product.title }}</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{ item.name }}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </template>


      </div>
      <div class="index-left-block lastest-news">
        <h2>英雄介绍</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="index-right">
      <slide-show :slides="slides" :inv="speed" @onchange="doSomeThingOnSlideChange"></slide-show>
      <div class="index-board-list">
        <div class="index-board-item" v-for="(item, index) in boardList" :class="[{ 'line-last' : index % 2 !== 0 },'index-board-'+ item.id ]">
          <div class="index-board-item-inner">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <a href="" class="button">立即购买</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  type="text/ecmascript-6">

  import  slideShow from '../components/slideShow.vue'
  export default {
    components:{
      slideShow
    },
    created:function () {
      this.$http.get('api/getNewsList')
        .then((res) => {
          this.newsList = res.data;
        },(err) => {
          console.log(err);
          })

    },
    methods:{
      doSomeThingOnSlideChange () {

      }
    },
    data (){
      return {
        speed:2000,
        slides:[
          {
            src:require('../assets/slideShow/pic1.jpg'),
            title:"无极剑圣斩星魔剑",
            href:"/detail/B/1"
          },
          {
            src:require('../assets/slideShow/pic2.jpg'),
            title:"庆LPL登顶亚洲",
            href:"/detail/B/2"
          },
          {
            src:require('../assets/slideShow/pic3.jpg'),
            title:"新英雄凯隐大揭秘",
            href:"/detail/B/3"
          },
          {
            src:require('../assets/slideShow/pic4.jpg'),
            title:"峡谷之巅正式赛季",
            href:"/detail/B/4"
          }
        ],
        boardList:[
          {
            title:'开放产品',
            description:'开发产品是一款产品',
            id:0,
            saleout:false
          },
          {
            title:'数据统计',
            description:'开发产品是一款产品',
            id:1,
            saleout:false
          },
          {
            title:'数据统计',
            description:'开发产品是一款产品',
            id:2,
            saleout:false
          },
          {
            title:'数据统计',
            description:'开发产品是一款产品',
            id:3,
            saleout:false
          },
        ],
        newsList: [],
        productList: {
          pc: {
            title: 'PC产品',
            list: [
              {
                name: '数据统计',
                url: 'http://starcraft.com'
              },
              {
                name: '数据预测',
                url: 'http://warcraft.com'
              },
              {
                name: '流浪分析',
                url: 'http://overwatch.com'
              },
              {
                name: '广告发布',
                url: 'http://hearstone.com'
              }
            ]
          },
          app: {
            title: '手机应用类',
            last: true,
            list: [
              {
                name: '91助手',
                url: 'http://weixin.com'
              },
              {
                name: '产品助手',
                url: 'http://twitter.com',
                hot: true
              },
              {
                name: '智能地图',
                url: 'http://maps.com'
              },
              {
                name: '团队语音',
                url: 'http://phone.com'
              }
            ]
          }
        }
      }
    }
  }
</script>

<style scoped>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }

  .index-right {
    float: left;
    width: 900px;
  }

  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    border-radius: 5px;
    overflow: hidden;
  }

  .index-left-block .hr {
    margin-bottom: 20px;
  }

  .index-left-block h2 {
    background: #7bbfea;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }

  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }

  .index-left-block ul {
    padding: 10px 15px;
  }

  .index-left-block li {
    padding: 5px;
  }

  .index-board-list {
    overflow: hidden;
  }

  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }

  .index-board-0 .index-board-item-inner {
    background: url(../assets/images/1.png) no-repeat;
  }

  .index-board-1 .index-board-item-inner {
    background: url(../assets/images/2.png) no-repeat;
  }

  .index-board-2 .index-board-item-inner {
    background: url(../assets/images/3.png) no-repeat;
  }

  .index-board-3 .index-board-item-inner {
    background: url(../assets/images/4.png) no-repeat;
  }

  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }

  .line-last {
    margin-right: 0;
  }

  .index-board-button {
    margin-top: 20px;
  }

  .lastest-news {
    min-height: 512px;
  }

  .hot-tag {
    background: red;
    color: #fff;
  }

  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .hot-tag {
    background: #f00;
    color: #fff;
  }

</style>

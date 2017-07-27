<template>
  <div class="counter-component">
    <div class="counter-btn" @click="minus"> - </div>
    <div class="counter-show">
      <input type="text" v-model="number" @keyup="fixNumber">
    </div>
    <div class="counter-btn" @click="add"> + </div>
  </div>
</template>

<script>


export default {
  props:{
    min:{
      type:Number,
      default:1
    },
    max: {
      type:Number,
      default:30
    }
  },
  data () {
    return{
      number:this.min
    }
  },
  watch:{
    number () {
      this.$emit('on-change',this.number)
    }
  },
  methods:{
    add (){
      if(this.number >= this.max){
        return
      }else{
        this.number++
      }
    },
    minus () {
      if(this.number <= this.min){
        return
      }else{
        this.number --
      }
    },
    fixNumber () {
      let fix
      if(typeof this.number === 'string' ){
        fix = Number(this.number.splice(/\d/g, ''))
      }else{
        fix = this.number
      }
      if(fix > this.max || fix < this.min){
        fix = this.min
      }
      this.number = fix;
    }
  }

}
</script>

<style scoped>
  .counter-component {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
  .counter-show {
    float: left;
  }
  .counter-show input {
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    width: 30px;
    outline: none;
    text-indent: 4px;
  }
  .counter-btn {
    border: 1px solid #e3e3e3;
    float: left;
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    cursor: pointer;
  }
  .counter-btn:hover {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>

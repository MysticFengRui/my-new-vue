<template>
  <div>
    <this-dialog :is-show="isShowCheckDialog" :on-close="checkStatus">
      请检查你的支付状态!
      <div class="button" @click="checkStatus">支付成功</div>
      <div class="button" @click="checkStatus">支付失败</div>
    </this-dialog>
    <this-dialog :is-show="isShowSuccessDialog" :on-close="hideStatusDialog('isShowSuccessDialog')">
      购买成功
    </this-dialog>
    <this-dialog :is-show="isShowFailDialog" :on-close="hideStatusDialog('isShowFailDialog')">
      购买失败
    </this-dialog>
  </div>
</template>

<script>

import Dialog from './dialog.vue'
export default {
  components:{
    thisDialog : Dialog
  },
  props:{
    isShowCheckDialog:{
      type:Boolean,
      default:false
    },
    orderId:{
      type:[String, Number]
    }
  },
  data () {
    return{
      isShowSuccessDialog:false,
      isShowFailDialog:false,
      Status:null
    }
  },
  methods:{
    checkStatus(){
      this.$http.post('/api/checkOrder',{
        orderId :this.orderId
      }).then(function (res) {
        this.status =res.data.status.Status;
        console.log(this.status)
        if(res.data.status === true){
          this.isShowSuccessDialog = true
          this.$emit('on-close-check-dialog')
        }
      },function (err) {
        this.isShowFailDialog = true
        this.$emit('on-close-check-dialog')
      })
    },
    hideStatusDialog(attr){
      this[attr] = false
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

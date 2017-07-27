<template>
  <div>
  	<!-- <div v-for="item in news">
  		<div>{{ item.title }}</div>
  		<div>{{ item.price }}</div>
  	</div> -->
  	<!-- <div v-if="$route.params.id == news.parent_id">{{ news.title }}</div> -->
  	<div class="box" >
  		<div v-for="item in news">
  			<div v-if="$route.params.id == item.parent_id">
	  			<div class="title">title: {{ item.title }}</div>
	  			<div class="content">content: {{ item.content }}</div>
	  			<ul>
		  			<li  v-for='pro in item.product'>
		  				<h1>{{ pro.name }}</h1>
	  					<p>{{ pro.price }}</p>
	  				</li>
	  			</ul>
	  		</div>
  		</div>
  	</div>
  </div>
</template>

<script  type="text/ecmascript-6">


  export default {
  	props:[
  		// 'products'
  	],
  	data () {
  		return{
  			news:[
  				{
  					parent_id:1,
  					id:1,
  					title:'001',
  					content:'001',
  					product:[
  						{
  							name:'产品1',
  							price:200
  						},
  						{
  							name:'产品2',
  							price:200
  						},
  						{
  							name:'产品3',
  							price:200
  						},
  						{
  							name:'产品4',
  							price:200
  						}
  					]
  				},
  				{
  					parent_id:2,
  					id:2,
  					title:'002',
  					content:'002'
  				},
  				{
  					parent_id:3,
  					id:3,
  					title:'003',
  					content:'003'
  				},
  				{
  					parent_id:4,
  					id:4,
  					title:'004',
  					content:'004'
  				},

  			]
  		}
  	},
  	methods:{
  		console () {
  			console.log(this.news.parent_id)
  		}
  	},
  	mounted () {
  		this.console();
  	}
  }
</script>

<style scoped>
	.box{background: #fff;height: 500px;padding: 50px;}
	.title{font-size: 24px;text-align: center;margin-bottom: 20px;}
	ul{overflow: hidden;}
	ul li{float: left;width: 25%;margin-top: 30px;text-align: center;}
</style>























<template>
  <div class="city_body">
				<div class="city_list">
					<div class="city_hot">
						<h2>热门城市</h2>
						<ul class="clearfix">
							<li v-for='item in hotlist' :key='item.id'>{{item.nm}}</li>
						</ul>
					</div>
					<div class="city_sort" ref="city_sort">
						<div v-for='item in cityData' :key='item.id'>
							<h2>{{item.index}}</h2>
							<ul>
								<li v-for='itemlist in item.list' :key='itemlist.id'>{{itemlist.nm}}</li>
							</ul>
						</div>
					</div>
				</div> 
				<div class="city_index">
					<ul>
						<li v-for='(item,index) in letterData' :key='index' @touchstart="handleToIndex(index)">{{item}}</li>
					</ul>
				</div>
	</div>
</template>
<script>
export default {
  name: "City",
  data(){
	  return {
		  cityData:[],
		  hotlist:[],
		  letterData:[]
	  }
  },
  mounted(){
	  this.$service.get('/dianying/cities.json').then(res=>{
		  console.log(res)
		   const objdata=res.data.cts
			this.cityData=this.toData(objdata)
		    this.hotlist=this.hotData(this.cityData)
		    this.letterData=this.letterArr(this.cityData)
	  })
  },
  methods:{
	  //城市数据分类获取
	  toData(objdata){
		   let cityList=[],
		       hotList=[]
		   for(let i=0;i<objdata.length;i++){ 
			//拿到首个字母并转换成大写
			 let fristLetter=objdata[i].py.substring(0,1).toUpperCase()
			 //判断该字母是否包含在cityList集合中
			 if(toCom(fristLetter)){
				 //以对应的格式添加到数组中
                 cityList.push({index:fristLetter,list:[{nm:objdata[i].nm,id:objdata[i].id}]})
			 }else{
				  //累加
				  for(let j=0;j<cityList.length;j++){
					  if(cityList[j].index===fristLetter){
						  cityList[j].list.push({nm:objdata[i].nm,id:objdata[i].id})
					  }
				  }
			 }
		   }
           //根据首字母判断返回真假
		   function toCom(letter){
                    for(let k=0;k<cityList.length;k++){
						if(cityList[k].index===letter) return false
						 }
						 return true
					 }
					 //进行排序操作
					// dataSort(cityList)
					function dataSort(cityList){
						let result=cityList.sort((a,b)=>{
							if(a.index>b.index){
								return 1
							}else if(a.index<b.index){
								return -1
							}else{
								return 0
							}
						})
						return result
					}
				return 	dataSort(cityList)
	  },
	
	  //热门城市数据获取
	  hotData(objdatas){
			 let data=[]
             for(let i=0;i<objdatas.length;i++){
				 for(let j=0;j<objdatas[i].list.length;j++){
					 if(objdatas[i].list[j].id>1&&objdatas[i].list[j].id<60){
						 data.push(objdatas[i].list[j])
					 }
				 }
			 }
			 return data
	  },
	  //对应字母数据获取
	  letterArr(letterDatas){
		     let result=[]
             letterDatas.forEach(item => {
				 result.push(item.index)
			 });
			 return result
	  },
	  //点击城市字母滚动到对应的位置功能实现
	  handleToIndex(index){
		 const h=this.$refs.city_sort.getElementsByTagName('h2')
		 this.$refs.city_sort.parentNode.scrollTop=h[index].offsetTop
	  }
  }

};
</script>
<style lang="scss" scoped>
  #content .city_body{
	  position: absolute;
	  top:95px;
	  bottom:50px;
	  left:0;
	  right:0;
	  width:100%;
	  overflow: auto;
	  display: flex;
	 
	  .city_list{
		 flex:1;
		 overflow: auto;
		  background-color: #FFF5F0;
		  .city_hot{
			  margin-top:20px;
			  h2{
				  padding-left:15px;
				  line-height:30px;
				  font-size:14px;
				  font-weight: normal;
				  background-color:#F0F0F0;
      
			  };
			  .clearfix{
				  display:flex;
				  width:100%;
				//   flex-direction: column;
				    justify-content:flex-start ;
				    flex-wrap: wrap;
				  li{
					  width:29%;
					  margin-top:15px;
					  margin-left:3%;
					  height:33px;
					  line-height: 33px;
					  text-align:center;
					  background-color: #fff;
					  border-radius:3px;
					  box-sizing: border-box;
					  border: 1px solid #e6e6e6;
					
				  }
			  }
		  }
		 .city_sort div{ 
			 margin-top: 20px;
			 h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;};
			  ul{
				  padding-left: 10px; margin-top: 10px;
				  li{
					   line-height: 30px;
				  }
			  } 
			  
			 }
	  }
	  .city_index{
		   width:20px; 
		   display: flex; 
		   flex-direction:column; 
		   justify-content:center; 
		   text-align: center; 
		   border-left:1px #e6e6e6 solid;
		   li{
			   height: 21px;
		   }
	  }
  }
</style>
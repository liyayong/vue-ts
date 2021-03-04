<template>
    <div class="container">
        <p>我是home子页面{{sendSon}}</p>
        <el-input v-model="sendFather" style="width:20%"></el-input>
        <el-button @click="chanName">改变名称</el-button>

        <!-- 子组件的 valueChange方法第一个参数和@Model的第一个参数保持一致 -->
         <input type="checkbox" :checked="checked" 
            @change="valueChange"
	    >
    </div>
</template>

<script lang='ts'>
import {Component,Vue,Prop, Emit, Watch, Model} from "vue-property-decorator";

@Component
export default class HomeChild extends Vue {
    mounted() {
     console.log('childmountedaaa')    
   }
   
   //接收父组件的v-model参数，并且关联上子组件的改变值，传给父组件
   @Model('changeval',{type:Boolean}) private checked!:boolean
   valueChange(e:any) {
       this.$emit('changeval',e.target.checked)
   }
   @Prop() sendSon!:String
   sendFather:String = '小红'
   //监听数据变化
   count:number = 1
   @Watch('count')
   getcount(val:any) {
       console.log(val,'val')
   }
   @Watch('sendSon')
   getsendSon(n:any,o:any) {
       console.log(n,'n')
       console.log(o,'o')
   }
   @Emit('changeName')
   chanName() {
       this.count+=1
       return this.sendFather
   }
   //通过$ref接受父组件传递过来的参数，子组件接受的方法必须是 public
   getRefParam(val:any) {
       console.log(val)
   }
}
</script>

<style lang="less" scoped>
</style>

<template>
  <div class="home">
    <el-container>
      <el-aside width="200px;">
         <LeftMenu></LeftMenu>
      </el-aside>
      <el-container>
        <el-header>
            <el-button @click="changeIsCol" style="background-color: #fff;padding: 10px">
              <i class="el-icon-menu"></i>
            </el-button>
        </el-header>
        <el-main>
          <!-- <router-view :key="new Date().getTime()"></router-view> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
//引入子组件
import HelloWorld from '@/components/HelloWorld.vue'
import LeftMenu from '@/components/leftMenu/index.vue'

import {Component,Prop,Vue,Watch} from 'vue-property-decorator'

//注册子组件
@Component({
  components:{
    HelloWorld,
    LeftMenu
  }
})

//定义变量和方法
export default class HomePage extends Vue{
   private isCollapse:boolean = this.$store.state.isCollapse
   private msg:string = 'hello word'
   private title:string = 'titles'

   public created() {
     console.log('created')
   }
   public mounted() {
     console.log('mounted')
   }
   


//start  计算属性获取 store中的值，watch监听，然后改变页面才会渲染
  private get stateSomeKey(){
    return this.$store.state.isCollapse
  }
  @Watch('stateSomeKey')
  getstateSomeKey(val:boolean){
    this.isCollapse = val
  }
  //end


   private send(){
     this.title = '传递的值'
   }
   private changeIsCol() {
     console.log(!this.isCollapse)
     this.$store.commit('changeIsCollapse',!this.isCollapse)
   }
}
</script>

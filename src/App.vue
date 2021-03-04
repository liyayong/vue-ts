<template>
  <div id="app">
     <el-container>
      <el-aside width="200px;">
         <LeftMenu></LeftMenu>
      </el-aside>
      <el-container>
        <el-header>
            <!-- <el-button @click="changeIsCol" style="background-color: #fff;padding: 10px">
              <i class="el-icon-menu"></i>
            </el-button> -->
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang='ts'>    

import HelloWorld from '@/components/HelloWorld.vue'
import LeftMenu from '@/components/leftMenu/index.vue'

import {Component,Prop,Vue,Watch} from 'vue-property-decorator'
 @Component({
    components:{
      HelloWorld,
      LeftMenu
    }
  })

export default class App extends Vue {
  //监听地址栏路由变化
  @Watch('$route')
  onRouteChange(to:any,from:any){
    console.log(to,'to')
    console.log(from,'from')
  }

private isCollapse:boolean = this.$store.state.isCollapse
  private changeIsCol() {
     this.$store.commit('changeIsCollapse',!this.isCollapse)
   }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

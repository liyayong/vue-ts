<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ title }}</h1>
    <el-button @click="emitBtn">子传父</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  //接受父组件传递的参数
  @Prop() private title!:string
  //接受父组件传递的参数
  @Prop({
    type:String,
    required:true,
    default:''
  }) private msg!:string

  private str:string = 'aaa'


//子组件向父组件传参，@Emit中要绑定一下回调方法名  @Emit('emitBtn')
  @Emit('emitBtn') private emitBtn() {
    // this.$router.push({
    //   path:'About'
    // })
    console.log(this.str,'111')
     return this.str 
  }
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

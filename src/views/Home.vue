
<template>
  <div class="container">
    <el-form label-position="left" label-width="80px" :model="formLabelAlign">
        <el-form-item label="名称">
            <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
            <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
    </el-form>
    <Child :sendSon='sendSon' @changeName="getNewName" ref="sonRef"></Child>
  </div>
</template>
<script lang='ts'>
import {Component,Vue, Watch} from 'vue-property-decorator'
import Child from './homeChild.vue'
@Component({
     components:{
      Child
    }
})


export default class Homes extends Vue{
    beforeCreate():void {
        console.log('beforeCreate')
    }
    created():void {
        console.log('created')
    }
    beforeMount() {
        console.log('beforeMount')
    }
    mounted():void {
        console.log('mounted')
    }
    //传参给子页面
    private formLabelAlign:any = {
        name:'小明',
        region:'',
        type:'区域活动'
    }
    oldNames = this.formLabelAlign['name']

    //接受子组件传递的参数   
     getNewName(val:String) {
         this.formLabelAlign['name'] = val
         this.oldNames = val
         console.log(this.$refs.sonRef,'ref')
         console.log(this.oldNames,'oldname')
        //  clearTimeout(this.ns)
     }
    //  private ns:number =  setInterval(() => {
    //      (this.$refs.sonRef as Child).getRefParam('小王')
    //  }, 1000)
    

    //父组件传参给子组件的时候，传递过去的值名称，必须和子组件接受的名称保持一致
     sendSon:String = this.formLabelAlign["name"]

    //监听子组件传递过来的值的变化，再次传递给子组件最新的值
    @Watch('oldNames',{deep:true})
    getoldNames(val:any) {
        console.log(val,'aaa')
        this.sendSon = val
    }
     

}
</script>

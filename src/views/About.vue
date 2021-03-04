
<template>
  <div class="container">
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" ></el-table-column>
        <el-table-column prop="name" label="姓名" ></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>
<script lang='ts'>
import {Component,Prop,Vue,Watch} from 'vue-property-decorator'
@Component
export default class About extends Vue{
   mounted() {
     console.log('mounted')
   }
    private tableData:Array<object> = [
      {date:'2021-03-02',name:'wang',address:'北京市'}
    ]
}
</script>

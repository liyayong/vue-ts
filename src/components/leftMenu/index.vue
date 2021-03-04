<template>
    <div>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" id="menu" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <el-menu-item v-for="item in listData" :key="item.path" :index="item.path">
                <i class="el-icon-location">{{item.meta.title}}</i>
                <span slot="title" :style="styless">{{item.meta.title}}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script lang='ts'>
import { Component,Vue, Watch} from 'vue-property-decorator'

@Component
export default class leftMenu extends Vue {
    private isCollapse:boolean = this.$store.state.isCollapse
    private styless = {
        opacity:0
    }
    //计算属性，和watch监听 取出store中的数据
    private get stateIsCollapse(){
        return this.$store.state.isCollapse
    }
    @Watch('stateIsCollapse')
    getstateIsCollapse(val:boolean) {
        this.isCollapse = val
        if(this.isCollapse){
            this.styless = {
                 opacity:1
            }
        }else{
            this.styless = {
                 opacity:0
            }
        }
    }

    created() {
        this.getData()
    }


    private handleOpen(key:any, keyPath:any) {
        console.log(key, keyPath);
    }
    private handleClose(key:any, keyPath:any) {
        console.log(key, keyPath);
    }
    private listData:Array<object> = []
    
    private getData() {
        let d = this.$store.state.dhData
        for(let i=0;i<d.length;i++){
            if(d[i].meta.isShow){
                d.splice(i,1)
                i--
            }
        }
        this.listData = d
    }
    
    

}
</script>

<style lang="scss" scoped>
#menu{
    // width: 200px;
    min-height: 400px;
    // border-right: none;
    background-color: #D3DCE6;
}
</style>

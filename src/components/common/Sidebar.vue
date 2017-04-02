<template>
    <div class="sidebar">
    <div class="mask"></div>
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-submenu  index="1">
                <template slot="title">
                    <i class="el-icon-date">{{nav[0]}}</i>
                </template>
                <el-menu-item v-for="(item,key) in car" :index="currentRoute['1'+key]" >{{item}}</el-menu-item>
            </el-submenu>
             <el-submenu  index="2">
                <template slot="title">
                    <i class="el-icon-date">{{nav[1]}}</i>
                </template>
                <el-menu-item v-for="(item,key) in product" :index="currentRoute['2'+key]">{{item}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
    
<script>
// 监听header组件发送过来的语言切换选项
    export default {
        created(){
            console.log(this);
        },
        data(){
            return {
                index:3,
                // index就是相应的路由，把currentRoute添加到对应的index上
                currentRoute:{
                        "10":"baojia",
                        "11":"zhipai",
                         "12":"liebiao",
                        "13":"anpai",
                         "14":"guanli",
                        "15":"shezhi",
                         "20":"faxing",
                         "21":"cpgl",
                         "22":"dbgl",
                         "23":"xmgl",
                         "24":"tggl",
                         "25":"xtsz",
                         "26":"dzb",
                         "27":"jdgl",
                         "28":"bjgl",
                         "29":"tjb",
                         "210":"xhjd",
                         "211":"gys"
                    }
            }
        },
        methods:{
          
        },
        computed:{
            onRoutes(){
            // console.log(this.$route.path);
                var a = this.$route.path.replace('/','');
                return a
            },
            nav(){
                return this.$t("nav")
            },
            car(){
                return this.$t("car")
            },
            product(){
                return this.$t("product");
            },
            asideNav(){
                return this.$t("asideNav");
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 220px;
        left: 0;
        top: 100px;
        bottom:0;
        overflow: auto;
        /*background: #2E363F;*/
        /*background-color: #324157;*/
    }
    .sidebar > ul {
        max-height: 3000px;
    }
    .sidebar .is-active {
        font-weight: 800;
    }
    .mask {
        width: 220px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background-color: #324157;
    }
</style>

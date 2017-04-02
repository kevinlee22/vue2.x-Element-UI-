<template>
    <div class="header">
        <div class="headerInfo">
            {{$t('welcome')}}
            <h5 class="rightr">请在租车订单报价栏目中查看功能</h5>
        </div>
       <div class="clearfix status">
            <div class="logoimg"></div>
        <div class="logo"> {{$t('title')}}</div>
        <div class="swtich">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item @click.native="switchZh" class="zh">中文</el-breadcrumb-item>
                <el-breadcrumb-item @click.native="switchEn" class="en">English</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
       </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'linxin',
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            getItems(){
                
            },
            switchZh(){
                // 把参数提交给store.js的 changeLanguage方法，让他触发默认配置的改变
               this.$store.commit('changeLanguage', 'zh');
            },
            switchEn(){
                 this.$store.commit('changeLanguage', 'en');
            },
          
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 100px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .rightr {
        float: right;
        padding-right: 100px;
        font-weight: bold;
        font-size: 22px;
        line-height: 30px;
        color: #13CE66;
    }
    .swtich {
        margin-right: 100px;
        float: right;
    }
    .swtich .en{
            color: #ff7d7e;
            font-size: 30px;
            line-height: 70px;
        }
        .swtich .zh{
            font-size: 30px;
            line-height: 70px;
        }
        .swtich el-breadcrumb__item.zh{
            cursor: pointer;
        }
        .swtich el-breadcrumb__item.en{
            cursor: pointer;
        }
        
    .status {
        padding-left: 30px;
    }
    .headerInfo {
        width: 100%;
        height: 30px;
        background-color: #475669;
        line-height: 30px;
        font-size: 15px;
        color: #99A9BF;
    }
    .header .logoimg{
        float: left;
        width: 70px;
        height: 70px;
        background-image: url(../../../static/img/logo.jpg);
        background-size: cover;
        border-radius: 34px;
    }
    .header .logo{
        padding-left: 30px;
        float: left;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>

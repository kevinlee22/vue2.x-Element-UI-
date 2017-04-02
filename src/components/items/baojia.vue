<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>{{other[3]}}</el-breadcrumb-item>
                <el-breadcrumb-item id="currentPos">{{other[4]}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
            <!-- <search></search> -->
            <div class="search">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
    <el-select v-model="formInline.region" :placeholder="other[0]">
      <el-option label="帕萨特" value="shanghai"></el-option>
      <el-option label="科鲁兹" value="beijing"></el-option>
    </el-select>
  <el-form-item>
    <el-input v-model="formInline.search" @keydown.enter="ensure" :placeholder="other[2]"></el-input>
  </el-form-item>
  </el-form-item><el-form-item>
    <el-button type="primary" @click="onSubmit">{{other[1]}}</el-button>
  </el-form-item>
</el-form>
    </div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" :label="tableNav[0]" width="150">
            </el-table-column>
            <el-table-column prop="time" :label="tableNav[1]" width="150">
            </el-table-column>
            <el-table-column prop="startTime" :label="tableNav[2]" width="160">
            </el-table-column>
            <el-table-column prop="endTime" :label="tableNav[3]" width="160">
            </el-table-column>
            <el-table-column :filters="[{ text: '紧凑车', value: '紧凑车' }, { text: 'SUV', value: 'SUV' }]"
      :filter-method="filterTag" prop="carType" :label="tableNav[4]" width="160">
            </el-table-column>
            
            <el-table-column prop="carCount" :label="tableNav[5]" width="130">
            </el-table-column>
            <el-table-column prop="travel" :label="tableNav[6]" width="150">
            </el-table-column>
            
            <el-table-column :label="tableNav[7]" width="180">
                <template scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>
    
<script>
    import search from '../items/form.vue';
    export default {
        components:{search},
        created(){
            var a = window.location.hash.replace('#/','');
            this.currentPosition = this.items[a]||'租车订单报价';
        },
        data() {
            return {
                currentPosition:'',
                formInline: {
          search: '',
          region: ''
        },
                tableData: [{
                    time: '2017-02-02',
                    id: 1,
                    startTime: '2017-02-02',
                    endTime: '2017-02-06',
                    carType: '紧凑车',
                    carCount: 3,
                    travel: '北京往返承德',
                }, 
                {
                    time: '2017-02-02',
                    id: 2,
                    startTime: '2017-02-02',
                    endTime: '2017-02-06',
                    carType: 'SUV',
                    carCount: 5,
                    travel: '西宁往返青海湖',
                }, 
                {
                    time: '2017-02-02',
                    id: 3,
                    startTime: '2017-02-02',
                    endTime: '2017-02-06',
                    carType: '两厢车',
                    carCount: 7,
                    travel: '南京往返婺源',
                }, 
                {
                    time: '2017-02-02',
                    id: 4,
                    startTime: '2017-02-02',
                    endTime: '2017-02-06',
                    carType: '轿跑',
                    carCount: 5,
                    travel: '丽江往返爽朗，再到玉龙雪山',
                }, ],
                 items:{
                        "baojia":"租车订单报价",
                        "zhipai":"租车订单指派",
                         "liebiao":"租车订单列表",
                        "anpai":"车辆司机安排",
                         "guanli":"租车产品管理",
                        "shezhi":"租车系统设置",
                         "faxing":"产品发行",
                         "cpgl":"产品管理",
                         "dbgl":"产品打包管理",
                         "xmgl":"增值项目管理",
                         "tggl":"动态通告管理",
                         "xtsz":"租车系统设置",
                         "dzb":"长隆产品对照表",
                         "jdgl":"速8供应商酒店管理",
                         "bjgl":"酒店报价管理",
                         "tjb":"库存统计表",
                         "xhjd":"星海酒店绑定",
                         "gys":"供应商产品接入"
                    }
            }
        },
        computed:{
            tableNav(){
                return this.$t("tableNav")
            },
            other(){
                return this.$t("other")
            }
        },
        methods: {
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.carType == value;
            },
            handleEdit(index, row) {
                this.$message('编辑第'+(index+1)+'行');
            },
            handleDelete(index, row) {
                this.$message.error('删除第'+(index+1)+'行');
                console.log(row)
                this.tableData.splice(index, 1);
            },

            onSubmit(){

            },

            ensure(){

            }
        }
    }
</script>
<style scoped>
   
</style>
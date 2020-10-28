<template>
 <div id="box">
   <div class="base">
     <!-- 事件名称与描述 -->    
     <div class="title">
        <div class="eventName">
            <p><span>{{ eventName }}</span></p>
        </div>

        <div class="eventInfo">
            <p><span>{{ eventInfo }}</span></p>
        </div>
     </div>

     <!-- 左侧栏 -->
     <div class="left_wrapper">
        <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
                <span>选项</span>               
            </div>
            <div class="item" >
                <p type="text" @click="itemClick('/copyLink')">邀请更多人</p>
                <p @click="itemClick('/choose')">增加回应</p>
                <p @click="itemClick('/create_edit')">编辑事件</p>
            </div>
        </el-card>
     </div>

     <!-- 左下侧栏 -->
     <div class="left_wrapper2">
       
        <el-card class="box-card2" shadow="hover">
            <div slot="header" class="clearfix">
                <span>回应列表</span>               
            </div>
            <!-- <el-tree
              :data="data"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[0, 1]"
              :default-checked-keys="[5]"
              :props="defaultProps">
            </el-tree> -->
            <el-scrollbar style="height: 100%">
            <div class="responseList">
              <div v-for="o in 3" :key="o" class="item2">
              {{'列表内容 ' + o }}
              </div>
            </div>
            </el-scrollbar>
            
        </el-card>
      
     </div>

     <!-- 右侧栏 -->
     <div class="right_wrapper">
        <el-dialog title="能参加的人" :visible.sync="dialogTableVisible1" append-to-body="true">
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogTableVisible1 = false">确 定</el-button>
          </span>
        </el-dialog>

        <el-dialog title="不能参加的人" :visible.sync="dialogTableVisible2" append-to-body="true">
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogTableVisible2 = false">确 定</el-button>
          </span>
        </el-dialog>

        <el-card class="box-card3" shadow="hover">
            <div slot="header" class="clearfix">
                <span>生成事件结果</span>               
            </div>
            <div class="nameAndInfo">
              <span>事件名称：</span><br>
              <span class="content">{{ eventName }}</span><br>
              <span>事件描述：</span><br>
              <span class="content">{{ eventInfo }}</span>
            </div>

            <div class="dateAndTime">
              <span>事件日期：</span><br>
              <span class="content">{{ eventDate }}</span><br>
              <span>事件时间：</span><br>
              <span class="content">{{ eventTime }}</span>
            </div>

            <div class="can">
              <span>能参加的人数：</span><br>
              <el-button type="text" @click="dialogTableVisible1 = true" class="content">{{ canDo }}</el-button><br>
              <span>不能参加的人数：</span><br>
              <el-button type="text" @click="dialogTableVisible2 = true" class="content">{{ canNotDo }}</el-button>
            </div>
            <el-button class="btnToFinal" @click="itemClick('/finalResult')">点击生成事件结果</el-button>
        </el-card>

        
     </div>

   </div>
 </div>
</template>
<script>

export default {
    name: 'ResultCheck',
    data(){
        return{
            eventName: "我的事件",
            eventInfo: "事件具体描述",
            eventDate: "2020-10-28",
            eventTime: "16:00",
            canDo: "0(0%)",
            canNotDo: "10(100%)",
            dialogTableVisible1: false,
            dialogTableVisible2: false,
            data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            
          }]
        }, ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
            
        }
    },
    mounted(){
     
    },
    methods: {
      //跳转
      itemClick(path) {
        this.$router.push(path);
      },
    }
}
</script>
<style lang="less">
#box{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    bottom: 0px;
    overflow: scroll;
}

.base{
  width: 1200px;
  height: 100%;
  position: relative;
  margin: 0 auto;
}

.title{
  position: absolute;
  top: 130px;
  left: 550px;
}

.eventName {
  position: absolute;
  width: 217px;
  height: 42px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 26px;
  letter-spacing: 6px;
  color: #333333;
}

.eventInfo {
  position: absolute;
  top: 50px;
  width: 217px;
  height: 42px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 600;
  font-style: normal;
  font-size: 18px;
  color: #333333;
}

.left_wrapper{
    position: absolute;
    top:220px;
    left: 40px;
}

.box-card {
  height: 160px;
  width: 200px;
}

.item p {
    width:250px;
    height: 30px;
    font-size: 13px;
    color: #409EFF;
    cursor: pointer;
}

/* .clearfix:before,
.clearfix:after {
   display: table;
   content: "";
}
.clearfix:after {
   clear: both
} */

.left_wrapper2{
    position: absolute;
    top:400px;
    left: 40px;
    
    
}

.box-card2 {
 /*  height: 280px; */
  width: 200px;
 
}

.el-scrollbar__bar{
  overflow: hidden;
}

.el-scrollbar__bar.is-horizontal {
    height: 0px;
   
}

.responseList{
  height: 280px;
  width: 200px;
  
  
}
/* ::-webkit-scrollbar
{
  width:0;
} */

/* .el-scrollbar__bar.is-vertical {
    width: 6px;
    top: 2px;
} */

.el-scrollbar__wrap {
   overflow-x: hidden;
}

/* .el-scrollbar__bar {
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 1;
    border-radius: 4px;
    opacity: 0;
    transition: opacity .12s ease-out;
} */

.right_wrapper{
    position: absolute;
    top: 220px;
    right: 40px;
}

.box-card3 {
  height: 460px;
  width: 200px;
}

.nameAndInfo{
  margin: auto;
  line-height: 20px;
  font-size: 13px;
}

.dateAndTime{
  margin: 20px auto;
  line-height: 20px;
  font-size: 13px;
}

.can{
  margin: auto;
  line-height: 20px;
  font-size: 13px;
}

.btnToFinal{
  margin: 20px auto;
  font-size: 13px;
}

.nameAndInfo .content, .dateAndTime .content, .can .content{
  font-size: 11px;
  margin: auto 5px;
}

.can .content{
  color: #409EFF;
}
 
</style>
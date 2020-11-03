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
 
            <el-scrollbar style="height: 100%">
             <div class="responseList">
               <div class="checkAll">
               <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">
                全选
               </el-checkbox>
               <i class="icon iconfont iconkejian" v-show="kjIsShow" @click="changeBtn"></i>
               <i class="icon iconfont iconbukejian" v-show="bkjIsShow" @click="changeBtn2"></i>
               <i class="icon iconfont iconyoujian"></i>
               <i class="icon iconfont iconshanchu"></i>
               <div class="line"></div>
               </div>
               
              <el-checkbox-group v-model="checkedOne" @change="handleCheckedChange">
                <el-checkbox
                  class="checkOne" 
                  v-for="(item,i) in responseList"
                  :key="i"
                  :label="item.name"
                 
                 >{{item.name}} 
                 </el-checkbox>
                
              </el-checkbox-group>
             </div>
             
            </el-scrollbar>
            
        </el-card>
      
     </div>

     <!-- 右侧栏 -->
     <div class="right_wrapper">
        <el-dialog title="能参加的人" :visible.sync="dialogTableVisible1" :append-to-body="true">
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogTableVisible1 = false">确 定</el-button>
          </span>
        </el-dialog>

        <el-dialog title="不能参加的人" :visible.sync="dialogTableVisible2" :append-to-body="true">
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

     <!-- 下侧留言栏 -->
     <div class="bottom_wrapper">
       <el-card class="box-card_bottom" shadow="hover">
         <div slot="header" class="clearfix">
                <span>他们的留言</span>
         </div>
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
            checkAll:false,
            isIndeterminate: true,
            
            responseList: [
              {
                id:'0',
                name: 'vv'
              },{
                id:'1',
                name: 'aa'
              },{
                id:'2',
                name: 'aa'
              },{
                id:'3',
                name: 'aa'
              },{
                id:'4',
                name: 'aa'
              },{
                id:'5',
                name: 'aa'
              },{
                id:'6',
                name: 'aa'
              },{
                id:'7',
                name: 'aa'
              },{
                id:'8',
                name: 'aa'
              }
            ],
        
            checkedOne:[],
            allElection: [], // 全选
            selectionArr: [], // 选中要传给后台的数据 对象
            
            kjIsShow: true,
            bkjIsShow: false
           
        }
    },
    mounted(){
      this.allElectionFun();
      this.DefaultFullSelection();
    },
    created() {
      
    },
    methods: {
      //跳转
      itemClick(path) {
        this.$router.push(path);
      },

      allElectionFun() { // 获取需要默认显示的数据
           this.allElection = [];
             for (var i = 0; i < this.responseList.length; i++) {
               this.allElection.push(this.responseList[i].name)
           }
      },

      DefaultFullSelection() {
        // 初始化 默认全部选中
        this.checkedOne = this.allElection;
        let checkedCount = this.checkedOne.length;
        this.checkAll = checkedCount === this.responseList.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.responseList.length;
        this.selectionFun(this.checkedOne);
      },

      selectionFun(selectionArr) { // 获取选中的对象
                this.selectionArr = [];
                for (var i = 0; i < this.responseList.length; i++) {
                  for (var j = 0; j < selectionArr.length; j++) {
                          if (selectionArr[j] === this.responseList[i].name) {
                            this.selectionArr.push(this.responseList[i])
                      }
                      }
                }
      },

      handleCheckAllChange(val) { // 全选
        this.allElectionFun();
         this.checkedOne = val ? this.allElection : [];
         this.isIndeterminate = false;
           // console.log(this.checkedCities);
              this.selectionFun(this.checkedOne);
             console.log(this.selectionArr)
      },

      handleCheckedChange(value) { // 选中
             let checkedCount = value.length;
             this.checkAll = checkedCount === this.responseList.length;
              this.isIndeterminate = checkedCount > 0 && checkedCount < 
              this.responseList.length;
               this.selectionFun(value);
             console.log(this.selectionArr)
      },

      changeBtn(){
            this.kjIsShow = !this.kjIsShow
            if(this.kjIsShow){
                this.kjIsShow = true;
                this.checkAll = true;
            }else{
                this.bkjIsShow = true;
                this.checkAll = false;
                this.checkedOne = false;
            }
      },

      changeBtn2(){
            this.bkjIsShow = !this.bkjIsShow
            if(this.bkjIsShow){
                this.kjIsShow = false;
                this.checkAll = false;
            }else{
                this.kjIsShow = true;
                this.checkAll = true;
                this.checkedOne = true;
            }
      },


    }
}
</script>
<style scoped>
#box{
    width: 100%;
    height: 100%;
    /* position: fixed; */
    top: 0px;
    bottom: 0px;
    /* overflow: scroll; */
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
  bottom: 0;
}

.el-scrollbar__bar.is-horizontal {
    height: 0px; 
}

.responseList{
  height: 280px;
  width: 200px;
}

.el-scrollbar__wrap {
   overflow-x: hidden;
}

.checkAll{
  width: 200px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e6e6e6;
}

.checkOne{
  width: 200px;
  margin-bottom: 10px;
}

.icon{
  position: absolute;
  left: 90px;
  cursor: pointer;
}

.iconyoujian{
  position: absolute;
  left: 115px;
  cursor: pointer;
}

.iconshanchu{
  position: absolute;
  left: 140px;
  cursor: pointer;
}

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

.bottom_wrapper{
  position: absolute;
  top: 700px;
  left: 340px;
}

.box-card_bottom{
  height: 200px;
  width: 500px;
}

</style>
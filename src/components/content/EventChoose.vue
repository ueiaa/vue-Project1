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

    <!-- tips -->
    <div class="tips">
        <div class="timeTips1"></div>
        <div class="timeTips1_text">
            <p>
                <span>发起者选择的时间</span>
            </p>
        </div>
        <div class="timeTips2"></div>
        <div class="timeTips2_text">
            <p>
                <span>其他参与者选择的时间</span>
            </p>
        </div>
        <div>
            <button class="btn_pb" @click="changeBtn" v-text="btnText"></button>
            <div class="test" v-show="isShow"></div>
            
        </div>
    </div>


    <!-- 日历区 -->
    <calendar-grid></calendar-grid>

    <!-- 填写信息区 -->
    <div class="info">
      <div class="info_title">
        <p>
          <span>填写您的信息以便发起人查看</span>
        </p>
      </div>

      <div class="info_content">
       <el-form ref="info_content" :model="info_content" :rules="info_content_rules">
        <el-form-item label="您的姓名" class="info_content_name"  prop="name">
          <el-input class="info_name_edit" v-model="info_content.name"></el-input>
        </el-form-item>

        <el-form-item label="备注" class="info_content_comment" prop="comment">
          <el-input class="info_comment_edit" type="textarea" v-model="info_content.comment"></el-input>
        </el-form-item>

        <el-checkbox class="info_content_public" v-model="checked">公开我的选择（勾选后，您的时间将会被其他参与者所查看）</el-checkbox>

        <el-form-item>
          <el-button class="btn_submit" type="primary" @click="itemClick('/cSuccess');info_content();" style="font-size:30px;">提交</el-button>
        </el-form-item>
      </el-form>
      </div>
    </div>
    </div>
  </div>  
</template>

<script>
import CalendarGrid from "./CalendarGrid"
export default {
  name: 'EventChoose',

    data() {
        return {
            eventName: "我的事件",
            eventInfo: "事件具体描述",
            isShow: true,
            btnText: "屏蔽其他参与者选择的时间",
            
            //表单数据绑定对象
            info_content: {
              name: "",
              comment: "",
            },
            checked: true,
            //表单规则验证对象
            info_content_rules: {
              name: [
                { required:true, message:'请输入您的姓名', trigger: 'blur'}
              ]
            }
        }

    },

    mounted () {
        /* this.$api{
           if(res.data.code === 200){
               this.eventName = res.data.eventName;
           } 
        } */
    },

    created () {
      
    },

    methods: {
        //跳转
        itemClick(path) {
          this.$router.push(path);
        },
       
        changeBtn(){
            this.isShow = !this.isShow
            if(this.isShow){
                this.btnText = "屏蔽其他参与者选择的时间";
            }else{
                this.btnText = "显示其他参与者选择的时间";
            }
        },
    }
};
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
  left: 200px;
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

.tips{
  position: absolute;
  top: 120px;
  left: 950px;
}

.timeTips1 {
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #BAE7FF;
}

.timeTips1_text {
  position: absolute;
  width: 144px;
  height: 22px;
  left: 25px;
  font-weight: 600;
  font-size: 14px;
  color: #333333;  
}

.timeTips2 {
  border-width: 0px;
  position: absolute;
  top: 20px;
  width: 15px;
  height: 15px;
  display: flex;
  background-color: #40A9FF;
}

.timeTips2_text {
  position: absolute;
  top: 20px;
  left: 25px;
  width: 180px;
  height: 22px;
  font-weight: 600;
  font-size: 14px;
  color: #333333;  
}

.btn_pb {
  position: absolute;
  top: 60px;
  width: 160px;
  height: 30px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  border-style: solid;
  border-width: 1px;
  background-color: #ffffff;
  border-radius: 5px;
}

.info{
  position: absolute;
  top: 500px;
  left: 450px;
}

.info_title {
    position: absolute;
    width: 350px;
    height: 34px;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 3px;
    text-align: center;
}

.info_content {
    border-width: 0px;
    position: absolute;
    top: 10px;
    left: -90px;
    width: 700px;
    height: 500px;
}

.info_content_name {
  position: absolute;
  top: 40px;
  width: 126px;
  height: 26px;
}

/* .info_content_name .el-form-item__label{
  font-size: 20px;
  top: 10px;
  left: 20px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 3px;
} */

.info_name_edit {
  position: absolute;
  left: 150px;
  top: 0px;
  width: 350px;
  height: 50px;
}

/* .info_name_edit .el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 30px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 480px;
} */

.el-form-item__error {
    color: #F56C6C;
    font-size: 13px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 55px;
    left: 200px;
    width: 150px;
}

.info_content_comment {
  position: absolute;
  
  top: 120px;
  width: 90px;
  height: 34px;
}

/* .info_content_comment .el-form-item__label{
  font-size: 20px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-style: normal;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 3px;
} */

.info_comment_edit {
  position: absolute;
  left: 150px;
  top: 0px;
  width: 350px;
  height: 100px;
}

/* .info_comment_edit .el-textarea__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 480px;
    height: 200px;
} */

.info_content_public {
  position: absolute;
  left: 105px;
  top: 230px;
  width: 400px;
  height: 60px;
  color: #333333;
}

.btn_submit {
  position: absolute;
  left: 150px;
  top: 300px;
  width: 250px;
  height: 50px;
  font-size: 22px;
  text-align: center;
}



</style>
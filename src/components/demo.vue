<template>
  <div>
    <div class="title_name">
      <p>
        <span>事件名称</span>
      </p>
    </div>

    <div class="info">
      <p>
        <span>事件描述</span>
      </p>
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
    <table class="grid">
      <tr class="weekday">
        <td class="day1">
          <div class="gridText">
            <span>星期一</span>
          </div>
        </td>

        <td class="day2">
          <div class="gridText">
              <span>星期二</span>
          </div> 
        </td>

        <td class="day3">
          <div class="gridText">
              <span>星期三</span>
          </div>  
        </td>

        <td class="day4">
          <div class="gridText">
              <span>星期四</span>
          </div>  
        </td>

        <td class="day5">
          <div class="gridText">
              <span>星期五</span>
          </div>
        </td>

        <td class="day6">
          <div class="gridText">
              <span>星期六</span>
          </div>
        </td>

        <td class="day7">
          <div class="gridText">
              <span>星期日</span>
          </div> 
        </td>

      </tr>

      <tr>
        <!-- 日期 -->
        <td class="days">
          <div @click="pick(day)" v-for="(day, index) in days" :key="index">
            <!--本月-->
            <span v-if="day.getMonth()+1 != currentMonth" class="other-month">{{ day.getDate() }}</span>
            <span v-else>
            <!--今天-->
            <span v-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()" class="active">{{ day.getDate() }}</span>
            <span v-else>{{ day.getDate() }}</span>
            </span>
          </div>
        </td>
      </tr>

      <tr>
        <td class="months">
          <div v-for="(day, index) in days" :key="index">
            <span>{{ currentMonth }}月</span>
          </div>
        </td>
      </tr>

      <tr class="time1" v-for="p in times">
        <td class="day1">
          <span class="gridText">{{ p.time1 }}</span>
        </td>
        <td class="day2">
          <span class="gridText">{{ p.time1 }}</span>
        </td>
        <td class="day3">
          <span class="gridText">{{ p.time1 }}</span>
        </td>
        <td class="day4">
          <span class="gridText">{{ p.time1 }}</span>
        </td>
        <td class="day5">
          <span class="gridText">{{ p.time1 }}</span>
        </td>
        <td class="day6">
          <span class="gridText">{{ p.time1 }}</span> 
        </td>
        <td class="day7">
          <span class="gridText">{{ p.time1 }}</span>
        </td>
      </tr>

      <tr class="time2" v-for="p in times">
        <td class="day1">
          <span class="gridText">{{ p.time2 }}</span>
        </td>
        <td class="day2">
          <span class="gridText">{{ p.time2 }}</span>
        </td>
        <td class="day3">
          <span class="gridText">{{ p.time2 }}</span>
        </td>
        <td class="day4">
          <span class="gridText">{{ p.time2 }}</span>
        </td>
        <td class="day5">
          <span class="gridText">{{ p.time2 }}</span>
        </td>
        <td class="day6">
          <span class="gridText">{{ p.time2 }}</span> 
        </td>
        <td class="day7">
          <span class="gridText">{{ p.time2 }}</span>
        </td>
      </tr>

      <tr class="time3" v-for="p in times">
        <td class="day1">
          <span class="gridText">{{ p.time3 }}</span>
        </td>
        <td class="day2">
          <span class="gridText">{{ p.time3 }}</span>
        </td>
        <td class="day3">
          <span class="gridText">{{ p.time3 }}</span>
        </td>
        <td class="day4">
          <span class="gridText">{{ p.time3 }}</span>
        </td>
        <td class="day5">
          <span class="gridText">{{ p.time3 }}</span>
        </td>
        <td class="day6">
          <span class="gridText">{{ p.time3 }}</span> 
        </td>
        <td class="day7">
          <span class="gridText">{{ p.time3 }}</span>
        </td>
      </tr>

      <tr class="time4" v-for="p in times">
        <td class="day1">
          <span class="gridText">{{ p.time4 }}</span>
        </td>
        <td class="day2">
          <span class="gridText">{{ p.time4 }}</span>
        </td>
        <td class="day3">
          <span class="gridText">{{ p.time4 }}</span>
        </td>
        <td class="day4">
          <span class="gridText">{{ p.time4 }}</span>
        </td>
        <td class="day5">
          <span class="gridText">{{ p.time4 }}</span>
        </td>
        <td class="day6">
          <span class="gridText">{{ p.time4 }}</span> 
        </td>
        <td class="day7">
          <span class="gridText">{{ p.time4 }}</span>
        </td>
      </tr>

      <tr class="time5" v-for="p in times">
        <td class="day1">
          <span class="gridText">{{ p.time5 }}</span>
        </td>
        <td class="day2">
          <span class="gridText">{{ p.time5 }}</span>
        </td>
        <td class="day3">
          <span class="gridText">{{ p.time5 }}</span>
        </td>
        <td class="day4">
          <span class="gridText">{{ p.time5 }}</span>
        </td>
        <td class="day5">
          <span class="gridText">{{ p.time5 }}</span>
        </td>
        <td class="day6">
          <span class="gridText">{{ p.time5 }}</span> 
        </td>
        <td class="day7">
          <span class="gridText">{{ p.time5 }}</span>
        </td>
      </tr>

      <tr class="time6" v-for="p in times">
        <td class="day1">
          <span class="gridText">{{ p.time6 }}</span>
        </td>
        <td class="day2">
          <span class="gridText">{{ p.time6 }}</span>
        </td>
        <td class="day3">
          <span class="gridText">{{ p.time6 }}</span>
        </td>
        <td class="day4">
          <span class="gridText">{{ p.time6 }}</span>
        </td>
        <td class="day5">
          <span class="gridText">{{ p.time6 }}</span>
        </td>
        <td class="day6">
          <span class="gridText">{{ p.time6 }}</span> 
        </td>
        <td class="day7">
          <span class="gridText">{{ p.time6 }}</span>
        </td>
      </tr>

      <tr class="time7" v-for="p in times">
        <td class="day1">
          <span class="gridText">{{ p.time7 }}</span>
        </td>
        <td class="day2">
          <span class="gridText">{{ p.time7 }}</span>
        </td>
        <td class="day3">
          <span class="gridText">{{ p.time7 }}</span>
        </td>
        <td class="day4">
          <span class="gridText">{{ p.time7 }}</span>
        </td>
        <td class="day5">
          <span class="gridText">{{ p.time7 }}</span>
        </td>
        <td class="day6">
          <span class="gridText">{{ p.time7 }}</span> 
        </td>
        <td class="day7">
          <span class="gridText">{{ p.time7 }}</span>
        </td>
      </tr>

      <tr class="time8" v-for="p in times">
        <td class="day1">
          <span class="gridText">{{ p.time8 }}</span>
        </td>
        <td class="day2">
          <span class="gridText">{{ p.time8 }}</span>
        </td>
        <td class="day3">
          <span class="gridText">{{ p.time8 }}</span>
        </td>
        <td class="day4">
          <span class="gridText">{{ p.time8 }}</span>
        </td>
        <td class="day5">
          <span class="gridText">{{ p.time8 }}</span>
        </td>
        <td class="day6">
          <span class="gridText">{{ p.time8 }}</span> 
        </td>
        <td class="day7">
          <span class="gridText">{{ p.time8 }}</span>
        </td>
      </tr>

      <tr class="time9" v-for="p in times">
        <td class="day1">
          <span class="gridText">{{ p.time9 }}</span>
        </td>
        <td class="day2">
          <span class="gridText">{{ p.time9 }}</span>
        </td>
        <td class="day3">
          <span class="gridText">{{ p.time9 }}</span>
        </td>
        <td class="day4">
          <span class="gridText">{{ p.time9 }}</span>
        </td>
        <td class="day5">
          <span class="gridText">{{ p.time9 }}</span>
        </td>
        <td class="day6">
          <span class="gridText">{{ p.time9 }}</span> 
        </td>
        <td class="day7">
          <span class="gridText">{{ p.time9 }}</span>
        </td>
      </tr>

      <tr class="time10" v-for="p in times">
        <td class="day1">
          <span class="gridText">{{ p.time10 }}</span>
        </td>
        <td class="day2">
          <span class="gridText">{{ p.time10 }}</span>
        </td>
        <td class="day3">
          <span class="gridText">{{ p.time10 }}</span>
        </td>
        <td class="day4">
          <span class="gridText">{{ p.time10 }}</span>
        </td>
        <td class="day5">
          <span class="gridText">{{ p.time10 }}</span>
        </td>
        <td class="day6">
          <span class="gridText">{{ p.time10 }}</span> 
        </td>
        <td class="day7">
          <span class="gridText">{{ p.time10 }}</span>
        </td>
      </tr>

      <tr class="time11" v-for="p in times">
        <td class="day1">
          <span class="gridText">{{ p.time11 }}</span>
        </td>
        <td class="day2">
          <span class="gridText">{{ p.time11 }}</span>
        </td>
        <td class="day3">
          <span class="gridText">{{ p.time11 }}</span>
        </td>
        <td class="day4">
          <span class="gridText">{{ p.time11 }}</span>
        </td>
        <td class="day5">
          <span class="gridText">{{ p.time11 }}</span>
        </td>
        <td class="day6">
          <span class="gridText">{{ p.time11 }}</span> 
        </td>
        <td class="day7">
          <span class="gridText">{{ p.time11 }}</span>
        </td>
      </tr>

      <tr class="time12" v-for="p in times">
        <td class="day1">
          <span class="gridText">{{ p.time12 }}</span>
        </td>
        <td class="day2">
          <span class="gridText">{{ p.time12 }}</span>
        </td>
        <td class="day3">
          <span class="gridText">{{ p.time12 }}</span>
        </td>
        <td class="day4">
          <span class="gridText">{{ p.time12 }}</span>
        </td>
        <td class="day5">
          <span class="gridText">{{ p.time12 }}</span>
        </td>
        <td class="day6">
          <span class="gridText">{{ p.time12 }}</span> 
        </td>
        <td class="day7">
          <span class="gridText">{{ p.time12 }}</span>
        </td>
      </tr>

      <tr class="time13" v-for="p in times">
        <td class="day1">
          <span class="gridText">{{ p.time13 }}</span>
        </td>
        <td class="day2">
          <span class="gridText">{{ p.time13 }}</span>
        </td>
        <td class="day3">
          <span class="gridText">{{ p.time13 }}</span>
        </td>
        <td class="day4">
          <span class="gridText">{{ p.time13 }}</span>
        </td>
        <td class="day5">
          <span class="gridText">{{ p.time13 }}</span>
        </td>
        <td class="day6">
          <span class="gridText">{{ p.time13 }}</span> 
        </td>
        <td class="day7">
          <span class="gridText">{{ p.time13 }}</span>
        </td>
      </tr>

      <tr class="time14" v-for="p in times">
        <td class="day1">
          <span class="gridText">{{ p.time14 }}</span>
        </td>
        <td class="day2">
          <span class="gridText">{{ p.time14 }}</span>
        </td>
        <td class="day3">
          <span class="gridText">{{ p.time14 }}</span>
        </td>
        <td class="day4">
          <span class="gridText">{{ p.time14 }}</span>
        </td>
        <td class="day5">
          <span class="gridText">{{ p.time14 }}</span>
        </td>
        <td class="day6">
          <span class="gridText">{{ p.time14 }}</span> 
        </td>
        <td class="day7">
          <span class="gridText">{{ p.time14 }}</span>
        </td>
      </tr>

      <tr class="time15" v-for="p in times">
        <td class="day1">
          <span class="gridText">{{ p.time15 }}</span>
        </td>
        <td class="day2">
          <span class="gridText">{{ p.time15 }}</span>
        </td>
        <td class="day3">
          <span class="gridText">{{ p.time15 }}</span>
        </td>
        <td class="day4">
          <span class="gridText">{{ p.time15 }}</span>
        </td>
        <td class="day5">
          <span class="gridText">{{ p.time15 }}</span>
        </td>
        <td class="day6">
          <span class="gridText">{{ p.time15 }}</span> 
        </td>
        <td class="day7">
          <span class="gridText">{{ p.time15 }}</span>
        </td>
      </tr>
    </table>

    <div class="info">
      <div class="info_title">
        <p>
          <span>填写您的信息以便发起人查看</span>
        </p>
      </div>

      <div class="info_content">
       <el-form ref="info_content_ref" :model="info_content" :rules="info_content_rules">
        <el-form-item label="您的姓名" class="info_content_name"  prop="name">
          <el-input class="info_name_edit" v-model="info_content.name"></el-input>
        </el-form-item>

        <el-form-item label="备注" class="info_content_comment" prop="comment">
          <el-input class="info_comment_edit" type="textarea" v-model="info_content.comment"></el-input>
        </el-form-item>

        <el-radio class="info_content_public" v-model="radio" label="1">公开我的选择（勾选后，您的时间将会被其他参与者所查看）</el-radio>

        <el-form-item>
          <el-button class="btn_submit" type="primary" @click="info_content_ref" style="font-size:30px;">提交</el-button>
        </el-form-item>
      </el-form>
      </div>
    </div>
    
  </div>  
</template>

<script>
export default {
  name: 'date',

    data() {
        return {
            isShow: true,
            btnText: "屏蔽其他参与者选择的时间",
            
            currentYear: 1970,
            currentWeek: 1,
            currentDay: 1,
            currentMonth: 1,
            days: [],
            times: [
              {time1:'6:00',time2:'7:00',time3:'8:00',time4:'9:00',
                time5:'10:00',time6:'11:00',time7:'12:00',time8:'13:00',
                time9:'14:00',time10:'15:00',time11:'16:00',time12:'17:00',
                time13:'18:00',time14:'19:00',time15:'20:00'},
            ],

            //表单数据绑定对象
            info_content: {
              name: "",
              comment: "",
            },
            radio: '0',
            //表单规则验证对象
            info_content_rules: {
              name: [
                { required:true, message:'请输入您的姓名', trigger: 'blur'}
              ]
            }
        }

    },

    mounted () {
  
    },

    created () {
      this.initData(null)
    },

    methods: {
       
        changeBtn(){
            this.isShow = !this.isShow
            if(this.isShow){
                this.btnText = "屏蔽其他参与者选择的时间";
            }else{
                this.btnText = "显示其他参与者选择的时间";
            }
        },

        formatDate (year, month, day) {
          const y = year
          let m = month
          if (m < 10) m = `0${m}`
            let d = day
          if (d < 10) d = `0${d}`
            return `${y}-${m}-${d}`
        },

        initData(cur){
          let date = '';
          if (cur) {
              date = new Date(cur)
            } else {
              date = new Date()
            }

          this.currentDate = date.getDate() //今天几号
          this.currentMonth = date.getMonth() + 1 //当前月份
          this.currentWeek = date.getDay() //星期几
          if(this.currentWeek ===0 ){
            this.currentWeek = 7
          }
          const str = this.formatDate(this.currentYear, this.currentMonth, this.currentDate)// 今日日期 年-月-日
            this.days.length = 0
            // 今天是周日，放在第一行第7个位置，前面6个 这里默认显示一周，如果需要显示一个月，则第二个循环为 i<= 35- this.currentWeek
            /* eslint-disabled */
          for (let i = this.currentWeek - 1; i >= 0; i -= 1) {
            const d = new Date(str)
            d.setDate(d.getDate() - i)
            // console.log(y:" + d.getDate())
            this.days.push(d)
          }
          for (let i = 1; i <= 7 - this.currentWeek; i += 1) {
            const d = new Date(str)
            d.setDate(d.getDate() + i)
            this.days.push(d)
          }
        },

          // 上个星期
        weekPre () {
          const d = this.days[0]  // 如果当期日期是7号或者小于7号
          d.setDate(d.getDate() - 7)
          this.initData(d)
        },

         // 下个星期
        weekNext () {
          const d = this.days[6]  // 如果当期日期是7号或者小于7号
          d.setDate(d.getDate() + 7)
          this.initData(d)
        },

        // 上一個月  传入当前年份和月份
        pickPre (year, month) {
          const d = new Date(this.formatDate(year, month, 1))
          d.setDate(0)
          this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
        },

        // 下一個月  传入当前年份和月份
        pickNext (year, month) {
          const d = new Date(this.formatDate(year, month, 1))
          d.setDate(35)
          this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
        },
    }
};
</script>

<style lang="less">
@import "../assets/css/reset.css";
.title_name {
  border-width: 0px;
  position: absolute;
  left: 592px;
  top: 130px;
  width: 217px;
  height: 42px;
  display: flex;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 35px;
  letter-spacing: 6px;
  color: #333333;
}

.info {
  border-width: 0px;
  position: absolute;
  left: 592px;
  top: 195px;
  width: 217px;
  height: 42px;
  display: flex;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 600;
  font-style: normal;
  font-size: 24px;
  color: #333333;
}

.timeTips1 {
  border-width: 0px;
  position: absolute;
  left: 1113px;
  top: 157px;
  width: 22px;
  height: 22px;
  display: flex;
  background-color: #BAE7FF;
}

.timeTips1_text {
  border-width: 0px;
  position: absolute;
  left: 1145px;
  top: 155px;
  width: 144px;
  height: 22px;
  display: flex;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 600;
  font-style: normal;
  font-size: 18px;
  color: #333333;  
}

.timeTips2 {
  border-width: 0px;
  position: absolute;
  left: 1113px;
  top: 198px;
  width: 22px;
  height: 22px;
  display: flex;
  background-color: #40A9FF;
}

.timeTips2_text {
  border-width: 0px;
  position: absolute;
  left: 1145px;
  top: 195px;
  width: 180px;
  height: 22px;
  display: flex;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 600;
  font-style: normal;
  font-size: 18px;
  color: #333333;  
}

.btn_pb {
  position: absolute;
  left: 1115px;
  top: 250px;
  width: 240px;
  height: 40px;
  text-align: center;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 500;
  font-style: normal;
  font-size: 17px;
  border-style: solid;
  border-width: 1px;
  background-color: #ffffff;
  border-radius: 5px;
  
}

.test {
  border-width: 0px;
  position: absolute;
  left: 1230px;
  top: 250px;
  width: 22px;
  height: 22px;
  display: flex;
  background-color: #40A9FF;
}

.weekday {
   border-width: 0px;
    position: absolute;
  left: 580px;
  top: 300px;
  .day1, .day2, .day3, .day4, .day5, .day6, .day7{
    border-width: 0px;
    position: absolute;
    width: 100px;
    height: 138px;
    display: flex;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
    letter-spacing: 1px;
  }
  .day2 {
    left: 110px;
  }

  .day3 {
    left: 220px;
  }

  .day4 {
    left: 330px;
  }

  .day5 {
    left: 440px;
  }

  .day6 {
    left: 550px;
  }

  .day7 {
    left: 660px;
  }
}

.time1 {
  left: 580px;
  top: 460px;
}

.time2 {
  left: 580px;
  top: 490px;
}

.time3 {
  left: 580px;
  top: 520px;
}

.time4 {
  left: 580px;
  top: 550px;
}

.time5 {
  left: 580px;
  top: 580px;
}

.time6 {
  left: 580px;
  top: 610px;
}

.time7 {
  left: 580px;
  top: 640px;
}

.time8 {
  left: 580px;
  top: 670px;
}

.time9 {
  left: 580px;
  top: 700px;
}

.time10 {
  left: 580px;
  top: 730px;
}

.time11 {
  left: 580px;
  top: 760px;
}

.time12 {
  left: 580px;
  top: 790px;
}

.time13 {
  left: 580px;
  top: 820px;
}

.time14 {
  left: 580px;
  top: 850px;
}

.time15 {
  left: 580px;
  top: 880px;
}

.time1, .time2, .time3, .time4, .time5, .time6, .time7, .time8, .time9, .time10,
.time11, .time12, .time13, .time14, .time15 {
    border-width: 0px;
    position: absolute;
    
  .day1, .day2, .day3, .day4, .day5, .day6, .day7{
    border-width: 0px;
    position: absolute;
    width: 100px;
    height: 28px;
    display: flex;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 500;
    font-style: normal;
    font-size: 15px;
    letter-spacing: 1px;
    
  }

  .day2 {
    left: 110px;
  }

  .day3 {
    left: 220px;
  }

  .day4 {
    left: 330px;
  }

  .day5 {
    left: 440px;
  }

  .day6 {
    left: 550px;
  }

  .day7 {
    left: 660px;
  }
}

.days {
  display: flex;
  position: absolute;
  left: 580px;
  top: 390px;
  div {
    flex: 1;
    font-size: 18px;
    width: 100px;
    height: 28px;
    text-align: center;
    font-weight: 600;
    margin: 0px 10px 0px 0px;
  } 
}

.months {
  display: flex;
  position: absolute;
  left: 580px;
  top: 420px;
  div {
    flex: 1;
    font-size: 18px;
    width: 100px;
    height: 28px;
    text-align: center;
    font-weight: 600;
    margin: 0px 10px 0px 0px;
  } 
}

.gridText {
  position: absolute;
    align-self: center;
    padding: 2px 2px 2px 2px;
    box-sizing: border-box;
    width: 100%;
    word-wrap: break-word;
    text-transform: none;
    text-align:center;
    vertical-align:middle; 
}

.info_title {
    border-width: 0px;
    position: absolute;
    left: 230px;
    top: 750px;
    width: 350px;
    height: 34px;
    display: flex;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
    font-size: 22px;
    letter-spacing: 3px;
    text-align: center;
}

.info_content {
    border-width: 0px;
    position: absolute;
    left: 30px;
    top: 800px;
    width: 725px;
    height: 662px;
}

.info_content_name {
  position: absolute;
  left: 23px;
  top: 47px;
  width: 126px;
  height: 26px;
}

.info_content_name .el-form-item__label{
  font-size: 20px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-style: normal;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 3px;
}

.info_name_edit {
  position: absolute;
  left: 150px;
  top: -40px;
  width: 480px;
  height: 73px;
}

.info_name_edit .el-input__inner {
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
}

.info_content_name .el-form-item__error {
    color: #F56C6C;
    font-size: 13px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 50px;
    left: 160px;
    width: 150px;
}

.info_content_comment {
  position: absolute;
  left: 40px;
  top: 170px;
  width: 90px;
  height: 34px;
}

.info_content_comment .el-form-item__label{
  font-size: 20px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-style: normal;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 3px;
}

.info_comment_edit {
  position: absolute;
  left: 135px;
  top: -40px;
  width: 480px;
  height: 100px;
}

.info_comment_edit .el-textarea__inner {
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
}

.info_content_public {
  position: absolute;
  left: 205px;
  top: 380px;
  width: 401px;
  height: 64px;
  color: #333333;
}

.btn_submit {
  position: absolute;
  left: 195px;
  top: 380px;
  width: 350px;
  height: 54px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-style: normal;
  font-size: 30px;
  text-align: center;
}
</style>
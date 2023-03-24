<template>
  <div>
    申请会议室
    <div class="gva-form-box">
      <el-form ref="elFormRef" :model="formData" :rules="rule" label-position="right" label-width="100px">
        <el-form-item label="申请部门:" prop="appunit">
          <el-input v-model="formData.appunit" :clearable="true" placeholder="请输入"/>
        </el-form-item>
        <el-form-item label="参会领导:" prop="appleader">
          <el-input v-model="formData.appleader" :clearable="true" placeholder="请输入"/>
        </el-form-item>
        <el-form-item label="使用时间:" prop="apptime">
          <el-date-picker
              v-model="formData.apptime"
              type="datetime"
              placeholder="选择日期"
              :clearable="true"
              format="YYYY-MM-DD A"
              @change="handleDateChange"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="会议室:" prop="approom" >
          <el-radio-group v-model.number="formData.approom" prop="approom">
            <el-radio
                v-for="trueroom in CanUseRoom"
                :key="trueroom"
                :label="trueroom"
            >{{ trueroom }}
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="参会人数:" prop="appamount">
          <el-input v-model.number="formData.appamount" :clearable="true" placeholder="请输入"/>
        </el-form-item>
        <el-form-item label="会议类型:" prop="apptype">
          <el-select v-model="formData.apptype" placeholder="选择会议类型">
            <el-option
                v-for="item in meetoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="是否需要设备:" prop="appdevice">
          <el-checkbox-group v-model="changebox" @change="Changebox">
            <el-checkbox
                v-for="item in deviceoptions"
                :key="item.value"
                :label="item.label"
            >
              {{ item.value }}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="备注:" prop="appremarks">
          <el-input v-model="formData.appremarks" :clearable="true" placeholder="请输入"/>
        </el-form-item>
<!--        <el-form-item label="审批状态:" prop="appstatus">
          <el-input v-model="formData.appstatus" :clearable="true" placeholder="请输入"/>
        </el-form-item>
        <el-form-item label="审批意见:" prop="appopinion">
          <el-input v-model="formData.appopinion" :clearable="true" placeholder="请输入"/>
        </el-form-item>
        <el-form-item label="其他:" prop="appother">
          <el-input v-model="formData.appother" :clearable="true" placeholder="请输入"/>
        </el-form-item>-->
        <el-form-item>
          <el-button size="small" type="primary" @click="save">提交</el-button>
          <el-button size="small" type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
      <appRoveFormList />
  </div>
</template>

<script>
export default {
  name: 'Approve',
}
</script>

<script setup>
import {
  createApprove,
  updateApprove,
  findApprove,
} from '@/api/appRove'

import appRoveFormList from '@/view/appRove/appRoveFormList.vue'

import { useUserStore } from '@/pinia/modules/user'
const userStore = useUserStore()
console.log(userStore.userInfo.userName)
//引入会议列表，查询某日期下是否有预约
import {
  createMeetcalendar,
  deleteMeetcalendar,
  deleteMeetcalendarByIds,
  updateMeetcalendar,
  findMeetcalendar,
  getMeetcalendarList,
} from "@/api/meetcalendar";

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage , ElMessageBox} from 'element-plus'
import { ref, reactive, watch, onMounted } from 'vue'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const type = ref('')
const formData = ref({
  appunit: '',
  appleader: '',
  approom: 0,
  appamount: 0,
  apptype: '',
  apptime: new Date(),
  appdevice: '',
  appremarks: '',
  appstatus: '未审批',
  appopinion: '',
  appother: userStore.userInfo.userName,
})
// 验证规则
const rule = reactive({
  appunit: [{
    required: true,
    message: '请输入正确的申请部门',
    trigger: ['input', 'blur'],
  }],
  approom: [{
    required: true,
    message: '请选择会议室',
    trigger: 'change',
  }],
})

const elFormRef = ref()
// 初始化方法
const init = async() => {
  // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
  if (route.query.id) {
    const res = await findApprove({ ID: route.query.id })
    if (res.code === 0) {
      formData.value = res.data.reapprove
      type.value = 'update'
    }
  } else {
    type.value = 'create'
  }
}

init()
// 保存按钮


//挑选日期时，用到的查询方法
import moment from 'moment'

const CanUseRoom = ref()
const handleDateChange = async (newtime) => {
  const utcnewTime = moment.utc(newtime).format();
  let timeArr = []
  timeArr.push(moment(newtime).startOf('day').format())
  timeArr.push(moment(newtime).hour(12).minute(0).second(0).format())
  timeArr.push(moment(newtime).endOf('day').format())
  //console.log(newtime,timeArr)
  const utcTimes = timeArr.map((time) => {
    return moment.utc(time).format();
  });
  console.log(utcTimes,utcnewTime)
  const i = utcnewTime < utcTimes[1]? 0:1 //判断上下午
  //使用会议日历页面的查询，根据条件限制，查询当前时间段正在使用的会议室，并提取为set
  const meet = await getMeetcalendarList({
    page:1,
    pagesize:100,
    startStime:utcTimes[i],
    endStime:utcTimes[i+1],
  });
  console.log(meet)
  const usingRooms = new Set(meet.data.list.map(item => item.mRoom));
  //查询可供申请的会议室，并提取为set
  const TrueRoom = await getBasicRoomSList({ page: 1, pageSize: 20,bstatus:true })
  const CanUseRoomList = TrueRoom.data.list.map(item => item.broom);
  //删除可申请会议室中的已用会议室
  CanUseRoom.value = new Set(CanUseRoomList.filter(item => !usingRooms.has(item)));
  console.log("可用会议室：",CanUseRoom.value)
}


import {
  createBasicRoomS,
  deleteBasicRoomS,
  deleteBasicRoomSByIds,
  updateBasicRoomS,
  findBasicRoomS,
  getBasicRoomSList,
} from '@/api/basicRoomF'

const save = async() => {
  elFormRef.value?.validate(async(valid) => {
    if (!valid) return
    let res
    switch (type.value) {
      case 'create':
        res = await createApprove(formData.value)
        break
      case 'update':
        res = await updateApprove(formData.value)
        break
      default:
        res = await createApprove(formData.value)
        break
    }
    if (res.code === 0) {
      axios
          .post('/wxapi', {
            msgtype: 'text',
            text: {
              content:
                  `会议室申请：

申请人/单位：${formData.value.appunit}
使用领导：${formData.value.appleader}
会议室号：${formData.value.approom}
使用时间：
${formData.value.apptime.toLocaleString('zh-CN', {year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'long', hour: 'numeric', minute: 'numeric'})}
会议人数：${formData.value.appamount}
会议类型：${formData.value.apptype}
需要设备：${formData.value.appdevice}
其他事项：${formData.value.appremarks}

请注意审批
http://112.253.22.66:22207/#/layout/approve/applyroom
`,
              mentioned_list: ['@all'],
            },
          })
          .then((res) => {
            console.log(res.data.errcode)
            if (res.data.errcode == 0) {
              ElMessage({
                type: 'success',
                message: '提交成功',
              })
            }
          })
    }
  })
}

// 返回按钮
const back = () => {
  router.go(-1)
}

const meetoptions = [
  {
    value: "本地会",
    label: "本地会",
  },
  {
    value: "视频会",
    label: "视频会",
  },
  {
    value: "借用",
    label: "借用",
  },
  {
    value: "其他",
    label: "其他",
  },
];

const deviceoptions = [
  {
    value: "无需",
    label: "无需",
  },
  {
    value: "话筒",
    label: "话筒",
  },
  {
    value: "大屏",
    label: "大屏",
  },
  {
    value: "激光笔",
    label: "激光笔",
  },
  {
    value: "翻页笔",
    label: "翻页笔",
  },
  {
    value: "其他",
    label: "其他",
  },
];

const changebox = ref([])
const Changebox = (value)=>{
  formData.value.appdevice = JSON.stringify(value).replace(/\[|\]|\"/g, '').replace(/,/g, ',')
}

</script>

<style>
</style>

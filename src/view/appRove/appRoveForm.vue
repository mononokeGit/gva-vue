<template>
  <div>
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
        <el-form-item label="会议室:" prop="approom">
          <el-radio-group v-model.number="formData.approom">
            <el-radio :label="1">会议室1</el-radio>
            <el-radio :label="2">会议室2</el-radio>
            <el-radio :label="3">会议室3</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="参会人数:" prop="appamount">
          <el-input v-model.number="formData.appamount" :clearable="true" placeholder="请输入"/>
        </el-form-item>
        <el-form-item label="会议类型:" prop="apptype">
          <el-input v-model="formData.apptype" :clearable="true" placeholder="请输入"/>
        </el-form-item>

        <el-form-item label="是否需要设备:" prop="appdevice">
          <el-input v-model="formData.appdevice" :clearable="true" placeholder="请输入"/>
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
          <el-button size="small" type="primary" @click="save">保存</el-button>
          <el-button size="small" type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
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
import { ElMessage } from 'element-plus'
import { ref, reactive, watch } from 'vue'
import axios from 'axios'
import { map } from 'core-js/internals/array-iteration'

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
  appstatus: '',
  appopinion: '',
  appother: '',
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
    message: '',
    trigger: ['input', 'blur'],
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
const handleDateChange = async (newtime) => {
  console.log(newtime)
  let meet = await getMeetcalendarList({
    page:1,
    pagesize:100,
    startMDate:'2023-03-01T00:00:00.000Z',
      endMDate:'2023-03-31T23:59:59.000Z',
  });
  console.log(meet)
  let map = new Map()
    for(let i=0;i<meet.data.list.length;i++){
    var mRoom = meet.data.list[i].mRoom
    if (!map.has(mRoom)){
      map.set(mRoom,meet.data.list[i]);
    }
  }
  var uniqueMRooms = new Set(map.keys());
  console.log(uniqueMRooms,map)
}

//挑选完日期后，展示出当前可用的会议室

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
申请人/单位：${formData.value.appunit}\n
使用领导：${formData.value.appleader}\n
使用时间：${formData.value.apptime}\n
会议人数：${formData.value.appamount}\n
会议类型：${formData.value.apptype}\n
需要设备：${formData.value.appdevice}\n
其他事项：${formData.value.appremarks}\n
请注意审批
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

</script>

<style>
</style>

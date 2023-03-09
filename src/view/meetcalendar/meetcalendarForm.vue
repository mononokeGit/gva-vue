<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="会议日期:" prop="mDate">
          <el-date-picker v-model="formData.mDate" type="date" placeholder="选择日期" :clearable="true"></el-date-picker>
        </el-form-item>
        <el-form-item label="会议室:" prop="mRoom">
          <el-input v-model.number="formData.mRoom" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="会议类型:" prop="mType">
          <el-input v-model="formData.mType" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="会议名称:" prop="title">
          <el-input v-model="formData.title" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="开始时间:" prop="stime">
          <el-date-picker v-model="formData.stime" type="date" placeholder="选择日期" :clearable="true"></el-date-picker>
        </el-form-item>
        <el-form-item label="会议时长:" prop="ptime">
          <el-input v-model.number="formData.ptime" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="上级领导:" prop="leader">
          <el-input v-model="formData.leader" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="我区参会领导:" prop="mleader">
          <el-input v-model="formData.mleader" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="参会人数:" prop="amount">
          <el-input v-model.number="formData.amount" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="会议等级:" prop="level">
          <el-input v-model="formData.level" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="责任单位:" prop="resposen">
          <el-input v-model="formData.resposen" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="会议线路:" prop="route">
          <el-input v-model="formData.route" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="备注:" prop="remark">
          <el-input v-model="formData.remark" :clearable="true" placeholder="请输入" />
        </el-form-item>
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
  name: 'Meetcalendar'
}
</script>

<script setup>
import {
  createMeetcalendar,
  updateMeetcalendar,
  findMeetcalendar
} from '@/api/meetcalendar'

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
const route = useRoute()
const router = useRouter()

const type = ref('')
const formData = ref({
            mDate: new Date(),
            mRoom: 0,
            mType: '',
            title: '',
            stime: new Date(),
            ptime: 0,
            leader: '',
            mleader: '',
            amount: 0,
            level: '',
            resposen: '',
            route: '',
            remark: '',
        })
// 验证规则
const rule = reactive({
})

const elFormRef = ref()

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findMeetcalendar({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data.remeetcalendar
        type.value = 'update'
      }
    } else {
      type.value = 'create'
    }
}

init()
// 保存按钮
const save = async() => {
      elFormRef.value?.validate( async (valid) => {
         if (!valid) return
            let res
           switch (type.value) {
             case 'create':
               res = await createMeetcalendar(formData.value)
               break
             case 'update':
               res = await updateMeetcalendar(formData.value)
               break
             default:
               res = await createMeetcalendar(formData.value)
               break
           }
           if (res.code === 0) {
             ElMessage({
               type: 'success',
               message: '创建/更改成功'
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

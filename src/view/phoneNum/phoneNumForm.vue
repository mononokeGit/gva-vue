<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-row>
          <el-form-item label="标识符:" prop="uid">
          <el-input v-model="formData.uid" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="备注:" prop="nOther">
          <el-input v-model="formData.nOther" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="预留字段:" prop="nBackup">
          <el-input v-model="formData.nBackup" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="号码:" prop="nNumber">
          <el-input v-model.number="formData.nNumber" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="分配的人或科室:" prop="nRes">
          <el-input v-model="formData.nRes" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="save">保存</el-button>
          <el-button size="small" type="primary" @click="back">返回</el-button>
        </el-form-item>

        </el-row>
        
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhoneNum'
}
</script>

<script setup>
import {
  createPhoneNum,
  updatePhoneNum,
  findPhoneNum
} from '@/api/phoneNum'

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
const route = useRoute()
const router = useRouter()

const type = ref('')
const formData = ref({
            uid: '',
            nOther: '',
            nBackup: '',
            nNumber: 0,
            nRes: '',
        })
// 验证规则
const rule = reactive({
})

const elFormRef = ref()

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findPhoneNum({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data.rephoneNum
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
               res = await createPhoneNum(formData.value)
               break
             case 'update':
               res = await updatePhoneNum(formData.value)
               break
             default:
               res = await createPhoneNum(formData.value)
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

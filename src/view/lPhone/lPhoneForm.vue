<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="创建者:" prop="createdBy">
          <el-input v-model.number="formData.createdBy" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="删除者:" prop="deletedBy">
          <el-input v-model.number="formData.deletedBy" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="IPhone字段:" prop="IPhone">
          <el-input v-model.number="formData.IPhone" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="领导姓名:" prop="lName">
          <el-input v-model="formData.lName" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="领导序号:" prop="lNum">
          <el-input v-model.number="formData.lNum" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="备注:" prop="lOther">
          <el-input v-model="formData.lOther" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="领导职务:" prop="lTitle">
          <el-input v-model="formData.lTitle" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="所属单位:" prop="lUnit">
          <el-input v-model="formData.lUnit" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="更新者:" prop="updatedBy">
          <el-input v-model.number="formData.updatedBy" :clearable="true" placeholder="请输入" />
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
  name: 'LPhone'
}
</script>

<script setup>
import {
  createLPhone,
  updateLPhone,
  findLPhone
} from '@/api/lPhone'

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
const route = useRoute()
const router = useRouter()

const type = ref('')
const formData = ref({
            createdBy: 0,
            deletedBy: 0,
            IPhone: 0,
            lName: '',
            lNum: 0,
            lOther: '',
            lTitle: '',
            lUnit: '',
            updatedBy: 0,
        })
// 验证规则
const rule = reactive({
})

const elFormRef = ref()

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findLPhone({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data.relPhone
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
               res = await createLPhone(formData.value)
               break
             case 'update':
               res = await updateLPhone(formData.value)
               break
             default:
               res = await createLPhone(formData.value)
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

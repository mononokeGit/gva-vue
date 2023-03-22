<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="会议室:" prop="broom">
          <el-input v-model.number="formData.broom" :clearable="false" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="可容纳人数:" prop="bamounts">
          <el-input v-model.number="formData.bamounts" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="会议室状态:" prop="bstatus">
          <el-switch v-model="formData.bstatus" active-color="#13ce66" inactive-color="#ff4949" active-text="是" inactive-text="否" clearable ></el-switch>
        </el-form-item>
        <el-form-item label="备注:" prop="bmarks">
          <el-input v-model="formData.bmarks" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="其他:" prop="bother">
          <el-input v-model="formData.bother" :clearable="true" placeholder="请输入" />
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
  name: 'BasicRoomS'
}
</script>

<script setup>
import {
  createBasicRoomS,
  updateBasicRoomS,
  findBasicRoomS
} from '@/api/basicRoomF'

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
const route = useRoute()
const router = useRouter()

const type = ref('')
const formData = ref({
            broom: 0,
            bamounts: 0,
            bstatus: false,
            bmarks: '',
            bother: '',
        })
// 验证规则
const rule = reactive({
               broom : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               bstatus : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
})

const elFormRef = ref()

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findBasicRoomS({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data.rebasicroom
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
               res = await createBasicRoomS(formData.value)
               break
             case 'update':
               res = await updateBasicRoomS(formData.value)
               break
             default:
               res = await createBasicRoomS(formData.value)
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

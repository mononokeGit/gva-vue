<template>
  <div>
    <div class="gva-search-box">
      <el-form :inline="true" :model="searchInfo" class="demo-form-inline" @keyup.enter="onSubmit">
        <!--      <el-form-item label="创建时间">
              <el-date-picker v-model="searchInfo.startCreatedAt" type="datetime" placeholder="开始时间"></el-date-picker>
               —
              <el-date-picker v-model="searchInfo.endCreatedAt" type="datetime" placeholder="结束时间"></el-date-picker>
              </el-form-item>-->
        <el-form-item label="会议室">

          <el-input v-model.number="searchInfo.broom" placeholder="搜索条件"/>

        </el-form-item>
        <el-form-item label="可容纳人数">

          <el-input v-model.number="searchInfo.startBamounts" placeholder="搜索条件（起）"/>
          —
          <el-input v-model.number="searchInfo.endBamounts" placeholder="搜索条件（止）"/>

        </el-form-item>
        <el-form-item label="是否可借" prop="bstatus">
          <el-select v-model="searchInfo.bstatus" clearable placeholder="请选择">
            <el-option
                key="true"
                label="是"
                value="true"
            >
            </el-option>
            <el-option
                key="false"
                label="否"
                value="false"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="searchInfo.bmarks" placeholder="搜索条件"/>

        </el-form-item>
<!--        <el-form-item label="其他">
          <el-input v-model="searchInfo.bother" placeholder="搜索条件"/>

        </el-form-item>-->
        <el-form-item>
          <el-button icon="search" size="small" type="primary" @click="onSubmit">查询</el-button>
          <el-button icon="refresh" size="small" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="gva-table-box">
      <div class="gva-btn-list">
        <el-button icon="plus" size="small" type="primary" @click="openDialog">新增</el-button>
        <el-popover v-model:visible="deleteVisible" placement="top" width="160">
          <p>确定要删除吗？</p>
          <div style="text-align: right; margin-top: 8px;">
            <el-button link size="small" type="primary" @click="deleteVisible = false">取消</el-button>
            <el-button size="small" type="primary" @click="onDelete">确定</el-button>
          </div>
          <template #reference>
            <el-button :disabled="!multipleSelection.length" icon="delete" size="small" style="margin-left: 10px;"
                       @click="deleteVisible = true"
            >删除
            </el-button>
          </template>
        </el-popover>
      </div>
      <el-table
          ref="multipleTable"
          :data="tableData"
          row-key="ID"
          style="width: 100%"
          tooltip-effect="dark"
          @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"/>
        <el-table-column align="left" label="日期" width="auto">
          <template #default="scope">{{ formatDate(scope.row.CreatedAt) }}</template>
        </el-table-column>
        <el-table-column align="left" label="会议室" prop="broom" width="120"/>
        <el-table-column align="left" label="可容纳人数" prop="bamounts" width="120"/>
        <el-table-column align="left" label="是否可借" prop="bstatus" width="120">
          <template #default="scope">{{ formatBoolean(scope.row.bstatus) }}</template>
        </el-table-column>
        <el-table-column align="left" label="备注" prop="bmarks" width="120"/>
<!--        <el-table-column align="left" label="其他" prop="bother" width="120"/>-->
        <el-table-column align="left" label="按钮组">
          <template #default="scope">
            <el-button class="table-button" icon="edit" link size="small" type="primary"
                       @click="updateBasicRoomSFunc(scope.row)"
            >变更
            </el-button>
            <el-button icon="delete" link size="small" type="primary" @click="deleteRow(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="gva-pagination">
        <el-pagination
            :current-page="page"
            :page-size="pageSize"
            :page-sizes="[10, 30, 50, 100]"
            :total="total"
            layout="total, sizes, prev, pager, next, jumper"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
        />
      </div>
    </div>
    <el-dialog v-model="dialogFormVisible" :before-close="closeDialog" title="弹窗操作">
      <el-form ref="elFormRef" :model="formData" :rules="rule" label-position="right" label-width="100px">
        <el-form-item label="会议室:" prop="broom">
          <el-input v-model.number="formData.broom" :clearable="false" placeholder="请输入"/>
        </el-form-item>
        <el-form-item label="可容纳人数:" prop="bamounts">
          <el-input v-model.number="formData.bamounts" :clearable="true" placeholder="请输入"/>
        </el-form-item>
        <el-form-item label="是否可借:" prop="bstatus">
          <el-switch v-model="formData.bstatus" active-color="#13ce66" active-text="是" clearable
                     inactive-color="#ff4949" inactive-text="否"
          ></el-switch>
        </el-form-item>
        <el-form-item label="备注:" prop="bmarks">
          <el-input v-model="formData.bmarks" :clearable="true" placeholder="请输入"/>
        </el-form-item>
        <el-form-item label="其他:" prop="bother">
          <el-input v-model="formData.bother" :clearable="true" placeholder="请输入"/>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button size="small" @click="closeDialog">取 消</el-button>
          <el-button size="small" type="primary" @click="enterDialog">确 定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'BasicRoomS',
}
</script>

<script setup>
import {
  createBasicRoomS,
  deleteBasicRoomS,
  deleteBasicRoomSByIds,
  updateBasicRoomS,
  findBasicRoomS,
  getBasicRoomSList,
} from '@/api/basicRoomF'

// 全量引入格式化工具 请按需保留
import { getDictFunc, formatDate, formatBoolean, filterDict } from '@/utils/format'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, reactive } from 'vue'

// 自动化生成的字典（可能为空）以及字段
const formData = ref({
  broom: 0,
  bamounts: 0,
  bstatus: false,
  bmarks: '',
  bother: '',
})

// 验证规则
const rule = reactive({
  broom: [{
    required: true,
    message: '',
    trigger: ['input', 'blur'],
  }],
  bstatus: [{
    required: true,
    message: '',
    trigger: ['input', 'blur'],
  }],
})

const elFormRef = ref()

// =========== 表格控制部分 ===========
const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const searchInfo = ref({})

// 重置
const onReset = () => {
  searchInfo.value = {}
  getTableData()
}

// 搜索
const onSubmit = () => {
  page.value = 1
  pageSize.value = 10
  if (searchInfo.value.bstatus === '') {
    searchInfo.value.bstatus = null
  }
  getTableData()
}

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

// 修改页面容量
const handleCurrentChange = (val) => {
  page.value = val
  getTableData()
}

// 查询
const getTableData = async() => {
  const table = await getBasicRoomSList({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
  if (table.code === 0) {
    tableData.value = table.data.list
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

getTableData()

// ============== 表格控制部分结束 ===============

// 获取需要的字典 可能为空 按需保留
const setOptions = async() => {
}

// 获取需要的字典 可能为空 按需保留
setOptions()

// 多选数据
const multipleSelection = ref([])
// 多选
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

// 删除行
const deleteRow = (row) => {
  ElMessageBox.confirm('确定要删除吗?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    deleteBasicRoomSFunc(row)
  })
}

// 批量删除控制标记
const deleteVisible = ref(false)

// 多选删除
const onDelete = async() => {
  const ids = []
  if (multipleSelection.value.length === 0) {
    ElMessage({
      type: 'warning',
      message: '请选择要删除的数据',
    })
    return
  }
  multipleSelection.value &&
  multipleSelection.value.map(item => {
    ids.push(item.ID)
  })
  const res = await deleteBasicRoomSByIds({ ids })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '删除成功',
    })
    if (tableData.value.length === ids.length && page.value > 1) {
      page.value--
    }
    deleteVisible.value = false
    getTableData()
  }
}

// 行为控制标记（弹窗内部需要增还是改）
const type = ref('')

// 更新行
const updateBasicRoomSFunc = async(row) => {
  const res = await findBasicRoomS({ ID: row.ID })
  type.value = 'update'
  if (res.code === 0) {
    formData.value = res.data.rebasicroom
    dialogFormVisible.value = true
  }
}

// 删除行
const deleteBasicRoomSFunc = async(row) => {
  const res = await deleteBasicRoomS({ ID: row.ID })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '删除成功',
    })
    if (tableData.value.length === 1 && page.value > 1) {
      page.value--
    }
    getTableData()
  }
}

// 弹窗控制标记
const dialogFormVisible = ref(false)

// 打开弹窗
const openDialog = () => {
  type.value = 'create'
  dialogFormVisible.value = true
}

// 关闭弹窗
const closeDialog = () => {
  dialogFormVisible.value = false
  formData.value = {
    broom: 0,
    bamounts: 0,
    bstatus: false,
    bmarks: '',
    bother: '',
  }
}
// 弹窗确定
const enterDialog = async() => {
  elFormRef.value?.validate(async(valid) => {
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
        message: '创建/更改成功',
      })
      closeDialog()
      getTableData()
    }
  })
}
</script>

<style>
</style>

<template>
    <div>
      <div>
        <el-form
          :inline="true"
          :model="searchInfo"
          class="demo-form-inline"
          @keyup.enter="onSubmit"
        >
          <!-- <el-form-item label="创建时间">
        <el-date-picker v-model="searchInfo.startCreatedAt" type="datetime" placeholder="开始时间"></el-date-picker>
         —
        <el-date-picker v-model="searchInfo.endCreatedAt" type="datetime" placeholder="结束时间"></el-date-picker>
        </el-form-item> --><!-- 
        <el-form-item label="领导序号">
               <el-input v-model.number="searchInfo.lNum" placeholder="搜索条件" />
          </el-form-item> -->
          <el-form-item label="领导姓名">
            <el-input v-model="searchInfo.lName" placeholder="搜索条件" />
          </el-form-item>
  
          <el-form-item label="所属单位">
            <el-input v-model="searchInfo.lUnit" placeholder="搜索条件" />
          </el-form-item>
  
          <el-form-item label="职务">
            <el-input v-model="searchInfo.lTitle" placeholder="搜索条件" />
          </el-form-item>
  
          <el-form-item label="电话号码">
            <el-input v-model.number="searchInfo.IPhone" placeholder="搜索条件" />
          </el-form-item>
  
          <el-form-item label="备注">
            <el-input v-model="searchInfo.lOther" placeholder="搜索条件" />
          </el-form-item>
  
          <el-form-item>
            <el-button size="small" type="primary" icon="search" @click="onSubmit"
              >查询</el-button
            >
            <el-button size="small" icon="refresh" @click="onReset"
              >重置</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div>
         <div class="gva-btn-list">
          <el-button size="small" type="primary" icon="plus" @click="openDialog"
            >新增</el-button
          >
          <el-popover v-model:visible="deleteVisible" placement="top" width="160">
            <p>确定要删除吗？</p>
            <div style="text-align: right; margin-top: 8px">
              <el-button
                size="small"
                type="primary"
                link
                @click="deleteVisible = false"
                >取消</el-button
              >
              <el-button size="small" type="primary" @click="onDelete"
                >确定</el-button
              >
            </div>
            <template #reference>
              <el-button
                icon="delete"
                size="small"
                style="margin-left: 10px"
                :disabled="!multipleSelection.length"
                @click="deleteVisible = true"
                >删除</el-button
              >
            </template>
          </el-popover>
        </div>
        <div>
        <el-table
          ref="multipleTable"
          style="width: 100%"
          tooltip-effect="dark"
          :data="tableData"
          row-key="ID"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column
            sortable
            align="left"
            label="序号"
            prop="lNum"
            width="120"
          />
          <el-table-column
            align="left"
            label="领导姓名"
            prop="lName"
            width="120"
          />
          <el-table-column align="left" label="职务" prop="lTitle" width="auto" 
            show-overflow-tooltip />
          <el-table-column
            align="left"
            label="所属单位"
            prop="lUnit"
            width="auto"
          />
          <!--         <el-table-column align="left" label="日期" width="180">
              <template #default="scope">{{ formatDate(scope.row.CreatedAt) }}</template>
          </el-table-column> -->
          <el-table-column align="left" label="号码" prop="IPhone" width="120" />
          <el-table-column align="left" label="备注" prop="lOther" width="auto" />
          <el-table-column align="left" label="操作" width="auto">
            <template #default="scope">
              <el-button
                type="primary"
                link
                icon="edit"
                size="small"
                class="table-button"
                @click="updateLPhoneFunc(scope.row)"
                >变更</el-button
              >
              <el-button
                type="primary"
                link
                icon="delete"
                size="small"
                @click="deleteRow(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
        <div class="gva-pagination">
          <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
            :current-page="page"
            :page-size="pageSize"
            :page-sizes="[5, 10, 15, 20, 30, 50, 100]"
            :total="total"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          />
        </div>
      </div>

      {{multipleSelection}}

      <el-dialog
        v-model="dialogFormVisible"
        :before-close="closeDialog"
        title="弹窗操作"
      >
        <el-form-item label="领导序号:" prop="lNum">
          <el-input
            v-model.number="formData.lNum"
            :clearable="true"
            placeholder="请输入"
          />
        </el-form-item>
        <el-form-item label="领导姓名:" prop="lName">
          <el-input
            v-model="formData.lName"
            :clearable="true"
            placeholder="请输入"
          />
        </el-form-item>
        <el-form-item label="领导职务:" prop="lTitle">
          <el-input
            v-model="formData.lTitle"
            :clearable="true"
            placeholder="请输入"
          />
        </el-form-item>
        <el-form-item label="所属单位:" prop="lUnit">
          <el-input
            v-model="formData.lUnit"
            :clearable="true"
            placeholder="请输入"
          />
        </el-form-item>
  
        <el-form
          :model="formData"
          label-position="right"
          ref="elFormRef"
          :rules="rule"
          label-width="80px"
        >
          <el-form-item label="号码:" prop="IPhone">
            <el-input
              v-model.number="formData.IPhone"
              :clearable="true"
              placeholder="请输入"
            />
          </el-form-item>
  
          <el-form-item label="备注:" prop="lOther">
            <el-input
              v-model="formData.lOther"
              :clearable="true"
              placeholder="请输入"
            />
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button size="small" type="primary" @click="enterDialog"
              >确 定</el-button
            >
            <el-button size="small" @click="closeDialog">取 消</el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </template>
  
  <script>
  export default {
    name: "leaderlist",
  };
  </script>
  
  <script setup>
  import {
    createLPhone,
    deleteLPhone,
    deleteLPhoneByIds,
    updateLPhone,
    findLPhone,
    getLPhoneList,
  } from "@/api/lPnum";

  
  // 全量引入格式化工具 请按需保留
  import {
    getDictFunc,
    formatDate,
    formatBoolean,
    filterDict,
  } from "@/utils/format";
  import { ElMessage, ElMessageBox } from "element-plus";
  import { ref, reactive } from "vue";
  
  // 自动化生成的字典（可能为空）以及字段
  const formData = ref({
    IPhone: 0,
    lName: "",
    lNum: 0,
    lOther: "",
    lTitle: "",
    lUnit: "",
  });
  
  // 验证规则
  const rule = reactive({});
  
  const elFormRef = ref();

  // =========== 表格控制部分 ===========
  const page = ref(1);
  const total = ref(0);
  const pageSize = ref(5);
  const tableData = ref([]);
  const searchInfo = ref({});
  // 排序
  /* const sortChange = ({ prop, order }) => {
    searchInfo.value.sort = prop;
    searchInfo.value.order = order;
    getTableData();
  };
   */
  // 重置
  const onReset = () => {
    searchInfo.value = {};
    getTableData();
  };
  
  // 搜索
  const onSubmit = () => {
    page.value = 1;
    pageSize.value = 10;
    getTableData();
  };
  
  // 分页
  const handleSizeChange = (val) => {
    pageSize.value = val;
    getTableData();
  };
  
  // 修改页面容量
  const handleCurrentChange = (val) => {
    page.value = val;
    getTableData();
  };
  
  // 查询
  const getTableData = async () => {
    const table = await getLPhoneList({
      page: page.value,
      pageSize: pageSize.value,
      ...searchInfo.value,
    });
    if (table.code === 0) {
      tableData.value = table.data.list;
      total.value = table.data.total;
      page.value = table.data.page;
      pageSize.value = table.data.pageSize;
    }
  };
  
  getTableData();
  
  // ============== 表格控制部分结束 ===============
  
  // 获取需要的字典 可能为空 按需保留
  const setOptions = async () => {};
  
  // 获取需要的字典 可能为空 按需保留
  setOptions();
  
  // 多选数据
  const multipleSelection = ref([]);
  // 多选
  const handleSelectionChange = (val) => {
    multipleSelection.value = val;
  };
  
  // 删除行
  const deleteRow = (row) => {
    ElMessageBox.confirm("确定要删除吗?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    }).then(() => {
      deleteLPhoneFunc(row);
    });
  };
  
  // 批量删除控制标记
  const deleteVisible = ref(false);
  
  // 多选删除
  const onDelete = async () => {
    const ids = [];
    if (multipleSelection.value.length === 0) {
      ElMessage({
        type: "warning",
        message: "请选择要删除的数据",
      });
      return;
    }
    multipleSelection.value &&
      multipleSelection.value.map((item) => {
        ids.push(item.ID);
      });
    const res = await deleteLPhoneByIds({ ids });
    if (res.code === 0) {
      ElMessage({
        type: "success",
        message: "删除成功",
      });
      if (tableData.value.length === ids.length && page.value > 1) {
        page.value--;
      }
      deleteVisible.value = false;
      getTableData();
    }
  };
  
  // 行为控制标记（弹窗内部需要增还是改）
  const type = ref("");
  
  // 更新行
  const updateLPhoneFunc = async (row) => {
    const res = await findLPhone({ ID: row.ID });
    type.value = "update";
    if (res.code === 0) {
      formData.value = res.data.relPhone;
      dialogFormVisible.value = true;
    }
  };
  
  // 删除行
  const deleteLPhoneFunc = async (row) => {
    const res = await deleteLPhone({ ID: row.ID });
    if (res.code === 0) {
      ElMessage({
        type: "success",
        message: "删除成功",
      });
      if (tableData.value.length === 1 && page.value > 1) {
        page.value--;
      }
      getTableData();
    }
  };
  
  // 弹窗控制标记
  const dialogFormVisible = ref(false);
  
  // 打开弹窗
  const openDialog = () => {
    type.value = "create";
    dialogFormVisible.value = true;
  };
  
  // 关闭弹窗
  const closeDialog = () => {
    dialogFormVisible.value = false;
    formData.value = {
      IPhone: 0,
      lName: "",
      lNum: 0,
      lOther: "",
      lTitle: "",
      lUnit: "",
    };
  };
  // 弹窗确定
  const enterDialog = async () => {
    elFormRef.value?.validate(async (valid) => {
      if (!valid) return;
      let res;
      switch (type.value) {
        case "create":
          res = await createLPhone(formData.value);
          break;
        case "update":
          res = await updateLPhone(formData.value);
          break;
        default:
          res = await createLPhone(formData.value);
          break;
      }
      if (res.code === 0) {
        ElMessage({
          type: "success",
          message: "创建/更改成功",
        });
        closeDialog();
        getTableData();
      }
    });
  };
  </script>
  
  <style>
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
    color: #fff;
    line-height: 36px;
  }
  .bg-purple {
    background: #d3adf7;
  }
  </style>
  
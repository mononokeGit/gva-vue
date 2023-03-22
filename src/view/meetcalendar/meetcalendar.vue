<template>
  <div>
    <!--         <div class="gva-search-box">

          <el-form
            :inline="true"
            :model="searchInfo"
            class="demo-form-inline"
            @keyup.enter="onSubmit"
          >
             <el-form-item label="创建时间">
      <el-date-picker v-model="searchInfo.startCreatedAt" type="datetime" placeholder="开始时间"></el-date-picker>
       —
      <el-date-picker v-model="searchInfo.endCreatedAt" type="datetime" placeholder="结束时间"></el-date-picker>
      </el-form-item>
            <el-form-item label="会议日期">
              <el-date-picker
                v-model="searchInfo.startMDate"
                type="datetime"
                placeholder="搜索条件（起）"
              ></el-date-picker>
              —
              <el-date-picker
                v-model="searchInfo.endMDate"
                type="datetime"
                placeholder="搜索条件（止）"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="会议室">
              <el-input
                v-model.number="searchInfo.mRoom"
                placeholder="搜索条件"
              />
            </el-form-item>
            <el-form-item label="会议类型">
              <el-input v-model="searchInfo.mType" placeholder="搜索条件" />
            </el-form-item>
            <el-form-item label="会议名称">
              <el-input v-model="searchInfo.title" placeholder="搜索条件" />
            </el-form-item>
            <el-form-item label="开始时间">
              <el-date-picker
                v-model="searchInfo.startStime"
                type="datetime"
                placeholder="搜索条件（起）"
              ></el-date-picker>
              —
              <el-date-picker
                v-model="searchInfo.endStime"
                type="datetime"
                placeholder="搜索条件（止）"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="会议时长">
              <el-input
                v-model.number="searchInfo.startPtime"
                placeholder="搜索条件（起）"
              />
              —
              <el-input
                v-model.number="searchInfo.endPtime"
                placeholder="搜索条件（止）"
              />
            </el-form-item>
            <el-form-item label="上级领导">
              <el-input v-model="searchInfo.leader" placeholder="搜索条件" />
            </el-form-item>
            <el-form-item label="我区参会领导">
              <el-input v-model="searchInfo.mleader" placeholder="搜索条件" />
            </el-form-item>
            <el-form-item label="参会人数">
              <el-input
                v-model.number="searchInfo.amount"
                placeholder="搜索条件"
              />
            </el-form-item>
            <el-form-item label="会议等级">
              <el-input v-model="searchInfo.level" placeholder="搜索条件" />
            </el-form-item>
            <el-form-item label="责任单位">
              <el-input v-model="searchInfo.resposen" placeholder="搜索条件" />
            </el-form-item>
            <el-form-item label="会议线路">
              <el-input v-model="searchInfo.route" placeholder="搜索条件" />
            </el-form-item>
            <el-form-item label="备注">
              <el-input v-model="searchInfo.remark" placeholder="搜索条件" />
            </el-form-item>
            <el-form-item>
              <el-button
                size="small"
                type="primary"
                icon="search"
                @click="onSubmit"
                >查询</el-button
              >
              <el-button size="small" icon="refresh" @click="onReset"
                >重置</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <div class="gva-table-box">
          <div class="gva-btn-list">
            <el-button
              size="small"
              type="primary"
              icon="plus"
              @click="openDialog"
              >新增</el-button
            >
            <el-popover
              v-model:visible="deleteVisible"
              placement="top"
              width="160"
            >
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
          <el-table
            ref="multipleTable"
            style="width: 100%"
            tooltip-effect="dark"
            :data="tableData"
            row-key="ID"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column align="left" label="日期" width="180">
              <template #default="scope">{{
                formatDate(scope.row.CreatedAt)
              }}</template>
            </el-table-column>
            <el-table-column align="left" label="会议日期" width="180">
              <template #default="scope">{{
                formatDate(scope.row.mDate)
              }}</template>
            </el-table-column>
            <el-table-column
              align="left"
              label="会议室"
              prop="mRoom"
              width="120"
            />
            <el-table-column
              align="left"
              label="会议类型"
              prop="mType"
              width="120"
            />
            <el-table-column
              align="left"
              label="会议名称"
              prop="title"
              width="120"
            />
            <el-table-column align="left" label="开始时间" width="180">
              <template #default="scope">{{
                formatDate(scope.row.stime)
              }}</template>
            </el-table-column>
            <el-table-column
              align="left"
              label="会议时长"
              prop="ptime"
              width="120"
            />
            <el-table-column
              align="left"
              label="上级领导"
              prop="leader"
              width="120"
            />
            <el-table-column
              align="left"
              label="我区参会领导"
              prop="mleader"
              width="120"
            />
            <el-table-column
              align="left"
              label="参会人数"
              prop="amount"
              width="120"
            />
            <el-table-column
              align="left"
              label="会议等级"
              prop="level"
              width="120"
            />
            <el-table-column
              align="left"
              label="责任单位"
              prop="resposen"
              width="120"
            />
            <el-table-column
              align="left"
              label="会议线路"
              prop="route"
              width="120"
            />
            <el-table-column
              align="left"
              label="备注"
              prop="remark"
              width="120"
            />
            <el-table-column align="left" label="按钮组">
              <template #default="scope">
                <el-button
                  type="primary"
                  link
                  icon="edit"
                  size="small"
                  class="table-button"
                  @click="updateMeetcalendarFunc(scope.row)"
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
          <div class="gva-pagination">
            <el-pagination
              layout="total, sizes, prev, pager, next, jumper"
              :current-page="page"
              :page-size="pageSize"
              :page-sizes="[10, 30, 50, 100]"
              :total="total"
              @current-change="handleCurrentChange"
              @size-change="handleSizeChange"
            />
          </div>
        </div> -->
    <div>
      <el-card class="box-card">
        <el-row>
          <el-col :span="6">
            <el-statistic title="本月会议总量" :value="352" />
          </el-col>
          <el-col :span="6">
            <el-statistic :value="138">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  视频会/接待会
                  <el-icon style="margin-left: 4px" :size="12">
                    <ChatLineRound />
                  </el-icon>
                </div>
              </template>
              <template #suffix>/100</template>
            </el-statistic>
          </el-col>
          <el-col :span="6">
            <el-statistic title="会议时长min" :value="172000" />
          </el-col>
          <el-col :span="6">
            <el-statistic title="还没想好" :value="562">
              <template #suffix>
                <el-icon style="vertical-align: -0.125em">
                  <ChatLineRound />
                </el-icon>
              </template>
            </el-statistic>
          </el-col>
        </el-row>
      </el-card>
      <el-card class="box-card">
        <el-button
          class="add-button"
          size="small"
          type="primary"
          icon="plus"
          @click="openDialog"
          >新增</el-button
        >
        <el-calendar v-model="dateMonth">
          <template #date-cell="{ data }">
            <p :class="data.isSelected ? 'is-selected' : ''">
              <el-row>
                <el-col :span="8">
                  {{ data.day.split("-").slice(1).join("-") }}</el-col
                >
                <el-col :span="8"> {{ data.isSelected ? "✔️" : "" }}</el-col>
              </el-row>
              <el-tag
                :type="tagcolors[item.mType]"
                v-for="(item, index) in filterByDay(data.day)"
                :key="index"
                closable
                @close="deleteRow(item)"
                @click="updateMeetcalendarFunc(item)"
              >
                {{ index + 1 }}--{{ item.mRoom }}--{{ item.title }}--{{ item.mType }}
              </el-tag>
            </p>
          </template>
        </el-calendar>
      </el-card>
    </div>

    <el-dialog
      v-model="dialogFormVisible"
      :before-close="closeDialog"
      title="弹窗操作"
      width="80%"
    >
    <el-row>
      <el-col :span="7">
      <el-form
        :model="formData"
        label-position="right"
        ref="elFormRef"
        :rules="rule"
        label-width="100px"
      >
        <el-form-item label="会议日期:" prop="mDate">
          <el-date-picker
            v-model="formData.mDate"
            type="date"
            style="width: 100%"
            placeholder="选择日期"
            :clearable="true"
          />
        </el-form-item>
        <el-form-item label="会议室:" prop="mRoom">
          <el-input
            v-model.number="formData.mRoom"
            :clearable="true"
            placeholder="请输入"
          />
        </el-form-item>
        <el-form-item label="会议类型:" prop="mType">
          <!-- <el-input
            v-model="formData.mType"
            :clearable="true"
            placeholder="请输入"
          /> -->
          <el-select v-model="formData.mType" class="m-2" placeholder="选择会议类型">
            <el-option
              v-for="item in meetoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item v-if="formData.mType==='视频会'" label="会议线路:" prop="route">
<!--           <el-input
            v-model="formData.route"
            :clearable="true"
            placeholder="请输入"
          /> -->
          <el-select v-model="formData.route"  class="m-2" placeholder="选择视频线路">
            <el-option
              v-for="item in routeoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="会议名称:" prop="title">
          <el-input
            v-model="formData.title"
            :clearable="true"
            placeholder="请输入"
          />
        </el-form-item>
        <el-form-item label="开始时间:" prop="stime">
          <el-date-picker
            v-model="formData.stime"
            type="datetime"
            style="width: 100%"
            placeholder="选择日期"
            :clearable="true"
          />
        </el-form-item>
        <el-form-item label="会议时长:" prop="ptime">
          <el-input
            v-model.number="formData.ptime"
            :clearable="true"
            placeholder="请输入"
          > <template #append>分钟</template></el-input>
        </el-form-item>
        <el-form-item  v-if="formData.mType !=='本地会'" label="上级领导:" prop="leader">
          <el-input
            v-model="formData.leader"
            :clearable="true"
            placeholder="请输入"
          />
        </el-form-item>
        <el-form-item label="我区参会领导:" prop="mleader">
          <el-input
            v-model="formData.mleader"
            :clearable="true"
            placeholder="请输入"
          />
        </el-form-item>
        <el-form-item label="参会人数:" prop="amount">
          <el-input
            v-model.number="formData.amount"
            :clearable="true"
            placeholder="请输入"
          />
        </el-form-item>
        <el-form-item label="会议等级:" prop="level">
          <el-input
            v-model="formData.level"
            :clearable="true"
            placeholder="请输入"
          />
        </el-form-item>
        <el-form-item label="责任单位:" prop="resposen">
          <el-input
            v-model="formData.resposen"
            :clearable="true"
            placeholder="请输入"
          />
        </el-form-item>
        <el-form-item label="备注:" prop="remark">
          <el-input
            v-model="formData.remark"
            :clearable="true"
            placeholder="请输入"
          />
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="16">
    <leaderlistVue />
    </el-col>
    </el-row>
      <template #footer>
        <div class="dialog-footer">
          <el-button size="small" @click="closeDialog">取 消</el-button>
          <el-button size="small" type="primary" @click="enterDialog"
            >确 定</el-button
          >
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Meetcalendar",
};
</script>

<script setup>
import {
  createMeetcalendar,
  deleteMeetcalendar,
  deleteMeetcalendarByIds,
  updateMeetcalendar,
  findMeetcalendar,
  getMeetcalendarList,
} from "@/api/meetcalendar";

// 全量引入格式化工具 请按需保留
import {
  getDictFunc,
  formatDate,
  formatBoolean,
  filterDict,
} from "@/utils/format";
import { ElMessage, ElMessageBox } from "element-plus";
import { ref, reactive, watch } from "vue";

import leaderlistVue from '../leader/leaderlist.vue';

// 自动化生成的字典（可能为空）以及字段
const formData = ref({
  mDate: new Date(),
  mRoom: 0,
  mType: "",
  title: "",
  stime: new Date(),
  ptime: 0,
  leader: "",
  mleader: "",
  amount: 0,
  level: "",
  resposen: "",
  route: "",
  remark: "",
});

// 验证规则
const rule = reactive({});

const elFormRef = ref([]);

// =========== 表格控制部分 ===========
const page = ref(1);
const total = ref(0);
const pageSize = ref(10);
const tableData = ref([]);
const searchInfo = ref({});

// 重置
const onReset = () => {
  searchInfo.value = {};
  getTableData();
};

// 搜索
const onSubmit = () => {
  page.value = 1;
  pageSize.value = 100;
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
  const table = await getMeetcalendarList({
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

//===============calendar控制部分===========
const range = ref(new Date())
const dateMonth = ref(new Date());
const todaylist = ref([]);

const getmonthlist = async () => {
  // 获取当前月份的第一天
  const firstDay = ref(
    new Date(dateMonth.value.getFullYear(), dateMonth.value.getMonth(), 1)
  );
  // 获取当前月份最后一天
  const lastDay = ref(
    new Date(
      dateMonth.value.getFullYear(),
      dateMonth.value.getMonth() + 1,
      0,
      23,
      59,
      59
    )
  );
  const daylistinfo = ref({}); //创建一个对象，用作查询参数

  //经过一些复杂的变换，具体是chatgpt帮我改的
  var offset = firstDay.value.getTimezoneOffset() * 60000;
  daylistinfo.value.startMDate = new Date(
    firstDay.value - offset -86400000
  ).toISOString();
  offset = lastDay.value.getTimezoneOffset() * 60000;
  daylistinfo.value.endMDate = new Date(lastDay.value - offset).toISOString();
  console.log(daylistinfo);

  const data = await getMeetcalendarList({
    page: 1, //后面如果需要在日历单元格内分页的话，可以用到
    pageSize: 100, //因为用不到分页，所以这里是目前每天事件的上限
    ...daylistinfo.value,
  });
  //console.log(data.data.list);
  //console.log(dateMonth.value);
  todaylist.value = data.data.list;
};

watch(dateMonth, getmonthlist, { immediate: true });

const filterByDay = (day) => {
  const date = new Date(day);
  const year = date.getFullYear();
  const month = date.getMonth();
  const dayOfMonth = date.getDate();
  console.log()

  return todaylist.value.filter((item) => {
    const itemDate = new Date(item.mDate);
    return (
      itemDate.getFullYear() === year &&
      itemDate.getMonth() === month &&
      itemDate.getDate() === dayOfMonth
    );
  });
};

/* const theday = async (data)=>{
  const date = new Date(data.day);//将当天时间转换为Date对象
  const nextDay = new Date(date);//复制一份
  nextDay.setDate(nextDay.getDate() + 1);//然后+1天，就获得了当天的时间区间
  //console.log([date.toISOString(), nextDay.toISOString()]);
  const daylistinfo = {};
  daylistinfo.startMDate = date.toISOString();
  daylistinfo.endMDate = nextDay.toISOString();
  const todaylist = await getMeetcalendarList({
    page: 1,//后面如果需要在日历单元格内分页的话，可以用到
    pageSize: 100,//因为用不到分页，所以这里是目前每天事件的上限
    ...daylistinfo,
  });
  console.log(todaylist.data.list);
  const today = todaylist.data.list;
  return today
} */

//===============弹窗内容控制部分=======
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
    value: "接待会",
    label: "接待会",
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

const routeoptions = [
  {
    value: "zytx",
    label: "zytx",
  },
  {
    value: "联通线路",
    label: "联通线路",
  },
  {
    value: "全省综合会议系统",
    label: "全省综合会议系统",
  },
  {
    value: "山东通",
    label: "山东通",
  },
  {
    value: "会商系统",
    label: "会商系统",
  },
  {
    value: "人社专线",
    label: "人社专线",
  },
  {
    value: "其他",
    label: "其他",
  },

];


//==============tag控制部分===============
const tagcolors = reactive({
  '本地会':'',
  '视频会':'danger',
  '接待会':'success',
  '借用':'warning',
  '其他':'info'
});

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
    deleteMeetcalendarFunc(row);
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
  const res = await deleteMeetcalendarByIds({ ids });
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
const updateMeetcalendarFunc = async (row) => {
  const res = await findMeetcalendar({ ID: row.ID });
  type.value = "update";
  if (res.code === 0) {
    formData.value = res.data.remeetcalendar;
    dialogFormVisible.value = true;
  }
};

// 删除行
const deleteMeetcalendarFunc = async (row) => {
  const res = await deleteMeetcalendar({ ID: row.ID });
  if (res.code === 0) {
    ElMessage({
      type: "success",
      message: "删除成功",
    });
    if (tableData.value.length === 1 && page.value > 1) {
      page.value--;
    }
    //getTableData();

    getmonthlist();
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
    mDate: new Date(),
    mRoom: 0,
    mType: "",
    title: "",
    stime: new Date(),
    ptime: 0,
    leader: "",
    mleader: "",
    amount: 0,
    level: "",
    resposen: "",
    route: "",
    remark: "",
  };
};
// 弹窗确定
const enterDialog = async () => {
  elFormRef.value?.validate(async (valid) => {
    if (!valid) return;
    let res;
    switch (type.value) {
      case "create":
        res = await createMeetcalendar(formData.value);
        break;
      case "update":
        res = await updateMeetcalendar(formData.value);
        break;
      default:
        res = await createMeetcalendar(formData.value);
        break;
    }
    if (res.code === 0) {
      ElMessage({
        type: "success",
        message: "创建/更改成功",
      });
      closeDialog();
      //getTableData();
      getmonthlist();
    }
  });
};
</script>

<style>
.is-selected {
  color: #1989fa;
}
.el-calendar-table .el-calendar-day {
  min-height: 100px;
  height: auto;
}
.box-card {
  padding: 10px 20px;
  margin-bottom: 10px;
}
.el-tag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3px;
}
.add-button {
  margin-left: 20px;
}
</style>

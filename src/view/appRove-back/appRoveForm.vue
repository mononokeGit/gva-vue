<template>
  <div>
    <div class="gva-form-box">
      <el-form
        :model="formData"
        ref="elFormRef"
        label-position="right"
        :rules="rule"
        label-width="auto"
      >
        <el-form-item label="申请:" prop="appunit">
          <el-input
            v-model="formData.appunit"
            :clearable="true"
            placeholder="请输入申请部门或申请人"
          />
        </el-form-item>
        <el-form-item label="参会领导:" prop="appleader">
          <el-input
            v-model="formData.appleader"
            :clearable="true"
            placeholder="请输入"
          />
        </el-form-item>
        <el-form-item label="参会人数:" prop="appamount">
          <el-input
            v-model.number="formData.appamount"
            :clearable="true"
            placeholder="请输入"
          />
        </el-form-item>
        <el-row>
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
          <el-form-item label="使用时间:" prop="apptime">
            <el-date-picker
              v-model="formData.apptime"
              type="datetime"
              placeholder="选择日期"
              :clearable="true"
              format="YYYY-MM-DD A"
            ></el-date-picker>
          </el-form-item>

          <el-form-item label="需要设备:" prop="appdevice">
            <el-select v-model="formData.appdevice" placeholder="选择设备">
              <el-option
                v-for="item in deviceoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-row>
        <el-form-item label="备注:" prop="appres1">
          <el-input
            v-model="formData.appres1"
            :clearable="true"
            placeholder="请输入"
          />
        </el-form-item>
        <!-- <el-form-item label="备用字段2:" prop="appres2">
          <el-input v-model="formData.appres2" :clearable="true" placeholder="请输入" />
        </el-form-item> -->
        <el-form-item style="display: flex; justify-content: center">
          <el-button size="small" type="primary" @click="save">提交123123</el-button>
          <el-button size="small" type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Approve",
};
</script>

<script setup>
import { createApprove, updateApprove, findApprove } from "@/api/appRove";
import axios from "axios"; // 引入axios
// 自动获取字典
import { getDictFunc } from "@/utils/format";
import { useRoute, useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { ref, reactive } from "vue";
const route = useRoute();
const router = useRouter();

const type = ref("");
const formData = ref({
  appunit: "",
  appleader: "",
  appamount: 0,
  apptype: "",
  apptime: new Date(),
  appdevice: "无需设备",
  appres1: "",
  appres2: "0",
});
// 验证规则
const rule = reactive({
  appunit: [
    {
      required: true,
      message: "请输入正确的申请部门",
      trigger: ["input", "blur"],
    },
  ],
});

const elFormRef = ref();

// 初始化方法
const init = async () => {
  // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
  if (route.query.id) {
    const res = await findApprove({ ID: route.query.id });
    if (res.code === 0) {
      formData.value = res.data.reapprove;
      type.value = "update";
    }
  } else {
    type.value = "create";
  }
};

init();
// 保存按钮
const save = async () => {
  elFormRef.value?.validate(async (valid) => {
    if (!valid) return;
    let res;
    switch (type.value) {
      case "create":
        res = await createApprove(formData.value);
        break;
      case "update":
        res = await updateApprove(formData.value);
        break;
      default:
        res = await createApprove(formData.value);
        break;
    }
    if (res.code === 0) {
      axios
        .post("/wxapi", {
          msgtype: "text",
          text: {
            content:
`会议室申请：
申请人/单位：${formData.value.appunit}\n
使用领导：${formData.value.appleader}\n
使用时间：${formData.value.apptime}\n
会议人数：${formData.value.appamount}\n
会议类型：${formData.value.apptype}\n
需要设备：${formData.value.appdevice}\n
其他事项：${formData.value.appres1}\n
请注意审批
`,
            mentioned_list: ["@all"],
          },
        })
        .then((res) => {
          console.log(res.data.errcode);
          if (res.data.errcode == 0) {
            ElMessage({
              type: "success",
              message: "提交成功",
            });
          }
        });
    }
  });
};

// 返回按钮
const back = () => {
  router.go(-1);
};

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
    value: "其他",
    label: "其他",
  },
];

//==================日期控制-上午，下午，全天==========
</script>

<style>
</style>

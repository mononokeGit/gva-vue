/*! 
 Build based on gin-vue-admin 
 Time : 1678795244000 */
import{f as e,c as l,u as a}from"./phoneNum.ff37cdeb.js";import"./date.34b11046.js";import"./dictionary.f99b60b8.js";import{R as u,u as o,r as d,a as r,b as t,o as s,c as n,d as m,e as p,w as c,h as i,i as f}from"./index.a10c697d.js";import"./sysDictionary.5409d8a6.js";const b={class:"gva-form-box"},v={name:"PhoneNum"},h=Object.assign(v,{setup(v){const h=u(),V=o(),y=d(""),_=d({uid:"",nOther:"",nBackup:"",nNumber:0,nRes:""}),k=r({}),w=d();(async()=>{if(h.query.id){const l=await e({ID:h.query.id});0===l.code&&(_.value=l.data.rephoneNum,y.value="update")}else y.value="create"})();const N=async()=>{var e;null==(e=w.value)||e.validate((async e=>{if(!e)return;let u;switch(y.value){case"create":default:u=await l(_.value);break;case"update":u=await a(_.value)}0===u.code&&f({type:"success",message:"创建/更改成功"})}))},j=()=>{V.go(-1)};return(e,l)=>{const a=t("el-input"),u=t("el-form-item"),o=t("el-button"),d=t("el-row"),r=t("el-form");return s(),n("div",null,[m("div",b,[p(r,{model:_.value,ref_key:"elFormRef",ref:w,"label-position":"right",rules:k,"label-width":"80px"},{default:c((()=>[p(d,null,{default:c((()=>[p(u,{label:"标识符:",prop:"uid"},{default:c((()=>[p(a,{modelValue:_.value.uid,"onUpdate:modelValue":l[0]||(l[0]=e=>_.value.uid=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(u,{label:"备注:",prop:"nOther"},{default:c((()=>[p(a,{modelValue:_.value.nOther,"onUpdate:modelValue":l[1]||(l[1]=e=>_.value.nOther=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(u,{label:"预留字段:",prop:"nBackup"},{default:c((()=>[p(a,{modelValue:_.value.nBackup,"onUpdate:modelValue":l[2]||(l[2]=e=>_.value.nBackup=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(u,{label:"号码:",prop:"nNumber"},{default:c((()=>[p(a,{modelValue:_.value.nNumber,"onUpdate:modelValue":l[3]||(l[3]=e=>_.value.nNumber=e),modelModifiers:{number:!0},clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(u,{label:"分配的人或科室:",prop:"nRes"},{default:c((()=>[p(a,{modelValue:_.value.nRes,"onUpdate:modelValue":l[4]||(l[4]=e=>_.value.nRes=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(u,null,{default:c((()=>[p(o,{size:"small",type:"primary",onClick:N},{default:c((()=>[i("保存")])),_:1}),p(o,{size:"small",type:"primary",onClick:j},{default:c((()=>[i("返回")])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])])])}}});export{h as default};

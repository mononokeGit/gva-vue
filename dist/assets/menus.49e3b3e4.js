/*! 
 Build based on gin-vue-admin 
 Time : 1678795244000 */
import{r as e,H as a,b as t,o as l,c as o,d as s,e as u,w as n,h as d,v as r,D as c,f as i,a0 as m,a1 as y,i as p,a2 as f,A as h}from"./index.a10c697d.js";import{u as v}from"./authority.63d62beb.js";import{g as w,s as k}from"./authorityBtn.c03ab1a2.js";const I={class:"clearfix sticky-button"},b={class:"tree-content"},g={class:"custom-tree-node"},C={key:0},_={class:"dialog-footer"},R={name:"Menus"},x=Object.assign(R,{props:{row:{default:function(){return{}},type:Object}},emits:["changeRow"],setup(R,{expose:x,emit:D}){const V=R,j=e(""),z=e([]),N=e([]),A=e(!1),B=e({children:"children",label:function(e){return e.meta.title}});(async()=>{const e=await m();z.value=e.data.menus;const a=(await y({authorityId:V.row.authorityId})).data.menus,t=[];a.forEach((e=>{a.some((a=>a.parentId===e.menuId))||t.push(Number(e.menuId))})),N.value=t})();const E=()=>{A.value=!0},O=e(null),S=async()=>{const e=O.value.getCheckedNodes(!1,!0);0===(await f({menus:e,authorityId:V.row.authorityId})).code&&p({type:"success",message:"菜单设置成功!"})};x({enterAndNext:()=>{S()},needConfirm:A});const T=e(!1),U=e([]),H=e([]),M=e();let q="";const F=e=>{H.value=e},G=e=>{T.value=!0,U.value=e.menuBtn},J=()=>{T.value=!1},K=async()=>{const e=H.value.map((e=>e.ID));0===(await k({menuID:q,selected:e,authorityId:V.row.authorityId})).code&&(p({type:"success",message:"设置成功"}),T.value=!1)},L=(e,a)=>!e||-1!==a.meta.title.indexOf(e);return a(j,(e=>{O.value.filter(e)})),(e,a)=>{const m=t("el-input"),y=t("el-button"),f=t("el-tree"),k=t("el-table-column"),x=t("el-table"),A=t("el-dialog");return l(),o("div",null,[s("div",I,[u(m,{modelValue:j.value,"onUpdate:modelValue":a[0]||(a[0]=e=>j.value=e),class:"fitler",placeholder:"筛选"},null,8,["modelValue"]),u(y,{class:"fl-right",size:"small",type:"primary",onClick:S},{default:n((()=>[d("确 定")])),_:1})]),s("div",b,[u(f,{ref_key:"menuTree",ref:O,data:z.value,"default-checked-keys":N.value,props:B.value,"default-expand-all":"","highlight-current":"","node-key":"ID","show-checkbox":"","filter-node-method":L,onCheck:E},{default:n((({node:e,data:a})=>[s("span",g,[s("span",null,r(e.label),1),s("span",null,[u(y,{type:"primary",link:"",size:"small",style:c({color:R.row.defaultRouter===a.name?"#E6A23C":"#85ce61"}),disabled:!e.checked,onClick:()=>(async e=>{const a=await v({authorityId:V.row.authorityId,AuthorityName:V.row.authorityName,parentId:V.row.parentId,defaultRouter:e.name});0===a.code&&(p({type:"success",message:"设置成功"}),D("changeRow","defaultRouter",a.data.authority.defaultRouter))})(a)},{default:n((()=>[d(r(R.row.defaultRouter===a.name?"首页":"设为首页"),1)])),_:2},1032,["style","disabled","onClick"])]),a.menuBtn.length?(l(),o("span",C,[u(y,{type:"primary",link:"",size:"small",onClick:()=>(async e=>{q=e.ID;const a=await w({menuID:q,authorityId:V.row.authorityId});0===a.code&&(G(e),await h(),a.data.selected&&a.data.selected.forEach((e=>{U.value.some((a=>{a.ID===e&&M.value.toggleRowSelection(a,!0)}))})))})(a)},{default:n((()=>[d(" 分配按钮 ")])),_:2},1032,["onClick"])])):i("",!0)])])),_:1},8,["data","default-checked-keys","props"])]),u(A,{modelValue:T.value,"onUpdate:modelValue":a[1]||(a[1]=e=>T.value=e),title:"分配按钮","destroy-on-close":""},{footer:n((()=>[s("div",_,[u(y,{size:"small",onClick:J},{default:n((()=>[d("取 消")])),_:1}),u(y,{size:"small",type:"primary",onClick:K},{default:n((()=>[d("确 定")])),_:1})])])),default:n((()=>[u(x,{ref_key:"btnTableRef",ref:M,data:U.value,"row-key":"ID",onSelectionChange:F},{default:n((()=>[u(k,{type:"selection",width:"55"}),u(k,{label:"按钮名称",prop:"name"}),u(k,{label:"按钮备注",prop:"desc"})])),_:1},8,["data"])])),_:1},8,["modelValue"])])}}});export{x as default};

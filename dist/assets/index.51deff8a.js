/*! 
 Build based on gin-vue-admin 
 Time : 1678795244000 */
import{W as e}from"./warningBar.e58a79fd.js";import{s as l,r as a,a as t,b as o,o as s,c as d,e as u,d as m,w as n,h as i,i as r}from"./index.a10c697d.js";const c=e=>l({url:"/email/emailTest",method:"post",data:e}),f={class:"gva-form-box"},b={name:"Email"},p=Object.assign(b,{setup(l){const b=a(null),p=t({to:"",subject:"",body:""}),V=async()=>{0===(await c()).code&&r.success("发送成功")},_=async()=>{0===(await c()).code&&r.success("发送成功,请查收")};return(l,a)=>{const t=o("el-input"),r=o("el-form-item"),c=o("el-button"),y=o("el-form");return s(),d("div",null,[u(e,{title:"需要提前配置email配置文件，为防止不必要的垃圾邮件，在线体验功能不开放此功能体验。"}),m("div",f,[u(y,{ref_key:"emailForm",ref:b,"label-position":"right","label-width":"80px",model:p},{default:n((()=>[u(r,{label:"目标邮箱"},{default:n((()=>[u(t,{modelValue:p.to,"onUpdate:modelValue":a[0]||(a[0]=e=>p.to=e)},null,8,["modelValue"])])),_:1}),u(r,{label:"邮件"},{default:n((()=>[u(t,{modelValue:p.subject,"onUpdate:modelValue":a[1]||(a[1]=e=>p.subject=e)},null,8,["modelValue"])])),_:1}),u(r,{label:"邮件内容"},{default:n((()=>[u(t,{modelValue:p.body,"onUpdate:modelValue":a[2]||(a[2]=e=>p.body=e),type:"textarea"},null,8,["modelValue"])])),_:1}),u(r,null,{default:n((()=>[u(c,{onClick:V},{default:n((()=>[i("发送测试邮件")])),_:1}),u(c,{onClick:_},{default:n((()=>[i("发送邮件")])),_:1})])),_:1})])),_:1},8,["model"])])])}}});export{p as default};

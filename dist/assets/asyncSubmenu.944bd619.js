/*! 
 Build based on gin-vue-admin 
 Time : 1678795244000 */
import{_ as e,S as t,r as a,H as n,b as o,o as u,m as s,w as r,c as l,G as c,f,d as i,v as m,F as d,U as v}from"./index.a10c697d.js";const p={key:0,class:"gva-subMenu"},b={name:"AsyncSubmenu"},I=e(Object.assign(b,{props:{routerInfo:{default:function(){return null},type:Object},isCollapse:{default:function(){return!1},type:Boolean},theme:{default:function(){return{}},type:Object}},setup(e){const b=e;t((e=>({d86db6a2:x.value,"2781f28f":I.value,"5875bf4e":h.value})));const I=a(b.theme.activeBackground),h=a(b.theme.activeText),x=a(b.theme.normalText);return n((()=>b.theme),(()=>{I.value=b.theme.activeBackground,h.value=b.theme.activeText,x.value=b.theme.normalText})),(t,a)=>{const n=o("el-icon"),b=o("el-sub-menu");return u(),s(b,{ref:"subMenu",index:e.routerInfo.name},{title:r((()=>[e.isCollapse?(u(),l(d,{key:1},[e.routerInfo.meta.icon?(u(),s(n,{key:0},{default:r((()=>[(u(),s(c(e.routerInfo.meta.icon)))])),_:1})):f("",!0),i("span",null,m(e.routerInfo.meta.title),1)],64)):(u(),l("div",p,[e.routerInfo.meta.icon?(u(),s(n,{key:0},{default:r((()=>[(u(),s(c(e.routerInfo.meta.icon)))])),_:1})):f("",!0),i("span",null,m(e.routerInfo.meta.title),1)]))])),default:r((()=>[v(t.$slots,"default",{},void 0,!0)])),_:3},8,["index"])}}}),[["__scopeId","data-v-6b820ce1"]]);export{I as default};

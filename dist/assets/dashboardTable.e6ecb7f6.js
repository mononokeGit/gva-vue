/*! 
 Build based on gin-vue-admin 
 Time : 1678795244000 */
import{C as a}from"./github.e7b727c6.js";import{f as s}from"./date.34b11046.js";import{_ as e,r as t,o,c as m,d as l,F as c,t as i,n as d,v as f,p as r,q as n}from"./index.a10c697d.js";const v={class:"commit-table"},u=(a=>(r("data-v-144ac47f"),a=a(),n(),a))((()=>l("div",{class:"commit-table-title"}," 更新日志 ",-1))),p={class:"log"},b={class:"flex-1 flex key-box"},g={class:"flex-5 flex message"},h={class:"flex-3 flex form"},x={name:"DashboardTable"},y=e(Object.assign(x,{setup(e){const r=t(!0),n=t([]);return a(0).then((({data:a})=>{r.value=!1,a.forEach(((a,e)=>{a.commit.message&&e<10&&n.value.push({from:s(a.commit.author.date,"yyyy-MM-dd"),title:a.commit.author.name,showDayAndMonth:!0,message:a.commit.message})}))})),(a,s)=>(o(),m("div",v,[u,l("div",p,[(o(!0),m(c,null,i(n.value,((a,s)=>(o(),m("div",{key:s,class:"log-item"},[l("div",b,[l("span",{class:d(["key",s<3&&"top"])},f(s+1),3)]),l("div",g,f(a.message),1),l("div",h,f(a.from),1)])))),128))])]))}}),[["__scopeId","data-v-144ac47f"]]);export{y as default};

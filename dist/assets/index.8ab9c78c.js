/*! 
 Build based on gin-vue-admin 
 Time : 1678795244000 */
import e from"./menuItem.0b6edaa1.js";import t from"./asyncSubmenu.944bd619.js";import{Q as o,b as n,o as r,m as s,w as a,c as u,F as l,t as i,f,G as m,C as d}from"./index.a10c697d.js";const c={name:"AsideComponent"},p=Object.assign(c,{props:{routerInfo:{type:Object,default:()=>null},isCollapse:{default:function(){return!1},type:Boolean},theme:{default:function(){return{}},type:Object}},setup(c){const p=c,h=o((()=>p.routerInfo.children&&p.routerInfo.children.filter((e=>!e.hidden)).length?t:e));return(e,t)=>{const o=n("AsideComponent");return c.routerInfo.hidden?f("",!0):(r(),s(m(d(h)),{key:0,"is-collapse":c.isCollapse,theme:c.theme,"router-info":c.routerInfo},{default:a((()=>[c.routerInfo.children&&c.routerInfo.children.length?(r(!0),u(l,{key:0},i(c.routerInfo.children,(e=>(r(),s(o,{key:e.name,"is-collapse":!1,"router-info":e,theme:c.theme},null,8,["router-info","theme"])))),128)):f("",!0)])),_:1},8,["is-collapse","theme","router-info"]))}}});export{p as default};

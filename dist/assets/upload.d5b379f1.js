/*! 
 Build based on gin-vue-admin 
 Time : 1678795244000 */
import{_ as a,U as e,g as l,d as t,e as n}from"./common.3c7202de.js";import{C as o}from"./index.46179dcf.js";import{f as i}from"./format.7d611a05.js";import{W as s}from"./warningBar.e58a79fd.js";import{_ as r,r as d,b as u,O as c,I as p,o as m,c as g,d as f,e as v,w as h,h as w,v as y,C as b,P as _,i as C}from"./index.a10c697d.js";import"./date.34b11046.js";import"./dictionary.f99b60b8.js";import"./sysDictionary.5409d8a6.js";const k=(a,e)=>{var l=new Image;l.setAttribute("crossOrigin","anonymous"),l.onload=function(){var a=document.createElement("canvas");a.width=l.width,a.height=l.height,a.getContext("2d").drawImage(l,0,0,l.width,l.height);var t=a.toDataURL("image/png"),n=document.createElement("a"),o=new MouseEvent("click");n.download=e||"photo",n.href=t,n.dispatchEvent(o)},l.src=a},x={class:"gva-table-box"},j={class:"gva-btn-list"},z=["onClick"],U={class:"gva-pagination"},O={name:"Upload"},S=r(Object.assign(O,{setup(r){const O=d("/api"),S=d(""),B=d(""),E=d(1),I=d(0),T=d(10),V=d({}),A=d([]),D=a=>{T.value=a,M()},L=a=>{E.value=a,M()},M=async()=>{const a=await l({page:E.value,pageSize:T.value,...V.value});0===a.code&&(A.value=a.data.list,I.value=a.data.total,E.value=a.data.page,T.value=a.data.pageSize)};M();return(l,r)=>{const d=u("el-input"),P=u("el-form-item"),F=u("el-button"),R=u("el-form"),W=u("el-table-column"),q=u("el-tag"),G=u("el-table"),H=u("el-pagination"),J=c("loading");return p((m(),g("div",null,[f("div",x,[v(s,{title:"点击“文件名/备注”可以编辑文件名或者备注内容。"}),f("div",j,[v(a,{imageCommon:B.value,"onUpdate:imageCommon":r[0]||(r[0]=a=>B.value=a),class:"upload-btn",onOnSuccess:M},null,8,["imageCommon"]),v(e,{imageUrl:S.value,"onUpdate:imageUrl":r[1]||(r[1]=a=>S.value=a),"file-size":512,"max-w-h":1080,class:"upload-btn",onOnSuccess:M},null,8,["imageUrl"]),v(R,{ref:"searchForm",inline:!0,model:V.value},{default:h((()=>[v(P,{label:""},{default:h((()=>[v(d,{modelValue:V.value.keyword,"onUpdate:modelValue":r[2]||(r[2]=a=>V.value.keyword=a),class:"keyword",placeholder:"请输入文件名或备注"},null,8,["modelValue"])])),_:1}),v(P,null,{default:h((()=>[v(F,{size:"small",type:"primary",icon:"search",onClick:M},{default:h((()=>[w("查询")])),_:1})])),_:1})])),_:1},8,["model"])]),v(G,{data:A.value},{default:h((()=>[v(W,{align:"left",label:"预览",width:"100"},{default:h((a=>[v(o,{"pic-type":"file","pic-src":a.row.url},null,8,["pic-src"])])),_:1}),v(W,{align:"left",label:"日期",prop:"UpdatedAt",width:"180"},{default:h((a=>[f("div",null,y(b(i)(a.row.UpdatedAt)),1)])),_:1}),v(W,{align:"left",label:"文件名/备注",prop:"name",width:"180"},{default:h((a=>[f("div",{class:"name",onClick:e=>(async a=>{_.prompt("请输入文件名或者备注","编辑",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"不能为空",inputValue:a.name}).then((async({value:e})=>{a.name=e,0===(await n(a)).code&&(C({type:"success",message:"编辑成功!"}),M())})).catch((()=>{C({type:"info",message:"取消修改"})}))})(a.row)},y(a.row.name),9,z)])),_:1}),v(W,{align:"left",label:"链接",prop:"url","min-width":"300"}),v(W,{align:"left",label:"标签",prop:"tag",width:"100"},{default:h((a=>[v(q,{type:"jpg"===a.row.tag?"primary":"success","disable-transitions":""},{default:h((()=>[w(y(a.row.tag),1)])),_:2},1032,["type"])])),_:1}),v(W,{align:"left",label:"操作",width:"160"},{default:h((a=>[v(F,{size:"small",icon:"download",type:"primary",link:"",onClick:e=>{var l;(l=a.row).url.indexOf("http://")>-1||l.url.indexOf("https://")>-1?k(l.url,l.name):k(O.value+"/"+l.url,l.name)}},{default:h((()=>[w("下载")])),_:2},1032,["onClick"]),v(F,{size:"small",icon:"delete",type:"primary",link:"",onClick:e=>(async a=>{_.confirm("此操作将永久删除文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await t(a)).code&&(C({type:"success",message:"删除成功!"}),1===A.value.length&&E.value>1&&E.value--,M())})).catch((()=>{C({type:"info",message:"已取消删除"})}))})(a.row)},{default:h((()=>[w("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),f("div",U,[v(H,{"current-page":E.value,"page-size":T.value,"page-sizes":[10,30,50,100],style:{float:"right",padding:"20px"},total:I.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:L,onSizeChange:D},null,8,["current-page","page-size","total"])])])])),[[J,l.fullscreenLoading,void 0,{fullscreen:!0,lock:!0}]])}}}),[["__scopeId","data-v-bf064db4"]]);export{S as default};

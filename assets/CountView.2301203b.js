import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const o={data(){return{apiServer:"http://124.221.62.120:3333",ipinfo:{},clientInfo:{href:"",host:"",pathname:""}}},methods:{countViews(){fetch("https://ipinfo.io/?token=e73fecae5b3e0b").then(e=>e.json()).then(e=>{this.ipinfo=e,this.clientInfo={href:decodeURI(window.location.href),host:decodeURI(window.location.host),pathname:decodeURI(window.location.pathname)},fetch(this.apiServer+"/get_client_info",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allClientInfo:Object.assign(this.ipinfo,this.clientInfo)})})}).catch(e=>console.log(e))}},created(){this.countViews()}};function n(e,i,a,c,s,h){return null}var f=t(o,[["render",n],["__file","CountView.vue"]]);export{f as default};

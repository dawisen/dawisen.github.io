(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7670:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(5042)}])},5042:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var i=n(5893),l=n(7294);let r=async()=>{let e=await fetch("https://api.github.com/users/dawisen/repos");return e.json()},o=async(e,t)=>{let n=await fetch("https://api.github.com/repos/dawisen/".concat(e,"/deployments/").concat(t,"/statuses"));return n.json()},s=async e=>{let t=await fetch("https://api.github.com/repos/dawisen/".concat(e,"/deployments"));return t.json()};function c(){let[e,t]=(0,l.useState)([]),[n,c]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=async()=>{c(!0);try{let l=await r(),a=[];for(let t=0;t<3;t++){let r={id:0,name:"",html_url:"",description:"",active_deployment_url:""};if(void 0!==l[t]){var e,n,i;r.id=l[t].id,r.name=l[t].name,r.html_url=l[t].html_url,r.description=l[t].description;let c=await s(null===(e=l[t])||void 0===e?void 0:e.name);if(void 0!==c&&0!==c.length){let e=await o(null===(n=l[t])||void 0===n?void 0:n.name,null===(i=c[0])||void 0===i?void 0:i.id);r.active_deployment_url=e[0].environment_url}else r.active_deployment_url="";a.push(r)}}t(a),c(!1)}catch(e){console.error(e),t([]),c(!1)}};e()},[]),(0,i.jsxs)("section",{children:[(0,i.jsx)("h1",{children:"Projects"}),(0,i.jsx)("p",{children:"Here are some recent projects I've worked on"}),n?"Loading...":null,!n&&e.length?(0,i.jsx)("ul",{children:null==e?void 0:e.map(e=>(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{children:e.name}),(0,i.jsx)("p",{children:e.description}),(0,i.jsx)("a",{href:e.html_url,children:"GitHub Repository"}),""!==e.active_deployment_url?(0,i.jsx)("a",{href:e.active_deployment_url,children:"Live Demo"}):null]},e.id))}):null]})}function a(){return(0,i.jsx)(c,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7670)}),_N_E=e.O()}]);
"use strict";(self.webpackChunk_frm_in=self.webpackChunk_frm_in||[]).push([[416,136,375],{8269:(e,t,l)=>{l.d(t,{Zk:()=>o,oz:()=>d,tU:()=>r});var s=l(7953);const n=function(e){var t=(0,s.useRef)();return t.current||(t.current={v:e()}),t.current.v},i=(0,s.createContext)(),a=(0,s.createContext)(),r=({state:e,children:t})=>{const l=(0,s.useState)(0),r=n((()=>({tabs:0,panels:0}))),d=e||l;return s.createElement(a.Provider,{value:r},s.createElement(i.Provider,{value:d},t))},d=({children:e})=>{const t=(()=>{const[e,t]=(0,s.useContext)(i),l=(0,s.useContext)(a),r=n((()=>{const e=l.tabs;return l.tabs+=1,e})),d=n((()=>()=>t(r)));return(0,s.useMemo)((()=>({isActive:e===r,onClick:d})),[e,d,r])})();return"function"===typeof e?e(t):(0,s.isValidElement)(e)?(0,s.cloneElement)(e,t):e},o=({active:e,children:t})=>(()=>{const[e]=(0,s.useContext)(i),t=(0,s.useContext)(a);return n((()=>{const e=t.panels;return t.panels+=1,e}))===e})()||e?t:null},416:(e,t,l)=>{l.r(t),l.d(t,{default:()=>u});var s=l(6325),n=l(8269),i=l(7830),a=l(3136),r=l(6375),d=l(9192),o=l(3503),c=l(5621);function u(e){var t,l=e.tab,u=e.settab,m=e.formID,b=e.formFields,f=e.handleInput,x=e.crmConf,h=e.setCrmConf,j=e.isLoading,p=e.setIsLoading,v=e.setSnackbar;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("br",{}),(0,c.jsx)("b",{className:"wdt-200 d-in-b",children:(0,i.__)("Module:","bit-integrations")}),(0,c.jsxs)("select",{onChange:f,name:"module",value:x.module,className:"btcd-paper-inp w-5",disabled:l,children:[(0,c.jsx)("option",{value:"",children:(0,i.__)("Select Module","bit-integrations")}),(null==x||null==(t=x.default)?void 0:t.modules)&&Object.keys(x.default.modules).map((function(e){return(0,c.jsx)("option",{value:e,children:x.default.modules[e].plural_label},e)}))]}),0===l&&(0,c.jsx)("button",{onClick:function(){return(0,d.refreshModules)(m,x,h,p,v)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,i.__)("Refresh CRM Modules","bit-integrations")+"'"},type:"button",disabled:j,children:"↻"}),(0,c.jsx)("br",{}),(0,c.jsx)("div",{children:(0,c.jsxs)(n.tU,{children:[(0,c.jsxs)("div",{className:"flx mt-2",children:[(0,c.jsx)(n.oz,{children:(0,c.jsx)("button",{className:"btcd-s-tab-link "+(0===l&&"s-t-l-active"),type:"button",children:(0,i.__)("New Record","bit-integrations")})}),(null==x?void 0:x.relatedlists)&&x.relatedlists.map((function(e,t){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.oz,{children:(0,c.jsxs)("button",{className:"btcd-s-tab-link "+(l===t+1&&"s-t-l-active"),type:"button",children:[(0,i.__)("Related List #","bit-integrations"),t+1]})},"t-"+3*t),(0,c.jsx)("button",{onClick:function(){return function(e){var t=(0,s.A)({},x);t.relatedlists.splice(e,1),t.relatedlists.length||u(0),h((0,s.A)({},t))}(t)},className:"icn-btn","aria-label":"delete-relatedlist",type:"button",children:(0,c.jsx)(o.A,{size:"14"})})]})})),x.relatedlists.length<3&&(0,c.jsx)("button",{onClick:function(){if(x.relatedlists.length<3){var e=(0,s.A)({},x);e.relatedlists.push({actions:{},field_map:[{formField:"",zohoFormField:""}],layout:"",module:"",upload_field_map:[{formField:"",zohoFormField:""}]}),h((0,s.A)({},e))}},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,i.__)("Add More Related List","bit-integrations")+"'"},type:"button",children:"+"})]}),(0,c.jsx)("div",{className:"btcd-hr"}),(0,c.jsx)(n.Zk,{children:(0,c.jsx)(a.default,{tab:l,settab:u,formID:m,formFields:b,crmConf:x,setCrmConf:h,handleInput:f,isLoading:j,setIsLoading:p,setSnackbar:v})}),(null==x?void 0:x.relatedlists)&&x.relatedlists.map((function(e,t){return(0,c.jsx)(n.Zk,{children:(0,c.jsx)(r.default,{indx:t,tab:l,settab:u,formID:m,formFields:b,crmConf:x,setCrmConf:h,handleInput:f,isLoading:j,setIsLoading:p,setSnackbar:v})},"p-"+(t+2.4))}))]})}),(0,c.jsx)("br",{})]})}},3136:(e,t,l)=>{l.r(t),l.d(t,{default:()=>u});var s=l(7953),n=l(7830),i=l(4855),a=l(5467),r=l(6146),d=l(9192),o=l(6549),c=l(5621);function u(e){var t,l,u,m=e.tab,b=e.settab,f=e.formID,x=e.formFields,h=e.crmConf,j=e.setCrmConf,p=e.handleInput,v=e.isLoading,_=e.setIsLoading,g=e.setSnackbar;(0,s.useEffect)((function(){(0,d.handleTabChange)(0,b)}),[]);var N="undefined"!==typeof btcbi&&btcbi.isPro;return(0,c.jsxs)(c.Fragment,{children:[v&&(0,c.jsx)(i.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("b",{className:"wdt-200 d-in-b",children:(0,n.__)("Layout:","bit-integrations")}),(0,c.jsxs)("select",{onChange:p,name:"layout",value:h.layout,className:"btcd-paper-inp w-5",children:[(0,c.jsx)("option",{value:"",children:(0,n.__)("Select Layout","bit-integrations")}),(null==h||null==(t=h.default)||null==(t=t.layouts)?void 0:t[h.module])&&Object.keys(h.default.layouts[h.module]).map((function(e){return(0,c.jsx)("option",{value:e,children:e},e)}))]}),(0,c.jsx)("button",{onClick:function(){return(0,d.refreshLayouts)(m,f,h,j,_,g)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,n.__)("Refresh CRM Layouts","bit-integrations")+"'"},type:"button",disabled:v,children:"↻"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(null==(l=h.default)||null==(l=l.layouts)||null==(l=l[h.module])||null==(l=l[h.layout])?void 0:l.fields)&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"mt-4",children:(0,c.jsx)("b",{className:"wdt-100",children:(0,n.__)("Field Map","bit-integrations")})}),(0,c.jsx)("div",{className:"btcd-hr mt-1"}),(0,c.jsxs)("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[(0,c.jsx)("div",{className:"txt-dp",children:(0,c.jsx)("b",{children:(0,n.__)("Form Fields","bit-integrations")})}),(0,c.jsx)("div",{className:"txt-dp",children:(0,c.jsx)("b",{children:(0,n.__)("Zoho Fields","bit-integrations")})})]}),h.field_map.map((function(e,t){return(0,c.jsx)(o.default,{i:t,field:e,crmConf:h,formFields:x,setCrmConf:j,tab:m,setSnackbar:g},"crm-m-"+(t+9))})),(0,c.jsx)("div",{className:"txt-center btcbi-field-map-button mt-2",children:(0,c.jsx)("button",{onClick:function(){return(0,a.addFieldMap)(h.field_map.length,h,j,!1,m)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),0!==Object.keys(null==(u=h.default.layouts[h.module][h.layout])?void 0:u.fileUploadFields).length&&(0,c.jsxs)("div",{className:"pos-rel",children:[!N&&(0,c.jsx)("div",{className:"pro-blur flx",children:(0,c.jsxs)("div",{className:"pro",children:["Available On",(0,c.jsx)("a",{href:"https://formsintegrations.com/forminator-forms-integration-with-zoho-crm/",target:"_blank",rel:"noreferrer",children:(0,c.jsxs)("span",{className:"txt-pro",children:[" ",(0,n.__)("Premium","bit-integrations")]})})]})}),(0,c.jsx)("div",{className:"mt-4",children:(0,c.jsx)("b",{className:"wdt-100",children:(0,n.__)("Map File Upload Fields","bit-integrations")})}),(0,c.jsx)("div",{className:"btcd-hr mt-1"}),(0,c.jsxs)("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[(0,c.jsx)("div",{className:"txt-dp",children:(0,c.jsx)("b",{children:(0,n.__)("Form Fields","bit-integrations")})}),(0,c.jsx)("div",{className:"txt-dp",children:(0,c.jsx)("b",{children:(0,n.__)("Zoho Fields","bit-integrations")})})]}),h.upload_field_map.map((function(e,t){return(0,c.jsx)(o.default,{i:t,uploadFields:!0,field:e,crmConf:h,formFields:x,setCrmConf:j,tab:m,setSnackbar:g},"crm-m-"+(t+9))})),(0,c.jsx)("div",{className:"txt-center btcbi-field-map-button mt-2",children:(0,c.jsx)("button",{onClick:function(){return(0,a.addFieldMap)(h.upload_field_map.length,h,j,!0,m)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{})]}),(0,c.jsx)("div",{className:"mt-4",children:(0,c.jsx)("b",{className:"wdt-100",children:(0,n.__)("Actions","bit-integrations")})}),(0,c.jsx)("div",{className:"btcd-hr mt-1"}),(0,c.jsx)(r.default,{formID:f,formFields:x,crmConf:h,setCrmConf:j,tab:m,setSnackbar:g})]})]})}},6375:(e,t,l)=>{l.r(t),l.d(t,{default:()=>u});var s=l(7953),n=l(7830),i=l(4855),a=l(5467),r=l(6146),d=l(9192),o=l(6549),c=l(5621);function u(e){var t,l,u,m,b,f,x,h,j,p,v,_=e.indx,g=e.tab,N=e.settab,C=e.formID,y=e.formFields,F=e.crmConf,k=e.setCrmConf,L=e.handleInput,w=e.isLoading,I=e.setIsLoading,M=e.setSnackbar;(0,s.useEffect)((function(){(0,d.handleTabChange)(_+1,N,C,F,k,I,M)}),[]);var R="undefined"!==typeof btcbi&&btcbi.isPro;return(0,c.jsxs)(c.Fragment,{children:[w&&(0,c.jsx)(i.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsxs)("div",{className:"pos-rel",children:[!R&&(0,c.jsx)("div",{className:"pro-blur flx w-9",children:(0,c.jsxs)("div",{className:"pro",children:[(0,n.__)("Available On","bit-integrations"),(0,c.jsx)("a",{href:"https://formsintegrations.com/forminator-forms-integration-with-zoho-crm/",target:"_blank",rel:"noreferrer",children:(0,c.jsxs)("span",{className:"txt-pro",children:[" ",(0,n.__)("Premium","bit-integrations")]})})]})}),(0,c.jsx)("b",{className:"wdt-100 d-in-b",children:(0,n.__)("Related List:","bit-integrations")}),(0,c.jsxs)("select",{onChange:L,name:"module",value:null==F||null==(t=F.relatedlists)||null==(t=t[g-1])?void 0:t.module,className:"btcd-paper-inp w-7",disabled:!F.module,children:[(0,c.jsx)("option",{value:"",children:(0,n.__)("Select Related Module","bit-integrations")}),(null==F||null==(l=F.default)||null==(l=l.relatedlists)?void 0:l[F.module])&&Object.values(F.default.relatedlists[F.module]).map((function(e){return(0,c.jsx)("option",{value:e.module,children:e.name},e.module)}))]}),(0,c.jsx)("button",{onClick:function(){return(0,d.refreshRelatedList)(C,F,k,I,M)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,n.__)("Refresh CRM Related Lists","bit-integrations")+"'"},type:"button",disabled:w,children:"↻"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{})]}),(0,c.jsx)("b",{className:"wdt-100 d-in-b",children:(0,n.__)("Layout:","bit-integrations")}),(0,c.jsxs)("select",{onChange:L,name:"layout",value:null==F||null==(u=F.relatedlists)||null==(u=u[g-1])?void 0:u.layout,className:"btcd-paper-inp w-7",disabled:!(null!=F&&null!=(m=F.relatedlists)&&null!=(m=m[g-1])&&m.module),children:[(0,c.jsx)("option",{value:"",children:(0,n.__)("Select Layout","bit-integrations")}),(null==F||null==(b=F.default)||null==(b=b.layouts)?void 0:b[null==(f=F.relatedlists)||null==(f=f[g-1])?void 0:f.module])&&Object.keys(F.default.layouts[F.relatedlists[g-1].module]).map((function(e){return(0,c.jsx)("option",{value:e,children:e},e)}))]}),(0,c.jsx)("button",{onClick:function(){return(0,d.refreshLayouts)(g,C,F,k,I,M)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh CRM Layouts"'},type:"button",disabled:w,children:"↻"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(null==(x=F.default)||null==(x=x.layouts)||null==(x=x[null==F||null==(h=F.relatedlists)||null==(h=h[g-1])?void 0:h.module])||null==(x=x[null==F||null==(j=F.relatedlists)||null==(j=j[g-1])?void 0:j.layout])?void 0:x.fields)&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"mt-4",children:(0,c.jsx)("b",{className:"wdt-100",children:(0,n.__)("Field Map","bit-integrations")})}),(0,c.jsx)("div",{className:"btcd-hr mt-1"}),(0,c.jsxs)("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[(0,c.jsx)("div",{className:"txt-dp",children:(0,c.jsx)("b",{children:(0,n.__)("Form Fields","bit-integrations")})}),(0,c.jsx)("div",{className:"txt-dp",children:(0,c.jsx)("b",{children:(0,n.__)("Zoho Fields","bit-integrations")})})]}),null==(p=F.relatedlists)||null==(p=p[g-1])||null==(p=p.field_map)?void 0:p.map((function(e,t){return(0,c.jsx)(o.default,{i:t,field:e,crmConf:F,formFields:y,setCrmConf:k,tab:g,setSnackbar:M},"crm-m-"+(t+9))})),(0,c.jsx)("div",{className:"txt-center btcbi-field-map-button mt-2",children:(0,c.jsx)("button",{onClick:function(){return(0,a.addFieldMap)(F.relatedlists[g-1].field_map.length,F,k,!1,g)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(null==(v=F.default)||null==(v=v.layouts[F.relatedlists[g-1].module])?void 0:v[F.relatedlists[g-1].layout])&&0!==Object.keys(F.default.layouts[F.relatedlists[g-1].module][F.relatedlists[g-1].layout].fileUploadFields).length&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"mt-4",children:(0,c.jsx)("b",{className:"wdt-100",children:(0,n.__)("File Upload Field Map","bit-integrations")})}),(0,c.jsx)("div",{className:"btcd-hr mt-1"}),(0,c.jsxs)("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[(0,c.jsx)("div",{className:"txt-dp",children:(0,c.jsx)("b",{children:(0,n.__)("Form Fields","bit-integrations")})}),(0,c.jsx)("div",{className:"txt-dp",children:(0,c.jsx)("b",{children:(0,n.__)("Zoho Fields","bit-integrations")})})]}),F.relatedlists[g-1].upload_field_map.map((function(e,t){return(0,c.jsx)(o.default,{i:t,uploadFields:1,field:e,crmConf:F,formFields:y,setCrmConf:k,tab:g,setSnackbar:M},"crm-m-"+(t+9))})),(0,c.jsx)("div",{className:"txt-center btcbi-field-map-button mt-2",children:(0,c.jsx)("button",{onClick:function(){return(0,a.addFieldMap)(F.relatedlists[g-1].upload_field_map.length,F,k,!0,g)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{})]}),(0,c.jsx)("div",{className:"mt-4",children:(0,c.jsx)("b",{className:"wdt-100",children:(0,n.__)("Actions","bit-integrations")})}),(0,c.jsx)("div",{className:"btcd-hr mt-1"}),(0,c.jsx)(r.default,{formFields:y,crmConf:F,setCrmConf:k,tab:g,formID:C,setSnackbar:M})]})]})}}}]);
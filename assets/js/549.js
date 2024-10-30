"use strict";(self.webpackChunk_frm_in=self.webpackChunk_frm_in||[]).push([[549,467],{5467:(e,t,l)=>{l.r(t),l.d(t,{addFieldMap:()=>v,checkWebhookIntegrationsExist:()=>m,delFieldMap:()=>h,handleAuthorize:()=>b,handleCustomValue:()=>x,handleFieldMapping:()=>y,saveActionConf:()=>p,saveIntegConfig:()=>_,setGrantTokenResponse:()=>f});var a=l(6325),n=l(5904),i=l(4501),r=l.n(i),o=l(6766),s=l(8450),d=l(8496),u=l(7830),c=["Webhook","KaliForms","Amelia","WPFunnels","Typebot","JetForm","FluentSupport"],m=function(e){return c.includes(e)},_=function(){var e=(0,n.A)(r().mark((function e(t,l,a,n,i,o,s,c){var _,p,f,b,g,v,h,y,x,F,w,I;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f="flow/save",c(!0),b=n,"cond"!==(null==n||null==(_=n.condition)?void 0:_.action_behavior)&&(b.condition={action_behavior:"",actions:[{field:"",action:"value"}],logics:[{field:"",logic:"",val:""},"or",{field:"",logic:"",val:""}]}),"Elementor"===t.triggered_entity&&(b.postId=s?null!=(g=null==t||null==(v=t.flow_details)?void 0:v.postId)?g:null:null!=(h=null==t||null==(y=t.triggerData)?void 0:y.postId)?h:null),x={name:n.name,trigger:t.triggered_entity,triggered_entity_id:null!=t&&null!=(p=t.triggerData)&&p.formID?t.triggerData.formID:t.triggered_entity_id||0,flow_details:b},t.id&&(x.id=t.id),m(t.triggered_entity)&&(x.flow_details.fields=s?null==t||null==(w=t.flow_details)?void 0:w.fields:null==t||null==(F=t.triggerDetail)?void 0:F.data),s&&(f="flow/update"),e.prev=9,e.next=12,(0,d.A)(x,f);case 12:return I=e.sent,!s&&I.success&&i.push(a),c(!1),e.abrupt("return",I);case 18:return e.prev=18,e.t0=e.catch(9),c(!1),e.abrupt("return",(0,u.__)("Failed to save integration"));case 22:case"end":return e.stop()}}),e,null,[[9,18]])})));return function(t,l,a,n,i,r,o,s){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.A)(r().mark((function e(t){var l,a,n,i,s,c,_,p,f,b,g,v,h,y,x,F;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.flow,t.setFlow,n=t.allIntegURL,i=t.conf,s=t.history,t.index,c=t.edit,_=t.setIsLoading,t.setSnackbar,p="flow/save",_&&_ instanceof Function&&_(!0),f=i,"Elementor"===a.triggered_entity&&(f.postId=c?null!=(b=null==a||null==(g=a.flow_details)?void 0:g.postId)?b:null:null!=(v=null==a||null==(h=a.triggerData)?void 0:h.postId)?v:null),y={name:i.name,trigger:a.triggered_entity,triggered_entity_id:null!=a&&null!=(l=a.triggerData)&&l.formID?a.triggerData.formID:a.triggered_entity_id||0,flow_details:f},a.id&&(y.id=a.id),m(a.triggered_entity)&&(y.flow_details.fields=c?null==a||null==(F=a.flow_details)?void 0:F.fields:null==a||null==(x=a.triggerDetail)?void 0:x.data),c&&(p="flow/update"),e.prev=9,e.next=12,(0,d.A)(y,p).then((function(e){var t;!c&&e.success&&s.push(n);var l="",a="success";null!=(t=e.data)&&t.msg?l=e.data.msg:e.success?l=c?(0,u.__)("Integration updated successfully"):(0,u.__)("Integration saved successfully"):(a="error",l=c?(0,u.__)("Failed to update integration"):(0,u.__)("Failed to save integration")),(0,o.Ay)(l,{type:a}),_&&_ instanceof Function&&_(!1),c||setTimeout((function(){s.push(n)}),700)}));case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(9),_&&_ instanceof Function&&_(!1),e.abrupt("return",(0,u.__)("Failed to save integration"));case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t={},l=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");l&&l.forEach((function(e){var l=e.split("=");l[1]&&(t[l[0]]=l[1])})),localStorage.setItem("__"+e,JSON.stringify(t)),window.close()},b=function(e,t,l,n,i,r,o,d,c){if(n.dataCenter&&n.clientId&&n.clientSecret){d(!0);var m="https://accounts.zoho."+n.dataCenter+"/oauth/v2/auth?scope="+l+"&response_type=code&client_id="+n.clientId+"&prompt=Consent&access_type=offline&redirect_uri="+encodeURIComponent(null==s.FH?void 0:s.FH.base)+"/redirect&state="+encodeURIComponent(window.location.href)+"/redirect",_=window.open(m,e,"width=400,height=609,toolbar=off"),p=setInterval((function(){if(_.closed){clearInterval(p);var l={},r=!1,s=localStorage.getItem("__"+e);if(s&&(r=!0,l=JSON.parse(s),localStorage.removeItem("__"+e)),l.code&&!l.error&&l&&r){var m=(0,a.A)({},n);m.accountServer=l["accounts-server"],g(t,l,m,i,o,d,c)}else{var f=l.error?"Cause: "+l.error:"";c({show:!0,msg:(0,u.__)("Authorization failed")+" "+f+". "+(0,u.__)("please try again")}),d(!1)}}}),500)}else r({dataCenter:n.dataCenter?"":(0,u.__)("Data center cann't be empty"),clientId:n.clientId?"":(0,u.__)("Client ID cann't be empty"),clientSecret:n.clientSecret?"":(0,u.__)("Secret key cann't be empty")})},g=function(e,t,l,n,i,r,o){var c=(0,a.A)({},t);c.dataCenter=l.dataCenter,c.clientId=l.clientId,c.clientSecret=l.clientSecret,c.redirectURI=(null==s.FH?void 0:s.FH.base)+"/redirect",(0,d.A)(c,e+"_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var t=(0,a.A)({},l);t.tokenDetails=e.data,n(t),i(!0),o({show:!0,msg:(0,u.__)("Authorized Successfully")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?o({show:!0,msg:""+(0,u.__)("Authorization failed Cause:")+(e.data.data||e.data)+". "+(0,u.__)("please try again")}):o({show:!0,msg:(0,u.__)("Authorization failed. please try again")});r(!1)}))},v=function(e,t,l,n,i){var r=(0,a.A)({},t);i?n?r.relatedlists[i-1].upload_field_map.splice(e,0,{}):r.relatedlists[i-1].field_map.splice(e,0,{}):n?r.upload_field_map.splice(e,0,{}):r.field_map.splice(e,0,{}),l((0,a.A)({},r))},h=function(e,t,l,n,i){var r=(0,a.A)({},t);i?n?r.relatedlists[i-1].upload_field_map.length>1&&r.relatedlists[i-1].upload_field_map.splice(e,1):r.relatedlists[i-1].field_map.length>1&&r.relatedlists[i-1].field_map.splice(e,1):n?r.upload_field_map.length>1&&r.upload_field_map.splice(e,1):r.field_map.length>1&&r.field_map.splice(e,1),l((0,a.A)({},r))},y=function(e,t,l,n,i,r){var o=(0,a.A)({},l);r?i?o.relatedlists[r-1].upload_field_map[t][e.target.name]=e.target.value:o.relatedlists[r-1].field_map[t][e.target.name]=e.target.value:i?o.upload_field_map[t][e.target.name]=e.target.value:o.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(r?o.relatedlists[r-1].field_map[t].customValue="":o.field_map[t].customValue=""),n((0,a.A)({},o))},x=function(e,t,l,n,i){var r=(0,a.A)({},l);i?r.relatedlists[i-1].field_map[t].customValue=e.target.value:r.field_map[t].customValue=e.target.value,n((0,a.A)({},r))}},6549:(e,t,l)=>{l.r(t),l.d(t,{default:()=>m});var a=l(4143),n=l(7830),i=(l(8201),l(5467)),r=[{name:"_bi_current_time",label:"Current Date Time"},{name:"_bi_admin_email",label:"Administrator Email"},{name:"_bi_date_default",label:"Date (default format)"},{name:"_bi_date.m/d/y",label:"Date(mm/dd/yyy)"},{name:"_bi_date.d/m/y",label:"Date(dd/mm/yyy)"},{name:"_bi_date.y/m/d",label:"Date(Y-m-d)"},{name:"_bi_time",label:"Time"},{name:"_bi_weekday",label:"Weekday"},{name:"_bi_http_referer_url",label:"Referer URL"},{name:"_bi_ip_address",label:"User IP Address"},{name:"_bi_browser_name",label:"User Browser Name"},{name:"_bi_operating_system",label:"User Operating System"},{name:"_bi_random_digit_num",label:"Random Digit Number"},{name:"_bi_user_id",label:"User ID"},{name:"_bi_user_first_name",label:"User First Name"},{name:"_bi_user_last_name",label:"User Last Name"},{name:"_bi_user_display_name",label:"User Display Name"},{name:"_bi_user_nice_name",label:"User Nice Name"},{name:"_bi_user_login_name",label:"User Login Name"},{name:"_bi_user_email",label:"User Email"},{name:"_bi_user_url",label:"User Url"},{name:"_bi_current_user_role",label:"Current User Role"},{name:"_bi_author_id",label:"Post Author ID"},{name:"_bi_author_display",label:"Post Author Display Name"},{name:"_bi_author_email",label:"Post Author Email"},{name:"_bi_site_title",label:"Site Title"},{name:"_bi_site_description",label:"Site Description"},{name:"_bi_site_url",label:"Site URL"},{name:"_bi_wp_local_codes",label:"WordPress Locale Code"},{name:"_bi_post_id",label:"Embedded Page / Post ID"},{name:"_bi_post_name",label:"Embedded Page / Post Name"},{name:"_bi_post_title",label:"Embedded Page / Post Title"},{name:"_bi_post_url",label:"Embedded Page / Post URL"},{name:"_bi_post_date",label:"Post Publish Date"},{name:"_bi_post_modified_date",label:"Post Modified Date"}],o=l(7741),s=l(6633),d=(l(2176),l(7953)),u=l(5621);const c=function(e){var t=e.label,l=e.onChange,a=e.value,n=(e.disabled,e.type),i=(e.textarea,e.className,e.formFields),r=i?i.filter((function(e){return void 0!==e.label})).map((function(e){return{name:e.label,value:e.name}})):[],o=(0,d.useRef)(null),c=(0,d.useRef)(null);(0,d.useEffect)((function(){var e=o.current;e.value=a,e.setAttribute("value",a),c.current&&c.current.destroy(),c.current=new s.A(e,b),c.current.DOM.originalInput.value=a,c.current.on("input",_),c.current.on("add",p),c.current.on("remove",f)}),[]);var m=function(e){var t=e.match(/(\${{.*?"value":".*?)"}}/g),a=e;t&&t.forEach((function(e){var t=e.slice(2,-1),l=JSON.parse(t);a=a.replace(e,"${"+l.value+"}")})),l(a)},_=function(e){var t=e.detail,l=t.prefix,a=t.textContent.slice(-1),n="#"===a?a:l;n&&("#"===n&&(c.current.whitelist=r),c.current.dropdown.show()),setTimeout((function(){m(e.detail.tagify.DOM.originalInput.value)}),100)},p=function(e){setTimeout((function(){m(e.detail.tagify.DOM.originalInput.value)}),100)},f=function(e){setTimeout((function(){m(e.detail.tagify.DOM.originalInput.value)}),100)},b={mixTagsInterpolator:["${","}"],mode:"mix",mixMode:{insertAfterTag:" "},pattern:/#/,placeholder:t,tagTextProp:"value",duplicates:!0,whitelist:r,enforceWhitelist:!0,trim:!0,editTags:!1,dropdown:{enabled:0,position:"text",mapValueTo:"value",highlightFirst:!0,searchKeys:["label","value"],closeOnSelect:!0,placeAbove:!1},callbacks:{add:function(){m(c.current.DOM.originalInput.value)},remove:function(){m(c.current.DOM.originalInput.value)}}};return(0,u.jsx)("div",{children:(0,u.jsx)("input",{name:"tagify-inp",type:void 0===n?"text":n,ref:o})})};function m(e){var t,l,s,d,m,_,p,f=e.i,b=e.formFields,g=e.uploadFields,v=e.field,h=e.crmConf,y=e.setCrmConf,x=e.tab,F=(e.type,0===x?h.module:null==(t=h.relatedlists)||null==(t=t[x-1])?void 0:t.module),w=0===x?h.layout:null==(l=h.relatedlists)||null==(l=l[x-1])?void 0:l.layout;g?m=""===v.zohoFormField||-1===(null==(_=h.default.layouts)||null==(_=_[F])||null==(_=_[w])||null==(_=_.requiredFileUploadFields)?void 0:_.indexOf(v.zohoFormField)):m=""===v.zohoFormField||-1===(null==(p=h.default.layouts)||null==(p=p[F])||null==(p=p[w])||null==(p=p.required)?void 0:p.indexOf(v.zohoFormField));var I=(0,a.vc)(o.pB).isPro;return(0,u.jsx)("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:(0,u.jsxs)("div",{className:"pos-rel flx",children:[(0,u.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,u.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:v.formField||"",onChange:function(e){return(0,i.handleFieldMapping)(e,f,h,y,g,x)},children:[(0,u.jsx)("option",{value:"",children:(0,n.__)("Select Field","bit-integrations")}),(0,u.jsx)("optgroup",{label:"Form Fields",children:g?b.map((function(e){return"file"===e.type&&(0,u.jsx)("option",{value:e.name,children:e.label},"ff-zhcrm-"+e.name)})):b.map((function(e){return"file"!==e.type&&(0,u.jsx)("option",{value:e.name,children:e.label},"ff-zhcrm-"+e.name)}))}),!g&&(0,u.jsx)("option",{value:"custom",children:(0,n.__)("Custom...","bit-integrations")}),(0,u.jsx)("optgroup",{label:"General Smart Codes "+(I?"":"(PRO)"),children:I&&(null==r?void 0:r.map((function(e){return(0,u.jsx)("option",{value:e.name,children:e.label},"ff-zhcrm-"+e.name)})))})]}),"custom"===v.formField&&(0,u.jsx)(c,{onChange:function(e){return(0,i.handleCustomValue)(e,f,h,y)},label:(0,n.__)("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:v.customValue,placeholder:(0,n.__)("Custom Value","bit-integrations"),formFields:b}),(0,u.jsxs)("select",{className:"btcd-paper-inp",disabled:!m,name:"zohoFormField",value:v.zohoFormField||"",onChange:function(e){return(0,i.handleFieldMapping)(e,f,h,y,g,x)},children:[(0,u.jsx)("option",{value:"",children:(0,n.__)("Select Field","bit-integrations")}),g?(null==(s=h.default.layouts)||null==(s=s[F])||null==(s=s[w])?void 0:s.fileUploadFields)&&Object.keys(h.default.layouts[F][w].fileUploadFields).filter((function(e){return!0!==e.required})).map((function(e){return m?!h.default.layouts[F][w].fileUploadFields[e].required&&(0,u.jsx)("option",{value:e,children:h.default.layouts[F][w].fileUploadFields[e].display_label},e):(0,u.jsx)("option",{value:e,children:h.default.layouts[F][w].fileUploadFields[e].display_label},e)})):(null==(d=h.default.layouts)||null==(d=d[F])||null==(d=d[w])?void 0:d.fields)&&Object.keys(h.default.layouts[F][w].fields).filter((function(e){return!0!==e.required})).map((function(e){return m?!h.default.layouts[F][w].fields[e].required&&(0,u.jsx)("option",{value:e,children:h.default.layouts[F][w].fields[e].display_label},e):(0,u.jsx)("option",{value:e,children:h.default.layouts[F][w].fields[e].display_label},e)}))]})]}),(0,u.jsx)("div",{className:"flx integ-fld-wrp",children:m&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("button",{onClick:function(){return(0,i.addFieldMap)(f,h,y,g,x)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,u.jsx)("button",{onClick:function(){return(0,i.delFieldMap)(f,h,y,g,x)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,u.jsx)("span",{className:"btcd-icn icn-trash-2"})})]})})]})})}},8201:(e,t,l)=>{l.d(t,{A:()=>n});var a=l(5621);const n=function(e){var t=e.label,l=e.onChange,n=e.value,i=e.disabled,r=e.type,o=e.textarea,s=e.className;return(0,a.jsxs)("label",{className:"btcd-mt-inp "+s,children:[!o&&(0,a.jsx)("input",{type:void 0===r?"text":r,onChange:l,placeholder:" ",disabled:i,value:n}),o&&(0,a.jsx)("textarea",{type:void 0===r?"text":r,onChange:l,placeholder:" ",disabled:i,value:n}),(0,a.jsx)("span",{children:t})]})}}}]);
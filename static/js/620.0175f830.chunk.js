"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[620],{7239:(s,e,a)=>{a.r(e),a.d(e,{default:()=>y});a(9060);const n="Dialogs_dialogs__97yZ0",r="Dialogs_dialogs__items__K2MeS",o="Dialogs_dialogs__item__EmLIO",t="Dialogs_active__8m99n",i="Dialogs_dialogs__messages__Kluan",l="Dialogs_messages__1C5jA",c="Dialogs_messages__item__zwQ3A",d="Dialogs_dialogsButton__dJbb9";var m=a(12),_=a(2496);const g=s=>(0,_.jsx)("div",{className:"".concat(o," ").concat(t),children:(0,_.jsx)(m.Af,{to:"/dialogs/".concat(s.id),children:s.name})}),h=s=>(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:c,children:s.message})});var u=a(9256),x=a(9464),j=a(1888),p=a(1960);const v=(0,p.w)(30),f=(0,x.c)({form:"dialogAddMessageForm"})((s=>(0,_.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,_.jsx)(u.c,{component:j.Aj,name:"newMessageBody",placeholder:"Enter your message",validate:[p.a,v]}),(0,_.jsx)("div",{children:(0,_.jsx)("button",{className:d,children:"Send"})})]}))),A=s=>{let e=s.messagesPage,a=e.dialogsData.map((s=>(0,_.jsx)(g,{name:s.name,id:s.id},s.id))),o=e.messagesData.map((s=>(0,_.jsx)(h,{message:s.message},s.id)));e.newMessageText;return(0,_.jsxs)("div",{className:n,children:[(0,_.jsx)("div",{className:r,children:a}),(0,_.jsxs)("div",{className:"".concat(i," ").concat(l),children:[(0,_.jsx)(f,{onSubmit:e=>{s.sendMessage(e.newMessageBody)}}),o]})]})};var b=a(6908),C=a(624),D=a(2520);const y=(0,a(5773).Jn)((0,C.Ul)((s=>({messagesPage:s.messagesPage})),(s=>({sendMessage:e=>{s((0,b.i)(e))}}))),D.A)(A)},1888:(s,e,a)=>{a.d(e,{Aj:()=>i,EF:()=>l,Ks:()=>c});var n=a(484),r=a(9256),o=a(2496);const t=s=>{let{input:e,meta:{error:a,touched:r},children:t}=s;const i=a&&r;return(0,o.jsxs)("div",{className:"".concat(n.c.formControl," ").concat(i?n.c.error:""),children:[(0,o.jsx)("div",{children:t}),i&&(0,o.jsx)("span",{children:a})]})},i=s=>{const{input:e,meta:a,child:n,...r}=s;return(0,o.jsx)(t,{...s,children:(0,o.jsx)("textarea",{...e,...r})})},l=s=>{const{input:e,meta:a,child:n,...r}=s;return(0,o.jsx)(t,{...s,children:(0,o.jsx)("input",{...e,...r})})},c=function(s,e,a,n){let t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,o.jsxs)("div",{children:[(0,o.jsx)(r.c,{placeholder:s,component:n,name:e,validate:a,...t}),i]})}},2520:(s,e,a)=>{a.d(e,{A:()=>l});var n=a(9060),r=a(1560),o=a(624),t=a(2496);let i=s=>({isAuth:s.auth.isAuth});const l=s=>{class e extends n.Component{render(){return this.props.isAuth?(0,t.jsx)(s,{...this.props}):(0,t.jsx)(r.YX,{to:"/login"})}}return(0,o.Ul)(i)(e)}},1960:(s,e,a)=>{a.d(e,{a:()=>n,w:()=>r});const n=s=>{if(!s)return"Field is required"},r=s=>e=>{if(e.length>s)return"Max length is 30 symbols"}},484:(s,e,a)=>{a.d(e,{c:()=>n});const n={formControl:"FormsControl_formControl__eQTo6",error:"FormsControl_error__fzvMF",formSummaryError:"FormsControl_formSummaryError__bWQZk"}}}]);
//# sourceMappingURL=620.0175f830.chunk.js.map